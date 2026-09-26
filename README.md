# ISUZU Marketing AI Center

Web-based marketing, CRM, AI Customer Service, Telegram Bot, AI content studio, and developer assistant for Isuzu dealer operations.

## Stack
- Node.js 22 + TypeScript
- Next.js 15
- Fastify
- MySQL 8
- Prisma ORM
- Redis
- Telegram Bot API
- AI provider via environment variables

## Quick start
1. Copy `.env.example` to `.env`.
2. Run `docker compose up -d mysql redis`.
3. Install dependencies with `npm install`.
4. Generate Prisma client: `npm run db:generate`.
5. Run migration: `npm run db:migrate`.
6. Start development: `npm run dev`.

Web: http://localhost:3000  
API: http://localhost:4000/health

## Modules
Dashboard, vehicle inventory, CRM leads, sales follow-up, AI CS, Telegram text/voice integration hooks, AI marketing content, image-generation hooks, content calendar, notifications, audit logs, and AI developer tooling.

See `docs/ARCHITECTURE.md` and `.env.example`.
