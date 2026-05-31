import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getReviews } from "@/lib/google-reviews";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what Houston families say about Bellaire Dental Group — rated 4.9 stars across 352+ Google reviews. Gentle, caring dentistry from Dr. Regina Valter.",
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
            Loved by <span className="text-gradient">Houston</span> families
          </>
        }
        intro={`We're proud to be rated ${average} stars across ${total}+ Google reviews — by real neighbors, many of whom have trusted us for decades.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-5 py-3">
            <span className="font-display text-3xl text-navy-900">{average}</span>
            <span>
              <StarRating value={5} size={16} />
              <span className="block text-xs text-ink-soft">{total}+ Google reviews</span>
            </span>
          </div>
          <a
            href={practice.ratings.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 hover:text-cyan-600"
          >
            See all on Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container>
          <Stagger className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {reviews.map((r, i) => (
              <StaggerItem key={i} className="break-inside-avoid">
                <figure className="rounded-3xl border border-line bg-white/80 p-6 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)]">
                  <div className="flex items-center justify-between">
                    <StarRating value={r.rating} size={15} />
                    <span className="text-xs font-medium text-ink-soft">{r.source}</span>
                  </div>
                  <blockquote className="mt-3 text-pretty leading-relaxed text-navy-800">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-semibold text-navy-900">{r.author}</span>
                    {r.relativeTime && (
                      <span className="text-ink-soft">{r.relativeTime}</span>
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
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
    </>
  );
}
