/**
 * Services catalogue - drives the homepage grid, the /services hub, the
 * per-treatment landing pages (/services/[slug]), navigation, and schema.
 * Treatment-specific pages are the practice's main organic-search surface.
 */

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName?: string;
  category: ServiceCategory;
  icon: IconKey;
  /** One-line hook used on cards and nav. */
  tagline: string;
  /** 1-2 sentence card summary. */
  summary: string;
  featured?: boolean;
  hasPage: boolean;
  /** Hero/illustration image for the landing page + service card. */
  image?: string;
  // --- Landing-page content (only for hasPage services) ---
  heroHeadline?: string;
  overview?: string[];
  benefits?: { title: string; description: string }[];
  process?: { title: string; description: string }[];
  faqs?: ServiceFaq[];
  related?: string[];
  keywords?: string[];
};

export type ServiceCategory =
  | "Cosmetic Dentistry"
  | "Orthodontics"
  | "Restorative"
  | "General & Preventive"
  | "Sleep & TMJ"
  | "Emergency";

export type IconKey =
  | "whitening"
  | "veneers"
  | "aligner"
  | "implant"
  | "tooth"
  | "sleep"
  | "emergency"
  | "botox"
  | "smile"
  | "crown"
  | "filling"
  | "gum"
  | "screening"
  | "dentures"
  | "child"
  | "laser"
  | "sedation";

