import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { StarRating } from "@/components/ui/StarRating";
import { practice } from "@/lib/practice";

const stats = [
  { to: 4.9, decimals: 1, label: "Google rating", stars: true },
  { to: 352, suffix: "+", label: "Five-star reviews" },
  { to: 10, suffix: "+", label: "Years in Bellaire" },
  { to: 4, label: "Languages spoken" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              "flex flex-col gap-2 border-line py-10 pr-6 md:py-14 " +
              (i > 0 ? "md:border-l md:pl-10 " : "") +
              (i % 2 === 1 ? "border-l pl-6 md:pl-10" : "")
            }
          >
            <CountUp
              to={s.to}
              decimals={s.decimals ?? 0}
              suffix={s.suffix ?? ""}
              className="tnum font-display text-4xl text-ink sm:text-5xl"
            />
            {s.stars ? (
              <StarRating value={5} size={12} />
            ) : (
              <span className="h-[12px]" aria-hidden="true" />
            )}
            <p className="label text-ink-faint">{s.label}</p>
          </div>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-wrap items-baseline justify-center gap-x-10 gap-y-3 py-5">
          <span className="label text-ink-faint">Member</span>
          {practice.affiliations.map((a) => (
            <span key={a.abbr} title={a.name} className="label text-ink-soft">
              {a.abbr}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}
