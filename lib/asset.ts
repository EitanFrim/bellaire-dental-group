/**
 * Prefix a public asset path with the deploy base path.
 *
 * In static-export mode served from a project subpath (GitHub Pages at
 * /<repo>), next/image with `unoptimized` does NOT auto-prepend basePath to the
 * src, so local /images/... URLs would 404. This helper fixes that. It's a
 * no-op when NEXT_PUBLIC_BASE_PATH is empty (custom domain / Vercel).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  if (!path.startsWith("/")) return path; // external or already-resolved
  return `${BASE}${path}`;
}