export const SERVICE_CATEGORY_ORDER: ServiceCategory[] = [
  "Cosmetic Dentistry",
  "Orthodontics",
  "Restorative",
  "General & Preventive",
  "Sleep & TMJ",
  "Emergency",
];

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    icon: "whitening",
    tagline: "A brighter smile, gently",
    summary:
      "Professional whitening that lifts years of stains safely, far beyond what store-bought kits can do.",
    featured: true,
    hasPage: true,
    image: "/images/services/cosmetic.webp",
    heroHeadline: "A noticeably brighter smile, comfortably",
    overview: [
      "Coffee, tea, red wine, and time all dull a smile. Professional whitening at Bellaire Dental Group removes years of surface and deep stains with dentist-grade products that are far stronger (and far safer) than anything sold over the counter.",
      "Dr. Valter tailors the treatment to your enamel and sensitivity, so you get a brighter, natural-looking result without the zings and irritation that DIY kits often cause. Choose an in-office boost for an event, custom take-home trays for gradual control, or both.",
    ],
    benefits: [
      { title: "Dramatic, even results", description: "Multiple shades brighter, with color that looks natural, not chalky." },
      { title: "Comfort-first", description: "Custom-fit and desensitizing steps keep sensitivity to a minimum." },
      { title: "Made for you", description: "We match the approach to your enamel, stains, and timeline." },
    ],
    process: [
      { title: "Quick consult", description: "We check your enamel and gums and confirm whitening is right for you." },
      { title: "Whiten", description: "An in-office session, custom take-home trays, or a combination of both." },
      { title: "Maintain", description: "Simple aftercare and touch-ups keep your results bright for the long run." },
    ],
    faqs: [
      { q: "How long does it last?", a: "With good care and occasional touch-ups, results typically last well over a year. Avoiding heavy staining drinks helps it last longer." },
      { q: "Will it hurt my teeth?", a: "Professional whitening is safe for enamel. Some temporary sensitivity is normal; we use desensitizing steps to keep you comfortable." },
      { q: "Is it better than drugstore strips?", a: "Yes. Our products are stronger and applied precisely, so results are faster, more even, and longer-lasting." },
    ],
    related: ["veneers", "invisalign", "family-dentistry"],
    keywords: ["teeth whitening Houston", "professional teeth whitening Bellaire", "Zoom whitening"],
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    shortName: "Veneers",
    category: "Cosmetic Dentistry",
    icon: "veneers",
    tagline: "Redesign your smile",
    summary:
      "Thin, custom porcelain shells that correct chips, gaps, and discoloration for a flawless, natural look.",
    featured: true,
    hasPage: true,
    image: "/images/services/cosmetic.webp",
    heroHeadline: "A custom-designed smile that still looks like you",
    overview: [
      "Veneers are thin, custom-crafted porcelain shells bonded to the front of your teeth: a transformative way to correct chips, gaps, worn edges, and stubborn discoloration in a single cohesive design.",
      "Dr. Valter designs each smile around your face, not a template, for results that look natural and proportionate. We also offer minimal- and no-prep options where appropriate, preserving more of your healthy tooth structure.",
    ],
    benefits: [
      { title: "Comprehensive change", description: "Color, shape, and alignment improved together for a balanced smile." },
      { title: "Natural, lifelike porcelain", description: "Light reflects through veneers the way it does through real enamel." },
      { title: "Conservative options", description: "No-prep and minimal-prep veneers preserve more of your natural tooth." },
    ],
    process: [
      { title: "Smile design", description: "We discuss your goals and design a smile that fits your face and bite." },
      { title: "Prepare & preview", description: "Teeth are gently prepared and you preview the look before we finalize." },
      { title: "Bond & refine", description: "Your custom veneers are bonded and polished for a seamless finish." },
    ],
    faqs: [
      { q: "How much do veneers cost in Houston?", a: "In the Houston area, porcelain veneers typically range from about $1,000 to $2,500 per tooth depending on the material and how many you need. Because every smile is different, we give you a clear, itemized quote at your consultation, and we offer financing through Cherry and CareCredit to spread out the cost." },
      { q: "Do veneers look fake?", a: "Not when they're designed well. We craft each veneer to match your facial features and the translucency of natural enamel." },
      { q: "How long do they last?", a: "With good hygiene, porcelain veneers commonly last 10-15+ years." },
      { q: "Are veneers reversible?", a: "Traditional veneers involve minimal enamel removal. No-prep options, when suitable, are more conservative, and we'll review what's right for you." },
    ],
    related: ["teeth-whitening", "invisalign", "snap-on-smile"],
    keywords: ["porcelain veneers Houston", "no-prep veneers Bellaire", "smile makeover"],
  },
  {
    slug: "invisalign",
    name: "Invisalign® & Clear Aligners",
    shortName: "Invisalign",
    category: "Orthodontics",
    icon: "aligner",
    tagline: "Straighten without braces",
    summary:
      "Clear, removable aligners that straighten teeth discreetly: no metal brackets, no diet restrictions.",
    featured: true,
    hasPage: true,
    image: "/images/services/invisalign.webp",
    heroHeadline: "Straighter teeth, no one needs to notice",
    overview: [
      "Invisalign and clear aligners straighten your teeth with a series of clear, removable trays, with no metal brackets or wires. They're nearly invisible, comfortable, and you take them out to eat, brush, and floss.",
      "Dr. Valter maps your full treatment from start to finish, so you can see the projected result before you begin. Most patients love how the trays fit into real life: at work, at dinner, in photos.",
    ],
    benefits: [
      { title: "Practically invisible", description: "Clear trays let you straighten discreetly through work and social life." },
      { title: "Eat what you like", description: "Trays come out for meals, so there are no food restrictions and easy cleaning." },
      { title: "Planned end-to-end", description: "Preview your projected smile before treatment even starts." },
    ],
    process: [
      { title: "Digital scan", description: "A comfortable digital scan maps your teeth, with no goopy impressions." },
      { title: "Your plan", description: "We design your tray series and preview the projected outcome." },
      { title: "Wear & progress", description: "Switch trays on schedule with simple check-ins along the way." },
    ],
    faqs: [
      { q: "How much does Invisalign cost in Houston?", a: "Invisalign in Houston generally runs from roughly $3,500 to $6,500 depending on how complex your case is and how long you'll be in treatment. We'll give you an exact price at your consultation, verify your insurance (many PPO plans include orthodontic benefits), and offer monthly financing through Cherry and CareCredit." },
      { q: "How long does treatment take?", a: "Many cases finish in 6-18 months depending on complexity. We'll estimate your timeline at the consult." },
      { q: "Is Invisalign uncomfortable?", a: "There's mild pressure when you switch to a new tray. That's it working. Most people adjust within a day or two." },
      { q: "How often do I wear the trays?", a: "About 20-22 hours a day for best results, basically all the time except eating and brushing." },
    ],
    related: ["teeth-whitening", "veneers", "family-dentistry"],
    keywords: ["Invisalign Houston", "clear aligners Bellaire", "invisible braces"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    icon: "implant",
    tagline: "Replace teeth for good",
    summary:
      "Permanent, natural-looking tooth replacement that looks, feels, and functions like your own teeth.",
    featured: true,
    hasPage: true,
    image: "/images/services/implants.webp",
    heroHeadline: "Permanent tooth replacement that feels like your own",
    overview: [
      "A dental implant replaces a missing tooth from the root up: a small titanium post integrates with your jaw and supports a custom crown that looks and works like a natural tooth. Unlike bridges, implants don't rely on neighboring teeth, and they help preserve the jawbone.",
      "Whether you're replacing a single tooth or several, Dr. Valter plans each case carefully for a comfortable process and a result that blends seamlessly with your smile.",
    ],
    benefits: [
      { title: "Looks & feels natural", description: "A custom crown restores full function, so you can eat and smile with confidence." },
      { title: "Protects your jaw", description: "Implants stimulate bone like a natural root, helping prevent bone loss." },
      { title: "Built to last", description: "With good care, implants can last decades, often a lifetime." },
    ],
    process: [
      { title: "Plan", description: "Imaging and a thorough exam map the ideal implant position." },
      { title: "Place", description: "The implant post is placed and gently integrates with your bone." },
      { title: "Restore", description: "A custom crown is attached, completing your natural-looking tooth." },
    ],
    faqs: [
      { q: "How much do dental implants cost in Houston?", a: "A single dental implant in Houston typically costs about $3,000 to $5,000 including the implant, abutment, and crown; full-arch solutions cost more. The exact price depends on your needs (for example, whether a bone graft is required). We provide a clear written estimate up front and offer financing through Cherry and CareCredit." },
      { q: "Are implants painful?", a: "Most patients are surprised how comfortable it is. The area is fully numbed, and post-op soreness is typically mild and short-lived." },
      { q: "How long does the whole process take?", a: "It varies. Healing/integration takes a few months, but we'll give you a clear timeline and discuss temporary options." },
      { q: "Am I a candidate?", a: "Most healthy adults are. We'll evaluate your bone and gums and review options, including bone grafting if needed." },
    ],
    related: ["crowns-bridges", "dentures", "family-dentistry"],
    keywords: ["dental implants Houston", "tooth replacement Bellaire", "implant dentist"],
  },
  {
    slug: "family-dentistry",
    name: "Family & General Dentistry",
    shortName: "Family Dentistry",
    category: "General & Preventive",
    icon: "tooth",
    tagline: "Care for every age",
    summary:
      "Gentle checkups, cleanings, fillings, and preventive care for the whole family, from age 2 and up.",
    featured: true,
    hasPage: true,
    image: "/images/services/family.webp",
    heroHeadline: "One calm dental home for the whole family",
    overview: [
      "From a toddler's first visit to a grandparent's crown, Bellaire Dental Group is a dental home for every age. We focus on prevention (thorough cleanings, gentle exams, and honest guidance) so small issues stay small.",
      "We see children from age two and up, and we go out of our way to make visits calm and unhurried. Many of our patients have been with us for years; some families span generations.",
    ],
    benefits: [
      { title: "Everyone, one office", description: "Kids (2+), parents, and grandparents cared for under one roof." },
      { title: "Prevention-first", description: "Cleanings, exams, and early detection keep treatment simple and affordable." },
      { title: "Gentle & unhurried", description: "We take the time to make every visit comfortable, especially for nervous patients." },
    ],
    process: [
      { title: "Comfortable exam", description: "A thorough but gentle checkup, with modern low-dose imaging as needed." },
      { title: "Professional cleaning", description: "We remove buildup and polish, then review easy at-home tips." },
      { title: "Personalized plan", description: "Clear, no-pressure recommendations prioritized by what matters most." },
    ],
    faqs: [
      { q: "How often should we come in?", a: "Most people do best with a cleaning and exam every six months, but we'll tailor the schedule to your needs." },
      { q: "At what age should my child first visit?", a: "We welcome children from age two. Early, positive visits build lifelong comfort with the dentist." },
      { q: "I get anxious at the dentist. Can you help?", a: "Absolutely. Gentle care is our specialty, and we offer comfort options including nitrous (laughing gas) sedation." },
    ],
    related: ["teeth-whitening", "emergency-dentistry", "dental-implants"],
    keywords: ["family dentist Houston", "dentist Bellaire TX", "kids dentist", "dental cleaning"],
  },
  {
    slug: "tmj-sleep-apnea",
    name: "TMJ & Sleep Apnea Treatment",
    shortName: "TMJ & Sleep",
    category: "Sleep & TMJ",
    icon: "sleep",
    tagline: "Relief for jaw pain & snoring",
    summary:
      "Custom solutions for jaw pain, clenching, snoring, and sleep apnea, including comfortable oral appliances.",
    featured: true,
    hasPage: true,
    image: "/images/services/sleep.webp",
    heroHeadline: "Sleep better, wake without jaw pain",
    overview: [
      "Persistent jaw pain, headaches, clenching, snoring, or restless sleep often trace back to your jaw and airway. Dr. Valter offers targeted, comfortable treatments, from custom night guards and Botox for TMJ tension to oral appliances for snoring and sleep apnea.",
      "As a member of the American Academy of Dental Sleep Medicine, the practice fits FDA-cleared devices such as ProSomnus® and Silent Nite®, a comfortable alternative to CPAP for many patients with snoring or mild-to-moderate sleep apnea.",
    ],
    benefits: [
      { title: "Real relief", description: "Address the source of jaw pain, headaches, and clenching, not just symptoms." },
      { title: "CPAP alternative", description: "Slim, custom oral appliances for snoring and mild-to-moderate apnea." },
      { title: "Better rest", description: "Quieter nights and more restful sleep for you and your partner." },
    ],
    process: [
      { title: "Evaluate", description: "We assess your jaw, bite, and airway and discuss your symptoms and sleep." },
      { title: "Custom appliance", description: "A precise, comfortable device is made to fit you, whether a night guard or sleep appliance." },
      { title: "Follow-up", description: "We fine-tune the fit and coordinate with your physician when appropriate." },
    ],
    faqs: [
      { q: "How is an oral appliance different from CPAP?", a: "It's a small, custom mouthpiece you wear at night: no mask, no hose, no machine. Many patients find it far easier to tolerate." },
      { q: "Can Botox really help jaw pain?", a: "Yes. Therapeutic Botox can relax overactive jaw muscles, easing clenching, tension, and related headaches." },
      { q: "Do you treat severe sleep apnea?", a: "Oral appliances suit snoring and mild-to-moderate apnea. For severe cases we coordinate with your physician on the best path." },
    ],
    related: ["family-dentistry", "botox-fillers", "emergency-dentistry"],
    keywords: ["TMJ treatment Houston", "sleep apnea dentist Bellaire", "snoring appliance", "night guard"],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: "Emergency",
    icon: "emergency",
    tagline: "Fast relief when it counts",
    summary:
      "In pain or broke a tooth? We make room for dental emergencies and get you comfortable, fast.",
    featured: true,
    hasPage: true,
    image: "/images/services/cosmetic.webp",
    heroHeadline: "Dental pain? We'll get you seen quickly",
    overview: [
      "A toothache, broken tooth, lost crown, or sudden swelling can't wait. We keep room in the schedule for dental emergencies and prioritize getting you out of pain and back to normal as quickly as possible.",
      "If you're experiencing a dental emergency, call us right away at (713) 668-8383. The sooner we see you, the more options we usually have to save the tooth and ease your discomfort.",
    ],
    benefits: [
      { title: "Seen fast", description: "Same-day emergency appointments whenever we can make them happen." },
      { title: "Out of pain first", description: "Our priority is relieving your discomfort, then solving the cause." },
      { title: "Honest options", description: "Clear explanations and a plan to protect the tooth when possible." },
    ],
    process: [
      { title: "Call us", description: "Phone (713) 668-8383 and describe what's happening, and we'll guide you." },
      { title: "Come in", description: "We see you quickly, diagnose the issue, and relieve the pain." },
      { title: "Fix & follow-up", description: "We stabilize the tooth and plan any further care needed." },
    ],
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe toothache, a knocked-out or broken tooth, a lost filling/crown, swelling, or bleeding that won't stop. When in doubt, call us." },
      { q: "I knocked out a tooth. What do I do?", a: "Handle it by the crown (not the root), gently rinse, keep it moist in milk or saliva, and call us immediately. Time matters." },
      { q: "Do you see emergencies if I'm not a patient?", a: "Yes. Call and we'll do our best to get you seen and comfortable." },
    ],
    related: ["family-dentistry", "crowns-bridges", "dental-implants"],
    keywords: ["emergency dentist Houston", "same day dentist Bellaire", "toothache", "broken tooth"],
  },

  {
    slug: "sedation",
    name: "Sedation & Comfort Options",
    shortName: "Sedation",
    category: "General & Preventive",
    icon: "sedation",
    tagline: "Relax through your visit",
    summary:
      "Nervous about the dentist? Nitrous oxide (laughing gas) and a calm, unhurried approach help you stay relaxed and comfortable from start to finish.",
    hasPage: true,
    image: "/images/services/sleep.webp",
    heroHeadline: "Anxiety-free dentistry, at your pace",
    overview: [
      "Dental anxiety is real, and at Bellaire Dental Group it's met with patience instead of pressure. Calming visits for nervous patients is one of the things we're known for. We explain every step in plain language, check in often, and never rush you through care.",
      "For extra ease, Dr. Valter offers nitrous oxide (laughing gas), a safe, gentle sedation that helps you relax during treatment and wears off within minutes, so you can drive yourself home and get back to your day. If you've put off dental care because of fear, this is a comfortable place to start.",
    ],
    benefits: [
      { title: "Calm by design", description: "A quiet, unhurried environment built around your comfort, not the clock." },
      { title: "Gentle nitrous sedation", description: "Laughing gas eases anxiety during treatment and wears off in minutes." },
      { title: "Go at your pace", description: "Tell us you're nervous and we'll explain each step and pause whenever you need." },
    ],
    process: [
      { title: "Tell us how you feel", description: "Share what makes you anxious (past experiences, sounds, needles) so we can plan around it." },
      { title: "Relax", description: "We offer comfort options including nitrous oxide and take treatment one calm step at a time." },
      { title: "Recover quickly", description: "Nitrous wears off within minutes, so there's no grogginess and no need for a ride home." },
    ],
    faqs: [
      { q: "Is nitrous oxide (laughing gas) safe?", a: "Yes. Nitrous oxide is one of the safest and most widely used sedatives in dentistry, suitable for both adults and children. You breathe it through a small mask, stay fully awake and aware, and the effects wear off within minutes of removing the mask." },
      { q: "Will I be asleep during treatment?", a: "No. Nitrous oxide helps you feel calm and relaxed while staying conscious and able to respond. It takes the edge off anxiety without putting you to sleep." },
      { q: "I have severe dental anxiety and haven't been in years. Can you help?", a: "Absolutely. You're exactly who we love to care for. There's zero judgment about how long it's been. We'll go slowly, explain everything, and offer comfort options so you can get back to healthy, comfortable visits." },
    ],
    related: ["family-dentistry", "emergency-dentistry", "childrens-dentistry"],
    keywords: ["sedation dentistry Houston", "nitrous oxide dentist Bellaire", "dental anxiety Houston", "laughing gas dentist", "sedation dentist near me"],
  },
  {
    slug: "laser-dentistry",
    name: "Laser Dentistry",
    category: "General & Preventive",
    icon: "laser",
    tagline: "Comfortable, precise care",
    summary:
      "Dental lasers treat gum and soft-tissue concerns and ease tooth sensitivity, often with less discomfort, less bleeding, and faster healing.",
    hasPage: true,
    image: "/images/services/family.webp",
    heroHeadline: "Gentler, more precise treatment with dental lasers",
    overview: [
      "Dentistry keeps getting more comfortable, and laser treatment is a big reason why. Dr. Valter uses dental lasers to address soft-tissue concerns and to relieve tooth sensitivity: a precise, conservative approach that often means less discomfort during and after your visit.",
      "Because lasers are so targeted, many procedures involve less bleeding and swelling and a quicker recovery than traditional methods. It's another way we keep your experience calm, efficient, and as gentle as possible.",
    ],
    benefits: [
      { title: "More comfortable", description: "Precise treatment often means less discomfort during and after your appointment." },
      { title: "Faster healing", description: "Targeted soft-tissue care typically means less bleeding, swelling, and downtime." },
      { title: "Conservative", description: "Lasers preserve more healthy tissue and support gentler, minimally invasive care." },
    ],
    process: [
      { title: "Evaluate", description: "We examine the area and confirm whether laser treatment is the best approach for you." },
      { title: "Treat", description: "Targeted laser care addresses the soft tissue or sensitivity with precision and comfort." },
      { title: "Heal", description: "Most patients recover quickly, with simple aftercare guidance to follow at home." },
    ],
    faqs: [
      { q: "What is laser dentistry used for?", a: "At Bellaire Dental Group, dental lasers are used primarily for soft-tissue (gum) treatments and to help relieve tooth sensitivity. Lasers allow for precise, conservative care in these situations." },
      { q: "Is laser treatment painful?", a: "Most patients find laser treatment more comfortable than traditional methods, with less discomfort during the procedure and a quicker, easier recovery afterward." },
      { q: "Does laser dentistry cost more?", a: "It depends on the specific treatment. We'll always review the recommended approach and give you a clear estimate before any care, and we offer financing through Cherry and CareCredit." },
    ],
    related: ["gum-disease", "family-dentistry", "oral-cancer-screening"],
    keywords: ["laser dentistry Houston", "soft tissue laser dentist Bellaire", "laser gum treatment Houston"],
  },

  // --- Also offered (listed on hub; no dedicated page yet) ---
  {
    slug: "botox-fillers",
    name: "Botox & Dermal Fillers",
    category: "Cosmetic Dentistry",
    icon: "botox",
    tagline: "Facial esthetics & TMJ",
    summary:
      "AAFE-trained facial esthetics: Botox and dermal fillers for a refreshed look and TMJ relief.",
    hasPage: false,
  },
  {
    slug: "snap-on-smile",
    name: "Snap-On Smile®",
    category: "Cosmetic Dentistry",
    icon: "smile",
    tagline: "A removable new smile",
    summary:
      "A custom, removable appliance that gives you a beautiful smile with no drilling or injections.",
    hasPage: false,
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    category: "Restorative",
    icon: "crown",
    tagline: "Restore damaged teeth",
    summary:
      "Natural-looking crowns and bridges that rebuild strength and fill gaps from missing teeth.",
    hasPage: false,
  },
  {
    slug: "fillings",
    name: "Tooth-Colored Fillings",
    category: "General & Preventive",
    icon: "filling",
    tagline: "Invisible cavity repair",
    summary:
      "Mercury-free composite fillings matched to your tooth, strong, safe, and seamless.",
    hasPage: false,
  },
  {
    slug: "gum-disease",
    name: "Gum Disease Treatment",
    category: "General & Preventive",
    icon: "gum",
    tagline: "Protect your foundation",
    summary:
      "Gentle, effective periodontal care (including laser dentistry) to treat and reverse gum disease.",
    hasPage: false,
  },
  {
    slug: "oral-cancer-screening",
    name: "Oral Cancer Screening",
    category: "General & Preventive",
    icon: "screening",
    tagline: "Early detection saves lives",
    summary:
      "Quick, painless screenings at your checkups, plus advanced DIAGNOdent™ cavity detection.",
    hasPage: false,
  },
  {
    slug: "dentures",
    name: "Dentures & Partials",
    category: "Restorative",
    icon: "dentures",
    tagline: "Comfortable, confident smiles",
    summary:
      "Natural-looking full and partial dentures, including implant-secured options for a stable fit.",
    hasPage: false,
  },
  {
    slug: "childrens-dentistry",
    name: "Children's Dentistry",
    category: "General & Preventive",
    icon: "child",
    tagline: "Happy first visits",
    summary:
      "Warm, patient care for kids from age 2, building healthy habits and calm dental experiences.",
    hasPage: false,
  },
];

export const pageServices = services.filter((s) => s.hasPage);
export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory() {
  return SERVICE_CATEGORY_ORDER.map((category) => ({
    category,
    items: services.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0);
}
