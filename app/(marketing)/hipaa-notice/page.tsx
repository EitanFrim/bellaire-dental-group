import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { practice, fullAddress } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices (HIPAA)",
  description:
    "Bellaire Dental Group's HIPAA Notice of Privacy Practices describes how your medical information may be used and disclosed, and your rights.",
  alternates: { canonical: "/hipaa-notice" },
};

export default function HipaaPage() {
  return (
    <LegalLayout
      title="Notice of Privacy Practices"
      updated="May 2026"
      crumbLabel="HIPAA Notice"
      crumbPath="/hipaa-notice"
    >
      <p>
        <strong>
          This notice describes how medical information about you may be used and
          disclosed and how you can get access to this information. Please review it
          carefully.
        </strong>
      </p>

      <h2>Our commitment to your privacy</h2>
      <p>
        {practice.name} is committed to protecting the privacy of your protected health
        information (PHI) in accordance with the Health Insurance Portability and
        Accountability Act (HIPAA) and applicable Texas law.
      </p>

      <h2>How we may use and disclose your information</h2>
      <ul>
        <li>
          <strong>Treatment:</strong> to provide, coordinate, and manage your dental care.
        </li>
        <li>
          <strong>Payment:</strong> to bill and obtain payment from you or your insurer.
        </li>
        <li>
          <strong>Health care operations:</strong> for quality, training, and
          administrative purposes that support your care.
        </li>
        <li>
          <strong>As required by law:</strong> when disclosure is required by federal,
          state, or local law.
        </li>
      </ul>

      <h2>Your rights</h2>
      <ul>
        <li>To inspect and request a copy of your records</li>
        <li>To request corrections to your records</li>
        <li>To request restrictions on certain uses and disclosures</li>
        <li>To request confidential communications</li>
        <li>To receive an accounting of certain disclosures</li>
        <li>To receive a paper copy of this notice</li>
      </ul>

      <h2>Website forms</h2>
      <p>
        Information submitted through our website (such as an appointment request) is used
        only to respond to and schedule your visit. Please do not include detailed medical
        or sensitive information in online forms; we&apos;ll gather what we need securely
        at your appointment.
      </p>

      <h2>Questions or complaints</h2>
      <p>
        If you have questions about this notice or believe your privacy rights have been
        violated, please contact us:
      </p>
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
