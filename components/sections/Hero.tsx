import { ArrowRight, Phone } from "@/components/ui/Icons";
import { HeroMedia } from "./HeroMedia";
import { BookButton } from "@/components/booking/BookButton";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

/**
 * Full-bleed cinematic hero: a slow ambient film of a golden-hour treatment
 * lounge under quiet night scrims, serif display type anchored bottom-left,
 * and a hairline trust bar along the base. The Header renders inverted
 * (light) over this section until the page is scrolled.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night">
      <HeroMedia
        poster="/images/hero/calm-lounge.webp"
        posterPortrait="/images/hero/calm-lounge-portrait.webp"
        posterAlt="Warm golden light falling across a calm, spa-like treatment lounge with a soft ivory chair and an olive tree"
        videoDesktop="/videos/hero-loop.mp4"
        videoMobile="/videos/hero-loop-portrait.mp4"
      />

      {/* Scrims: keep the imagery luminous on the right, legible on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-night/80 via-night/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-3/5 bg-gradient-to-t from-night/90 via-night/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-night/60 to-transparent"
      />

      <Container className="relative z-[2] flex min-h-[100svh] flex-col">
        {/* The flex spacer bottom-anchors the copy without overflowing
            short viewports; pt only clears the fixed header */}
        <div className="flex-1" />

        <div className="max-w-3xl pb-10 pt-24 sm:pb-14">
          <Reveal>
            <p className="flex items-center gap-3">
              <StarRating value={5} size={11} className="text-bronze-soft" />
              <span className="label text-bone/75">
                {practice.ratings.google.value} · {practice.ratings.google.count}{" "}
                Google reviews
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 text-balance font-display text-[2.6rem] leading-[1.06] text-bone sm:text-6xl sm:leading-[1.03] lg:text-7xl">
              Gentle, modern dentistry in the heart of{" "}
              <span className="accent-italic">Houston</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/80">
              Cosmetic, family &amp; restorative care from Dr. Regina Valter:
              unhurried, judgment-free, and designed entirely around your comfort.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </div>

        {/* Trust bar along the base of the frame */}
        <Reveal delay={0.24} y={12} viewportMargin="0px">
          <div className="flex items-center justify-between gap-6 border-t border-line-light py-4 sm:py-5">
            <div className="label flex flex-wrap items-center gap-x-8 gap-y-2 text-bone/60">
              <span>Most PPO insurance</span>
              <span className="hidden sm:inline">Same-day emergencies</span>
              <span>New patients welcome</span>
            </div>

            <div
              className="hidden shrink-0 items-center gap-3 md:flex"
              aria-hidden="true"
            >
              <span className="label text-bone/45">Scroll</span>
              <span className="relative h-9 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 h-3 animate-scroll-cue bg-bone/80" />
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
