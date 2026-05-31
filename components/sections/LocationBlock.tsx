import { MapPin, Clock, Phone, Globe, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BookButton } from "@/components/booking/BookButton";
import { practice, groupedHours } from "@/lib/practice";

export function LocationBlock() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Visit us"
          title={
            <>
              In the heart of <span className="text-gradient">Bellaire</span>
            </>
          }
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon={MapPin} title="Our address">
              <a href={practice.directionsUrl} className="hover:text-cyan-700">
                {practice.address.street}, {practice.address.suite}
                <br />
                {practice.address.locality}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </a>
              <span className="mt-1 block text-xs text-ink-soft">{practice.parking}</span>
            </InfoCard>

            <InfoCard icon={Phone} title="Call or text">
              <a href={`tel:${practice.phone.tel}`} className="hover:text-cyan-700">
                {practice.phone.display}
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Hours">
              <ul className="space-y-0.5">
                {groupedHours().map((g) => (
                  <li key={g.label} className="flex justify-between gap-4">
                    <span className="font-medium text-navy-800">{g.label}</span>
                    <span className="text-ink-soft">{g.value}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={Globe} title="Languages">
              <p>{practice.languages.join(" · ")}</p>
            </InfoCard>

            {/* Financing */}
            <div className="rounded-3xl border border-line bg-white/70 p-5 sm:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                Insurance &amp; financing
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                We accept most PPO insurance and offer flexible monthly payment plans.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {practice.financing.map((f) => (
                  <a
                    key={f.name}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-cyan-300 hover:text-cyan-700"
                  >
                    {f.name} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <BookButton size="md" className="mt-5">
                Book your visit <ArrowRight className="h-4 w-4" />
              </BookButton>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[22rem] overflow-hidden rounded-3xl border border-line shadow-lg lg:min-h-full">
            <MapEmbed className="min-h-[22rem] lg:h-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-line bg-white/70 p-5">
      <div className="flex items-center gap-2 text-cyan-700">
        <Icon className="h-4 w-4" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-navy-800">{children}</div>
    </div>
  );
}
