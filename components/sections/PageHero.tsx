import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export type Crumb = { name: string; path: string };

/** Reusable inner-page hero with breadcrumbs + soft aurora. */
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
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <AuroraBackground interactive={false} className="opacity-70" />
      <Container className="relative pb-14 pt-28 lg:pb-20 lg:pt-36">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-soft">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path} className="hover:text-cyan-700">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-navy-800">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-navy-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
