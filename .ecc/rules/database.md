# Database Rules
MySQL is the source of truth for vehicle price and stock. Use Prisma. Schema changes require migration review. Avoid destructive migrations without explicit approval. Add indexes for important lookup/reporting paths. Do not store secrets in schema or seed data. Preserve auditability for important changes.
