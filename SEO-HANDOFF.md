# Local SEO Launch Kit: Bellaire Dental Group

Owner actions to get to the top of "dentist near me / Houston / Bellaire" searches.
The website side is done and deployed. Everything below is account access or
in-office process. Items are ordered by impact. (Research basis: Google Business
Profile signals are ~32% of local pack ranking, reviews ~16% with recency and
steady velocity now mattering more than total count, links ~15%, citations ~7%.)

---

## 1. Point the domain at the new site (do this first; 15 minutes)

The new site cannot rank until it lives on bellairedentalgroup.com. Right now the
domain still serves the old WordPress site.

The Vercel side is already fully configured: both domains are attached and
verified on the project, with bellairedentalgroup.com set to forward to
www.bellairedentalgroup.com. The moment DNS points at Vercel, the new site
goes live with HTTPS automatically. Only the registrar step below remains.

At your domain registrar (where bellairedentalgroup.com is managed):

1. Lower the TTL on existing records to 300 seconds, wait an hour (optional but smooth).
2. Set these two records, replacing the old host's records:
   - `A` record, host `@`, value `76.76.21.21`
   - `CNAME` record, host `www`, value `cname.vercel-dns.com`
3. Tell us when it is done. Propagation is usually minutes to a few hours.
   The old hosting plan can be cancelled once the new site is confirmed live.

No Google "Change of Address" is needed: the domain stays the same, and the new
site already 301-redirects all 41 old WordPress URLs to their new pages.

## 2. Google Search Console + Bing (30 minutes, once)

- Go to search.google.com/search-console, add property `bellairedentalgroup.com`
  (Domain type), verify with the DNS TXT record it gives you.
- Submit the sitemap: `https://www.bellairedentalgroup.com/sitemap.xml`.
- Use "URL inspection" and request indexing for: the homepage, /services,
  /services/dental-implants, /services/invisalign, and the /locations pages.
- Then bing.com/webmasters, sign in, and use "Import from Google Search Console".
  (Bing feeds ChatGPT search and Microsoft Copilot, so this covers AI search too.)
- Alternatively: grant info@zedent.co.il access and we do all of this for you.

## 3. Google Business Profile (the single biggest ranking lever)

Sign in at business.google.com with the account that owns the "Bellaire Dental
Group" listing (4.9 stars, ~369 reviews). If nobody on the team can access it,
use "Own this business?" on the Google listing to reclaim it: do this urgently.

Then set, verbatim where given:

