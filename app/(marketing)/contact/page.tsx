import type { Metadata } from "next";
import { MapPin, Phone, Clock, Globe, Navigation, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BookingForm } from "@/components/booking/BookingForm";
import { SchedulerEmbed } from "@/components/booking/SchedulerEmbed";
import { hasScheduler } from "@/lib/scheduler";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { practice, groupedHours } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Visit Bellaire Dental Group at 6699 Chimney Rock Rd., Suite 101, Houston, TX 77081. Call (713) 668-8383 to book. Free parking, serving Bellaire and greater Houston.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const scheduler = hasScheduler();
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            We&apos;d love to <span className="text-gradient">meet you</span>
          </>
        }
        intro="Book online, request a time below, or simply give us a call, whichever is easiest for you."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={MapPin} title="Address">
                <a href={practice.directionsUrl} className="hover:text-cyan-700">
                  {practice.address.street}, {practice.address.suite}
                  <br />
                  {practice.address.locality}, {practice.address.region}{" "}
                  {practice.address.postalCode}
                </a>
              </ContactCard>
              <ContactCard icon={Phone} title="Call or text">
                <a href={`tel:${practice.phone.tel}`} className="hover:text-cyan-700">
                  {practice.phone.display}
                </a>
              </ContactCard>
              <ContactCard icon={Clock} title="Hours">
                <ul className="space-y-0.5">
                  {groupedHours().map((g) => (
                    <li key={g.label} className="flex justify-between gap-3">
                      <span className="font-medium text-navy-800">{g.label}</span>
                      <span className="text-ink-soft">{g.value}</span>
                    </li>
                  ))}
                </ul>
              </ContactCard>
              <ContactCard icon={Globe} title="Languages">
                {practice.languages.join(" · ")}
              </ContactCard>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={practice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-navy-200 bg-white px-5 py-3 font-medium text-navy-800 transition-colors hover:border-cyan-300"
              >
                <Navigation className="h-4 w-4 text-cyan-600" /> Get directions
              </a>
              <a
                href={`sms:${practice.sms}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-navy-200 bg-white px-5 py-3 font-medium text-navy-800 transition-colors hover:border-cyan-300"
              >
                <MessageSquare className="h-4 w-4 text-cyan-600" /> Text us
              </a>
            </div>

            <div className="mt-6 h-72 overflow-hidden rounded-3xl border border-line shadow-lg">
              <MapEmbed />
            </div>
          </div>

          {/* Right: booking */}
          <div className="rounded-3xl border border-line bg-white/80 p-7 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)] sm:p-9">
            <h2 className="font-display text-2xl text-navy-900">
              {scheduler ? "Schedule online" : "Request an appointment"}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              {scheduler
                ? "Pick a time that works for you and we'll confirm by text or call."
                : "Tell us a little about your visit and we'll reach out to confirm a time."}
            </p>
            <div className="mt-6">{scheduler ? <SchedulerEmbed /> : <BookingForm />}</div>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-line bg-white/70 p-5">
      <div className="flex items-center gap-2 text-cyan-700">
        <Icon className="h-4 w-4" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
          {title}
        </h2>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-navy-800">{children}</div>
    </div>
  );
}
