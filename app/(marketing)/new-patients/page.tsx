import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { BookButton } from "@/components/booking/BookButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "New Patients: What to Expect",
  description:
    "New to Bellaire Dental Group? Here's what your first visit looks like, plus insurance, financing (Cherry & CareCredit), our no-insurance savings plan, and easy ways to book. We can't wait to meet you.",
  alternates: { canonical: "/new-patients" },
};

const firstVisit = [
  {
    title: "Before you arrive",
    body: "Book online or call us. We'll confirm your visit and let you know anything to bring, like your insurance card and a list of any medications.",
  },
  {
    title: "A warm welcome",
    body: "Arrive a few minutes early for a quick check-in. Grab a coffee or water and settle into our calm, comfortable lounge.",
  },
  {
    title: "Your comprehensive exam",
    body: "Dr. Valter reviews your history, takes gentle low-radiation imaging, checks your teeth and gums, and screens for oral cancer.",
  },
  {
    title: "Your personalized plan",
    body: "We talk through what we found in plain language (no pressure, no jargon) and build a plan prioritized around what matters to you.",
  },
];

const faqs = [
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring a photo ID, your dental insurance card (if you have one), and a list of any medications you take. If you have recent dental records or X-rays, those are helpful too.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept most major PPO dental insurance plans. Because coverage varies plan to plan, the easiest thing is to call us at (713) 668-8383. We'll happily verify your specific benefits before your visit.",
  },
  {
    q: "What if I don't have insurance?",
    a: "No problem at all. We offer an in-office dental savings plan that covers your routine preventive care and discounts other treatment, with no insurance, deductibles, or waiting periods. We also offer flexible financing through Cherry and CareCredit, and we'll always discuss fees openly before any treatment.",
  },
  {
    q: "How early should I arrive?",
    a: "Arriving about 10 minutes early gives you time to check in comfortably. New-patient paperwork can usually be completed quickly at the office.",
  },
  {
    q: "I'm anxious about dental visits. Can you accommodate me?",
    a: "Absolutely. It's what we're known for. Let us know you're nervous and we'll go at your pace, explain each step, and offer comfort options including nitrous (laughing gas) sedation.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            Welcome. We&apos;re so glad{" "}
            <span className="accent-italic">you&apos;re here</span>
          </>
        }
        intro="Whether it's been six months or six years since your last visit, you'll be met with warmth and zero judgment. Here's exactly what to expect."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "New Patients", path: "/new-patients" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton size="lg" variant="ink">
            Book your first visit <ArrowRight size={15} />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="tnum inline-flex h-[3.375rem] items-center justify-center gap-2.5 rounded-[2px] border border-line-strong px-7 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            <Phone size={14} /> {practice.phone.display}
          </a>
        </div>
      </PageHero>

      {/* First visit steps */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="left"
            numeral="01"
            eyebrow="Your first visit"
            title={
              <>
                Calm and predictable,{" "}
                <span className="accent-italic">start to finish</span>
              </>
            }
          />
          <Reveal>
            <ol className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {firstVisit.map((s, i) => (
                <li key={s.title} className="bg-bone p-7">
                  <span className="font-display text-lg tnum text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Insurance & financing */}
      <section className="border-y border-line bg-linen/60 py-20 lg:py-28">
        <Container className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
          <div className="bg-bone p-8 lg:p-10">
            <p className="label text-bronze">Insurance</p>
            <h2 className="mt-4 font-display text-2xl text-ink">
              Most PPO plans, filed for you
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We&apos;re in-network with most major PPO dental plans and will
              file your claims for you. Not sure if we take your plan? Call{" "}
              <a
                href={`tel:${practice.phone.tel}`}
                className="tnum font-medium text-ink underline decoration-line underline-offset-4"
              >
                {practice.phone.display}
              </a>{" "}
              and we&apos;ll verify your benefits before you come in, with no
              surprises.
            </p>
            <ul className="mt-6 border-t border-line">
              {[
                "Most PPO plans accepted",
                "We file claims for you",
                "Clear estimates before treatment",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-baseline gap-4 border-b border-line py-2.5 text-sm text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-4 shrink-0 bg-bronze/60"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bone p-8 lg:p-10">
            <p className="label text-bronze">Financing &amp; payment</p>
            <h2 className="mt-4 font-display text-2xl text-ink">
              Care that fits your budget
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Quality care should fit your budget. We offer flexible monthly
              payment plans so you can move forward comfortably.
            </p>
            <div className="mt-6 border-t border-line">
              {practice.financing.map((f) => (
                <a
                  key={f.name}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <span>
                    <span className="block font-medium text-ink transition-colors group-hover:text-bronze">
                      {f.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">
                      {f.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-faint">
              We also accept cash, check, and all major credit cards.
            </p>
          </div>
        </Container>
      </section>

      {/* No insurance? Savings plan + specials */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="left"
            numeral="02"
            eyebrow="Affordable care"
            title={
              <>
                No insurance? <span className="accent-italic">No problem.</span>
              </>
            }
            intro={practice.membershipPlan.summary}
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            <div className="bg-bone p-8 lg:p-10">
              <p className="label text-bronze">In-office plan</p>
              <h2 className="mt-4 font-display text-2xl text-ink">
                {practice.membershipPlan.name}
              </h2>
              <ul className="mt-6 border-t border-line">
                {practice.membershipPlan.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-baseline gap-4 border-b border-line py-3 text-sm text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-4 shrink-0 bg-bronze/60"
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink-faint">
                Ask us for this year&apos;s membership details and we&apos;ll walk
                you through exactly what&apos;s included.
              </p>
            </div>

            <div className="bg-bone p-8 lg:p-10">
              <p className="label text-bronze">Current specials</p>
              <h2 className="mt-4 font-display text-2xl text-ink">
                A little something to start
              </h2>
              <ul className="mt-6 border-t border-line">
                {practice.specials.map((s) => (
                  <li key={s.title} className="border-b border-line py-4">
                    <span className="block font-medium text-ink">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                      {s.description}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink-faint">
                Call{" "}
                <a
                  href={`tel:${practice.phone.tel}`}
                  className="tnum font-medium text-ink underline decoration-line underline-offset-4"
                >
                  {practice.phone.display}
                </a>{" "}
                to ask about our latest offers.
              </p>
            </div>
          </div>

          {/* Save time before your visit: forms & portal (shown when configured) */}
          {(practice.patientFormsUrl || practice.patientPortalUrl) && (
            <ol className="mt-8 border-t border-line">
              {practice.patientFormsUrl && (
                <li>
                  <a
                    href={practice.patientFormsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-5"
                  >
                    <span>
                      <span className="block font-display text-lg text-ink transition-colors group-hover:text-bronze">
                        New-patient forms
                      </span>
                      <span className="mt-1 block text-sm text-ink-soft">
                        Fill out your paperwork online before you arrive and save
                        time at check-in.
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              )}
              {practice.patientPortalUrl && (
                <li>
                  <a
                    href={practice.patientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-5"
                  >
                    <span>
                      <span className="block font-display text-lg text-ink transition-colors group-hover:text-bronze">
                        Existing patient portal
                      </span>
                      <span className="mt-1 block text-sm text-ink-soft">
                        Already a patient? Sign in to manage your account and
                        appointments.
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              )}
            </ol>
          )}
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              eyebrow="Good to know"
              title="New patient questions"
              intro="A few things people often ask before their first visit."
              className="lg:sticky lg:top-28"
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
            <p className="mt-8 text-ink-soft">
              Have another question?{" "}
              <Link
                href="/contact"
                className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-bronze"
              >
                Get in touch
              </Link>{" "}
              and we&apos;re happy to help.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "New Patients", path: "/new-patients" },
          ]),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