- **Website**: `https://www.bellairedentalgroup.com?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- **Appointment link**: your PatientViewer scheduler URL (the same one the site's Book button uses)
- **Primary category**: Dentist
- **Additional categories**: Cosmetic dentist, Dental implants provider, Emergency dental service, Teeth whitening service
- **Hours**: Mon-Tue 8-5, Wed-Thu 7-3, Fri 8-12, Sat-Sun closed (match the site exactly)
- **Attributes**: Identifies as women-owned; languages: English, Spanish, Russian, Hebrew
- **Address format**: make it exactly "6699 Chimney Rock Rd., Suite 101, Houston, TX 77081" so it matches the website and every directory

**Business description** (paste; 733 characters):

> Bellaire Dental Group is a women-owned dental practice in the Bellaire area of
> Houston, led by Dr. Regina Valter, DDS. For nearly a decade we have provided
> gentle, judgment-free cosmetic, family, restorative, and emergency dentistry
> for patients from age two and up. Rated 4.9 stars across hundreds of Google
> reviews, we are known for calm, unhurried visits and anxiety-aware care, with
> nitrous sedation available. Services include cleanings, veneers, teeth
> whitening, Invisalign, dental implants, crowns, TMJ and sleep apnea treatment,
> and same-day emergency care. Our team speaks English, Spanish, Russian, and
> Hebrew. Most PPO insurance accepted, with free on-site parking at the Chimney
> Rock Doctors Center.

**Services**: add each service the site lists (whitening, veneers, Invisalign,
implants, family dentistry, emergency, TMJ and sleep apnea, sedation, laser
dentistry) and paste each page's one-line summary from the website.

**Photos**: upload the office photos used on the site plus team photos now; add
2-3 new photos monthly (phone photos are fine: real beats polished).

**Q&A seeds** (post these as questions from any account, answer from the
business account; adapt answers from the site's FAQ sections):

1. Do you take PPO insurance?
2. Do you see children? From what age?
3. Is parking free?
4. Can I be seen the same day for a dental emergency?
5. Do you offer anything for nervous patients?
6. Do you speak Spanish / Russian / Hebrew?
7. What if I do not have dental insurance?
8. Do you offer Invisalign and veneers consultations?

**Posts**: 2-4 per month. Ready-made first three: (1) the complimentary cosmetic
consultation offer, (2) "Meet Dr. Valter" with her portrait and a two-line bio,
(3) the new "Emergency dentist in Houston" blog post with its link.

## 4. The review engine (velocity beats volume)

Target: a steady 8-12 new Google reviews per month. The benchmark nearby
practice has 800+ reviews at 4.9; we close that gap with consistency, not bursts.

- In the GBP dashboard, tap "Ask for reviews" and copy your short link
  (looks like `g.page/r/XXXX/review`). Send it to us too: we will wire it into
  the website's review buttons.
- Front desk script (at checkout, after a good visit): "So glad today went well!
  If you have 30 seconds, a Google review genuinely helps neighbors find us.
  We'll text you the link." Then send the link by text within the hour.
- Print a small QR card for the checkout counter pointing at the same link.
- Never offer discounts or gifts for reviews (against Google policy), and never
  review-gate (only asking happy patients through a filter tool).
- Reply to every review within 24 hours. Templates:
  - Positive: "Thank you, [name]! It means a lot to the whole team that you felt
    [thing they praised]. See you next time!"
  - Mixed/negative (HIPAA-safe, never confirm they are a patient or mention any
    treatment): "Thank you for the feedback. We take this seriously and would
    like to make it right. Please call us at (713) 668-8383 and ask for the
    office manager."

## 5. Citations: same name, address, phone everywhere

Claim or correct these profiles so all show exactly
"Bellaire Dental Group, 6699 Chimney Rock Rd., Suite 101, Houston, TX 77081,
(713) 668-8383" and the new website URL:

- Yelp (already live: update website link after cutover)
- Facebook page + Instagram bio link
- Apple Business Connect (businessconnect.apple.com: puts you on Apple Maps/Siri)
- Bing Places (bingplaces.com)
- Healthgrades (both the practice page and Dr. Valter's profile)
- Zocdoc, WebMD, Vitals, Opencare (create/claim where missing)
- BBB and Birdeye (already exist: update the site URL)
- Nextdoor business page (high-trust "near me" recommendations)

These directories also rank on page 1 for "dentist Houston", so complete
profiles there are extra shelf space for the practice (barnacle SEO).

## 6. Local links (slow, steady, powerful)

- Ensure the GHDS / TDA / ADA member directories link to the website.
- Join the Houston Southwest or Bellaire area chamber of commerce (member link).
- Sponsor something small and local (school team, Evelyn's Park event): ask for
  a link on the sponsors page.
- When Houstonia or similar run "Top Dentist" features again, make sure the
  listing links to the domain.

## 7. What is already done on the website (for reference)

- Full Dentist structured data (geo coordinates, hours, rating, services,
  booking action, service areas) on every page, plus per-neighborhood pages for
  Bellaire, West U, Upper Kirby, Meyerland, Galleria, Braeswood, Southside Place.
- FAQ markup sitewide, cost guides, llms.txt for AI assistants, and explicit
  crawl permission for Google, Bing, ChatGPT, Claude, and Perplexity bots.
- All 41 old WordPress URLs 301-redirect to their new equivalents.
- 30/60/90-day expectation once DNS + GBP work lands: local pack movement in
  30-90 days, neighborhood organic terms in 60-120 days, AI recommendations
  follow the citations and reviews.
