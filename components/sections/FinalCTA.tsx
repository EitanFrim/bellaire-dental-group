import { Img } from "@/components/ui/Img";
import { ArrowRight, Phone } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

/** Full-bleed golden still with a centered serif close. */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-night">
      <Img
        src="/images/hero/calm-lounge.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/55 to-night/35"
      />

      <Container className="relative py-28 lg:py-40">
        <Reveal className="flex flex-col items-center text-center">
          <p className="label text-bone/60">New patients welcome</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl leading-[1.06] text-bone sm:text-5xl lg:text-[3.5rem]">
            Your calmer dental visit{" "}
            <span className="accent-italic">starts here</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-bone/75 sm:text-lg">
            Book online in under a minute, or give us a call. We can&apos;t wait
            to meet you and your smile.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookButton size="lg" variant="light">
              Book your visit <ArrowRight size={15} />
            </BookButton>
            <a
              href={`tel:${practice.phone.tel}`}
              className="tnum inline-flex h-[3.375rem] items-center justify-center gap-2.5 rounded-[2px] border border-white/35 px-9 text-sm font-medium text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              <Phone size={14} /> {practice.phone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
