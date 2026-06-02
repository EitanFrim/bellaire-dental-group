"use client";

import { Img } from "@/components/ui/Img";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "A warm welcome",
    body: "Walk into a calm, spa-like space — comfortable seating, fresh coffee, and a team that already knows your name.",
    image: "/images/office/entry.jpg",
    alt: "The welcoming entryway at Bellaire Dental Group",
  },
  {
    title: "Settle in, no rush",
    body: "We never double-book or hurry you. There's time to ask every question and understand exactly what's happening.",
    image: "/images/office/waiting.jpg",
    alt: "Comfortable, modern waiting area",
  },
  {
    title: "Gentle, precise care",
    body: "Modern, low-radiation imaging and gentle techniques — with comfort options like nitrous sedation whenever you want them.",
    image: "/images/team/dr-regina-valter.jpg",
    alt: "Dr. Regina Valter providing gentle care",
  },
  {
    title: "Leave smiling",
    body: "A clear plan, honest pricing, and zero pressure. Most patients tell us it's the most relaxed dental visit they've had.",
    image: "/images/lifestyle/smile-family.webp",
    alt: "Happy patients with healthy, natural smiles",
  },
];

export function VisitScrollytelling() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-aqua/40 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual + intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Your visit, reimagined</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
              Exactly what to expect — <span className="text-gradient">step by step</span>
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Dental anxiety is real — and common. So we make every moment calm and
              predictable. Here&apos;s how a visit actually feels.
            </p>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-white/70 shadow-2xl">
              {steps.map((s, i) => (
                <Img
                  key={s.title}
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-1.5">
                {steps.map((s, i) => (
                  <span
                    key={s.title}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === active ? "w-7 bg-white" : "w-1.5 bg-white/50",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <ol className="flex flex-col gap-6 lg:gap-10 lg:py-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "rounded-3xl border p-6 transition-colors duration-500 sm:p-8",
                  i === active
                    ? "border-cyan-200 bg-white shadow-xl"
                    : "border-line bg-white/40",
                )}
              >
                <span className="font-display text-sm font-semibold text-cyan-600">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl text-navy-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
