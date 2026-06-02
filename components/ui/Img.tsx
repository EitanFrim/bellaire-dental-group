import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

/**
 * Drop-in next/image wrapper that base-path-prefixes string `src` values for
 * static-export builds. Use this instead of next/image for any local /images
 * asset so it resolves on GitHub Pages project subpaths.
 */
export function Img({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? asset(src) : src;
  return <Image src={resolved} {...props} />;
}
