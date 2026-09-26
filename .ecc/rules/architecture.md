# Architecture Rules
Keep boundaries: apps/api, apps/web, packages/ai, packages/database, packages/telegram.
Business logic belongs in API/domain layers, not UI. Database access belongs in the database layer. AI access goes through packages/ai; Telegram transport through packages/telegram.
Avoid new infrastructure dependencies unless documented.
