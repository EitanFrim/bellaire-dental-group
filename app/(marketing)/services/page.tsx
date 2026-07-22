import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { servicesByCategory, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Dental Services in Houston",
  description:
    "Cosmetic, family, restorative, and emergency dentistry in Houston: Invisalign, veneers, implants, whitening, TMJ & sleep apnea care, and more. Gentle, modern care from Dr. Regina Valter.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const groups = servicesByCategory();
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything your smile needs,{" "}
            <span className="accent-italic">in one place</span>
          </>
        }
        intro="From a child's first cleaning to a complete smile makeover, we provide comprehensive, gentle dental care for the whole family, all under one calm roof in Bellaire."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <div className="py-20 lg:py-28">
        <Container>
          {groups.map((group, gi) => (
            <section
              key={group.category}
              className={gi > 0 ? "mt-16 lg:mt-24" : ""}
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-line-strong pb-4">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm tnum text-bronze"
                  >
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    {group.category}
                  </h2>
                </div>
                <span className="label text-ink-faint">
                  {group.items.length} services
                </span>
              </div>

              <Reveal>
                <ol>
                  {group.items.map((s) => (
                    <ServiceRow key={s.slug} service={s} />
                  ))}
                </ol>
              </Reveal>
            </section>
          ))}
        </Container>
      </div>

      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}

function ServiceRow({ service }: { service: Service }) {
  const inner = (
    <>
      <h3 className="font-display text-xl leading-tight text-ink transition-colors duration-300 group-hover:text-bronze sm:text-2xl">
        {service.name}
      </h3>
      <p className="hidden max-w-md text-sm leading-relaxed text-ink-soft lg:block">
        {service.summary}
      </p>
      {service.hasPage ? (
        <ArrowRight
          size={18}
          className="justify-self-end text-ink-soft transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink"
        />
      ) : (
        <span className="label justify-self-end text-ink-faint">Included</span>
      )}
    </>
  );

  const cls =
    "group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-6 lg:grid-cols-[minmax(0,20rem)_1fr_auto] lg:py-7";

  return service.hasPage ? (
    <li>
      <Link href={`/services/${service.slug}`} className={cls}>
        {inner}
      </Link>
    </li>
  ) : (
    <li className={cls}>{inner}</li>
  );
}
