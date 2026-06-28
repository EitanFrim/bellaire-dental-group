import { Img } from "@/components/ui/Img";
import { Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";
import { BookButton } from "@/components/booking/BookButton";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <AuroraBackground />

      <Container className="relative grid items-center gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-sm text-navy-700 shadow-sm backdrop-blur">
              <StarRating value={5} size={14} />
              <strong className="font-semibold text-navy-900">
                {practice.ratings.google.value}
              </strong>
              <span className="text-ink-soft">
                · {practice.ratings.google.count} Google reviews
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance font-display text-4xl leading-[1.04] text-navy-900 sm:text-5xl lg:text-6xl">
              Gentle, modern dentistry in the heart of{" "}
              <span className="text-gradient">Houston</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Cosmetic, family &amp; restorative care from Dr. Regina Valter:
              unhurried, judgment-free, and designed entirely around your comfort.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookButton size="lg" variant="primary">
                Book your visit <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a
                href={`tel:${practice.phone.tel}`}
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/70 px-7 text-base font-medium text-navy-800 backdrop-blur transition-colors hover:bg-white"
              >
                <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-600" /> Most PPO insurance
                welcome
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-400" /> Now welcoming new
                patients
              </span>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:mr-0 lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/70 shadow-[0_40px_80px_-30px_rgba(10,31,64,0.5)]">
        <Img
          src="/images/office/lobby.jpg"
          alt="The calm, modern reception area at Bellaire Dental Group"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 42vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
      </div>

      {/* Floating review */}
      <div className="absolute -left-3 bottom-12 w-56 animate-float rounded-2xl border border-line bg-white/90 p-4 shadow-xl backdrop-blur sm:-left-6">
        <StarRating value={5} size={14} />
        <p className="mt-2 text-sm leading-snug text-navy-800">
          “I now look forward to going to the dentist!”
        </p>
        <p className="mt-1 text-xs text-ink-soft">Jan, Google review</p>
      </div>

      {/* Floating stat */}
      <div className="absolute -right-3 top-10 animate-float rounded-2xl border border-line bg-white/90 px-4 py-3 text-center shadow-xl backdrop-blur [animation-delay:1.6s] sm:-right-5">
        <p className="font-display text-2xl text-navy-900">4.9★</p>
        <p className="text-xs text-ink-soft">352 reviews</p>
      </div>
    </div>
  );
}
