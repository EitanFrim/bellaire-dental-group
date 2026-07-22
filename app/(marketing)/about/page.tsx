import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, dentistPersonSchema } from "@/lib/schema";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "About Dr. Regina Valter & Our Team",
  description:
    "Meet Dr. Regina Valter, DDS, and the Bellaire Dental Group team: nearly a decade of gentle, personalized dentistry in Houston, built on honesty and genuine care.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Gentle, judgment-free",
    body: "We meet every patient with patience and warmth. No lectures, no rushing, no shame. Just honest, comfortable care.",
  },
  {
    title: "Natural-looking results",
    body: "Dr. Valter designs every smile around your face for results that look like the best version of you, never overdone.",
  },
  {
    title: "Continually advancing",
    body: "Ongoing continuing education and modern technology mean you get current, evidence-based care every visit.",
  },
  {
    title: "Care in your language",
    body: "Our team speaks English, Spanish, Russian, and Hebrew, so every patient feels truly understood.",
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
            Honest, gentle dentistry{" "}
            <span className="accent-italic">for nearly a decade</span>
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
        <Container className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="mx-auto max-w-sm lg:sticky lg:top-28 lg:mx-0">
              <div className="border border-line bg-paper p-2.5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Img
                    src={doc.image}
                    alt={`${doc.name}, ${doc.role}`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 36vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <figcaption className="flex items-baseline justify-between pt-3">
                <span className="label text-ink-soft">
                  {doc.name} · {doc.credentials}
                </span>
                <span className="label text-bronze">Houstonia Top Dentist</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              align="left"
              numeral="01"
              eyebrow="Meet your dentist"
              title={
                <>
                  {doc.name},{" "}
                  <span className="accent-italic text-ink-soft">
                    {doc.credentials}
                  </span>
                </>
              }
            />
            <p className="label mt-3 text-ink-faint">{doc.role}</p>
            <div className="mt-7 space-y-4 leading-relaxed text-ink-soft">
              {doc.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 border-t border-line">
              {doc.specialties.map((s) => (
                <li
                  key={s}
                  className="flex items-baseline gap-4 border-b border-line py-2.5 text-sm text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-4 shrink-0 bg-bronze/60"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-linen/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="left"
            numeral="02"
            eyebrow="What we believe"
            title={
              <>
                Care built on <span className="accent-italic">trust</span>
              </>
            }
            intro="The principles behind every appointment at Bellaire Dental Group."
          />
          <Reveal>
            <dl className="mt-12 grid gap-x-12 border-t border-line sm:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="flex gap-5 border-b border-line py-7"
                >
                  <span className="font-display text-sm tnum text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-display text-xl text-ink">{v.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {v.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
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
