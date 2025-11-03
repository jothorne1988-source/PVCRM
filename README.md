# ☀️ Solar CRM Starter (Codespaces-ready)

A minimal HubSpot-style solar CRM starter:
- Lead pipeline (Kanban)
- Google Maps array designer (polygons → DC kW)
- WhatsApp webhook stub
- AI stub routes
- NextAuth demo (disabled by default via middleware.off.ts)

## One‑click Codespaces (replace OWNER/REPO in the link)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/OWNER/REPO?quickstart=1)

## Quickstart in Codespaces
```bash
cp .env.example .env
# Set DATABASE_URL, NEXT_PUBLIC_GOOGLE_MAPS_KEY, NEXTAUTH_SECRET in .env
corepack enable || true
pnpm install || npm install
npx prisma generate
npx prisma migrate dev --name init
pnpm dev
```
Open forwarded Port 3000 → `/pipeline` and `/leads/demo`

### Enable login later
Rename `middleware.off.ts` → `middleware.ts` and restart the dev server. Visit `/login`.

### Neon helper
```bash
bash scripts/setup-neon.sh
```

### Twilio WhatsApp (optional)
Use ngrok and set webhook to `/api/whatsapp/webhook`.
