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
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </Container>
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </section>
  );
}
