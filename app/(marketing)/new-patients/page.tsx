import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  CreditCard,
  ShieldCheck,
  FileText,
  ArrowRight,
  Phone,
  BadgePercent,
  Gift,
  Download,
  LogIn,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
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
    icon: Phone,
    title: "Before you arrive",
    body: "Book online or call us. We'll confirm your visit and let you know anything to bring, like your insurance card and a list of any medications.",
  },
  {
    icon: FileText,
    title: "A warm welcome",
    body: "Arrive a few minutes early for a quick check-in. Grab a coffee or water and settle into our calm, comfortable lounge.",
  },
  {
    icon: ShieldCheck,
    title: "Your comprehensive exam",
    body: "Dr. Valter reviews your history, takes gentle low-radiation imaging, checks your teeth and gums, and screens for oral cancer.",
  },
  {
    icon: Check,
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
            Welcome. We&apos;re so glad <span className="text-gradient">you&apos;re here</span>
          </>
        }
        intro="Whether it's been six months or six years since your last visit, you'll be met with warmth and zero judgment. Here's exactly what to expect."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "New Patients", path: "/new-patients" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton size="lg">
            Book your first visit <ArrowRight className="h-4 w-4" />
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/70 px-7 font-medium text-navy-800 backdrop-blur transition-colors hover:bg-white"
          >
            <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
          </a>
        </div>
      </PageHero>

      {/* First visit steps */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Your first visit"
            title={
              <>
                Calm and predictable, <span className="text-gradient">start to finish</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {firstVisit.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-3xl border border-line bg-white/70 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-navy-700">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl text-cyan-200">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Insurance & financing */}
      <section className="bg-white/60 py-16 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-navy-700">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-navy-900">Insurance</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                We&apos;re in-network with most major PPO dental plans and will file your
                claims for you. Not sure if we take your plan? Call{" "}
                <a href={`tel:${practice.phone.tel}`} className="font-medium text-cyan-700">
                  {practice.phone.display}
                </a>{" "}
                and we&apos;ll verify your benefits before you come in, with no surprises.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-navy-800">
                {["Most PPO plans accepted", "We file claims for you", "Clear estimates before treatment"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-cyan-500" /> {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                <CreditCard className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-navy-900">
                Financing &amp; payment
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Quality care should fit your budget. We offer flexible monthly payment
                plans so you can move forward comfortably.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {practice.financing.map((f) => (
                  <a
                    key={f.name}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-line bg-cream p-4 transition-colors hover:border-cyan-300"
                  >
                    <span className="flex items-center justify-between font-semibold text-navy-900">
                      {f.name}
                      <ArrowRight className="h-4 w-4 text-cyan-600 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                      {f.description}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-soft">
                We also accept cash, check, and all major credit cards.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* No insurance? Savings plan + specials */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Affordable care"
            title={
              <>
                No insurance? <span className="text-gradient">No problem.</span>
              </>
            }
            intro={practice.membershipPlan.summary}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-navy-700">
                  <BadgePercent className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl text-navy-900">
                  {practice.membershipPlan.name}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-navy-800">
                  {practice.membershipPlan.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" /> {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-ink-soft">
                  Ask us for this year&apos;s membership details and we&apos;ll walk you
                  through exactly what&apos;s included.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-line bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <Gift className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl text-navy-900">
                  Current specials
                </h2>
                <ul className="mt-5 space-y-4">
                  {practice.specials.map((s) => (
                    <li key={s.title}>
                      <span className="block font-medium text-navy-900">{s.title}</span>
                      <span className="block text-sm leading-relaxed text-ink-soft">
                        {s.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-ink-soft">
                  Call{" "}
                  <a href={`tel:${practice.phone.tel}`} className="font-medium text-cyan-700">
                    {practice.phone.display}
                  </a>{" "}
                  to ask about our latest offers.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Save time before your visit: forms & portal (shown when configured) */}
          {(practice.patientFormsUrl || practice.patientPortalUrl) && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {practice.patientFormsUrl && (
                <a
                  href={practice.patientFormsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-cyan-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-navy-700">
                    <Download className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">
                      New-patient forms
                    </span>
                    <span className="block text-sm text-ink-soft">
                      Fill out your paperwork online before you arrive and save time at
                      check-in.
                    </span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-cyan-600 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              {practice.patientPortalUrl && (
                <a
                  href={practice.patientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-cyan-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aqua text-navy-700">
                    <LogIn className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">
                      Existing patient portal
                    </span>
                    <span className="block text-sm text-ink-soft">
                      Already a patient? Sign in to manage your account and appointments.
                    </span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-cyan-600 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="New patient questions"
            intro="A few things people often ask before their first visit."
          />
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
          <p className="mt-8 text-center text-ink-soft">
            Have another question?{" "}
            <Link href="/contact" className="font-medium text-cyan-700 hover:text-cyan-600">
              Get in touch
            </Link>{" "}
            and we&apos;re happy to help.
          </p>
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
