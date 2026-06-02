import { NextResponse } from "next/server";
import { getReviews } from "@/lib/google-reviews";

// In static-export mode this is prerendered once at build time (the reviews
// page also reads getReviews() directly, so this route is just a convenience).
export const dynamic = "force-static";
export const revalidate = 43200;

export async function GET() {
  const payload = await getReviews();
  return NextResponse.json(payload);
}
