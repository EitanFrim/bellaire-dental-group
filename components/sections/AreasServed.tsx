import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

/** A quiet typographic strip naming the neighborhoods we serve. */
export function AreasServed() {
  return (
    <section className="border-y border-line bg-linen/60 py-16 lg:py-20">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="label text-bronze">Proudly local</p>
          <p className="max-w-3xl font-display text-2xl leading-[1.3] text-ink sm:text-[1.75rem]">
            {practice.areasServed.join("  ·  ")}
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
          >
            Find your neighborhood <ArrowRight size={15} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
