import { Heart, Zap, Coffee, ShieldCheck, Globe, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const amenities = [
  {
    icon: Heart,
    title: "Gentle & judgment-free",
    body: "Anxiety-aware care with nitrous (laughing gas) sedation available whenever you'd like it.",
  },
  {
    icon: Zap,
    title: "Modern technology",
    body: "Low-radiation digital imaging, DIAGNOdent™ laser cavity detection, and laser dentistry.",
  },
  {
    icon: Coffee,
    title: "Little comforts",
    body: "Fresh coffee, water, and a calm, spa-like atmosphere from the moment you arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Same-day emergencies",
    body: "In pain? We hold room in the schedule to see you fast and get you comfortable.",
  },
  {
    icon: Globe,
    title: "Multilingual team",
    body: "Care in English, Spanish, Russian, and Hebrew — so everyone feels understood.",
  },
  {
    icon: MapPin,
    title: "Easy & free parking",
    body: "Convenient on-site parking at the Chimney Rock Doctors Center in Bellaire.",
  },
];

export function Amenities() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Comfort & technology"
          title={
            <>
              Designed to feel <span className="text-cyan-300">calm</span>, equipped to be
              precise
            </>
          }
          intro="Every detail — from the coffee bar to the laser scanner — is here to make great dentistry feel easy."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <StaggerItem key={a.title}>
              <div className="h-full rounded-3xl border border-navy-800 bg-navy-800/50 p-6 transition-colors duration-300 hover:border-cyan-500/40 hover:bg-navy-800">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{a.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
