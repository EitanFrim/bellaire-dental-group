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
    // Entity/topical signals — help AI assistants understand exactly what this
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
    sameAs: [
      practice.social.facebook,
      practice.social.instagram,
      practice.social.yelp,
      practice.social.twitter,
      practice.ratings.google.url,
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
  };
}

export { fullAddress };
