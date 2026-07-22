import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

/** Shared shell + prose styling for legal/policy pages. */
export function LegalLayout({
  title,
  updated,
  crumbLabel,
  crumbPath,
  children,
}: {
  title: string;
  updated: string;
  crumbLabel: string;
  crumbPath: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title={title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: crumbLabel, path: crumbPath },
        ]}
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <p className="label mb-10 border-b border-line pb-6 text-ink-faint">
            Last updated: {updated}
          </p>
          <div className="space-y-6 leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:text-pretty [&_strong]:font-medium [&_strong]:text-ink">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
