import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { StarRating } from "@/components/ui/StarRating";
import { buttonVariants } from "@/components/ui/Button";
import { curatedReviews, type Review } from "@/lib/reviews";
import { practice } from "@/lib/practice";

export function ReviewsMarquee() {
  const rowA = curatedReviews;
  const rowB = [...curatedReviews].reverse();

  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Patient love"
          title={
            <>
              Houston&apos;s most <span className="text-gradient">reassuring</span> dental
              visit
            </>
          }
          intro={`Rated ${practice.ratings.google.value} stars across ${practice.ratings.google.count}+ Google reviews, by real neighbors, many for decades.`}
        />
      </Container>

      <div className="mt-12 flex flex-col gap-4">
        <Marquee>
          {rowA.map((r, i) => (
            <ReviewCard key={`a-${i}`} review={r} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((r, i) => (
            <ReviewCard key={`b-${i}`} review={r} />
          ))}
        </Marquee>
      </div>

      <Container className="mt-12 flex justify-center">
        <Link href="/reviews" className={buttonVariants({ variant: "secondary", size: "lg" })}>
          Read more reviews <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-3xl border border-line bg-white/80 p-6 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)] sm:w-[22rem]">
      <StarRating value={review.rating} size={15} />
      <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-navy-800">
        <span className="line-clamp-6">“{review.text}”</span>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2 text-sm">
        <span className="font-semibold text-navy-900">{review.author}</span>
        <span className="text-ink-soft">· {review.source}</span>
      </figcaption>
    </figure>
  );
}
