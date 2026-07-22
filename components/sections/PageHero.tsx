import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export type Crumb = { name: string; path: string };

/**
 * Editorial inner-page header: small-caps breadcrumbs over a hairline, an
 * oversized serif title, and optional intro/actions. No decorative
 * background: the quiet paper ground and the hairline do the work.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-bone">
      <Container className="pb-16 pt-32 lg:pb-20 lg:pt-40">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="label flex flex-wrap items-center gap-2.5 text-ink-faint">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-ink-faint/60">
                      /
                    </span>
                  )}
                  {i < crumbs.length - 1 ? (
                    <Link
                      href={c.path}
                      className="transition-colors hover:text-ink"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-ink">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance font-display text-[2.6rem] leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
