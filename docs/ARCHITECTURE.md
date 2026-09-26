# Architecture

## Flow
Social media / website / Telegram -> AI CS -> CRM Lead -> Sales follow-up -> Quotation/Test Drive -> Closing.

## AI layers
1. AI CS: FAQ, product information, lead capture and qualification.
2. AI Marketing: captions, campaigns, content calendar, scripts and image prompts.
3. AI Developer: code assistance, SQL, debugging, tests and documentation.

Current vehicle price and stock must be read from MySQL rather than generated from model memory.

## Telegram
Text messages are handled by the AI gateway. Voice messages are converted through a speech-to-text provider, then processed by AI CS. Telegram webhook credentials stay in environment variables.

## Production
Recommended baseline: Ubuntu VPS, Nginx, Docker Compose, MySQL/managed backup, Redis, HTTPS, daily database backups and audit logging. No GPU is required when image/LLM inference is provided by external APIs.
