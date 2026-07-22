"use client";

import { Img } from "@/components/ui/Img";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    label: "Arrival",
    title: "A quiet arrival",
    body: "Walk into a calm, spa-like space with soft light, comfortable seating, and a team that already knows your name.",
    image: "/images/studio/visit-arrival.webp",
    alt: "The warm oak entry of the studio with an olive branch on a stone ledge",
  },
  {
    label: "Settle in",
    title: "Settle in, no rush",
    body: "We never double-book or hurry you. There's time to ask every question and understand exactly what's happening.",
    image: "/images/studio/visit-consult.webp",
    alt: "A quiet consultation corner with two soft chairs in warm window light",
  },
  {
    label: "Care",
    title: "Gentle, precise care",
    body: "Modern, low-radiation imaging and gentle techniques, with comfort options like nitrous sedation whenever you want them.",
    image: "/images/studio/visit-care.webp",
    alt: "Folded cream linen towels on a warm oak tray in soft light",
  },
  {
    label: "Leave",
    title: "Leave lighter",
    body: "A clear plan, honest pricing, and zero pressure. Most patients tell us it's the most relaxed dental visit they've had.",
    image: "/images/studio/studio-lounge.webp",
    alt: "A warm reading corner of the lounge at dusk",
  },
];

/**
 * "The visit" chapters. On large screens the section pins to the viewport
 * and scrolling advances through four chapters: the large framed still and
 * the step text swap together, with a labeled progress rail underneath.
 * Small screens and reduced-motion users get the stacked editorial version.
 */
export function VisitScrollytelling() {
  const reduce = useReducedMotion();
  if (reduce) return <StaticChapters />;
  return (
    <>
      <div className="lg:hidden">
        <StaticChapters />
      </div>
      <div className="hidden lg:block">
        <PinnedChapters />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Pinned chapter player (desktop)                                     */
/* ------------------------------------------------------------------ */

function PinnedChapters() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(
      0,
      Math.min(steps.length - 1, Math.floor(v * steps.length)),
    );
    setActive(idx);
  });

  // Land chapter i mid-dwell: progress (i + 0.5) / n across the scrollable
  // distance (section height minus the pinned viewport).
  const jumpTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + ((i + 0.5) / steps.length) * distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="relative border-y border-line bg-linen/60"
      style={{ height: `${steps.length * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <Container className="flex h-full flex-col pb-8 pt-24">
          {/* Heading row */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-sm tnum text-bronze"
                >
                  03
                </span>
                <Eyebrow>The visit</Eyebrow>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] text-ink">
                Exactly what to expect,{" "}
                <span className="accent-italic">step by step</span>
              </h2>
            </div>
            <p className="max-w-sm pb-1 text-sm leading-relaxed text-ink-soft">
              Dental anxiety is real, and common. So we make every moment calm
              and predictable. Here&apos;s how a visit actually feels.
            </p>
          </div>

          {/* Chapter stage */}
          <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-10 py-6 xl:gap-14">
            <div className="col-span-4">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-lg tnum text-bronze"
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-4xl leading-[1.06] text-ink xl:text-[2.85rem]">
                  {steps[active].title}
                </h3>
                <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
                  {steps[active].body}
                </p>
              </motion.div>
            </div>

            <div className="col-span-8 h-full min-h-0">
              <div className="h-full border border-line bg-paper p-2.5">
                <div className="relative h-full overflow-hidden">
                  {steps.map((s, i) => (
                    <Img
                      key={s.title}
                      src={s.image}
                      alt={s.alt}
                      aria-hidden={i !== active}
                      fill
                      sizes="60vw"
                      className={cn(
                        "object-cover transition-opacity duration-700",
                        i === active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Progress rail */}
          <div className="grid grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Go to step ${i + 1}: ${s.label}`}
                className={cn(
                  "group border-t pt-3.5 pb-1 text-left transition-colors duration-500",
                  i === active
                    ? "border-ink"
                    : "border-line hover:border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "label flex items-baseline gap-2.5 transition-colors duration-500",
                    i === active
                      ? "text-ink"
                      : "text-ink-faint group-hover:text-ink-soft",
                  )}
                >
                  <span
                    className={cn(
                      "tnum transition-colors duration-500",
                      i === active && "text-bronze",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stacked editorial chapters (mobile + reduced motion)                */
/* ------------------------------------------------------------------ */

function StaticChapters() {
  return (
    <section className="border-y border-line bg-linen/60 py-24 lg:py-32">
      <Container>
        <div className="flex items-baseline gap-4">
          <span aria-hidden="true" className="font-display text-sm tnum text-bronze">
            03
          </span>
          <Eyebrow>The visit</Eyebrow>
        </div>
        <h2 className="mt-5 max-w-2xl font-display text-[2.1rem] leading-[1.08] text-ink sm:text-[2.75rem]">
          Exactly what to expect,{" "}
          <span className="accent-italic">step by step</span>
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
          Dental anxiety is real, and common. So we make every moment calm and
          predictable. Here&apos;s how a visit actually feels.
        </p>

        <ol className="mt-14">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid items-center gap-8 border-t border-line py-10 last:pb-0 md:grid-cols-2 md:gap-12 lg:py-14"
            >
              <div className={cn(i % 2 === 1 && "md:order-2")}>
                <span
                  aria-hidden="true"
                  className="font-display text-lg tnum text-bronze"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink sm:text-[1.85rem]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
              <div className={cn(i % 2 === 1 && "md:order-1")}>
                <div className="border border-line bg-paper p-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Img
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
