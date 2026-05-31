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
    slug: "how-often-should-you-see-the-dentist",
    title: "How Often Should You Really See the Dentist?",
    excerpt:
      "The short answer is twice a year for most people — but here's why, and when you might need to come in more often.",
    date: "2026-04-22",
    readMinutes: 4,
    category: "Preventive Care",
    cover: "/images/office/lobby.jpg",
    related: ["what-to-expect-first-visit", "are-dental-x-rays-safe"],
    body: [
      {
        type: "p",
        text: "If you've ever wondered whether twice-a-year dental visits are really necessary, you're not alone. It's one of the most common questions we hear at Bellaire Dental Group — and the honest answer is: for most people, yes, but it depends on you.",
      },
      { type: "h2", text: "The general rule: every six months" },
      {
        type: "p",
        text: "For the average healthy adult, a checkup and professional cleaning every six months is the sweet spot. It lets us catch small problems — a tiny cavity, early gum inflammation — while they're easy and inexpensive to fix, long before they become painful or costly.",
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
        text: "Due for a checkup? We'd love to see you. Book online or call (713) 668-8383 — new patients of every age are always welcome.",
      },
    ],
  },
  {
    slug: "what-to-expect-first-visit",
    title: "What to Expect at Your First Dental Visit With Us",
    excerpt:
      "Nervous about a new dentist? Here's exactly what happens at your first visit to Bellaire Dental Group — step by step.",
    date: "2026-03-15",
    readMinutes: 5,
    category: "New Patients",
    cover: "/images/office/entry.jpg",
    related: ["how-often-should-you-see-the-dentist", "easing-dental-anxiety"],
    body: [
      {
        type: "p",
        text: "Walking into a new dental office can feel uncertain — especially if it's been a while. We get it, and we've designed your first visit to be calm, unhurried, and completely judgment-free.",
      },
      { type: "h2", text: "Before you arrive" },
      {
        type: "p",
        text: "Once you book, we'll confirm your appointment and let you know what to bring: a photo ID, your insurance card if you have one, and a list of any medications. If you'd like, we can verify your insurance benefits ahead of time so there are no surprises.",
      },
      { type: "h2", text: "A warm welcome" },
      {
        type: "p",
        text: "When you arrive, you'll be greeted by name and offered coffee or water in our comfortable lounge. New-patient paperwork is quick — and we're happy to help with any of it.",
      },
      { type: "h2", text: "Your comprehensive exam" },
      {
        type: "p",
        text: "Dr. Valter will review your health history and listen to your concerns and goals. We'll take gentle, low-radiation digital images, examine your teeth and gums, and perform an oral cancer screening. Nothing is rushed, and we explain everything as we go.",
      },
      { type: "h2", text: "Your personalized plan" },
      {
        type: "p",
        text: "Afterward, we'll walk you through what we found in plain language — no jargon, no pressure. Together we'll build a plan prioritized around what matters most to you, including clear cost estimates before any treatment.",
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
      "Dental anxiety is real and incredibly common. Here's how we make every visit calmer — and what you can do too.",
    date: "2026-02-10",
    readMinutes: 5,
    category: "Comfort & Care",
    cover: "/images/office/waiting.jpg",
    related: ["what-to-expect-first-visit", "how-often-should-you-see-the-dentist"],
    body: [
      {
        type: "p",
        text: "If the thought of the dentist makes your heart race, you're far from alone — dental anxiety affects a huge number of adults. The good news: with the right approach, dental visits can feel genuinely calm. Here's how we help.",
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
        text: "If you're very anxious, we can start with something simple — just a cleaning or a consultation — to build trust before anything more.",
      },
      {
        type: "p",
        text: "You deserve dental care that feels safe. If anxiety has kept you away, tell us — we'll take great care of you. Call (713) 668-8383 or book online.",
      },
    ],
  },
  {
    slug: "are-dental-x-rays-safe",
    title: "Are Dental X-Rays Safe? What Modern Imaging Really Means",
    excerpt:
      "Modern digital dental X-rays use very low radiation — here's what they show and why they matter for your health.",
    date: "2026-01-18",
    readMinutes: 4,
    category: "Technology",
    cover: "/images/office/detail.jpg",
    related: ["how-often-should-you-see-the-dentist", "what-to-expect-first-visit"],
    body: [
      {
        type: "p",
        text: "X-rays are one of the most valuable tools in dentistry — they let us see what's hidden between and beneath your teeth. A common question is whether they're safe. With today's digital technology, the answer is reassuring.",
      },
      { type: "h2", text: "Digital means dramatically less radiation" },
      {
        type: "p",
        text: "Modern digital dental X-rays use a fraction of the radiation of older film systems — a very small dose, comparable to what you'd naturally encounter over a normal day or a short flight.",
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
        text: "It depends on your individual risk and history — not a fixed schedule. We only take images when they'll genuinely help your care, and we always use protective measures.",
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
