# Bellaire Dental Group — Website Migration & SEO (for the current host owner)

A short, honest brief on what happens to Google rankings when we move
bellairedentalgroup.com from the current WordPress host to the new site.

## The bottom line

**Changing hosting does NOT reset your Google rankings.** Google ranks your
**domain and its pages** — not the server or platform behind them. WordPress,
Next.js, Vercel, etc. are invisible to Google. Sites change hosts all the time
with zero ranking change.

The "rankings start from scratch" claim is a common myth. There is a *real*
risk nearby, but it's about **URLs**, not the host — and we've already handled it.

## What actually affects rankings in a migration

| Factor | Reality |
|---|---|
| Same domain (`bellairedentalgroup.com`) | ✅ All domain age, authority, and backlinks are kept. |
| Hosting platform change | ✅ No effect on rankings. |
| Page **URLs** changing | ⚠️ This is the only real risk — and it's fully solved below. |
| HTTPS, mobile-friendly, fast load | ✅ The new site is better on all three → can *help* rankings. |

## The one thing that matters: 301 redirects (DONE)

The old WordPress URLs (e.g. `/dental-care/cosmetic-dentistry/dental-implants/`)
are different from the new site's cleaner URLs (`/services/dental-implants`).
Without action, Google would hit those old URLs, get a "404 Not Found," and
*then* rankings would drop.

We've prevented that: **every one of the 41 old URLs now 301-redirects to its
new equivalent.** A 301 ("permanent redirect") tells Google "this page moved
here" and transfers essentially all of its ranking authority to the new page.

Examples already configured:
- `/dental-care/cosmetic-dentistry/dental-implants/` → `/services/dental-implants`
- `/dental-care/general-dentistry/emergency-dental-care/` → `/services/emergency-dentistry`
- `/meet-houston-tx-dentist/` → `/about`
- `/patient-resources/blog/` → `/blog`
- `/privacy-policy/` → `/privacy`

So the rankings carry over. Nothing starts from scratch.

## What we need from the host owner (just DNS)

We are **not** asking to touch the WordPress install. We only need the domain
pointed at the new site when we're ready to launch:

1. **Lower the DNS TTL** a day before launch (e.g. to 300s) for a fast cutover.
2. **At launch, update DNS** for `bellairedentalgroup.com` + `www` to point to
   the new host (Vercel). We'll provide the exact records:
   - Typically an `A` record `@ → 76.76.21.21` and `CNAME` `www → cname.vercel-dns.com`
     (Vercel gives the precise values when the domain is added).
3. Keep the domain registration/ownership exactly as-is — only the DNS target
   changes.

That's the entire ask. No data export, no plugin work.

## Launch-day checklist (we handle these)

- [ ] Add domain in the new host; confirm SSL issues automatically.
- [ ] Verify the 301 redirects resolve on the live domain.
- [ ] Submit the new `sitemap.xml` in **Google Search Console** (and Bing).
- [ ] Use Search Console's **"Change of Address"** only if the domain changes
      (it does NOT here — same domain — so this is not needed).
- [ ] Confirm **Google Business Profile** still points to the same domain.
- [ ] Watch Search Console "Coverage" for a week; redirects show as expected.

## Expected outcome

Same domain + 301s + a faster, more complete site = rankings are **preserved
and typically improve** over the following weeks (better speed, more pages,
richer structured data, and stronger local/AEO signals). No reset.
