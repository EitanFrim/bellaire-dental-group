import type { Metadata } from "next";
import { Phone, MessageSquare, Clock, MapPin, Check } from "lucide-react";
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
            Your calmer visit is <span className="text-gradient">one step away</span>
          </>
        }
        intro="Request an appointment in under a minute. Prefer to talk? Call or text us anytime during office hours."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white/80 p-7 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)] sm:p-9">
              <h2 className="font-display text-2xl text-navy-900">
                {scheduler ? "Choose a time" : "Request an appointment"}
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                We&apos;ll confirm by text or phone. For emergencies, please call{" "}
                <a href={`tel:${practice.phone.tel}`} className="font-medium text-cyan-700">
                  {practice.phone.display}
                </a>
                .
              </p>
              <div className="mt-6">{scheduler ? <SchedulerEmbed /> : <BookingForm />}</div>
            </div>
          </div>

          {/* Aside */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-navy-900 p-7 text-white">
              <StarRating value={5} size={16} />
              <p className="mt-3 font-display text-xl">
                {practice.ratings.google.value}-star care, {practice.ratings.google.count}+
                reviews
              </p>
              <ul className="mt-5 space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm text-navy-100">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /> {r}
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-3 border-t border-navy-800 pt-6 text-sm">
                <a
                  href={`tel:${practice.phone.tel}`}
                  className="flex items-center gap-3 text-navy-100 hover:text-cyan-300"
                >
                  <Phone className="h-4 w-4 text-cyan-400" /> {practice.phone.display}
                </a>
                <a
                  href={`sms:${practice.sms}`}
                  className="flex items-center gap-3 text-navy-100 hover:text-cyan-300"
                >
                  <MessageSquare className="h-4 w-4 text-cyan-400" /> Text us
                </a>
                <p className="flex items-start gap-3 text-navy-200">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {fullAddress()}
                </p>
                <div className="flex items-start gap-3 text-navy-200">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <ul className="space-y-0.5">
                    {groupedHours().map((g) => (
                      <li key={g.label}>
                        <span className="text-navy-100">{g.label}</span> {g.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
