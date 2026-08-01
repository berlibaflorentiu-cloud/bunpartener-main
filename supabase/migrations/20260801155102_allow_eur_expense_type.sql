alter table public.entries
  drop constraint if exists entries_fixed_type_check;

alter table public.entries
  add constraint entries_fixed_type_check
  check (
    fixed_type = any (
      array['onorariu'::text, 'cheltuiala'::text, 'cheltuiala_eur'::text]
    )
  );
