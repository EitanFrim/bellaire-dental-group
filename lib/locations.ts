/**
 * Neighborhood landing pages — local-SEO surface for "dentist in <area>"
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
      "A trusted dentist in the heart of Bellaire — gentle cosmetic, family, and emergency care just minutes from anywhere in the City of Bellaire.",
    blurb: [
      "Bellaire Dental Group has cared for Bellaire families for nearly a decade. Our office sits in the Chimney Rock Doctors Center, moments from Bellaire's tree-lined neighborhoods, with free on-site parking that makes every visit easy.",
      "From a child's first cleaning to a complete smile makeover, we're the dental home Bellaire neighbors return to year after year — many for decades. Gentle, unhurried, and genuinely glad to see you.",
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
        body: "We're not a chain — we're your neighbors, woman-owned and rooted in Bellaire.",
      },
      {
        title: "Easy & free parking",
        body: "On-site parking at the Chimney Rock Doctors Center — no garages, no hassle.",
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
      "A calm, modern dentist for West University Place families — cosmetic, family, and restorative care a short drive from West U.",
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
        body: "A short, simple drive — and free parking when you arrive.",
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
    driveTime: "about 10–12 minutes",
    intro:
      "Modern, gentle dentistry for Upper Kirby — cosmetic, family, and emergency dental care just south of the district.",
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
        body: "We don't double-book — appointments start on time and stay unhurried.",
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
      "A gentle, trusted dentist for Meyerland families — comprehensive cosmetic, family, and emergency care close to home.",
    blurb: [
      "Meyerland families have long counted on Bellaire Dental Group for caring, comprehensive dentistry. We're just minutes away, with a multilingual team (English, Spanish, Russian, and Hebrew) that helps everyone feel understood and at ease.",
      "From routine checkups to TMJ relief and full smile makeovers, we make great dentistry feel calm and personal — exactly what a neighborhood dental home should be.",
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
        body: "One of the closest gentle, modern dental offices to Meyerland — with free parking.",
      },
      {
        title: "Care in your language",
        body: "English, Spanish, Russian, and Hebrew spoken — comfort for the whole community.",
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
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
