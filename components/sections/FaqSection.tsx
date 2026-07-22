import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type FaqItem } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export function FaqSection({
  items,
  eyebrow = "Good to know",
  title = "Questions, answered",
  intro,
  withSchema = true,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  withSchema?: boolean;
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            className="lg:sticky lg:top-28"
          />
        </div>
        <div className="lg:col-span-8">
          <Accordion items={items} />
        </div>
      </Container>
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </section>
  );
}
