import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { practice } from "@/lib/practice";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bellairedentalgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bellaire Dental Group | Gentle Dentist in Houston, TX",
    template: "%s | Bellaire Dental Group",
  },
  description: practice.shortDescription,
  applicationName: practice.name,
  keywords: [
    "dentist Houston",
    "dentist Bellaire TX",
    "cosmetic dentist Houston",
    "family dentist Houston",
    "Invisalign Houston",
    "dental implants Houston",
    "emergency dentist Houston",
  ],
  authors: [{ name: practice.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: practice.name,
    url: siteUrl,
    title: "Bellaire Dental Group | Gentle Dentist in Houston, TX",
    description: practice.shortDescription,
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bellaire Dental Group — modern dentistry, gentle care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellaire Dental Group | Gentle Dentist in Houston, TX",
    description: practice.shortDescription,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e2a56",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream">
        <SiteJsonLd />
        <SmoothScroll>
          <BookingProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <MobileStickyCTA />
          </BookingProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
