import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { locations } from "@/lib/locations";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Areas We Serve — Dentist Near You in Houston",
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
            A gentle dentist <span className="text-gradient">near you</span>
          </>
        }
        intro="From our home in Bellaire, we care for families across West University Place, Upper Kirby, Meyerland, and greater Houston — with free parking and easy, unhurried visits."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {locations.map((loc) => (
              <StaggerItem key={loc.slug} className="h-full">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white/80 p-7 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_50px_-24px_rgba(10,31,64,0.4)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-navy-700 transition-colors group-hover:bg-cyan-400 group-hover:text-navy-950">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl text-navy-900">
                    Dentist in {loc.area}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {loc.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700">
                    {loc.area} dental care
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-line bg-white/70 p-7">
              <h2 className="font-display text-2xl text-navy-900">
                One convenient location
              </h2>
              <p className="mt-3 text-ink-soft">
                {practice.address.street}, {practice.address.suite}
                <br />
                {practice.address.locality}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{practice.parking}</p>
              <a
                href={`tel:${practice.phone.tel}`}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-600"
              >
                <Phone className="h-4 w-4" /> {practice.phone.display}
              </a>
            </div>
            <div className="h-72 overflow-hidden rounded-3xl border border-line shadow-lg">
              <MapEmbed />
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
