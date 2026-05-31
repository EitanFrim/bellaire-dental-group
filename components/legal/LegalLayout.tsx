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
          <p className="mb-8 text-sm text-ink-soft">Last updated: {updated}</p>
          <div className="space-y-6 leading-relaxed text-ink-soft [&_a]:text-cyan-700 [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-navy-900 [&_li]:ml-5 [&_li]:list-disc [&_p]:text-pretty [&_strong]:text-navy-800">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
