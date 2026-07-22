import type { Metadata } from "next";
import { ExternalLink } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, reviewsSchema } from "@/lib/schema";
import { getReviews } from "@/lib/google-reviews";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what Houston families say about Bellaire Dental Group, rated 4.9 stars across 352+ Google reviews. Gentle, caring dentistry from Dr. Regina Valter.",
  alternates: { canonical: "/reviews" },
};

// Reviews come from the Google Places API when configured (revalidated), else curated.
export const revalidate = 43200;

export default async function ReviewsPage() {
  const { reviews, average, total } = await getReviews();

  return (
    <>
      <PageHero
        eyebrow="Patient love"
        title={
          <>
            Loved by <span className="accent-italic">Houston</span> families
          </>
        }
        intro={`We're proud to be rated ${average} stars across ${total}+ Google reviews, by real neighbors, many of whom have trusted us for decades.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-8 border-t border-line pt-6">
          <div className="flex items-baseline gap-4">
            <span className="tnum font-display text-4xl text-ink">{average}</span>
            <span>
              <StarRating value={5} size={13} />
              <span className="label mt-1 block text-ink-faint">
                {total}+ Google reviews
              </span>
            </span>
          </div>
          <span className="flex flex-wrap items-center gap-6">
            <a
              href={practice.ratings.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
            >
              See all on Google <ExternalLink size={14} />
            </a>
            <a
              href={practice.ratings.google.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
            >
              Loved your visit? Leave a review <ExternalLink size={14} />
            </a>
          </span>
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Container>
          <Stagger className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {reviews.map((r, i) => (
              <StaggerItem key={i} className="break-inside-avoid">
                <figure className="border border-line bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <StarRating value={r.rating} size={12} />
                    <span className="label text-ink-faint">{r.source}</span>
                  </div>
                  <blockquote className="mt-4 text-pretty leading-relaxed text-ink">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-5 flex items-baseline justify-between border-t border-line pt-4 text-sm">
                    <span className="font-medium text-ink">{r.author}</span>
                    {r.relativeTime && (
                      <span className="text-ink-faint">{r.relativeTime}</span>
                    )}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={[
          reviewsSchema(reviews.slice(0, 12)),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ]),
        ]}
      />
    </>
  );
}
