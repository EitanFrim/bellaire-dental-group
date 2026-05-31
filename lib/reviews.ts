/**
 * Patient reviews.
 *
 * `curatedReviews` are real reviews drawn from the practice's public profiles
 * (Google / site testimonials). They render immediately with no API key.
 *
 * When GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are configured, the
 * /api/google-reviews route serves live reviews and the UI uses those instead;
 * otherwise it falls back to this curated list. See lib/google-reviews.ts.
 */

export type Review = {
  author: string;
  rating: number; // 1–5
  text: string;
  /** Relative or absolute time label, e.g. "2 months ago". */
  relativeTime?: string;
  source: "Google" | "Yelp" | "Facebook";
};

export const curatedReviews: Review[] = [
  {
    author: "Jan J. Rayburn",
    rating: 5,
    source: "Google",
    text: "My parents have been patients of Bellaire Dental for 20+ years. I don't know what took me so long! Excellent, caring and knowledgeable staff. I cannot say enough about Dr. Valter — smart, informed and a true caregiver. I now look forward to going to the dentist!",
  },
  {
    author: "Brian Krauskopf",
    rating: 5,
    source: "Google",
    text: "Huge fear of dentists my entire life — but Dr. Valter and her staff were amazing. They were patient, gentle, and made me feel completely at ease. I can't recommend them enough.",
  },
  {
    author: "Charlotte Bowers",
    rating: 5,
    source: "Google",
    text: "I enjoyed being with Dr. Valter and her staff for a cleaning appointment. They are caring, cheerful, and very effective in maintaining healthy gums and teeth at my age of 83.",
  },
  {
    author: "Ginny Root",
    rating: 5,
    source: "Google",
    text: "Dr. Valter and her staff are excellent! She's a great dentist who really cares about her patients. Her office is super clean and the whole team is wonderful.",
  },
  {
    author: "Lex Silver",
    rating: 5,
    source: "Google",
    text: "Excellent dental practice! New equipment, friendly personnel and, most importantly, an amazing doctor. Strongly recommend it!",
  },
];

/** Average + count derived from the canonical Google rating (see practice.ts). */
export const reviewSummary = {
  average: 4.9,
  total: 352,
};
