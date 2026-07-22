import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { locations } from "@/lib/locations";

/**
 * Thin strip linking a service page to every neighborhood page: reinforces
 * "service + area" relevance and gives crawlers a consistent path between
 * the two page types.
 */
export function ServingAreas({ serviceName }: { serviceName?: string }) {
  return (
    <section className="border-t border-line py-12">
      <Container>
        <p className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-faint">
          <span className="text-bronze">
            {serviceName ? `${serviceName} near you` : "Serving"}
          </span>
          {locations.map((l, i) => (
            <span key={l.slug} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-faint/50">
                  /
                </span>
              )}
              <Link
                href={`/locations/${l.slug}`}
                className="text-ink-soft transition-colors hover:text-ink"
              >
                {l.shortName ?? l.area}
              </Link>
            </span>
          ))}
          <span aria-hidden="true" className="text-ink-faint/50">
            /
          </span>
          <span>Greater Houston</span>
        </p>
      </Container>
    </section>
  );
}
