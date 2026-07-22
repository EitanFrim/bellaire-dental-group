import type { Metadata } from "next";
import { Navigation, MessageSquare } from "@/components/ui/Icons";
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
            We&apos;d love to <span className="accent-italic">meet you</span>
          </>
        }
        intro="Book online, request a time below, or simply give us a call, whichever is easiest for you."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <div>
            <dl className="border-t border-line">
              <FactRow label="Address">
                <a
                  href={practice.directionsUrl}
                  className="transition-colors hover:text-bronze"
                >
                  {practice.address.street}, {practice.address.suite}
                  <br />
                  {practice.address.locality}, {practice.address.region}{" "}
                  {practice.address.postalCode}
                </a>
              </FactRow>
              <FactRow label="Call or text">
                <a
                  href={`tel:${practice.phone.tel}`}
                  className="tnum transition-colors hover:text-bronze"
                >
                  {practice.phone.display}
                </a>
              </FactRow>
              <FactRow label="Hours">
                <ul className="w-full max-w-xs space-y-1">
                  {groupedHours().map((g) => (
                    <li key={g.label} className="tnum flex justify-between gap-6">
                      <span className="text-ink">{g.label}</span>
                      <span className="text-ink-soft">{g.value}</span>
                    </li>
                  ))}
                </ul>
              </FactRow>
              <FactRow label="Languages">
                {practice.languages.join(" · ")}
              </FactRow>
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={practice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-[2px] border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                <Navigation size={15} /> Get directions
              </a>
              <a
                href={`sms:${practice.sms}`}
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-[2px] border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                <MessageSquare size={15} /> Text us
              </a>
            </div>

            <div className="mt-6 border border-line bg-paper p-2.5">
              <div className="h-72 overflow-hidden">
                <MapEmbed className="h-72" />
              </div>
            </div>
          </div>

          {/* Right: booking */}
          <div className="border border-line bg-paper p-7 sm:p-9">
            <h2 className="font-display text-2xl text-ink">
              {scheduler ? "Schedule online" : "Request an appointment"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
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

function FactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-6 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
      <dt className="label pt-0.5 text-ink-faint">{label}</dt>
      <dd className="text-sm leading-relaxed text-ink">{children}</dd>
    </div>
  );
}
