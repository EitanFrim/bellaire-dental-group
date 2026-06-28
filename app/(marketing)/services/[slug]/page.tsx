import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
          <BookButton size="lg">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/70 px-7 font-medium text-navy-800 backdrop-blur transition-colors hover:bg-white"
          >
            <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
          </a>
        </div>
      </PageHero>

      {service.image && (
        <Container className="-mt-2">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_70px_-30px_rgba(10,31,64,0.5)]">
              <Img
                src={service.image}
                alt={`${service.name} at ${practice.name} in Houston`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
            </div>
          </Reveal>
        </Container>
      )}

      {/* Overview */}
      {service.overview && (
        <section className="py-16 lg:py-24">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="block h-1.5 w-14 rounded-full bg-cyan-400" />
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
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
                  <div className="rounded-3xl border border-line bg-white/70 p-7">
                    <h2 className="font-display text-xl text-navy-900">
                      Why patients choose this
                    </h2>
                    <ul className="mt-5 space-y-4">
                      {service.benefits.map((b) => (
                        <li key={b.title} className="flex gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-navy-950">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span>
                            <span className="block font-medium text-navy-900">
                              {b.title}
                            </span>
                            <span className="block text-sm text-ink-soft">
                              {b.description}
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
        <section className="bg-white/60 py-16 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow="What to expect"
              title={
                <>
                  Simple, calm, <span className="text-gradient">step by step</span>
                </>
              }
            />
            <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
              {service.process.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="relative h-full rounded-3xl border border-line bg-white p-7">
                    <span className="font-display text-4xl text-cyan-200">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && (
        <section className="py-16 lg:py-24">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Questions" title="Good to know" />
            <div className="mt-10">
              <Accordion items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          </Container>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white/60 py-16 lg:py-20">
          <Container>
            <h2 className="font-display text-2xl text-navy-900">Related services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-cyan-200"
                >
                  <span className="h-8 w-1 shrink-0 rounded-full bg-cyan-300 transition-colors group-hover:bg-cyan-400" />
                  <span className="font-medium text-navy-900">
                    {r.shortName ?? r.name}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-cyan-600 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

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
