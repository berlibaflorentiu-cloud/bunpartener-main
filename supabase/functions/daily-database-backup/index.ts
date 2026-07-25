import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const TABLES = [
  "profiles",
  "entries",
  "act_templates",
  "clients",
  "invoices",
  "invoice_entries",
  "receipts",
  "client_reports",
  "bunpartener_pageviews",
  "atentii",
  "personal_atentii",
  "bnm_rates",
  "bon_batches",
  "avansuri",
  "impozite",
  "admin_tab_preferences",
] as const;

const encoder = new TextEncoder();

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function moldovaDateParts(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Chisinau",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return { date: `${value("year")}-${value("month")}-${value("day")}`, hour: Number(value("hour")) };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return new Response("Missing Supabase runtime configuration", { status: 500 });

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: configRows, error: configError } = await supabase.rpc("get_backup_delivery_config");
  if (configError || !configRows?.[0]) {
    console.error("Backup configuration unavailable", configError);
    return new Response("Backup configuration unavailable", { status: 500 });
  }

  const config = configRows[0] as {
    resend_api_key: string;
    recipient: string;
    sender: string;
    cron_secret: string;
  };
  if (req.headers.get("x-backup-secret") !== config.cron_secret) return new Response("Unauthorized", { status: 401 });

  const body = await req.json().catch(() => ({})) as { force?: boolean };
  const local = moldovaDateParts();
  if (!body.force && local.hour !== 23) {
    return Response.json({ skipped: true, reason: "Not 23:00 in Europe/Chisinau", local });
  }

  const { data: existing } = await supabase
    .from("database_backup_runs")
    .select("id,status")
    .eq("backup_date", local.date)
    .eq("status", "sent")
    .maybeSingle();
  if (existing && !body.force) return Response.json({ skipped: true, reason: "Already sent", date: local.date });

  const { data: run, error: runError } = await supabase
    .from("database_backup_runs")
    .upsert({ backup_date: local.date, status: "running", error: null, finished_at: null }, { onConflict: "backup_date" })
    .select("id")
    .single();
  if (runError) throw runError;

  try {
    const exported: Record<string, unknown[]> = {};
    let rowCount = 0;
    for (const table of TABLES) {
      const rows: unknown[] = [];
      for (let from = 0;; from += 1000) {
        const { data, error } = await supabase.from(table).select("*").range(from, from + 999);
        if (error) throw new Error(`${table}: ${error.message}`);
        rows.push(...(data ?? []));
        if (!data || data.length < 1000) break;
      }
      exported[table] = rows;
      rowCount += rows.length;
    }

    const payload = {
      format: "bunpartener-logical-backup-v1",
      project: "beuseulqtgtesavswxyy",
      created_at: new Date().toISOString(),
      timezone: "Europe/Chisinau",
      tables: exported,
    };
    const bytes = encoder.encode(JSON.stringify(payload, null, 2));
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.resend_api_key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: config.sender,
        to: [config.recipient],
        subject: `Backup BunPartener — ${local.date}`,
        html: `<p>Backupul automat BunPartener pentru <strong>${local.date}</strong> este atașat.</p><p>${TABLES.length} tabele, ${rowCount} înregistrări, ${(bytes.length / 1024).toFixed(1)} KB.</p>`,
        attachments: [{ filename: `bunpartener-backup-${local.date}.json`, content: bytesToBase64(bytes) }],
      }),
    });
    const resendResult = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`Resend ${response.status}: ${JSON.stringify(resendResult)}`);

    await supabase.from("database_backup_runs").update({
      status: "sent",
      tables_count: TABLES.length,
      rows_count: rowCount,
      size_bytes: bytes.length,
      resend_email_id: resendResult.id ?? null,
      finished_at: new Date().toISOString(),
    }).eq("id", run.id);
    return Response.json({ ok: true, date: local.date, tables: TABLES.length, rows: rowCount, bytes: bytes.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Daily backup failed", message);
    await supabase.from("database_backup_runs").update({ status: "failed", error: message, finished_at: new Date().toISOString() }).eq("id", run.id);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
});
