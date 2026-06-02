import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 builds a fully static site for GitHub Pages:
 *  - output: "export" (no server) → next/image must be unoptimized
 *  - basePath/assetPrefix set when serving from a project subpath
 *    (https://<user>.github.io/<repo>); leave PAGES_BASE_PATH empty for a
 *    custom domain at the root (bellairedentalgroup.com).
 *
 * Without STATIC_EXPORT the app runs fully featured (server image optimization,
 * API routes, ISR) — e.g. on Vercel — with no changes.
 */
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Static hosts can't run the image optimizer.
    unoptimized: isExport,
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
    ],
  },
  ...(isExport
    ? {
        output: "export" as const,
        basePath: basePath || undefined,
        // Make asset/router base available to the client for the manifest etc.
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [
            { source: "/services.html", destination: "/services", permanent: true },
            { source: "/contact.html", destination: "/contact", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
