import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bellairedentalgroup.com";

/**
 * Explicitly welcome AI assistant crawlers (ChatGPT, Claude, Perplexity,
 * Google AI, etc.) so the practice can be cited and recommended in AI answers,
 * in addition to traditional search engines. Only the API is disallowed.
 */
const AI_AND_SEARCH_BOTS = [
  "GPTBot", // OpenAI / ChatGPT training + browsing
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic / Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Google Gemini / AI Overviews
  "GoogleOther",
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bingbot", // Bing / Copilot
  "DuckAssistBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Spell out AI/search agents so none are accidentally throttled.
      ...AI_AND_SEARCH_BOTS.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
