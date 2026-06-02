# Deploying Bellaire Dental Group to Vercel

The site is fully deploy-ready: clean production build (35 routes), `vercel.json`
with security headers + image caching, and graceful fallbacks so it works even
before you add any env vars.

## Option A — Deploy from the Vercel dashboard (easiest)

1. Push this repo to GitHub/GitLab/Bitbucket:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin build/calm-website   # or merge to main first
   ```
2. Go to https://vercel.com/new → **Import** the repo.
3. Vercel auto-detects **Next.js** — no build settings to change.
   (Build: `npm run build` · Output: handled by the Next.js adapter.)
4. Click **Deploy**. Done — you'll get a `*.vercel.app` URL in ~1 minute.

## Option B — Deploy from this machine (CLI)

```bash
npm i -g vercel       # install the CLI
vercel login          # opens the browser to authenticate
cd /Users/eitanfrimerman/Project/bellaire
vercel                # preview deploy (answer the prompts; accept defaults)
vercel --prod         # production deploy
```

## Connect the domain

In the Vercel project → **Settings → Domains**, add `bellairedentalgroup.com`
(and `www`). Vercel shows the exact DNS records to set at the registrar.
Then set the canonical URL env var (below) to the final domain.

## Environment variables (all OPTIONAL — site works without them)

Add these in **Settings → Environment Variables** (Production + Preview). See
`.env.example` for the full list.

| Variable | What it enables | Needed? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, OG — set to the final domain | Recommended |
| `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` | Live auto-updating Google reviews (else curated real reviews show) | Optional |
| `RESEND_API_KEY` + `BOOKING_NOTIFICATION_EMAIL` | Emails appointment-request form submissions (else logged) | Optional |
| `NEXT_PUBLIC_SCHEDULER_URL` | Override the booking scheduler (defaults to the real PMS scheduler) | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 | Optional |

> Booking already works out of the box — it embeds the practice's real
> PatientViewer/Dolfin scheduler.

## After the first deploy (high-impact for SEO + AI)

1. **Google Search Console** — add the property, submit `https://<domain>/sitemap.xml`.
2. **Bing Webmaster Tools** — same (also feeds ChatGPT/Copilot).
3. **Google Business Profile** — claim/verify; make NAP match the site exactly
   (6699 Chimney Rock Rd., Suite 101, Houston, TX 77081 · (713) 668-8383).
4. Enable **Vercel Web Analytics** in the dashboard (the code is already wired).
5. Confirm `robots.txt` and `llms.txt` resolve at the live domain.
