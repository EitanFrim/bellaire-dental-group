import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServingAreas } from "@/components/sections/ServingAreas";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getService, pageServices, getService as gs } from "@/lib/services";
import { practice } from "@/lib/practice";

export function generateStaticParams() {
  return pageServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const title = `${s.name} in Houston, TX`;
  const description = `${s.summary} Gentle ${s.category.toLowerCase()} from Dr. Regina Valter at Bellaire Dental Group. 4.9★ rated, most PPO insurance accepted, flexible financing. Book your consultation in Houston today.`;
  return {
    title,
    description,
    alternates: { canonical: `/services/${s.slug}` },
    keywords: s.keywords,
    openGraph: {
      type: "website",
      title: `${title} | ${practice.name}`,
      description,
      images: ["/og.jpg"],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !service.hasPage) notFound();

  const related = (service.related ?? [])
    .map((slug) => gs(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName ?? service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.heroHeadline ?? service.name}
        intro={service.summary}
        crumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton size="lg" variant="ink">
            Book a consultation <ArrowRight size={15} />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="tnum inline-flex h-[3.375rem] items-center justify-center gap-2.5 rounded-[2px] border border-line-strong px-7 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            <Phone size={14} /> {practice.phone.display}
          </a>
        </div>
      </PageHero>

      {service.image && (
        <Container className="pt-16 lg:pt-20">
          <Reveal>
            <div className="border border-line bg-paper p-2.5">
              <div className="relative aspect-[21/9] overflow-hidden">
                <Img
                  src={service.image}
                  alt={`${service.name} at ${practice.name} in Houston`}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      )}

      {/* Overview */}
      {service.overview && (
        <section className="py-20 lg:py-28">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label text-bronze">Overview</p>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                  {service.overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Benefits */}
            {service.benefits && (
              <aside className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <div className="border-t border-line-strong pt-6">
                    <h2 className="font-display text-xl text-ink">
                      Why patients choose this
                    </h2>
                    <ul className="mt-6">
                      {service.benefits.map((b) => (
                        <li
                          key={b.title}
                          className="border-t border-line py-4 first:border-t-0 first:pt-0"
                        >
                          <span className="flex items-baseline gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-px w-4 shrink-0 bg-bronze/60"
                            />
                            <span>
                              <span className="block font-medium text-ink">
                                {b.title}
                              </span>
                              <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                                {b.description}
                              </span>
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </aside>
            )}
          </Container>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="border-y border-line bg-linen/60 py-20 lg:py-28">
          <Container>
            <SectionHeading
              align="left"
              eyebrow="What to expect"
              title={
                <>
                  Simple, calm, <span className="accent-italic">step by step</span>
                </>
              }
            />
            <ol className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {service.process.map((step, i) => (
                <li key={step.title} className="bg-bone p-8">
                  <span className="font-display text-lg tnum text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && (
        <section className="py-20 lg:py-28">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                align="left"
                eyebrow="Questions"
                title="Good to know"
                className="lg:sticky lg:top-28"
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          </Container>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line py-16 lg:py-20">
          <Container>
            <p className="label text-bronze">Related services</p>
            <ol className="mt-6 border-t border-line">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:text-bronze"
                  >
                    <span className="font-display text-xl text-ink transition-colors group-hover:text-bronze">
                      {r.shortName ?? r.name}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-ink-soft transition-transform group-hover:translate-x-1.5 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <ServingAreas serviceName={service.shortName ?? service.name} />

      <FinalCTA />

      <JsonLd
        data={[
          serviceSchema({ name: service.name, slug: service.slug, summary: service.summary }),
          breadcrumbSchema(crumbs),
          ...(service.faqs ? [faqSchema(service.faqs)] : []),
        ]}
      />
    </>
  );
}
