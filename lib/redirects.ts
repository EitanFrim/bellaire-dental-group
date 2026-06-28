/**
 * 301 redirect map: every known URL from the previous WordPress site →
 * its equivalent on the new site. This preserves the domain's existing Google
 * rankings during migration: each old ranked URL passes its authority to the
 * new page instead of 404ing. (Source list scraped from the live old site.)
 *
 * Vercel/Next serve these as real HTTP 301s (permanent: true).
 * `source` paths are matched WITHOUT trailing slash (Next normalizes), but we
 * include both forms to be safe across hosts.
 */
export type Redirect = { source: string; destination: string; permanent: true };

const map: Array<[string, string]> = [
  // --- Top-level ---
  ["/our-practice", "/about"],
  ["/meet-houston-tx-dentist", "/about"],
  ["/patient-resources", "/new-patients"],
  ["/patient-resources/blog", "/blog"],
  ["/patient-resources/patient-forms", "/new-patients"],
  ["/patient-resources/financial-options", "/new-patients"],
  ["/patient-resources/financial-options/cherry", "/new-patients"],
  ["/patient-resources/in-office-discount-program", "/new-patients"],
  ["/patient-resources/patient-specials", "/new-patients"],
  ["/patient-resources/join-our-referral-giveaway", "/new-patients"],
  ["/privacy-policy", "/privacy"],
  ["/about-us", "/about"],
  ["/dr-regina-valter-dds", "/about"],
  ["/dr-alan-stanton-dds", "/about"], // former dentist; route to the team page
  ["/appointment", "/book"],
  ["/contact-us", "/contact"],
  ["/patient-reviews", "/reviews"],
  // /contact, /reviews already match new routes - no redirect needed.

  // --- Gallery / office tour (old) → smile gallery ---
  ["/gallery", "/smile-gallery"],
  ["/gallery/office-tour", "/smile-gallery"],
  ["/gallery/patient-photos", "/smile-gallery"],
  ["/lobby-video", "/smile-gallery"],

  // --- Old blog roots → new blog ---
  ["/our-blog", "/blog"],

  // --- Services hub ---
  ["/dental-care", "/services"],
  ["/dental-care/cosmetic-dentistry", "/services"],
  ["/dental-care/general-dentistry", "/services"],
  ["/dental-care/pediatric-dentistry", "/services/family-dentistry"],
  ["/dental-care/pediatric-dentistry/pediatric-faq", "/services/family-dentistry"],

  // --- Cosmetic treatments ---
  ["/dental-care/cosmetic-dentistry/dental-implants", "/services/dental-implants"],
  ["/dental-care/cosmetic-dentistry/dental-veneers", "/services/veneers"],
  ["/dental-care/cosmetic-dentistry/invisalign", "/services/invisalign"],
  ["/dental-care/cosmetic-dentistry/clear-aligners", "/services/invisalign"],
  ["/dental-care/cosmetic-dentistry/orafit-clear-aligners", "/services/invisalign"],
  ["/dental-care/cosmetic-dentistry/teeth-whitening", "/services/teeth-whitening"],
  ["/dental-care/cosmetic-dentistry/botox", "/services/botox-fillers"],
  ["/dental-care/cosmetic-dentistry/dermal-fillers", "/services/botox-fillers"],
  ["/dental-care/cosmetic-dentistry/snap-on-smile", "/services/snap-on-smile"],

  // --- General treatments ---
  ["/dental-care/general-dentistry/emergency-dental-care", "/services/emergency-dentistry"],
  ["/dental-care/general-dentistry/tmj-treatment", "/services/tmj-sleep-apnea"],
  ["/dental-care/general-dentistry/botox-for-tmj", "/services/tmj-sleep-apnea"],
  ["/dental-care/general-dentistry/snoring-prevention", "/services/tmj-sleep-apnea"],
  ["/dental-care/general-dentistry/snoring-prevention/prosomnus-sleep-and-snore-device", "/services/tmj-sleep-apnea"],
  ["/dental-care/general-dentistry/snoring-prevention/silent-nite-appliance", "/services/tmj-sleep-apnea"],
  ["/dental-care/general-dentistry/crown-and-bridge", "/services/crowns-bridges"],
  ["/dental-care/general-dentistry/composite-fillings", "/services/fillings"],
  ["/dental-care/general-dentistry/gum-disease-treatment", "/services/gum-disease"],
  ["/dental-care/general-dentistry/oral-cancer-screening", "/services/oral-cancer-screening"],
  ["/dental-care/general-dentistry/dentures-and-partials", "/services/dentures"],
  ["/dental-care/general-dentistry/laser-dentistry", "/services/laser-dentistry"],
  ["/dental-care/general-dentistry/nitrous-oxide-sedation", "/services/sedation"],
  ["/dental-care/general-dentistry/diagnodent", "/services/family-dentistry"],
];

/** Expand each mapping to also catch the trailing-slash form. */
export const wpRedirects: Redirect[] = map.flatMap(([source, destination]) => [
  { source, destination, permanent: true },
  { source: `${source}/`, destination, permanent: true },
]);
