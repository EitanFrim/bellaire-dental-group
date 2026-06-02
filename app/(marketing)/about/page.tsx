import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import { Award, Heart, Languages, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, dentistPersonSchema } from "@/lib/schema";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "About Dr. Regina Valter & Our Team",
  description:
    "Meet Dr. Regina Valter, DDS, and the Bellaire Dental Group team — nearly a decade of gentle, personalized dentistry in Houston, built on honesty and genuine care.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "Gentle, judgment-free",
    body: "We meet every patient with patience and warmth — no lectures, no rushing, no shame. Just honest, comfortable care.",
  },
  {
    icon: Sparkles,
    title: "Natural-looking results",
    body: "Dr. Valter designs every smile around your face for results that look like the best version of you — never overdone.",
  },
  {
    icon: Award,
    title: "Continually advancing",
    body: "Ongoing continuing education and modern technology mean you get current, evidence-based care every visit.",
  },
  {
    icon: Languages,
    title: "Care in your language",
    body: "Our team speaks English, Spanish, Russian, and Hebrew — so every patient feels truly understood.",
  },
];

export default function AboutPage() {
  const doc = practice.team[0];
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title={
          <>
            Honest, gentle dentistry — <span className="text-gradient">for nearly a decade</span>
          </>
        }
        intro={practice.longDescription}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Doctor bio */}
      <section className="py-20 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="absolute -inset-5 -z-10 rounded-[2.75rem] bg-gradient-to-br from-cyan-200/60 via-aqua/50 to-mint/60 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl">
                <Img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 36vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 shadow-xl">
                <Award className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-medium text-navy-900">
                  Houstonia “Top Dentist”
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="Meet your dentist"
              title={
                <>
                  {doc.name}, <span className="text-ink-soft">{doc.credentials}</span>
                </>
              }
            />
            <p className="mt-2 font-medium text-cyan-700">{doc.role}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
              {doc.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {doc.specialties.map((s) => (
                <span key={s} className="rounded-full bg-aqua px-3 py-1 text-sm text-navy-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Care built on <span className="text-gradient">trust</span>
              </>
            }
            intro="The principles behind every appointment at Bellaire Dental Group."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-line bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-navy-700">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={[
          dentistPersonSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
    </>
  );
}
