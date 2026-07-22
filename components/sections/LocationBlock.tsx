import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BookButton } from "@/components/booking/BookButton";
import { practice, groupedHours } from "@/lib/practice";

/** Practice facts as a tabular editorial sheet beside a hairline-framed map. */
export function LocationBlock() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="left"
          numeral="07"
          eyebrow="Visit us"
          title={
            <>
              In the heart of <span className="accent-italic">Bellaire</span>
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Facts sheet */}
          <div>
            <dl className="border-t border-line">
              <FactRow label="Address">
                <a
                  href={practice.directionsUrl}
                  className="transition-colors hover:text-bronze"
                >
                  {practice.address.street}, {practice.address.suite}
                  <br />
                  {practice.address.locality}, {practice.address.region}{" "}
                  {practice.address.postalCode}
                </a>
                <span className="mt-1.5 block text-xs text-ink-faint">
                  {practice.parking}
                </span>
              </FactRow>

              <FactRow label="Call or text">
                <a
                  href={`tel:${practice.phone.tel}`}
                  className="tnum transition-colors hover:text-bronze"
                >
                  {practice.phone.display}
                </a>
              </FactRow>

              <FactRow label="Hours">
                <ul className="w-full max-w-xs space-y-1">
                  {groupedHours().map((g) => (
                    <li key={g.label} className="tnum flex justify-between gap-6">
                      <span className="text-ink">{g.label}</span>
                      <span className="text-ink-soft">{g.value}</span>
                    </li>
                  ))}
                </ul>
              </FactRow>

              <FactRow label="Languages">
                <p>{practice.languages.join(" · ")}</p>
              </FactRow>

              <FactRow label="Insurance">
                <p className="text-ink-soft">
                  Most PPO insurance accepted, with flexible monthly plans
                  through{" "}
                  {practice.financing.map((f, i) => (
                    <span key={f.name}>
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-0.5 text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
                      >
                        {f.name}
                        <ArrowUpRight size={11} />
                      </a>
                      {i < practice.financing.length - 1 ? " and " : ""}
                    </span>
                  ))}
                  .
                </p>
              </FactRow>
            </dl>

            <BookButton size="md" variant="ink" className="mt-9">
              Book your visit <ArrowRight size={15} />
            </BookButton>
          </div>

          {/* Map */}
          <div className="border border-line bg-paper p-2.5">
            <div className="min-h-[22rem] overflow-hidden lg:h-full">
              <MapEmbed className="min-h-[22rem] lg:h-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-6 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
      <dt className="label pt-0.5 text-ink-faint">{label}</dt>
      <dd className="text-sm leading-relaxed text-ink">{children}</dd>
    </div>
  );
}
