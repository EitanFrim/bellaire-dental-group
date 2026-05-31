import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { StarRating } from "@/components/ui/StarRating";
import { practice } from "@/lib/practice";

const stats = [
  { to: 4.9, decimals: 1, label: "Google rating", stars: true },
  { to: 352, suffix: "+", label: "5-star reviews" },
  { to: 10, suffix: "+", label: "Years in Bellaire" },
  { to: 4, label: "Languages spoken" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-white/60">
      <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:py-14">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <CountUp
              to={s.to}
              decimals={s.decimals ?? 0}
              suffix={s.suffix ?? ""}
              className="font-display text-4xl text-navy-900 sm:text-5xl"
            />
            {s.stars && <StarRating value={5} size={14} className="mt-1.5" />}
            <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </Container>

      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Proud member of
        </span>
        {practice.affiliations.map((a) => (
          <span
            key={a.abbr}
            title={a.name}
            className="text-sm font-semibold tracking-wide text-navy-700/70"
          >
            {a.abbr}
          </span>
        ))}
      </Container>
    </section>
  );
}
