import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BookButton } from "@/components/booking/BookButton";
import { buttonVariants } from "@/components/ui/Button";
import { practice } from "@/lib/practice";

export function DoctorIntro() {
  const doc = practice.team[0];
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-5 -z-10 rounded-[2.75rem] bg-gradient-to-br from-cyan-200/60 via-aqua/50 to-mint/60 blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_40px_80px_-30px_rgba(10,31,64,0.5)]">
              <Image
                src={doc.image}
                alt={`${doc.name}, ${doc.role} at Bellaire Dental Group`}
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

        <div>
          <Eyebrow>Meet your dentist</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            {doc.name}, <span className="text-ink-soft">{doc.credentials}</span>
          </h2>
          <p className="mt-1.5 font-medium text-cyan-700">{doc.role}</p>

          <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
            {doc.bio.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {doc.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full bg-aqua px-3 py-1 text-sm text-navy-700"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton size="lg">
              Book with Dr. Valter <ArrowRight className="h-4 w-4" />
            </BookButton>
            <Link href="/about" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              Meet the whole team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
