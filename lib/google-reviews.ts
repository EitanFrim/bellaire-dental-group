/**
 * Live Google reviews via the Places API (New), with graceful fallback to the
 * curated real reviews. Server-only. Enable by setting GOOGLE_PLACES_API_KEY +
 * GOOGLE_PLACE_ID; otherwise the curated list is returned.
 */
import "server-only";
import { curatedReviews, reviewSummary, type Review } from "./reviews";

export type ReviewsPayload = {
  reviews: Review[];
  average: number;
  total: number;
  source: "google" | "curated";
};

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places/";

export async function getReviews(): Promise<ReviewsPayload> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return {
      reviews: curatedReviews,
      average: reviewSummary.average,
      total: reviewSummary.total,
      source: "curated",
    };
  }

  try {
    const res = await fetch(`${PLACES_ENDPOINT}${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        // FieldMask keeps the request on the cheapest SKU that includes reviews.
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      // Cache for 12h (ISR) — fresh enough, well within rate limits.
      next: { revalidate: 43200 },
    });

    if (!res.ok) throw new Error(`Places API ${res.status}`);
    const data = await res.json();

    const reviews: Review[] = (data.reviews ?? [])
      .map((r: {
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        authorAttribution?: { displayName?: string };
        relativePublishTimeDescription?: string;
      }) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription,
        source: "Google" as const,
      }))
      .filter((r: Review) => r.text.length > 0);

    if (reviews.length === 0) throw new Error("No reviews returned");

    return {
      reviews,
      average: data.rating ?? reviewSummary.average,
      total: data.userRatingCount ?? reviewSummary.total,
      source: "google",
    };
  } catch (err) {
    console.warn("[google-reviews] falling back to curated:", err);
    return {
      reviews: curatedReviews,
      average: reviewSummary.average,
      total: reviewSummary.total,
      source: "curated",
    };
  }
}
