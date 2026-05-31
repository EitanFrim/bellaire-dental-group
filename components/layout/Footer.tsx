import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { FacebookIcon, InstagramIcon, YelpIcon } from "@/components/brand/SocialIcons";
import { BookButton } from "@/components/booking/BookButton";
import { Container } from "@/components/ui/Container";
import { footerPracticeLinks, legalLinks } from "@/lib/nav";
import { featuredServices } from "@/lib/services";
import { practice, groupedHours, fullAddress } from "@/lib/practice";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-navy-900 text-navy-100">
      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:gap-8 lg:py-20">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Logo theme="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
            {practice.shortDescription}
          </p>
          <div className="mt-5 flex gap-2.5">
            <SocialLink href={practice.social.facebook} label="Facebook">
              <FacebookIcon className="h-[18px] w-[18px]" />
            </SocialLink>
            <SocialLink href={practice.social.instagram} label="Instagram">
              <InstagramIcon className="h-[18px] w-[18px]" />
            </SocialLink>
            <SocialLink href={practice.social.yelp} label="Yelp">
              <YelpIcon className="h-[18px] w-[18px]" />
            </SocialLink>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {featuredServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-navy-200 transition-colors hover:text-cyan-300"
                >
                  {s.shortName ?? s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                All services →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Practice */}
        <nav aria-label="Practice">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Practice
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerPracticeLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-navy-200 transition-colors hover:text-cyan-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Visit us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-200">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <a href={practice.directionsUrl} className="hover:text-cyan-300">
                {practice.address.street}, {practice.address.suite}
                <br />
                {practice.address.locality}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <a href={`tel:${practice.phone.tel}`} className="hover:text-cyan-300">
                {practice.phone.display}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <span>
                {groupedHours().map((g) => (
                  <span key={g.label} className="block">
                    <span className="text-navy-100">{g.label}</span> {g.value}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <BookButton variant="primary" size="sm" className="mt-5">
            Book appointment <ArrowRight className="h-4 w-4" />
          </BookButton>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-300 md:flex-row">
          <p>
            © {year} {practice.name}. {practice.womenOwned && "Women-owned. "}
            <span className="sr-only">{fullAddress()}</span>
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-cyan-300">
                {l.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-100 transition-colors hover:bg-cyan-400 hover:text-navy-950"
    >
      {children}
    </a>
  );
}
