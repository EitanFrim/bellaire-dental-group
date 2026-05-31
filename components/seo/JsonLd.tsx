/** Renders a JSON-LD <script> for structured data. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema is static/trusted, generated from our own data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
