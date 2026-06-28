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
    default:
      "Dentist in Houston, TX | Bellaire Dental Group | Cosmetic & Family Dentistry",
    template: "%s | Bellaire Dental Group",
  },
  description:
    "Top-rated dentist in Houston, TX (4.9★, 350+ reviews). Bellaire Dental Group offers gentle cosmetic, family, implant & emergency dentistry from Dr. Regina Valter. Most PPO insurance accepted. Book online today.",
  applicationName: practice.name,
  keywords: [
    "dentist Houston",
    "dentist Bellaire TX",
    "dentist near me Houston",
    "cosmetic dentist Houston",
    "family dentist Houston",
    "emergency dentist Houston",
    "dental implants Houston",
    "Invisalign Houston",
    "veneers Houston",
    "best dentist Houston",
    "dentist for nervous patients Houston",
  ],
  authors: [{ name: practice.name }],
  creator: practice.name,
  publisher: practice.name,
  category: "Dentist",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: practice.name,
    url: siteUrl,
    title:
      "Dentist in Houston, TX | Bellaire Dental Group | Cosmetic & Family Dentistry",
    description:
      "Gentle, top-rated dentistry in Houston (4.9★, 350+ reviews). Cosmetic, family, implants & emergency care from Dr. Regina Valter. Book online today.",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bellaire Dental Group: modern dentistry, gentle care in Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Houston, TX | Bellaire Dental Group",
    description:
      "Gentle, top-rated cosmetic, family & emergency dentistry in Houston (4.9★, 350+ reviews). Book online today.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteJsonLd />
        <SmoothScroll>
          <BookingProvider>
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
            <MobileStickyCTA />
          </BookingProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
