#!/usr/bin/env bash
set -euo pipefail

if [[ -d /usr/lib/postgresql/17/bin ]]; then
  PATH="/usr/lib/postgresql/17/bin:$PATH"
fi

required=(SOURCE_DB_URL BACKUP_SUPABASE_URL BACKUP_SUPABASE_SERVICE_KEY BACKUP_ENCRYPTION_KEY)
for name in "${required[@]}"; do
  if [[ -z "${!name:-}" ]]; then
    echo "Missing required secret: ${name}" >&2
    exit 1
  fi
done

project_slug="bunpartener-pontaj"
source_project_ref="beuseulqtgtesavswxyy"
backup_bucket="database-backups"
local_date="$(TZ=Europe/Chisinau date +%F)"
created_at="$(date -u +%FT%TZ)"
work_dir="$(mktemp -d)"
trap 'rm -rf "$work_dir"' EXIT

dump_file="$work_dir/database.dump"
manifest_file="$work_dir/manifest.json"
archive_file="$work_dir/${project_slug}-${local_date}.tar.gz"
encrypted_file="${archive_file}.enc"

echo "Creating PostgreSQL custom-format dump for ${source_project_ref}..."
pg_dump \
  --dbname="$SOURCE_DB_URL" \
  --format=custom \
  --compress=9 \
  --no-owner \
  --no-acl \
  --file="$dump_file"

pg_restore --list "$dump_file" > "$work_dir/restore-list.txt"
object_count="$(wc -l < "$work_dir/restore-list.txt" | tr -d ' ')"
dump_sha256="$(sha256sum "$dump_file" | cut -d' ' -f1)"
dump_bytes="$(wc -c < "$dump_file" | tr -d ' ')"

printf '%s\n' \
  '{' \
  "  \"format\": \"bunpartener-postgres-backup-v1\"," \
  "  \"project_slug\": \"${project_slug}\"," \
  "  \"source_project_ref\": \"${source_project_ref}\"," \
  "  \"created_at\": \"${created_at}\"," \
  "  \"moldova_date\": \"${local_date}\"," \
  "  \"postgres_dump_format\": \"custom\"," \
  "  \"dump_sha256\": \"${dump_sha256}\"," \
  "  \"dump_bytes\": ${dump_bytes}," \
  "  \"restore_object_count\": ${object_count}" \
  '}' > "$manifest_file"

tar -C "$work_dir" -czf "$archive_file" database.dump manifest.json restore-list.txt
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 250000 \
  -in "$archive_file" \
  -out "$encrypted_file" \
  -pass env:BACKUP_ENCRYPTION_KEY

encrypted_sha256="$(sha256sum "$encrypted_file" | cut -d' ' -f1)"
object_path="${project_slug}/${source_project_ref}/${local_date}/${project_slug}-${local_date}.tar.gz.enc"
metadata_path="${project_slug}/${source_project_ref}/${local_date}/upload.json"

echo "Uploading encrypted backup to ${object_path}..."
curl --fail --silent --show-error \
  -X POST "${BACKUP_SUPABASE_URL}/storage/v1/object/${backup_bucket}/${object_path}" \
  -H "Authorization: Bearer ${BACKUP_SUPABASE_SERVICE_KEY}" \
  -H "apikey: ${BACKUP_SUPABASE_SERVICE_KEY}" \
  -H "Content-Type: application/octet-stream" \
  -H "x-upsert: false" \
  --data-binary "@${encrypted_file}"

printf '{"source_project_ref":"%s","created_at":"%s","encrypted_sha256":"%s","encrypted_bytes":%s}\n' \
  "$source_project_ref" "$created_at" "$encrypted_sha256" "$(wc -c < "$encrypted_file" | tr -d ' ')" > "$work_dir/upload.json"
curl --fail --silent --show-error \
  -X POST "${BACKUP_SUPABASE_URL}/storage/v1/object/${backup_bucket}/${metadata_path}" \
  -H "Authorization: Bearer ${BACKUP_SUPABASE_SERVICE_KEY}" \
  -H "apikey: ${BACKUP_SUPABASE_SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "x-upsert: false" \
  --data-binary "@$work_dir/upload.json"

echo "Backup uploaded successfully: ${object_path}"
echo "Encrypted SHA-256: ${encrypted_sha256}"
