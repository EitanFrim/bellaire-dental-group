import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, Navigation } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StarRating } from "@/components/ui/StarRating";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, localAreaSchema, faqSchema } from "@/lib/schema";
import { getLocation, locations } from "@/lib/locations";
import { featuredServices } from "@/lib/services";
import { practice } from "@/lib/practice";

export function generateStaticParams() {
  return locations.map((l) => ({ area: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const loc = getLocation(area);
  if (!loc) return {};
  const title = `Dentist in ${loc.area}, TX`;
  const description = `${loc.intro} 4.9★ rated, most PPO insurance accepted. Call ${practice.phone.display} or book online.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${loc.slug}` },
    keywords: loc.keywords,
    openGraph: { type: "website", title: `${title} | ${practice.name}`, description, images: ["/og.jpg"] },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const loc = getLocation(area);
  if (!loc) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: loc.area, path: `/locations/${loc.slug}` },
  ];

  const faqs = [
    {
      q: `Do you serve patients in ${loc.area}?`,
      a: `Yes. ${practice.name} proudly serves ${loc.area} (${loc.zips.join(", ")}) and the surrounding Houston area. We're ${loc.driveTime} away at ${practice.address.street}, ${practice.address.suite}, with free on-site parking.`,
    },
    {
      q: `Are you accepting new patients from ${loc.area}?`,
      a: `Absolutely. We welcome new patients of every age from ${loc.area}, children from age two through grandparents. You can book online in under a minute or call ${practice.phone.display}.`,
    },
    {
      q: `What dental services are available for ${loc.area} families?`,
      a: `Everything under one roof: cleanings and family dentistry, cosmetic care (veneers, whitening, Invisalign), dental implants, emergency dentistry, and TMJ & sleep apnea treatment. Most PPO insurance is accepted, with financing via Cherry and CareCredit.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${loc.area}, Houston`}
        title={
          <>
            Your gentle dentist in{" "}
            <span className="accent-italic">{loc.area}</span>
          </>
        }
        intro={loc.intro}
        crumbs={crumbs}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookButton size="lg" variant="ink">
            Book your visit <ArrowRight size={15} />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="tnum inline-flex h-[3.375rem] items-center justify-center gap-2.5 rounded-[2px] border border-line-strong px-7 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            <Phone size={14} /> {practice.phone.display}
          </a>
          <span className="label inline-flex items-center gap-2.5 text-ink-faint">
            <StarRating value={5} size={12} /> {practice.ratings.google.value} ·{" "}
            {practice.ratings.google.count}+ reviews
          </span>
        </div>
      </PageHero>

      {/* Intro copy + highlights */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                {loc.blurb.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="label mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-faint">
                <span className="text-bronze">Nearby</span>
                {loc.landmarks.map((l, i) => (
                  <span key={l} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-ink-faint/50">
                        /
                      </span>
                    )}
                    {l}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <ul className="border-t border-line-strong">
                {loc.highlights.map((h) => (
                  <li key={h.title} className="border-b border-line py-5">
                    <span className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-4 shrink-0 bg-bronze/60"
                      />
                      <span>
                        <span className="block font-medium text-ink">
                          {h.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                          {h.body}
                        </span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </Container>
      </section>

      {/* Services for this area */}
      <section className="border-y border-line bg-linen/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Complete care"
            title={
              <>
                Dental services for{" "}
                <span className="accent-italic">{loc.area}</span>
              </>
            }
          />
          <Reveal>
            <ol className="mt-12 border-t border-line">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-6 lg:grid-cols-[minmax(0,20rem)_1fr_auto]"
                  >
                    <h3 className="font-display text-xl text-ink transition-colors group-hover:text-bronze sm:text-2xl">
                      {s.name}
                    </h3>
                    <p className="hidden max-w-md text-sm leading-relaxed text-ink-soft lg:block">
                      {s.summary}
                    </p>
                    <ArrowRight
                      size={18}
                      className="justify-self-end text-ink-soft transition-transform group-hover:translate-x-1.5 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Directions */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow="Easy to reach"
              title={
                loc.driveTime === "right in the neighborhood"
                  ? "Right in your neighborhood"
                  : `Just ${loc.driveTime} from ${loc.area}`
              }
            />
            <p className="mt-6 leading-relaxed text-ink-soft">
              {practice.address.street}, {practice.address.suite}
              <br />
              {practice.address.locality}, {practice.address.region}{" "}
              {practice.address.postalCode}
            </p>
            <p className="mt-2 text-sm text-ink-faint">{practice.parking}</p>
            <a
              href={practice.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-12 w-fit items-center gap-2.5 rounded-[2px] border border-line-strong px-6 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              <Navigation size={15} /> Get directions from {loc.area}
            </a>
          </div>
          <div className="border border-line bg-paper p-2.5">
            <div className="h-72 overflow-hidden lg:h-full lg:min-h-[22rem]">
              <MapEmbed className="h-72 lg:h-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              eyebrow="Good to know"
              title={`Dentist in ${loc.area}: FAQs`}
              className="lg:sticky lg:top-28"
            />
          </div>
          <div className="lg:col-span-8">
            <dl className="border-t border-line">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-line py-6">
                  <dt className="font-display text-lg text-ink sm:text-xl">
                    {f.q}
                  </dt>
                  <dd className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Other areas */}
      <section className="border-t border-line py-12">
        <Container>
          <p className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-faint">
            <span className="text-bronze">We also serve</span>
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  {l.area}
                </Link>
              ))}
          </p>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={[
          localAreaSchema({ area: loc.area, slug: loc.slug, intro: loc.intro }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
