/**
 * Blog content. Posts answer real patient questions to build topical authority
 * and capture long-tail local search. Content is structured (not MDX) so it
 * renders server-side as clean, indexable HTML with guaranteed builds.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  cover?: string;
  related?: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "dental-cleaning-cost-houston",
    title: "How Much Does a Dental Cleaning Cost in Houston? (2026 Guide)",
    excerpt:
      "Typical Houston prices for a cleaning, exam, and X-rays, with and without insurance, what changes the price, and how to keep preventive care affordable.",
    date: "2026-06-10",
    readMinutes: 6,
    category: "Costs & Insurance",
    cover: "/images/studio/visit-care.webp",
    related: ["how-often-should-you-see-the-dentist", "what-to-expect-first-visit"],
    body: [
      {
        type: "p",
        text: "Price is the number one reason people put off a dental cleaning, so let's answer it plainly. In the Houston area in 2026, a standard adult cleaning typically runs about $100 to $200 without insurance. A full new-patient visit (cleaning, comprehensive exam, and X-rays) usually falls between $150 and $350. With most PPO dental insurance, preventive visits like these are commonly covered at or near 100 percent, which means many insured patients pay little or nothing out of pocket.",
      },
      { type: "h2", text: "What exactly am I paying for?" },
      {
        type: "ul",
        items: [
          "Professional cleaning (prophylaxis): removing plaque and tartar that home brushing physically cannot reach",
          "Comprehensive exam: the dentist checks every tooth, your gums, your bite, and existing dental work",
          "Digital X-rays: low-radiation images that reveal decay between teeth and under old fillings",
          "Oral cancer screening: a quick, painless check that is included in every exam at our office",
        ],
      },
      { type: "h2", text: "Why do some cleanings cost more than others?" },
      {
        type: "p",
        text: "If it has been years since your last visit, or if gum disease has developed, you may need a deep cleaning (scaling and root planing) instead of a standard one. In Houston, deep cleanings typically range from about $150 to $350 per quadrant of the mouth. It is a different procedure treating a different problem, which is why the price differs. A good dental office will always tell you which one you actually need, and why, before anything happens.",
      },
      { type: "h2", text: "Is skipping cleanings actually cheaper?" },
      {
        type: "p",
        text: "The math says no. According to CDC data, roughly one in four American adults is living with untreated tooth decay. Small cavities caught at a routine cleaning are typically a one-visit, low-cost fix. Left alone, that same tooth can progress to needing a crown or a root canal, which costs many times more. Preventive care is the least expensive dentistry there is.",
      },
      { type: "h2", text: "What if I do not have dental insurance?" },
      {
        type: "p",
        text: "You still have good options. Bellaire Dental Group offers an in-office dental savings plan: an annual membership that covers routine preventive care and discounts other treatment, with no claim forms, deductibles, or waiting periods. We also offer flexible monthly financing through Cherry and CareCredit, and we always give you a clear, itemized estimate before any treatment begins.",
      },
      {
        type: "p",
        text: "Due (or overdue) for a cleaning in the Houston or Bellaire area? We would love to see you, and we promise a judgment-free welcome no matter how long it has been. Book online in under a minute or call (713) 668-8383.",
      },
    ],
  },
  {
    slug: "emergency-dentist-houston-first-30-minutes",
    title: "Emergency Dentist in Houston: What to Do in the First 30 Minutes",
    excerpt:
      "A knocked-out tooth, a cracked crown, or sudden pain? Here's exactly what to do first, when to go to the ER instead, and how same-day dental visits work.",
    date: "2026-07-08",
    readMinutes: 6,
    category: "Emergency Care",
    cover: "/images/studio/visit-arrival.webp",
    related: ["dental-cleaning-cost-houston", "what-to-expect-first-visit"],
    body: [
      {
        type: "p",
        text: "Dental emergencies are decided in minutes, not days. The single most important fact to know: a knocked-out adult tooth has its best chance of being saved if it is back in place within about 30 to 60 minutes, according to American Dental Association guidance. Here is exactly what to do for the most common emergencies, from a dental office in Bellaire that holds room in the schedule for same-day emergency visits.",
      },
      { type: "h2", text: "A tooth got knocked out. What do I do right now?" },
      {
        type: "ul",
        items: [
          "Pick the tooth up by the crown (the chewing part). Do not touch the root.",
          "If it is dirty, rinse it gently with milk or saline for a few seconds. Do not scrub it.",
          "If you can, place it back into the socket and bite gently on gauze or a clean cloth to hold it.",
          "If you cannot, keep it in a cup of cold milk (not water) and get to a dentist immediately.",
          "Call the dental office on the way: (713) 668-8383. Minutes genuinely matter.",
        ],
      },
      { type: "h2", text: "Should I go to the ER or to a dentist?" },
      {
        type: "p",
        text: "Go to the emergency room for anything life-threatening: trouble breathing or swallowing, uncontrolled bleeding, facial swelling that spreads toward the eye or neck, or a suspected jaw fracture. For everything else (severe toothache, knocked-out or broken teeth, lost crowns, abscess pain), a dentist is the right call. The ADA's Health Policy Institute has counted more than two million ER visits a year for dental pain in the US, and most end with painkillers and a referral, because ERs generally cannot do definitive dental treatment. A same-day dental visit fixes the actual problem, usually for far less money.",
      },
      { type: "h2", text: "What about a severe toothache?" },
      {
        type: "p",
        text: "Rinse with warm salt water, floss gently to rule out trapped food, and take an over-the-counter pain reliever as directed. Do not put aspirin directly on the gum (it burns tissue), and do not use heat packs on your face. A toothache that wakes you at night or comes with swelling usually means infection: call for a same-day visit rather than waiting it out. Dental infections do not resolve on their own.",
      },
      { type: "h2", text: "Chipped tooth, broken crown, or lost filling?" },
      {
        type: "p",
        text: "Save any pieces, rinse your mouth gently, and cover any sharp edge with dental wax or sugar-free gum if it is cutting your cheek. These are urgent rather than instant emergencies: same-day or next-day care is usually right, and the sooner the tooth is protected, the more of it we can typically save.",
      },
      { type: "h2", text: "How fast can I actually be seen in Houston?" },
      {
        type: "p",
        text: "At Bellaire Dental Group we hold room in the schedule for emergencies and will do everything we can to see you the same day you call. We are at 6699 Chimney Rock Rd., Suite 101, minutes from Bellaire, Meyerland, West University, and the Galleria area, with free parking at the door. If you are in pain right now, call (713) 668-8383 and we will get you comfortable.",
      },
    ],
  },
  {
    slug: "how-often-should-you-see-the-dentist",
    title: "How Often Should You Really See the Dentist?",
    excerpt:
      "The short answer is twice a year for most people, but here's why, and when you might need to come in more often.",
    date: "2026-04-22",
    readMinutes: 4,
    category: "Preventive Care",
    cover: "/images/office/lobby.jpg",
    related: ["what-to-expect-first-visit", "are-dental-x-rays-safe"],
    body: [
      {
        type: "p",
        text: "If you've ever wondered whether twice-a-year dental visits are really necessary, you're not alone. It's one of the most common questions we hear at Bellaire Dental Group, and the honest answer is: for most people, yes, but it depends on you.",
      },
      { type: "h2", text: "The general rule: every six months" },
      {
        type: "p",
        text: "For the average healthy adult, a checkup and professional cleaning every six months is the sweet spot. It lets us catch small problems (a tiny cavity, early gum inflammation) while they're easy and inexpensive to fix, long before they become painful or costly.",
      },
      { type: "h2", text: "When you might need to come in more often" },
      {
        type: "ul",
        items: [
          "You have gum disease or a history of frequent cavities",
          "You're pregnant (hormonal changes affect your gums)",
          "You smoke or use tobacco",
          "You have diabetes or another condition that affects oral health",
          "You're in active orthodontic or implant treatment",
        ],
      },
      {
        type: "p",
        text: "In these cases, we may recommend visits every three to four months to keep things on track. We'll always tailor the schedule to your needs rather than applying a one-size-fits-all rule.",
      },
      { type: "h2", text: "Why prevention pays off" },
      {
        type: "p",
        text: "Regular visits aren't just about clean teeth. They include an oral cancer screening, a gum health check, and a chance to spot issues like grinding or bite problems early. Prevention is almost always gentler on both your mouth and your wallet than treatment.",
      },
      {
        type: "p",
        text: "Due for a checkup? We'd love to see you. Book online or call (713) 668-8383. New patients of every age are always welcome.",
      },
    ],
  },
  {
    slug: "what-to-expect-first-visit",
    title: "What to Expect at Your First Dental Visit With Us",
    excerpt:
      "Nervous about a new dentist? Here's exactly what happens at your first visit to Bellaire Dental Group, step by step.",
    date: "2026-03-15",
    readMinutes: 5,
    category: "New Patients",
    cover: "/images/office/entry.jpg",
    related: ["how-often-should-you-see-the-dentist", "easing-dental-anxiety"],
    body: [
      {
        type: "p",
        text: "Walking into a new dental office can feel uncertain, especially if it's been a while. We get it, and we've designed your first visit to be calm, unhurried, and completely judgment-free.",
      },
      { type: "h2", text: "Before you arrive" },
      {
        type: "p",
        text: "Once you book, we'll confirm your appointment and let you know what to bring: a photo ID, your insurance card if you have one, and a list of any medications. If you'd like, we can verify your insurance benefits ahead of time so there are no surprises.",
      },
      { type: "h2", text: "A warm welcome" },
      {
        type: "p",
        text: "When you arrive, you'll be greeted by name and offered coffee or water in our comfortable lounge. New-patient paperwork is quick, and we're happy to help with any of it.",
      },
      { type: "h2", text: "Your comprehensive exam" },
      {
        type: "p",
        text: "Dr. Valter will review your health history and listen to your concerns and goals. We'll take gentle, low-radiation digital images, examine your teeth and gums, and perform an oral cancer screening. Nothing is rushed, and we explain everything as we go.",
      },
      { type: "h2", text: "Your personalized plan" },
      {
        type: "p",
        text: "Afterward, we'll walk you through what we found in plain language: no jargon, no pressure. Together we'll build a plan prioritized around what matters most to you, including clear cost estimates before any treatment.",
      },
      {
        type: "p",
        text: "That's it. Most new patients tell us it's the most relaxed dental visit they've had. Ready to experience it? Book online or call (713) 668-8383.",
      },
    ],
  },
  {
    slug: "easing-dental-anxiety",
    title: "7 Gentle Ways We Help Ease Dental Anxiety",
    excerpt:
      "Dental anxiety is real and incredibly common. Here's how we make every visit calmer, and what you can do too.",
    date: "2026-02-10",
    readMinutes: 5,
    category: "Comfort & Care",
    cover: "/images/office/waiting.jpg",
    related: ["what-to-expect-first-visit", "how-often-should-you-see-the-dentist"],
    body: [
      {
        type: "p",
        text: "If the thought of the dentist makes your heart race, you're far from alone. Dental anxiety affects a huge number of adults. The good news: with the right approach, dental visits can feel genuinely calm. Here's how we help.",
      },
      { type: "h2", text: "1. We never rush you" },
      {
        type: "p",
        text: "We don't double-book or hurry appointments. You'll have time to ask questions, take breaks, and proceed at your own pace.",
      },
      { type: "h2", text: "2. We explain everything first" },
      {
        type: "p",
        text: "Fear often comes from the unknown. We talk through each step before we do it, so there are no surprises.",
      },
      { type: "h2", text: "3. Comfort options like nitrous" },
      {
        type: "p",
        text: "Nitrous oxide (laughing gas) is a safe, gentle way to take the edge off. It wears off quickly, so you can usually drive yourself home.",
      },
      { type: "h2", text: "4. A calm, spa-like environment" },
      {
        type: "p",
        text: "From soft lighting to a quiet lounge and warm team, the whole space is designed to lower your heart rate the moment you walk in.",
      },
      { type: "h2", text: "5. A judgment-free zone" },
      {
        type: "p",
        text: "However long it's been, you'll never get a lecture. We meet you where you are and focus on moving forward.",
      },
      { type: "h2", text: "6. Signals you control" },
      {
        type: "p",
        text: "Agree on a simple hand signal for 'I need a pause,' and we'll stop immediately. Knowing you're in control makes a big difference.",
      },
      { type: "h2", text: "7. Small, steady steps" },
      {
        type: "p",
        text: "If you're very anxious, we can start with something simple (just a cleaning or a consultation) to build trust before anything more.",
      },
      {
        type: "p",
        text: "You deserve dental care that feels safe. If anxiety has kept you away, tell us. We'll take great care of you. Call (713) 668-8383 or book online.",
      },
    ],
  },
  {
    slug: "are-dental-x-rays-safe",
    title: "Are Dental X-Rays Safe? What Modern Imaging Really Means",
    excerpt:
      "Modern digital dental X-rays use very low radiation. Here's what they show and why they matter for your health.",
    date: "2026-01-18",
    readMinutes: 4,
    category: "Technology",
    cover: "/images/office/detail.jpg",
    related: ["how-often-should-you-see-the-dentist", "what-to-expect-first-visit"],
    body: [
      {
        type: "p",
        text: "X-rays are one of the most valuable tools in dentistry. They let us see what's hidden between and beneath your teeth. A common question is whether they're safe. With today's digital technology, the answer is reassuring.",
      },
      { type: "h2", text: "Digital means dramatically less radiation" },
      {
        type: "p",
        text: "Modern digital dental X-rays use a fraction of the radiation of older film systems: a very small dose, comparable to what you'd naturally encounter over a normal day or a short flight.",
      },
      { type: "h2", text: "What X-rays help us catch" },
      {
        type: "ul",
        items: [
          "Cavities between teeth that aren't visible to the eye",
          "Bone loss from gum disease",
          "Infections at the root of a tooth",
          "Problems with developing or impacted teeth",
        ],
      },
      { type: "h2", text: "How often do you need them?" },
      {
        type: "p",
        text: "It depends on your individual risk and history, not a fixed schedule. We only take images when they'll genuinely help your care, and we always use protective measures.",
      },
      {
        type: "p",
        text: "Have questions about imaging or anything else? We're happy to explain. Call (713) 668-8383 or book a visit online.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
