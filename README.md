# Bellaire Dental Group — Website

A modern, immersive marketing website for **Bellaire Dental Group** (Dr. Regina Valter, DDS — Houston, TX). Built on the "Calm" concept: premium, anxiety-aware design wrapped around a fast, frictionless path to booking.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `app/globals.css` (`@theme`)
- **motion** (Framer Motion's successor) for animation · **Lenis** for smooth scroll
- **next/image** + **next/font** (Fraunces + Inter)
- Structured data (JSON-LD), dynamic `sitemap.ts` / `robots.ts` / `manifest.ts`
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
app/
  (marketing)/        # all public pages (about, services, blog, contact, …)
  api/book            # appointment-request handler
  api/google-reviews  # live Google reviews (falls back to curated)
  layout.tsx          # root: fonts, providers, header/footer, schema
components/
  sections/           # homepage + page sections (Hero, Aurora, Reviews, …)
  ui/                 # primitives (Button, Card, Accordion, CountUp, …)
  booking/            # BookingModal, form, scheduler embed
  brand/ layout/ seo/ motion/ legal/
lib/
  practice.ts         # single source of truth (NAP, hours, team, ratings)
  services.ts         # services catalogue -> drives hub + landing pages
  reviews.ts          # curated real reviews + summary
  google-reviews.ts   # live Places API fetch w/ fallback
  blog.ts schema.ts scheduler.ts nav.ts utils.ts
public/images/        # office photos, team, generated brand media
scripts/prepare-images.mjs  # one-time asset prep (favicons, OG)
```

## Configuration (all optional — site works without them)

Copy `.env.example` -> `.env.local` and fill in as they become available:

| Variable | Enables |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, OG (defaults to production domain) |
| `NEXT_PUBLIC_SCHEDULER_URL` | Embeds your online scheduler (NexHealth/LocalMed/etc.) in the booking modal instead of the request form |
| `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` | Live, auto-refreshing Google reviews (else curated real reviews show) |
| `RESEND_API_KEY` + `BOOKING_NOTIFICATION_EMAIL` | Emails appointment requests (else logged server-side) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |

## Editing content

- **Practice info** (address, phone, hours, team) → `lib/practice.ts`
- **Services** (cards, landing pages, FAQs) → `lib/services.ts`
- **Reviews** → `lib/reviews.ts`
- **Blog posts** → `lib/blog.ts`

Everything renders from these files, so updates stay consistent across the site (and keep NAP consistent for local SEO).

## Quality

Lighthouse (desktop, homepage): **Performance 97 · Accessibility 100 · Best Practices 96 · SEO 100** · LCP 1.3s · CLS 0.

All motion honors `prefers-reduced-motion`. Forms are HIPAA-conscious (minimal PII, consent required, no sensitive medical detail).

## To finalize before launch

- Confirm tagline & insurance list with the practice
- Add the real online scheduler URL (or wire the PMS API)
- Add Google Places API key + Place ID for live reviews
- Add GA4 ID; enable Vercel Web Analytics in the dashboard
- Add consented before/after photos to the Smile Gallery
- Add remaining team member bios/photos to `lib/practice.ts`
