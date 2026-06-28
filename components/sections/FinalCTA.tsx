import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

export function FinalCTA() {
  return (
    <section className="px-4 pb-16 lg:pb-24">
      <Container className="px-0">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl text-white sm:text-4xl lg:text-5xl">
              Your calmer dental visit starts here
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-navy-200 sm:text-lg">
              Book online in under a minute, or give us a call. We can&apos;t wait to
              meet you and your smile.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookButton size="lg" variant="primary">
                Book your visit <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a
                href={`tel:${practice.phone.tel}`}
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-cyan-300" /> {practice.phone.display}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
