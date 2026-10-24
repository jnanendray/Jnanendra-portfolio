# Jnanendra — Portfolio Site

## What this is
Personal portfolio for Jnanendra: hero intro, skills, and a projects section
showcasing live builds (starting with the SmileCare Dental clinic landing page).
Built as part of the Bviate Solutions 37-Day Vibe Coder program.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on Vercel (Hobby plan)

## Commands
- `npm install`
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint check

## Rules
- Never commit directly to `main`. Create a branch per task, open a PR, check
  the Vercel preview link, then merge.
- No secrets or real phone numbers in code. The WhatsApp number is read from
  `NEXT_PUBLIC_WHATSAPP_NUMBER`, set as an environment variable in Vercel.
- Use the shared `components/Container.tsx` for page width/padding
  (max-width 1760px, padding 16/24/32px) instead of ad-hoc wrapper divs.
- Keep card grids responsive: 2 columns on mobile, up to 3–4 on larger screens.
- Any overlay/modal added later must be keyboard-accessible (focus trap, Esc
  to close, visible focus states).
- Use click-to-chat (WhatsApp) links instead of displaying a raw phone number.
- If a database is added later (e.g. Supabase), enable Row Level Security
  on every table.

## Process checklist (per change)
1. Create a branch (or ask Claude to prepare files for GitHub's web upload).
2. Open a PR — Vercel creates a preview deployment automatically.
3. Check the preview URL, test on mobile view, run Lighthouse on **production**
   (not the preview link — previews are marked `noindex` and will tank the SEO
   score).
4. Merge once it looks right.

## Current status
Projects section lists all five builds, newest first: Glowing Beauty Salon
(full-stack booking platform + Android app), DoorStep Services, Jyothi Metal
Artifacts, Prime Spaces Realty and SmileCare Dental. Skills include Supabase,
RLS, GitHub Actions and Android (TWA). Project screenshots can be added later.
