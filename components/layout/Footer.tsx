import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { BookButton } from "@/components/booking/BookButton";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { footerPracticeLinks, legalLinks } from "@/lib/nav";
import { featuredServices } from "@/lib/services";
import { practice, groupedHours, fullAddress } from "@/lib/practice";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-night text-bone/70">
      {/* Statement + CTA */}
      <Container className="border-b border-line-light py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-bone sm:text-4xl">
            A calmer kind of dentistry,{" "}
            <span className="accent-italic">in the heart of Houston</span>.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BookButton variant="light" size="md">
              Book appointment <ArrowRight size={15} />
            </BookButton>
            <a
              href={`tel:${practice.phone.tel}`}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[2px] border border-white/25 px-7 text-sm font-medium text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              {practice.phone.display}
            </a>
          </div>
        </div>
      </Container>

      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Logo theme="light" height={32} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/60">
            {practice.shortDescription}
          </p>
          <div className="label mt-6 flex flex-wrap gap-x-5 gap-y-2 text-bone/50">
            <a
              href={practice.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Instagram
            </a>
            <a
              href={practice.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Facebook
            </a>
            <a
              href={practice.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Yelp
            </a>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="label text-bone/45">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {featuredServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-bone/70 transition-colors hover:text-bone"
                >
                  {s.shortName ?? s.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-bone transition-colors hover:text-bronze-soft"
              >
                All services <ArrowRight size={13} />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Practice */}
        <nav aria-label="Practice">
          <h3 className="label text-bone/45">Practice</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {footerPracticeLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-bone/70 transition-colors hover:text-bone"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="label text-bone/45">Visit</h3>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed">
            <li>
              <a
                href={practice.directionsUrl}
                className="text-bone/70 transition-colors hover:text-bone"
              >
                {practice.address.street}, {practice.address.suite}
                <br />
                {practice.address.locality}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </a>
            </li>
            <li>
              <a
                href={`tel:${practice.phone.tel}`}
                className="tnum text-bone/70 transition-colors hover:text-bone"
              >
                {practice.phone.display}
              </a>
            </li>
            <li className="space-y-1">
              {groupedHours().map((g) => (
                <p key={g.label} className="tnum">
                  <span className="text-bone">{g.label}</span>{" "}
                  <span className="text-bone/60">{g.value}</span>
                </p>
              ))}
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-line-light">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-bone/40 md:flex-row">
          <p>
            © {year} {practice.name}. {practice.womenOwned && "Women-owned. "}
            <span className="sr-only">{fullAddress()}</span>
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-bone"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
