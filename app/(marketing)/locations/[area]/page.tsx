import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowRight, Check, Star, Navigation } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
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
            Your gentle dentist in <span className="text-gradient">{loc.area}</span>
          </>
        }
        intro={loc.intro}
        crumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookButton size="lg">
            Book your visit <ArrowRight className="h-4 w-4" />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/70 px-7 font-medium text-navy-800 backdrop-blur transition-colors hover:bg-white"
          >
            <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-ink-soft">
            <StarRating value={5} size={14} /> {practice.ratings.google.value} ·{" "}
            {practice.ratings.google.count}+ reviews
          </span>
        </div>
      </PageHero>

      {/* Intro copy + highlights */}
      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
                {loc.blurb.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {loc.landmarks.map((l) => (
                  <span
                    key={l}
                    className="inline-flex items-center gap-1.5 rounded-full bg-aqua px-3 py-1 text-sm text-navy-700"
                  >
                    <MapPin className="h-3.5 w-3.5" /> {l}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {loc.highlights.map((h) => (
                  <div key={h.title} className="flex gap-3 rounded-2xl border border-line bg-white/70 p-5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-navy-950">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-medium text-navy-900">{h.title}</span>
                      <span className="block text-sm text-ink-soft">{h.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </aside>
        </Container>
      </section>

      {/* Services for this area */}
      <section className="bg-white/60 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Complete care"
            title={
              <>
                Dental services for <span className="text-gradient">{loc.area}</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200"
                >
                  <h3 className="font-display text-lg text-navy-900">{s.name}</h3>
                  <span className="mt-3 block h-1 w-10 rounded-full bg-cyan-300 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Directions */}
      <section className="py-16 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Easy to reach"
              title={
                <>
                  {loc.driveTime === "right in the neighborhood"
                    ? "Right in your neighborhood"
                    : `Just ${loc.driveTime} from ${loc.area}`}
                </>
              }
            />
            <p className="mt-4 text-ink-soft">
              {practice.address.street}, {practice.address.suite}
              <br />
              {practice.address.locality}, {practice.address.region}{" "}
              {practice.address.postalCode}
            </p>
            <p className="mt-2 text-sm text-ink-soft">{practice.parking}</p>
            <a
              href={practice.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-3 font-medium text-navy-800 transition-colors hover:border-cyan-300"
            >
              <Navigation className="h-4 w-4 text-cyan-600" /> Get directions from {loc.area}
            </a>
          </div>
          <div className="h-72 overflow-hidden rounded-3xl border border-line shadow-lg lg:h-80">
            <MapEmbed />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white/60 py-16 lg:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to know" title={`Dentist in ${loc.area}: FAQs`} />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-lg text-navy-900">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other areas */}
      <section className="py-12">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
            We also serve
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-cyan-300 hover:text-cyan-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-600" /> Dentist in {l.area}
                </Link>
              ))}
          </div>
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
