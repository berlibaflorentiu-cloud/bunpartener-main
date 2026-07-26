import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const bucket = "database-backups";
const maxBackupBytes = 50 * 1024 * 1024;
const retentionCount = 15;
const sources: Record<string, { slug: string }> = {
  beuseulqtgtesavswxyy: { slug: "bunpartener-pontaj" },
  ildoegipvcgxboijfksw: { slug: "attp-pontaj" },
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

function safeEqual(left: string, right: string) {
  const a = new TextEncoder().encode(left);
  const b = new TextEncoder().encode(right);
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let index = 0; index < a.length; index += 1) difference |= a[index] ^ b[index];
  return difference === 0;
}

Deno.serve(async (request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) return json({ error: "Gateway is not configured" }, 500);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const action = String(body.action ?? "");
  const sourceProjectRef = String(body.source_project_ref ?? "");
  const source = sources[sourceProjectRef];

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: expectedSecret, error: secretError } = source
    ? await admin.rpc("get_backup_gateway_secret", { p_source_project_ref: sourceProjectRef })
    : { data: null, error: null };
  const suppliedSecret = request.headers.get("x-backup-secret") ?? "";
  if (secretError || typeof expectedSecret !== "string" || !safeEqual(suppliedSecret, expectedSecret)) {
    return json({ error: "Unauthorized" }, 401);
  }

  const projectSlug = source.slug;

  const backupDate = String(body.backup_date ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(backupDate)) return json({ error: "Invalid backup date" }, 400);

  const folder = `${projectSlug}/${sourceProjectRef}/${backupDate}`;
  const filename = `${projectSlug}-${backupDate}.tar.gz.enc`;
  const metadataFilename = "upload.json";
  const objectPath = `${folder}/${filename}`;
  const metadataPath = `${folder}/${metadataFilename}`;

  if (action === "sign") {
    const encryptedSha256 = String(body.encrypted_sha256 ?? "");
    const encryptedBytes = Number(body.encrypted_bytes);
    if (!/^[0-9a-f]{64}$/.test(encryptedSha256)) return json({ error: "Invalid checksum" }, 400);
    if (!Number.isSafeInteger(encryptedBytes) || encryptedBytes < 1 || encryptedBytes > maxBackupBytes) {
      return json({ error: "Backup exceeds the 50 MB destination limit" }, 413);
    }

    const { data: existing } = await admin
      .from("backup_catalog")
      .select("status")
      .eq("source_project_ref", sourceProjectRef)
      .eq("backup_date", backupDate)
      .maybeSingle();
    if (existing?.status === "verified") return json({ error: "A verified backup already exists for this date" }, 409);

    const { data: bucketInfo } = await admin.storage.getBucket(bucket);
    if (!bucketInfo) {
      const { error: bucketError } = await admin.storage.createBucket(bucket, {
        public: false,
        fileSizeLimit: maxBackupBytes,
        allowedMimeTypes: ["application/octet-stream", "application/json"],
      });
      if (bucketError && !bucketError.message.toLowerCase().includes("already exists")) {
        return json({ error: `Could not create backup bucket: ${bucketError.message}` }, 500);
      }
    }

    const { error: catalogError } = await admin.from("backup_catalog").upsert({
      source_project_ref: sourceProjectRef,
      project_slug: projectSlug,
      backup_date: backupDate,
      object_path: objectPath,
      metadata_path: metadataPath,
      encrypted_sha256: encryptedSha256,
      encrypted_bytes: encryptedBytes,
      status: "pending",
      verified_at: null,
      failure_reason: null,
    }, { onConflict: "source_project_ref,backup_date" });
    if (catalogError) return json({ error: `Could not register backup: ${catalogError.message}` }, 500);

    const [backupUpload, metadataUpload] = await Promise.all([
      admin.storage.from(bucket).createSignedUploadUrl(objectPath),
      admin.storage.from(bucket).createSignedUploadUrl(metadataPath),
    ]);
    if (backupUpload.error || metadataUpload.error) {
      return json({ error: backupUpload.error?.message ?? metadataUpload.error?.message }, 500);
    }
    return json({
      bucket,
      backup: { path: objectPath, token: backupUpload.data.token },
      metadata: { path: metadataPath, token: metadataUpload.data.token },
    });
  }

  if (action === "confirm") {
    const { data: registered, error: registeredError } = await admin
      .from("backup_catalog")
      .select("encrypted_bytes,encrypted_sha256,status")
      .eq("source_project_ref", sourceProjectRef)
      .eq("backup_date", backupDate)
      .maybeSingle();
    if (registeredError || !registered) return json({ error: "Pending backup was not found" }, 404);
    if (registered.status === "verified") return json({ verified: true, already_verified: true });

    const { data: objects, error: listError } = await admin.storage.from(bucket).list(folder, { limit: 10 });
    if (listError) return json({ error: `Could not verify upload: ${listError.message}` }, 500);
    const backupObject = objects?.find((object) => object.name === filename);
    const metadataObject = objects?.find((object) => object.name === metadataFilename);
    const storedBytes = Number(backupObject?.metadata?.size ?? 0);
    if (!backupObject || !metadataObject || storedBytes !== Number(registered.encrypted_bytes)) {
      return json({ error: "Uploaded objects are missing or their size does not match" }, 422);
    }

    const [backupDownload, metadataDownload] = await Promise.all([
      admin.storage.from(bucket).download(objectPath),
      admin.storage.from(bucket).download(metadataPath),
    ]);
    if (backupDownload.error || metadataDownload.error || !backupDownload.data || !metadataDownload.data) {
      return json({ error: "Uploaded objects could not be read for integrity verification" }, 422);
    }

    const digest = await crypto.subtle.digest("SHA-256", await backupDownload.data.arrayBuffer());
    const storedSha256 = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
    let metadata: Record<string, unknown> | null = null;
    try {
      metadata = JSON.parse(await metadataDownload.data.text());
    } catch {
      metadata = null;
    }
    const integrityMatches = safeEqual(storedSha256, String(registered.encrypted_sha256))
      && metadata?.source_project_ref === sourceProjectRef
      && metadata?.encrypted_sha256 === registered.encrypted_sha256
      && Number(metadata?.encrypted_bytes) === Number(registered.encrypted_bytes);
    if (!integrityMatches) {
      await admin.from("backup_catalog").update({
        status: "failed",
        failure_reason: "Integrity verification failed",
      }).eq("source_project_ref", sourceProjectRef).eq("backup_date", backupDate);
      await admin.storage.from(bucket).remove([objectPath, metadataPath]);
      return json({ error: "Backup integrity verification failed" }, 422);
    }

    const { error: verifyError } = await admin.from("backup_catalog").update({
      status: "verified",
      verified_at: new Date().toISOString(),
      failure_reason: null,
    }).eq("source_project_ref", sourceProjectRef).eq("backup_date", backupDate);
    if (verifyError) return json({ error: `Could not verify backup: ${verifyError.message}` }, 500);

    const { data: verifiedRows, error: rowsError } = await admin
      .from("backup_catalog")
      .select("id,object_path,metadata_path")
      .eq("source_project_ref", sourceProjectRef)
      .eq("status", "verified")
      .order("verified_at", { ascending: false });
    if (rowsError) return json({ error: `Backup verified, but retention check failed: ${rowsError.message}` }, 500);

    const expired = (verifiedRows ?? []).slice(retentionCount);
    for (const row of expired) {
      const { error: removeError } = await admin.storage.from(bucket).remove([row.object_path, row.metadata_path]);
      if (!removeError) await admin.from("backup_catalog").delete().eq("id", row.id);
    }

    return json({ verified: true, retained: Math.min(verifiedRows?.length ?? 1, retentionCount) });
  }

  return json({ error: "Unknown action" }, 400);
});
