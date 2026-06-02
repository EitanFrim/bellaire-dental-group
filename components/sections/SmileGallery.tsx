import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";

export function SmileGallery() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="A look inside"
          title={
            <>
              A calm space for <span className="text-gradient">real smiles</span>
            </>
          }
          intro="Warm, modern, and designed to feel nothing like the dental office of memory."
        />

        <Reveal>
          <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4">
            <GalleryTile
              src="/images/office/waiting.jpg"
              alt="Comfortable, spa-like waiting area"
              className="col-span-2 row-span-2"
            />
            <GalleryTile
              src="/images/lifestyle/smile-family.webp"
              alt="Happy patients with healthy, natural smiles"
              className="col-span-2"
            />
            <GalleryTile src="/images/office/lobby.jpg" alt="Modern reception area" />
            {/* Quote tile */}
            <figure className="flex flex-col justify-between rounded-2xl bg-navy-800 p-5 text-white">
              <Quote className="h-6 w-6 text-cyan-300" />
              <blockquote className="text-sm leading-snug">
                “Huge fear of dentists my entire life — but they made me feel
                completely at ease.”
              </blockquote>
              <figcaption className="text-xs text-navy-200">— Brian, Google</figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-ink-soft">
            <StarRating value={5} size={15} />
            <span>
              <strong className="text-navy-900">4.9</strong> from 352 happy patients
            </span>
          </div>
          <Link
            href="/smile-gallery"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            See the smile gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function GalleryTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className ?? ""}`}>
      <Img
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
