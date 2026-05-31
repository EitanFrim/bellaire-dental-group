import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { practice, fullAddress } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bellaire Dental Group collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="May 2026" crumbLabel="Privacy" crumbPath="/privacy">
      <p>
        {practice.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
        privacy. This policy explains what information we collect through our website and
        how we use it. For information about your protected health information, please see
        our <a href="/hipaa-notice">Notice of Privacy Practices (HIPAA)</a>.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit an appointment request or contact form, we collect the
        information you provide — typically your name, phone number, email address, and
        the reason for your visit. We ask that you not include sensitive medical details
        in website forms.
      </p>
      <p>
        We also collect standard, non-identifying analytics (such as pages visited and
        device type) to understand how our site is used and to improve it.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your appointment requests and questions</li>
        <li>To contact you about scheduling and your care</li>
        <li>To improve our website and services</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers
        who help us operate (for example, scheduling or email delivery), and only as
        needed to provide that service, or when required by law.
      </p>

      <h2>Cookies &amp; analytics</h2>
      <p>
        Our site may use cookies and privacy-respecting analytics to measure traffic and
        performance. You can control cookies through your browser settings.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request that we update or delete the contact information you&apos;ve
        provided. To do so, contact us using the details below.
      </p>

      <h2>Contact us</h2>
      <p>
        {practice.name}
        <br />
        {fullAddress()}
        <br />
        <a href={`tel:${practice.phone.tel}`}>{practice.phone.display}</a>
      </p>
    </LegalLayout>
  );
}
