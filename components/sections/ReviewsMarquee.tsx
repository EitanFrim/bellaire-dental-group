import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StarRating } from "@/components/ui/StarRating";
import { curatedReviews, type Review } from "@/lib/reviews";
import { practice } from "@/lib/practice";

/**
 * Editorial quotes: three reviews set in serif between hairlines. Replaces
 * the old auto-scrolling card marquee.
 */
export function ReviewsMarquee() {
  const featured = [...curatedReviews]
    .sort((a, b) => a.text.length - b.text.length)
    .slice(0, 3);

  return (
    <section className="border-t border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="left"
          numeral="05"
          eyebrow="Patient love"
          title={
            <>
              Houston&apos;s most{" "}
              <span className="accent-italic">reassuring</span> dental visit
            </>
          }
          intro={`Rated ${practice.ratings.google.value} stars across ${practice.ratings.google.count}+ Google reviews, by real neighbors, many for decades.`}
        />

        <Reveal className="mt-14">
          <div className="grid border-t border-line lg:grid-cols-3">
            {featured.map((r, i) => (
              <QuoteBlock key={i} review={r} />
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
          >
            Read all {practice.ratings.google.count}+ reviews{" "}
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function QuoteBlock({ review }: { review: Review }) {
  return (
    <figure className="flex flex-col gap-6 border-b border-line py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
      <StarRating value={review.rating} size={12} />
      <blockquote className="flex-1 font-display text-xl leading-[1.35] text-ink sm:text-[1.35rem]">
        <span className="line-clamp-[7]">{review.text}</span>
      </blockquote>
      <figcaption className="label text-ink-faint">
        {review.author} · {review.source}
      </figcaption>
    </figure>
  );
}
