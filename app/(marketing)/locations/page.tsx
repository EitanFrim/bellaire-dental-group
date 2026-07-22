import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { locations } from "@/lib/locations";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Areas We Serve | Dentist Near You in Houston",
  description:
    "Bellaire Dental Group serves Bellaire, West University Place, Upper Kirby, Meyerland, and greater Houston. Find gentle cosmetic, family & emergency dentistry near you.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we serve"
        title={
          <>
            A gentle dentist <span className="accent-italic">near you</span>
          </>
        }
        intro="From our home in Bellaire, we care for families across West University Place, Upper Kirby, Meyerland, and greater Houston, with free parking and easy, unhurried visits."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <ol className="border-t border-line">
              {locations.map((loc, i) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-line py-7 transition-colors hover:bg-paper sm:grid-cols-[3.5rem_minmax(0,16rem)_1fr_auto]"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-sm tnum text-bronze"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-bronze">
                      {loc.area}
                    </h2>
                    <p className="hidden max-w-md text-sm leading-relaxed text-ink-soft lg:block">
                      {loc.intro}
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

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-center">
              <p className="label text-bronze">One convenient location</p>
              <h2 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                In the heart of Bellaire
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {practice.address.street}, {practice.address.suite}
                <br />
                {practice.address.locality}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </p>
              <p className="mt-2 text-sm text-ink-faint">{practice.parking}</p>
              <a
                href={`tel:${practice.phone.tel}`}
                className="tnum mt-6 inline-flex items-center gap-2 font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
              >
                {practice.phone.display}
              </a>
            </div>
            <div className="border border-line bg-paper p-2.5">
              <div className="h-72 overflow-hidden lg:h-full">
                <MapEmbed className="h-72 lg:h-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
    </>
  );
}
