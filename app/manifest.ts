import type { MetadataRoute } from "next";
import { practice } from "@/lib/practice";
import { asset } from "@/lib/asset";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return {
    name: practice.name,
    short_name: "Bellaire Dental",
    description: practice.shortDescription,
    start_url: base ? `${base}/` : "/",
    scope: base ? `${base}/` : "/",
    display: "standalone",
    background_color: "#f6f3ec",
    theme_color: "#0f1522",
    icons: [
      { src: asset("/icon.png"), sizes: "512x512", type: "image/png" },
      { src: asset("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}
