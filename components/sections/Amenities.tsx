import { Img } from "@/components/ui/Img";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const amenities = [
  {
    title: "Gentle and judgment-free",
    body: "Anxiety-aware care with nitrous (laughing gas) sedation available whenever you'd like it.",
  },
  {
    title: "Modern technology",
    body: "Low-radiation digital imaging, DIAGNOdent laser cavity detection, and laser dentistry.",
  },
  {
    title: "Little comforts",
    body: "Fresh coffee, water, and a calm, spa-like atmosphere from the moment you arrive.",
  },
  {
    title: "Same-day emergencies",
    body: "In pain? We hold room in the schedule to see you fast and get you comfortable.",
  },
  {
    title: "A multilingual team",
    body: "Care in English, Spanish, Russian, and Hebrew, so everyone feels understood.",
  },
  {
    title: "Easy, free parking",
    body: "Convenient on-site parking at the Chimney Rock Doctors Center in Bellaire.",
  },
];

/** Night band: the dusk still beside a typographic amenity list. */
export function Amenities() {
  return (
    <section className="bg-night text-bone">
      <div className="grid lg:grid-cols-5">
        <div className="relative min-h-[320px] lg:col-span-2 lg:min-h-0">
          <Img
            src="/images/studio/after-hours.webp"
            alt="The treatment lounge at dusk, lit by a warm brass lamp"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="px-6 py-20 sm:px-10 lg:col-span-3 lg:px-16 lg:py-28 xl:px-20">
          <div className="flex items-baseline gap-4">
            <span aria-hidden="true" className="font-display text-sm tnum text-bronze-soft">
              06
            </span>
            <Eyebrow light>Comfort and technology</Eyebrow>
          </div>
          <h2 className="mt-5 max-w-xl font-display text-[2.1rem] leading-[1.08] text-bone sm:text-[2.75rem]">
            Designed to feel <span className="accent-italic">calm</span>, equipped
            to be precise
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-bone/65">
            Every detail, from the coffee bar to the laser scanner, is here to
            make great dentistry feel easy.
          </p>

          <Reveal className="mt-12">
            <dl className="grid gap-x-12 sm:grid-cols-2">
              {amenities.map((a) => (
                <div key={a.title} className="border-t border-line-light py-5">
                  <dt className="font-medium text-bone">{a.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-bone/60">
                    {a.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
