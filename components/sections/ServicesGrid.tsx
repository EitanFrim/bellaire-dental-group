import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { featuredServices, type Service } from "@/lib/services";

/**
 * The services index: full-width numbered rows between hairlines, in place
 * of the old three-card grid. On large screens, hovering a row reveals a
 * small still of that treatment.
 */
export function ServicesGrid() {
  return (
    <section id="services" className="border-t border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="left"
          numeral="02"
          eyebrow="What we do"
          title={
            <>
              Comprehensive care,{" "}
              <span className="accent-italic">gently delivered</span>
            </>
          }
          intro="From routine cleanings to complete smile makeovers, everything your family needs, under one calm roof."
        />

        <Reveal className="mt-14">
          <ol className="border-t border-line">
            {featuredServices.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </ol>
        </Reveal>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
          >
            Explore all services <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <li className="relative">
      <Link
        href={`/services/${service.slug}`}
        className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-line py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[3.5rem_1fr_auto] lg:grid-cols-[3.5rem_minmax(0,26rem)_1fr_auto] lg:py-7"
      >
        <span aria-hidden="true" className="font-display text-sm tnum text-bronze">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-bronze sm:text-[1.7rem]">
          {service.name}
        </h3>
        <p className="hidden max-w-md text-sm leading-relaxed text-ink-soft lg:block">
          {service.summary}
        </p>
        <ArrowRight
          size={18}
          className="relative top-0.5 justify-self-end text-ink-soft transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink"
        />

        {/* Hover still (desktop) */}
        {service.image && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-1/2 z-10 hidden h-28 w-44 -translate-y-1/2 overflow-hidden border border-line bg-paper opacity-0 shadow-[0_20px_50px_-24px_rgba(15,21,34,0.4)] transition-all duration-500 group-hover:opacity-100 xl:block"
          >
            <Img
              src={service.image}
              alt=""
              fill
              sizes="176px"
              className="object-cover"
            />
          </span>
        )}
      </Link>
    </li>
  );
}
