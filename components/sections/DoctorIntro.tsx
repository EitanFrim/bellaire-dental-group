import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BookButton } from "@/components/booking/BookButton";
import { practice } from "@/lib/practice";

export function DoctorIntro() {
  const doc = practice.team[0];
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Portrait, framed like a print */}
        <Reveal className="lg:col-span-5">
          <figure className="mx-auto max-w-sm lg:mx-0">
            <div className="border border-line bg-paper p-2.5">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role} at Bellaire Dental Group`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 34vw"
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

        <div className="lg:col-span-6 lg:col-start-7 lg:py-6">
          <div className="flex items-baseline gap-4">
            <span aria-hidden="true" className="font-display text-sm tnum text-bronze">
              01
            </span>
            <Eyebrow>Your dentist</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.08] text-ink sm:text-[2.75rem]">
            {doc.name},{" "}
            <span className="accent-italic text-ink-soft">{doc.credentials}</span>
          </h2>
          <p className="label mt-3 text-ink-faint">{doc.role}</p>

          <div className="mt-7 space-y-4 leading-relaxed text-ink-soft">
            {doc.bio.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 border-t border-line">
            {doc.specialties.map((s) => (
              <li
                key={s}
                className="flex items-baseline gap-4 border-b border-line py-2.5 text-sm text-ink-soft"
              >
                <span aria-hidden="true" className="h-px w-4 shrink-0 bg-bronze/60" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton size="md" variant="ink">
              Book with Dr. Valter <ArrowRight size={15} />
            </BookButton>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
            >
              Meet the whole team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
