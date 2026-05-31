// One-time asset prep: places provided photos into public/images with clean
// names, and derives favicons + an OG image. next/image handles WebP/AVIF
// conversion + responsive sizing at request time, so originals are kept intact.
import sharp from "sharp";
import { mkdirSync, copyFileSync } from "fs";

const dirs = ["team", "office", "lifestyle", "brand"];
for (const d of dirs) mkdirSync(`public/images/${d}`, { recursive: true });

const copies = [
  ["resources/Regina.jpg", "public/images/team/dr-regina-valter.jpg"],
  ["resources/office.jpg", "public/images/office/lobby.jpg"],
  ["resources/office4.jpg", "public/images/office/waiting.jpg"],
  ["resources/office2.jpg", "public/images/office/entry.jpg"],
  ["resources/office3.jpg", "public/images/office/detail.jpg"],
  ["resources/banner.jpg", "public/images/lifestyle/couple.jpg"],
  ["resources/logo.png", "public/images/brand/logo.png"],
];
for (const [s, d] of copies) copyFileSync(s, d);

// Favicons / app icons from the logo (square, navy background).
await sharp("resources/logo.png").resize(512, 512).png().toFile("app/icon.png");
await sharp("resources/logo.png").resize(180, 180).png().toFile("app/apple-icon.png");
await sharp("resources/logo.png").resize(512, 512).png().toFile("public/images/brand/icon-512.png");

// OG image — the provided banner is already a branded lockup; crop to 1200x630.
await sharp("resources/banner.jpg")
  .resize(1200, 630, { fit: "cover", position: "right" })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile("public/og.jpg");

console.log("✓ images prepared");
