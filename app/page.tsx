import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { VisitScrollytelling } from "@/components/sections/VisitScrollytelling";
import { SmileGallery } from "@/components/sections/SmileGallery";
import { DoctorIntro } from "@/components/sections/DoctorIntro";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { Amenities } from "@/components/sections/Amenities";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const homeFaqs = [
  {
    q: "Are you accepting new patients?",
    a: "Yes — we happily welcome new patients of every age, from children age two and up to grandparents. You can book online in under a minute or give us a call.",
  },
  {
    q: "Do you take my insurance?",
    a: "We accept most major PPO dental insurance plans. Coverage varies, so call us at (713) 668-8383 and we'll gladly verify your benefits. We also offer flexible financing through Cherry and CareCredit.",
  },
  {
    q: "I'm nervous about the dentist — can you help?",
    a: "Absolutely. Gentle, judgment-free care is what we're known for. We never rush, we explain everything, and we offer comfort options including nitrous (laughing gas) sedation.",
  },
  {
    q: "Do you offer emergency appointments?",
    a: "Yes. We keep room in our schedule for dental emergencies and will do everything we can to see you the same day. If you're in pain, call us right away at (713) 668-8383.",
  },
  {
    q: "Where are you located?",
    a: "We're at 6699 Chimney Rock Rd., Suite 101, Houston, TX 77081, in the Chimney Rock Doctors Center — with free on-site parking, serving Bellaire, West University, Meyerland, and greater Houston.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <VisitScrollytelling />
      <SmileGallery />
      <DoctorIntro />
      <ReviewsMarquee />
      <Amenities />
      <LocationBlock />
      <FaqSection
        items={homeFaqs}
        eyebrow="New here?"
        title={
          <>
            Everything you might be <span className="text-gradient">wondering</span>
          </>
        }
      />
      <FinalCTA />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
    </>
  );
}
