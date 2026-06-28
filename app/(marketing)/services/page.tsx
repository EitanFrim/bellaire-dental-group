import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/brand/ServiceIcon";
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
            Everything your smile needs, <span className="text-gradient">in one place</span>
          </>
        }
        intro="From a child's first cleaning to a complete smile makeover, we provide comprehensive, gentle dental care for the whole family, all under one calm roof in Bellaire."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <div className="py-16 lg:py-24">
        {groups.map((group, gi) => (
          <section key={group.category} className={gi % 2 === 1 ? "bg-white/60 py-14" : "py-14"}>
            <Container>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl text-navy-900 sm:text-3xl">
                  {group.category}
                </h2>
                <span className="text-sm text-ink-soft">{group.items.length} services</span>
              </div>
              <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((s) => (
                  <StaggerItem key={s.slug} className="h-full">
                    <ServiceCard service={s} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </section>
        ))}
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

function ServiceCard({ service }: { service: Service }) {
  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-aqua text-navy-700 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-navy-950">
        <ServiceIcon name={service.icon} className="h-[22px] w-[22px]" />
      </span>
      <h3 className="mt-4 font-display text-lg text-navy-900">{service.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
      {service.hasPage && (
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  const cls =
    "group relative flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[0_2px_20px_-14px_rgba(10,31,64,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_44px_-24px_rgba(10,31,64,0.4)]";

  return service.hasPage ? (
    <Link href={`/services/${service.slug}`} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
