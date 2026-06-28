/**
 * Bellaire Dental Group: single source of truth for all practice data.
 * Keep NAP (name / address / phone) consistent everywhere it renders. This is
 * a local-SEO requirement and must match the Google Business Profile exactly.
 *
 * Facts sourced from the practice's existing site, Google Business Profile, and
 * public directories (May 2026). Items marked TODO should be confirmed with the
 * client before launch.
 */

export const practice = {
  name: "Bellaire Dental Group",
  legalName: "Bellaire Dental Group",
  // TODO(client): confirm preferred tagline.
  tagline: "Modern dentistry. Gentle care.",
  shortDescription:
    "A calm, modern dental practice in Houston led by Dr. Regina Valter, offering cosmetic, family, and restorative dentistry delivered with a gentle, unhurried touch.",
  longDescription:
    "For nearly a decade, Bellaire Dental Group has cared for the Bellaire and Houston community with honest, high-quality dentistry and genuine, personalized attention. From routine family cleanings to complete smile transformations, we take the time to listen, explain, and make every visit feel calm and comfortable.",

  founded: 2015, // ~a decade of service (approx; "for nearly a decade")
  yearsServing: 10,

  // --- Contact ---
  phone: {
    display: "(713) 668-8383",
    tel: "+17136688383",
    digits: "7136688383",
  },
  sms: "+17136688383",
  // No public email is published; appointment requests route through the form.
  email: "",

  // --- Location (NAP) ---
  address: {
    street: "6699 Chimney Rock Rd.",
    suite: "Suite 101",
    locality: "Houston",
    region: "TX",
    regionName: "Texas",
    postalCode: "77081-5339",
    country: "US",
    building: "Chimney Rock Doctors Center",
  },
  geo: {
    // Approximate; refine from Google Business Profile if needed.
    latitude: 29.70772,
    longitude: -95.47613,
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bellaire+Dental+Group+6699+Chimney+Rock+Rd+Suite+101+Houston+TX+77081",
  googleMapsEmbed:
    "https://www.google.com/maps?q=Bellaire+Dental+Group+6699+Chimney+Rock+Rd+Suite+101+Houston+TX+77081&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Bellaire+Dental+Group+6699+Chimney+Rock+Rd+Suite+101+Houston+TX+77081",
  parking: "Free on-site parking at the Chimney Rock Doctors Center.",

  // --- Hours --- (24h "HH:MM" for schema; label for display)
  hours: [
    { day: "Monday", short: "Mon", opens: "08:00", closes: "17:00" },
    { day: "Tuesday", short: "Tue", opens: "08:00", closes: "17:00" },
    { day: "Wednesday", short: "Wed", opens: "07:00", closes: "15:00" },
    { day: "Thursday", short: "Thu", opens: "07:00", closes: "15:00" },
    { day: "Friday", short: "Fri", opens: "08:00", closes: "12:00" },
    { day: "Saturday", short: "Sat", opens: null, closes: null },
    { day: "Sunday", short: "Sun", opens: null, closes: null },
  ] as Array<{
    day: string;
    short: string;
    opens: string | null;
    closes: string | null;
  }>,

  // --- Reputation ---
  ratings: {
    google: {
      value: 4.9,
      count: 352,
      // Google "search" URL reliably resolves to the practice's own Business
      // Profile panel (with reviews) without needing a Place ID. A plain
      // /maps/place/<name> link can land on an empty/ambiguous result.
      // TODO(client): replace with the exact Place ID review link, e.g.
      // https://search.google.com/local/reviews?placeid=<PLACE_ID>
      url: "https://www.google.com/search?q=Bellaire+Dental+Group+6699+Chimney+Rock+Rd+Suite+101+Houston+TX+77081",
    },
    yelp: {
      value: 5,
      count: null as number | null,
      url: "https://www.yelp.com/biz/bellaire-dental-group-houston",
    },
  },

  womenOwned: true,
  languages: ["English", "Spanish", "Russian", "Hebrew"],

  // --- Local SEO ---
  areasServed: [
    "Bellaire",
    "West University Place",
    "Upper Kirby",
    "Meyerland",
    "Houston",
  ],

  // --- Trust / affiliations ---
  affiliations: [
    { abbr: "ADA", name: "American Dental Association", url: "https://www.ada.org" },
    { abbr: "TDA", name: "Texas Dental Association", url: "https://www.tdadental.com" },
    { abbr: "GHDS", name: "Greater Houston Dental Society", url: "https://www.ghds.org" },
    {
      abbr: "AADSM",
      name: "American Academy of Dental Sleep Medicine",
      url: "https://www.aadsm.org",
    },
    {
      abbr: "AAFE",
      name: "American Academy of Facial Esthetics",
      url: "https://www.facialesthetics.org",
    },
  ],
  awards: [
    { name: "Houstonia Magazine: Top Dentist", year: 2017 },
  ],

  // --- Financing ---
  financing: [
    {
      name: "Cherry",
      description: "Flexible monthly payment plans with quick approval and no hard credit check.",
      url: "https://pay.withcherry.com/bellaire-dental-group",
    },
    {
      name: "CareCredit",
      description: "Healthcare credit card with special financing on dental care.",
      url: "https://www.carecredit.com",
    },
  ],
  paymentAccepted: ["Cash", "Check", "Credit Card", "Cherry", "CareCredit", "Most PPO insurance"],

  // --- In-office savings plan (for patients without dental insurance) ---
  // TODO(client): confirm the current annual fee, included visits, and the
  // discount percentage on other treatment, then surface them here.
  membershipPlan: {
    name: "In-Office Dental Savings Plan",
    tagline: "No insurance? No problem.",
    summary:
      "An affordable, no-hassle annual membership for patients without dental insurance: it covers your routine preventive care and discounts the rest of your treatment. It's not insurance, so there are no claim forms and none of the usual red tape.",
    highlights: [
      "No insurance required",
      "No deductibles or annual maximums",
      "No waiting periods or pre-existing limits",
      "Discounted fees on treatment beyond your covered visits",
    ],
  },

  // --- Current specials / offers ---
  // TODO(client): keep this list current; remove or add seasonal promotions.
  specials: [
    {
      title: "Complimentary cosmetic consultation",
      description:
        "Thinking about veneers, Invisalign, or a smile makeover? Sit down with Dr. Valter to talk through your options. No cost, no pressure.",
    },
  ],

  // --- Patient resources (env-overridable; graceful fallbacks when unset) ---
  // New-patient intake forms to complete before the first visit.
  patientFormsUrl: process.env.NEXT_PUBLIC_PATIENT_FORMS_URL || "",
  // Existing-patient online portal login.
  patientPortalUrl: process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || "",

  // --- Social ---
  social: {
    facebook: "https://www.facebook.com/bellairedentalgroup",
    instagram: "https://www.instagram.com/bellaire_dental_group",
    yelp: "https://www.yelp.com/biz/bellaire-dental-group-houston",
    twitter: "https://twitter.com/bellaire_dental",
  },

  // --- Directory citations (for schema `sameAs` + AI entity grounding) ---
  // Consistent NAP across these strengthens local SEO and makes AI assistants
  // far more likely to cite/recommend the practice. Real, verified profiles:
  directories: [
    "https://www.healthgrades.com/group-directory/tx-texas/houston/bellaire-dental-group-y4g22m",
    "https://www.healthgrades.com/physician/dr-regina-valter-y9ts25z",
    "https://reviews.birdeye.com/bellaire-dental-group-dr-regina-valter-dds-155344066971930",
    "https://www.bbb.org/us/tx/houston/profile/dentist/bellaire-dental-group-0915-90059923",
    "https://connect.medicalnewstoday.com/provider/dr-regina-valter-1891134813",
    "https://care.healthline.com/find-care/provider/dr-regina-valter-1891134813",
  ],

  // --- Team --- (only confirmed members; add more when client supplies bios/photos)
  team: [
    {
      name: "Dr. Regina Valter",
      credentials: "DDS",
      role: "Owner & Dentist",
      image: "/images/team/dr-regina-valter.jpg",
      specialties: [
        "Cosmetic dentistry",
        "Family dentistry",
        "Restorative care",
        "TMJ treatment",
      ],
      bio: [
        "Dr. Regina Valter is the owner of Bellaire Dental Group, where she provides cosmetic and family dentistry with a focus on personalized care, long-term relationships, and natural-looking results. Her path began in dental hygiene before she became a dentist, giving her a rare understanding of dentistry from both the clinical and the patient side of the chair.",
        "For nearly a decade, Dr. Valter has proudly served the Bellaire and Houston community, building a practice centered on honesty, quality treatment, and individualized attention. She cares for everything from routine family visits and emergencies to cosmetic smile enhancements, crowns, restorative treatment, and TMJ concerns.",
        "Known for a direct yet compassionate approach, she takes the time to educate patients so they can make informed decisions, creating an environment where people feel heard, respected, and genuinely comfortable. Outside the office she enjoys fitness, travel, and time with her family and cats, and stays current through ongoing continuing education.",
      ],
    },
  ],
} as const;

export type Practice = typeof practice;

/** Full one-line address, e.g. for footers and schema. */
export function fullAddress() {
  const a = practice.address;
  return `${a.street}, ${a.suite}, ${a.locality}, ${a.region} ${a.postalCode}`;
}

/** Group consecutive weekdays with identical hours for compact display. */
export function groupedHours() {
  const groups: Array<{ label: string; value: string }> = [];
  for (const h of practice.hours) {
    const value =
      h.opens && h.closes ? `${to12(h.opens)} - ${to12(h.closes)}` : "Closed";
    const last = groups[groups.length - 1];
    if (last && last.value === value) {
      // extend label range
      const [start] = last.label.split("-");
      last.label = `${start.trim()}-${h.short}`;
    } else {
      groups.push({ label: h.short, value });
    }
  }
  return groups;
}

function to12(t: string) {
  const [hStr, m] = t.split(":");
  let h = parseInt(hStr, 10);
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return m === "00" ? `${h} ${ampm}` : `${h}:${m} ${ampm}`;
}
