/**
 * Neighborhood landing pages - local-SEO surface for "dentist in <area>"
 * searches. Each area has UNIQUE content (no thin/duplicate copy) so each page
 * earns its own ranking and gives AI assistants distinct, citable facts.
 */

export type Location = {
  slug: string;
  area: string; // display name
  shortName?: string;
  zips: string[];
  driveTime: string; // from the practice
  // Unique, human copy:
  intro: string;
  blurb: string[];
  landmarks: string[]; // local proof / familiarity
  highlights: { title: string; body: string }[];
  keywords: string[];
};

export const locations: Location[] = [
  {
    slug: "bellaire",
    area: "Bellaire",
    zips: ["77401", "77081"],
    driveTime: "right in the neighborhood",
    intro:
      "A trusted dentist in the heart of Bellaire, offering gentle cosmetic, family, and emergency care just minutes from anywhere in the City of Bellaire.",
    blurb: [
      "Bellaire Dental Group has cared for Bellaire families for nearly a decade. Our office sits in the Chimney Rock Doctors Center, moments from Bellaire's tree-lined neighborhoods, with free on-site parking that makes every visit easy.",
      "From a child's first cleaning to a complete smile makeover, we're the dental home Bellaire neighbors return to year after year, many for decades. Gentle, unhurried, and genuinely glad to see you.",
    ],
    landmarks: [
      "City of Bellaire",
      "Chimney Rock Doctors Center",
      "Evelyn's Park",
      "Bellaire Town Square",
    ],
    highlights: [
      {
        title: "Truly local",
        body: "We're not a chain. We're your neighbors, woman-owned and rooted in Bellaire.",
      },
      {
        title: "Easy & free parking",
        body: "On-site parking at the Chimney Rock Doctors Center: no garages, no hassle.",
      },
      {
        title: "Generations of families",
        body: "Some Bellaire families have trusted us for 20+ years across three generations.",
      },
    ],
    keywords: [
      "dentist Bellaire TX",
      "dentist in Bellaire",
      "cosmetic dentist Bellaire",
      "family dentist Bellaire 77401",
      "emergency dentist Bellaire",
    ],
  },
  {
    slug: "west-university-place",
    area: "West University Place",
    shortName: "West U",
    zips: ["77005"],
    driveTime: "about 10 minutes",
    intro:
      "A calm, modern dentist for West University Place families, with cosmetic, family, and restorative care a short drive from West U.",
    blurb: [
      "West U families choose Bellaire Dental Group for unhurried, judgment-free care and a team that remembers their names. We're an easy drive from West University Place, with free parking and flexible morning and early-week hours that fit busy schedules.",
      "Whether you want a brighter smile before a big event or a reliable dental home for the whole household, Dr. Valter delivers natural-looking results and honest, no-pressure guidance.",
    ],
    landmarks: [
      "West University Place",
      "Rice Village",
      "Rice University area",
      "Texas Medical Center (nearby)",
    ],
    highlights: [
      {
        title: "Quick from West U",
        body: "A short, simple drive, and free parking when you arrive.",
      },
      {
        title: "Cosmetic expertise",
        body: "Veneers, whitening, and Invisalign designed around your face, not a template.",
      },
      {
        title: "Whole-family care",
        body: "One calm office for kids, parents, and grandparents alike.",
      },
    ],
    keywords: [
      "dentist West University Place",
      "dentist West U Houston",
      "cosmetic dentist 77005",
      "family dentist West University",
    ],
  },
  {
    slug: "upper-kirby",
    area: "Upper Kirby",
    zips: ["77098", "77019"],
    driveTime: "about 10-12 minutes",
    intro:
      "Modern, gentle dentistry for Upper Kirby: cosmetic, family, and emergency dental care just south of the district.",
    blurb: [
      "Upper Kirby professionals appreciate that we run on time, explain everything, and keep visits calm and efficient. Bellaire Dental Group is a quick trip from Upper Kirby, with comfortable amenities and modern technology that make appointments easy to fit into a full day.",
      "From same-day emergencies to discreet Invisalign and premium cosmetic work, we deliver high-end results with a warm, personal touch.",
    ],
    landmarks: [
      "Upper Kirby District",
      "River Oaks (nearby)",
      "Greenway Plaza",
      "Levy Park",
    ],
    highlights: [
      {
        title: "Respects your time",
        body: "We don't double-book. Appointments start on time and stay unhurried.",
      },
      {
        title: "Discreet & premium",
        body: "Invisalign and natural-looking veneers for camera-ready, professional smiles.",
      },
      {
        title: "Same-day emergencies",
        body: "In pain between meetings? We'll do everything we can to see you fast.",
      },
    ],
    keywords: [
      "dentist Upper Kirby",
      "dentist Upper Kirby Houston",
      "cosmetic dentist 77098",
      "Invisalign Upper Kirby",
    ],
  },
  {
    slug: "meyerland",
    area: "Meyerland",
    zips: ["77096"],
    driveTime: "about 8 minutes",
    intro:
      "A gentle, trusted dentist for Meyerland families, with comprehensive cosmetic, family, and emergency care close to home.",
    blurb: [
      "Meyerland families have long counted on Bellaire Dental Group for caring, comprehensive dentistry. We're just minutes away, with a multilingual team (English, Spanish, Russian, and Hebrew) that helps everyone feel understood and at ease.",
      "From routine checkups to TMJ relief and full smile makeovers, we make great dentistry feel calm and personal: exactly what a neighborhood dental home should be.",
    ],
    landmarks: [
      "Meyerland Plaza",
      "Godwin Park",
      "Brays Bayou Greenway",
      "Meyerland community",
    ],
    highlights: [
      {
        title: "Minutes from home",
        body: "One of the closest gentle, modern dental offices to Meyerland, with free parking.",
      },
      {
        title: "Care in your language",
        body: "English, Spanish, Russian, and Hebrew spoken: comfort for the whole community.",
      },
      {
        title: "Comprehensive care",
        body: "Cleanings, cosmetic work, implants, TMJ and sleep solutions under one roof.",
      },
    ],
    keywords: [
      "dentist Meyerland",
      "dentist Meyerland Houston",
      "family dentist 77096",
      "cosmetic dentist Meyerland",
    ],
  },
  {
    slug: "galleria",
    area: "Galleria",
    zips: ["77056", "77057"],
    driveTime: "about 10 minutes",
    intro:
      "A calm, boutique alternative to big-box dentistry for the Galleria and Uptown area: cosmetic, family, and emergency care a straight shot down Chimney Rock.",
    blurb: [
      "If you work or live around the Galleria, we're one of the easiest dental visits you can book: a straight drive south on Chimney Rock Rd, free on-site parking when you arrive, and appointments that start on time so you can be back for your next meeting. Many Uptown patients come at 7 am, before the workday starts.",
      "Galleria-area patients tend to ask us for two things: discreet cosmetic work (whitening, Invisalign, natural-looking veneers) and a practice that treats them like a person rather than a chart number. That's exactly the kind of dentistry Dr. Valter has built her name on for nearly a decade.",
    ],
    landmarks: [
      "The Galleria",
      "Uptown Park",
      "Post Oak Boulevard",
      "Williams Tower & Water Wall",
    ],
    highlights: [
      {
        title: "Beats the Uptown garages",
        body: "Ten minutes down Chimney Rock, then free surface parking at the door.",
      },
      {
        title: "Early, on-time visits",
        body: "7 am starts midweek and no double-booking: easy to fit around work.",
      },
      {
        title: "Camera-ready cosmetics",
        body: "Whitening, Invisalign, and veneers designed to look natural, never done.",
      },
    ],
    keywords: [
      "dentist Galleria Houston",
      "dentist Uptown Houston",
      "cosmetic dentist Galleria",
      "dentist 77056",
      "dentist near the Galleria",
    ],
  },
  {
    slug: "braeswood",
    area: "Braeswood",
    zips: ["77025", "77030"],
    driveTime: "about 8 minutes",
    intro:
      "Trusted family dentistry for Braeswood Place and the Medical Center corridor: gentle, comprehensive care just up the road from Brays Bayou.",
    blurb: [
      "Braeswood families and Texas Medical Center staff know good healthcare when they see it, which is why so many of our patients come from this corridor. We're about eight minutes away, with early-morning hours that work around hospital shifts and school drop-offs alike.",
      "From routine cleanings for kids to crowns, implants, and TMJ care for parents and grandparents, Dr. Valter keeps the whole household under one calm roof. And because our team speaks English, Spanish, Russian, and Hebrew, every member of the family gets care they fully understand.",
    ],
    landmarks: [
      "Braeswood Place",
      "Texas Medical Center (nearby)",
      "Brays Bayou Greenway",
      "Linkwood & Knollwood Village",
    ],
    highlights: [
      {
        title: "Fits hospital schedules",
        body: "7 am midweek openings and Friday mornings: made for TMC shift workers.",
      },
      {
        title: "One roof for the family",
        body: "Kids from age two, parents, and grandparents, all in the same calm office.",
      },
      {
        title: "Insurance made easy",
        body: "Most PPO plans accepted and filed for you, with clear estimates first.",
      },
    ],
    keywords: [
      "dentist Braeswood Houston",
      "dentist Braeswood Place",
      "family dentist 77025",
      "dentist near Texas Medical Center",
    ],
  },
  {
    slug: "southside-place",
    area: "Southside Place",
    zips: ["77005", "77025"],
    driveTime: "about 8 minutes",
    intro:
      "A neighborly dental home for Southside Place: gentle cosmetic, family, and emergency care just minutes from Karl Young Park.",
    blurb: [
      "Southside Place is a small city that runs on word of mouth, and that's how most of our Southside patients find us: a neighbor mentions the calm office on Chimney Rock where the dentist actually takes her time. We're about eight minutes away, with free parking and a front desk that knows returning families by name.",
      "Whether it's a toddler's very first visit, a teenager's Invisalign, or a same-day emergency before a weekend trip, we keep care personal, honest, and unhurried. No upselling, no pressure: just clear guidance from a woman-owned practice that's served this corner of Houston for nearly a decade.",
    ],
    landmarks: [
      "Southside Place",
      "Karl Young Park",
      "Rice Village (nearby)",
      "University Boulevard corridor",
    ],
    highlights: [
      {
        title: "Small-city neighborly",
        body: "A practice that matches Southside's scale: personal, unhurried, familiar.",
      },
      {
        title: "Kids to grandparents",
        body: "Gentle care for every age, starting from a child's first cleaning at two.",
      },
      {
        title: "Same-day emergencies",
        body: "Cracked tooth before a trip? We hold room in the schedule to see you fast.",
      },
    ],
    keywords: [
      "dentist Southside Place",
      "dentist Southside Place TX",
      "family dentist 77005",
      "dentist near Rice Village",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
