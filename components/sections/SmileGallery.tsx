import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StarRating } from "@/components/ui/StarRating";

/**
 * "The studio" editorial mosaic: real office photography anchored by
 * still-life mood details, with a patient quote set in serif.
 */
export function SmileGallery() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="left"
          numeral="04"
          eyebrow="The studio"
          title={
            <>
              A space that feels{" "}
              <span className="accent-italic">nothing like a dental office</span>
            </>
          }
          intro="Warm, modern, and designed around calm, from the waiting lounge to the smallest details."
        />

        <Reveal className="mt-14">
          <div className="grid grid-cols-12 gap-4 lg:gap-5">
            <GalleryTile
              src="/images/office/waiting.jpg"
              alt="The comfortable, spa-like waiting lounge"
              caption="The waiting lounge"
              ratio="aspect-[4/3]"
              className="col-span-12 sm:col-span-7"
            />
            <GalleryTile
              src="/images/studio/studio-olive.webp"
              alt="An olive branch in a ceramic vase against a warm plaster wall"
              caption="Details we sweat"
              ratio="aspect-[3/4]"
              className="col-span-6 sm:col-span-5"
            />
            <figure className="col-span-12 flex flex-col justify-between gap-8 border-y border-line py-8 sm:col-span-7 lg:py-10">
              <blockquote className="max-w-md font-display text-2xl leading-[1.25] text-ink sm:text-[1.7rem]">
                &ldquo;Huge fear of dentists my entire life, but they made me
                feel <span className="accent-italic">completely at ease</span>.&rdquo;
              </blockquote>
              <figcaption className="label flex items-center gap-3 text-ink-faint">
                <StarRating value={5} size={11} />
                Brian · Google review
              </figcaption>
            </figure>
            <GalleryTile
              src="/images/office/lobby.jpg"
              alt="The modern reception area"
              caption="Reception"
              ratio="aspect-square"
              className="col-span-6 sm:col-span-5"
            />
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-3 text-sm text-ink-soft">
            <StarRating value={5} size={13} />
            <span>
              <strong className="font-medium text-ink">4.9</strong> from 352 happy
              patients
            </span>
          </p>
          <Link
            href="/smile-gallery"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
          >
            See the smile gallery <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function GalleryTile({
  src,
  alt,
  caption,
  ratio,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  ratio: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`group relative overflow-hidden ${ratio}`}>
        <Img
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="label pt-3 text-ink-faint">{caption}</figcaption>
    </figure>
  );
}
