"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Phone, Menu, Close, ChevronDown, ArrowRight } from "@/components/ui/Icons";
import { Logo } from "@/components/brand/Logo";
import { BookButton } from "@/components/booking/BookButton";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/nav";
import { serviceMenuGroups, getService } from "@/lib/services";
import { practice } from "@/lib/practice";
import { cn } from "@/lib/utils";

/** Routes whose hero is a dark, full-bleed visual the header sits on top of. */
const DARK_HERO_ROUTES = new Set(["/"]);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // Invert to white-on-dark while resting over a dark hero; the scrolled
  // solid state always wins so the header stays legible everywhere else.
  const overDark = DARK_HERO_ROUTES.has(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-bone" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo theme={overDark ? "light" : "dark"} height={34} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMega ? (
              <ServicesDropdown key={link.href} light={overDark} />
            ) : (
              <NavLink key={link.href} href={link.href} light={overDark}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${practice.phone.tel}`}
            className={cn(
              "tnum flex items-center gap-2 text-sm font-medium transition-colors",
              overDark ? "text-bone hover:text-white" : "text-ink hover:text-ink-soft",
            )}
          >
            <Phone size={14} />
            <span className="hidden xl:inline">{practice.phone.display}</span>
          </a>
          <BookButton size="sm" variant={overDark ? "light" : "ink"}>
            Book appointment
          </BookButton>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className={cn(
            "flex h-10 w-10 items-center justify-center transition-colors lg:hidden",
            overDark ? "text-bone" : "text-ink",
          )}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function NavLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium tracking-[0.01em] transition-colors",
        light ? "text-bone/80 hover:text-bone" : "text-ink-soft hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

function ServicesDropdown({ light = false }: { light?: boolean }) {
  return (
    <div className="group relative">
      <Link
        href="/services"
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium tracking-[0.01em] transition-colors",
          light ? "text-bone/80 hover:text-bone" : "text-ink-soft hover:text-ink",
        )}
      >
        Services
        <ChevronDown
          size={13}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="border border-line bg-paper p-8 shadow-[0_24px_60px_-32px_rgba(15,21,34,0.35)]">
          <div className="grid grid-cols-3 gap-x-10 gap-y-2">
            {serviceMenuGroups.map((group) => (
              <div key={group.label}>
                <p className="label pb-3 text-bronze">{group.label}</p>
                <div className="flex flex-col">
                  {group.slugs.map((slug) => {
                    const s = getService(slug);
                    if (!s) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="group/item border-t border-line py-2.5"
                      >
                        <span className="block text-sm font-medium text-ink transition-colors group-hover/item:text-bronze">
                          {s.shortName ?? s.name}
                        </span>
                        <span className="block pt-0.5 text-xs leading-relaxed text-ink-soft">
                          {s.tagline}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm font-medium text-ink transition-colors hover:text-bronze"
          >
            View all services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Portal to <body> so the overlay escapes the header's fixed/z-50 stacking
  // context. Without this, iOS Safari paints transformed/backdrop-blur page
  // sections on top of a position:fixed element nested inside another
  // position:fixed ancestor - leaving the menu stuck behind the page.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const menu = (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-bone transition-opacity duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <Container className="flex h-16 items-center justify-between border-b border-line">
        <Logo theme="dark" height={34} />
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-ink"
          aria-label="Close menu"
        >
          <Close size={22} />
        </button>
      </Container>

      <Container className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto pb-10">
        <nav className="flex flex-col py-2" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-baseline justify-between border-b border-line py-5"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-sm tnum text-bronze" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl text-ink">{link.label}</span>
              </span>
              <ArrowRight size={16} className="text-ink-soft" />
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={onClose}
            className="flex items-baseline justify-between border-b border-line py-5"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-display text-sm tnum text-bronze" aria-hidden="true">
                {String(navLinks.length + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-3xl text-ink">Blog</span>
            </span>
            <ArrowRight size={16} className="text-ink-soft" />
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <BookButton variant="ink" size="lg" className="w-full">
            Book appointment
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="tnum inline-flex h-[3.375rem] items-center justify-center gap-2.5 rounded-[2px] border border-line-strong text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            <Phone size={14} /> {practice.phone.display}
          </a>
          <p className="label pt-4 text-center text-ink-faint">
            {practice.ratings.google.value} stars · {practice.ratings.google.count}{" "}
            Google reviews
          </p>
        </div>
      </Container>
    </div>
  );

  if (!mounted) return null;
  return createPortal(menu, document.body);
}
