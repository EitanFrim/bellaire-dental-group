import type { MetadataRoute } from "next";
import { practice } from "@/lib/practice";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: practice.name,
    short_name: "Bellaire Dental",
    description: practice.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f2",
    theme_color: "#0e2a56",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
