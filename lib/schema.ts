/** Structured-data builders (schema.org) sourced from practice data. */
import { practice, fullAddress } from "./practice";
import { reviewSummary } from "./reviews";
import { services } from "./services";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bellairedentalgroup.com";

const DAY_MAP: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function url(path = "/") {
  return new URL(path, siteUrl).toString();
}

/** The practice as a Dentist (a LocalBusiness subtype). Used site-wide. */
export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#dentist`,
    name: practice.name,
    description: practice.shortDescription,
    url: siteUrl,
    telephone: practice.phone.tel,
    image: url("/og.jpg"),
    logo: url("/icon.png"),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: practice.paymentAccepted.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${practice.address.street}, ${practice.address.suite}`,
      addressLocality: practice.address.locality,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: practice.geo.latitude,
      longitude: practice.geo.longitude,
    },
    hasMap: practice.googleMapsUrl,
    openingHoursSpecification: practice.hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_MAP[h.day],
        opens: h.opens,
        closes: h.closes,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.average,
      reviewCount: reviewSummary.total,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: practice.areasServed.map((a) => ({
      "@type": "City",
      name: a,
      "@id": `https://en.wikipedia.org/wiki/${a.replace(/ /g, "_")},_Texas`,
    })),
    availableLanguage: practice.languages,
    medicalSpecialty: "Dentistry",
    slogan: practice.tagline,
    // Entity/topical signals that help AI assistants understand exactly what this
    // practice does and recommend it for relevant queries.
    knowsAbout: [
      "Cosmetic Dentistry",
      "Family Dentistry",
      "Dental Implants",
      "Invisalign",
      "Porcelain Veneers",
      "Teeth Whitening",
      "Emergency Dentistry",
      "TMJ Treatment",
      "Sleep Apnea Oral Appliances",
      "Periodontal Care",
      "Pediatric Dentistry",
    ],
    founder: {
      "@type": "Physician",
      name: practice.team[0].name,
      honorificSuffix: practice.team[0].credentials,
      jobTitle: practice.team[0].role,
      medicalSpecialty: "Dentistry",
    },
    employee: practice.team.map((m) => ({
      "@type": "Physician",
      name: m.name,
      honorificSuffix: m.credentials,
      jobTitle: m.role,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: s.name,
          url: url(`/services/${s.slug}`),
        },
      })),
    },
    award: practice.awards.map((a) => `${a.name} (${a.year})`),
    memberOf: practice.affiliations.map((a) => ({
      "@type": "Organization",
      name: a.name,
      url: a.url,
    })),
    // Lets AI assistants + Google surface a direct "Book" action.
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book a dental appointment",
      target: {
        "@type": "EntryPoint",
        urlTemplate: url("/book"),
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Dental appointment" },
    },
    sameAs: [
      practice.social.facebook,
      practice.social.instagram,
      practice.social.yelp,
      practice.social.twitter,
      practice.ratings.google.url,
      ...practice.directories,
    ],
  };
}

/** Dr. Valter as a Physician/Person entity, used on the About page so AI and
 *  Google build a strong author/practitioner entity tied to the practice. */
export function dentistPersonSchema() {
  const doc = practice.team[0];
  return {
    "@context": "https://schema.org",
    "@type": ["Physician", "Person"],
    "@id": `${siteUrl}/about#dr-valter`,
    name: doc.name,
    honorificSuffix: doc.credentials,
    jobTitle: doc.role,
    description: doc.bio[0],
    image: url(doc.image),
    medicalSpecialty: "Dentistry",
    knowsLanguage: practice.languages,
    worksFor: { "@id": `${siteUrl}/#dentist` },
    knowsAbout: doc.specialties,
    memberOf: practice.affiliations.map((a) => ({
      "@type": "Organization",
      name: a.name,
      url: a.url,
    })),
    sameAs: [
      "https://www.healthgrades.com/physician/dr-regina-valter-y9ts25z",
      "https://connect.medicalnewstoday.com/provider/dr-regina-valter-1891134813",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: practice.name,
    publisher: { "@id": `${siteUrl}/#dentist` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: {
  name: string;
  slug: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.name,
    description: s.summary,
    url: url(`/services/${s.slug}`),
    provider: { "@id": `${siteUrl}/#dentist` },
    procedureType: "https://schema.org/NoninvasiveProcedure",
    areaServed: practice.areasServed.map((a) => ({ "@type": "City", name: a })),
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };
}

/** Per-neighborhood schema: the practice scoped to a served area, with the
 *  area as the primary `areaServed`. Reinforces "dentist in <area>" relevance. */
export function localAreaSchema(loc: {
  area: string;
  slug: string;
  intro: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/locations/${loc.slug}#dentist`,
    name: `${practice.name}, Dentist serving ${loc.area}`,
    description: loc.intro,
    url: url(`/locations/${loc.slug}`),
    parentOrganization: { "@id": `${siteUrl}/#dentist` },
    telephone: practice.phone.tel,
    image: url("/og.jpg"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${practice.address.street}, ${practice.address.suite}`,
      addressLocality: practice.address.locality,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: practice.geo.latitude,
      longitude: practice.geo.longitude,
    },
    areaServed: { "@type": "City", name: `${loc.area}, Texas` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.average,
      reviewCount: reviewSummary.total,
      bestRating: 5,
    },
    availableLanguage: practice.languages,
    medicalSpecialty: "Dentistry",
  };
}

/** Individual review schema (for the reviews page). Strengthens AEO. AI reads
 *  review *text* to match service queries, not just the star count. */
export function reviewsSchema(
  reviews: { author: string; rating: number; text: string; source: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#dentist`,
    name: practice.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.average,
      reviewCount: reviewSummary.total,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      publisher: { "@type": "Organization", name: r.source },
    })),
  };
}

export { fullAddress };
