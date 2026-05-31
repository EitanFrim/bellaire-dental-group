import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { practice } from "@/lib/practice";

const blurbs: Record<string, string> = {
  Bellaire: "Our home neighborhood — minutes from anywhere in the City of Bellaire.",
  "West University Place": "A short drive from West U for families and professionals.",
  "Upper Kirby": "Convenient, modern dental care just south of Upper Kirby.",
  Meyerland: "Trusted by Meyerland families for gentle, comprehensive dentistry.",
  Houston: "Serving patients from across greater Houston and the Inner Loop.",
};

export function AreasServed() {
  return (
    <section className="border-t border-line bg-white/60 py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proudly local"
          title={
            <>
              Your neighborhood dentist in{" "}
              <span className="text-gradient">Bellaire &amp; Houston</span>
            </>
          }
          intro="Conveniently located at the Chimney Rock Doctors Center with free parking — welcoming patients from across the area."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practice.areasServed.map((area) => (
            <StaggerItem key={area}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aqua text-navy-700">
                  <MapPin className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy-900">{area}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {blurbs[area] ?? `Caring for ${area} smiles with gentle, modern dentistry.`}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
