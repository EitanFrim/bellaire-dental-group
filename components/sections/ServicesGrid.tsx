import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { featuredServices, type Service } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Comprehensive care, <span className="text-gradient">gently delivered</span>
            </>
          }
          intro="From routine cleanings to complete smile makeovers, everything your family needs, under one calm roof."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-3xl border border-line bg-white/80 p-6 shadow-[0_2px_20px_-12px_rgba(10,31,64,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_50px_-24px_rgba(10,31,64,0.4)]"
    >
      <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-cyan-700">
        {service.category}
      </span>
      <h3 className="mt-3 font-display text-xl text-navy-900">{service.name}</h3>
      <span className="mt-3 block h-1 w-10 rounded-full bg-cyan-300 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
