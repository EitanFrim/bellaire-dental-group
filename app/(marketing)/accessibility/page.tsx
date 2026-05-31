import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Bellaire Dental Group is committed to making our website and office accessible to everyone, in line with WCAG 2.1 AA guidelines.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      updated="May 2026"
      crumbLabel="Accessibility"
      crumbPath="/accessibility"
    >
      <p>
        {practice.name} is committed to ensuring digital accessibility for people of all
        abilities. We are continually improving the user experience for everyone and
        applying the relevant accessibility standards.
      </p>

      <h2>Our standard</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        These guidelines explain how to make web content more accessible for people with a
        wide range of disabilities.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Maintain sufficient color contrast for readability</li>
        <li>Support full keyboard navigation and visible focus states</li>
        <li>Respect the &quot;reduced motion&quot; setting for animations</li>
        <li>Provide meaningful text alternatives for images</li>
        <li>Use clear, semantic structure and labels on forms</li>
      </ul>

      <h2>In our office</h2>
      <p>
        Our Bellaire office is wheelchair accessible with free on-site parking. If you
        need any accommodation for your visit, please let us know in advance and
        we&apos;ll be glad to help.
      </p>

      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of our website. If you encounter a
        barrier or need information in a different format, please call us at{" "}
        <a href={`tel:${practice.phone.tel}`}>{practice.phone.display}</a> and we&apos;ll
        work to provide what you need.
      </p>
    </LegalLayout>
  );
}
