import { NextResponse } from "next/server";
import { getReviews } from "@/lib/google-reviews";

// Revalidate at most twice a day; getReviews() also sets fetch-level caching.
export const revalidate = 43200;

export async function GET() {
  const payload = await getReviews();
  return NextResponse.json(payload);
}
