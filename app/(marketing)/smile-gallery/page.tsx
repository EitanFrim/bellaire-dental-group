import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Smile Gallery & Our Office",
  description:
    "Step inside Bellaire Dental Group, a calm, modern, spa-like dental office in Houston. See our space and the smiles we care for.",
  alternates: { canonical: "/smile-gallery" },
};

const gallery = [
  {
    src: "/images/office/lobby.jpg",
    alt: "Reception and lounge area",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/images/office/waiting.jpg", alt: "Comfortable waiting area with natural light" },
  { src: "/images/office/entry.jpg", alt: "Welcoming entryway with certifications" },
  {
    src: "/images/lifestyle/smile-family.webp",
    alt: "Happy patients with healthy, confident smiles",
    span: "sm:col-span-2",
  },
  { src: "/images/office/detail.jpg", alt: "Thoughtful interior details and artwork" },
];

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="A look inside"
        title={
          <>
            A space designed to{" "}
            <span className="accent-italic">put you at ease</span>
          </>
        }
        intro="Warm textures, soft lighting, and little comforts throughout. Our Bellaire office was made to feel nothing like the dental office of memory."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smile Gallery", path: "/smile-gallery" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {gallery.map((g) => (
                <div
                  key={g.src}
                  className={`group relative overflow-hidden border border-line ${g.span ?? ""}`}
                >
                  <Img
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Before/after placeholder: enabled when consented clinical photos are provided */}
          <Reveal>
            <div className="mt-16 border border-dashed border-line-strong p-10 text-center lg:p-14">
              <p className="label text-bronze">In progress</p>
              <h2 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                Before &amp; after transformations
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
                We&apos;re curating a gallery of real smile transformations, shared
                with each patient&apos;s written consent. Want to see results for
                your specific goals? Ask us at your visit.
              </p>
            </div>
          </Reveal>

          {/* Quote band */}
          <Reveal>
            <figure className="mt-16 bg-night px-8 py-16 text-center text-bone sm:px-14 sm:py-20">
              <p className="label text-bronze-soft">Bellaire proud</p>
              <blockquote className="mx-auto mt-6 max-w-2xl text-balance font-display text-2xl leading-[1.25] sm:text-[2rem]">
                This business is Bellaire proud, and Bellaire is proud to have
                them in our neighborhood. I now{" "}
                <span className="accent-italic">look forward</span> to going to
                the dentist.
              </blockquote>
              <figcaption className="label mt-6 text-bone/55">
                Jan · Google review
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Smile Gallery", path: "/smile-gallery" },
        ])}
      />
    </>
  );
}
