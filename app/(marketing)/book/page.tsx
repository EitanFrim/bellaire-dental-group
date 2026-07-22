import type { Metadata } from "next";
import { Phone, MessageSquare } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { BookingForm } from "@/components/booking/BookingForm";
import { SchedulerEmbed } from "@/components/booking/SchedulerEmbed";
import { hasScheduler } from "@/lib/scheduler";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { practice, groupedHours, fullAddress } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your visit with Bellaire Dental Group in Houston. Request a time online or call (713) 668-8383. New patients welcome; most PPO insurance accepted.",
  alternates: { canonical: "/book" },
};

const reasons = [
  "New patients of every age are welcome",
  "Most PPO insurance accepted",
  "Flexible financing via Cherry & CareCredit",
  "Same-day emergency appointments",
];

export default function BookPage() {
  const scheduler = hasScheduler();
  return (
    <>
      <PageHero
        eyebrow="Book your visit"
        title={
          <>
            Your calmer visit is{" "}
            <span className="accent-italic">one step away</span>
          </>
        }
        intro="Request an appointment in under a minute. Prefer to talk? Call or text us anytime during office hours."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="border border-line bg-paper p-7 sm:p-9">
              <h2 className="font-display text-2xl text-ink">
                {scheduler ? "Choose a time" : "Request an appointment"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We&apos;ll confirm by text or phone. For emergencies, please call{" "}
                <a
                  href={`tel:${practice.phone.tel}`}
                  className="tnum font-medium text-ink underline decoration-line underline-offset-4"
                >
                  {practice.phone.display}
                </a>
                .
              </p>
              <div className="mt-6">{scheduler ? <SchedulerEmbed /> : <BookingForm />}</div>
            </div>
          </div>

          {/* Aside */}
          <aside className="lg:col-span-5">
            <div className="bg-night p-8 text-bone lg:p-10">
              <StarRating value={5} size={13} className="text-bronze-soft" />
              <p className="tnum mt-4 font-display text-2xl text-bone">
                {practice.ratings.google.value}-star care,{" "}
                {practice.ratings.google.count}+ reviews
              </p>
              <ul className="mt-7 border-t border-line-light">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="flex items-baseline gap-4 border-b border-line-light py-3 text-sm text-bone/70"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-4 shrink-0 bg-bronze-soft/70"
                    />
                    {r}
                  </li>
                ))}
              </ul>

              <dl className="mt-8 space-y-4 border-t border-line-light pt-6 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="label text-bone/45">Call</dt>
                  <dd>
                    <a
                      href={`tel:${practice.phone.tel}`}
                      className="tnum text-bone transition-colors hover:text-bronze-soft"
                    >
                      {practice.phone.display}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="label text-bone/45">Text</dt>
                  <dd>
                    <a
                      href={`sms:${practice.sms}`}
                      className="inline-flex items-center gap-2 text-bone transition-colors hover:text-bronze-soft"
                    >
                      <MessageSquare size={13} /> Text us
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="label shrink-0 text-bone/45">Find us</dt>
                  <dd className="text-right leading-relaxed text-bone/70">
                    {fullAddress()}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="label shrink-0 text-bone/45">Hours</dt>
                  <dd className="text-right">
                    <ul className="tnum space-y-0.5 text-bone/70">
                      {groupedHours().map((g) => (
                        <li key={g.label}>
                          <span className="text-bone">{g.label}</span> {g.value}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ])}
      />
    </>
  );
}
