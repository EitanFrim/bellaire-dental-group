"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { BrandMark } from "@/components/brand/BrandMark";
import { ServiceIcon } from "@/components/brand/ServiceIcon";
import { BookButton } from "@/components/booking/BookButton";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/nav";
import { featuredServices } from "@/lib/services";
import { practice } from "@/lib/practice";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-line/70 shadow-[0_6px_24px_-14px_rgba(10,31,64,0.3)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo theme="dark" />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMega ? (
              <ServicesDropdown key={link.href} />
            ) : (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${practice.phone.tel}`}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <Phone className="h-4 w-4 text-cyan-600" />
            <span className="hidden xl:inline">{practice.phone.display}</span>
          </a>
          <BookButton size="sm" variant="primary">
            Book appointment
          </BookButton>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
    >
      {children}
    </Link>
  );
}

function ServicesDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
      >
        Services
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-white p-3 shadow-2xl">
          {featuredServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-cream"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua text-navy-700">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-navy-900">
                  {s.shortName ?? s.name}
                </span>
                <span className="block text-xs text-ink-soft">{s.tagline}</span>
              </span>
            </Link>
          ))}
          <Link
            href="/services"
            className="col-span-2 mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-navy-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-cream transition-opacity duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo theme="dark" />
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-navy-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </Container>

      <Container className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto pb-10">
        <nav className="flex flex-col gap-1 border-b border-line py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-2xl px-3 py-3 font-display text-2xl text-navy-900 transition-colors hover:bg-white"
            >
              {link.label}
              <ArrowRight className="h-5 w-5 text-cyan-500" />
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl px-3 py-3 font-display text-2xl text-navy-900 transition-colors hover:bg-white"
          >
            Blog
            <ArrowRight className="h-5 w-5 text-cyan-500" />
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <BookButton variant="primary" size="lg" className="w-full">
            Book appointment
          </BookButton>
          <a
            href={`tel:${practice.phone.tel}`}
            className="flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-800"
          >
            <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
          </a>
          <p className="flex items-center justify-center gap-2 pt-2 text-sm text-ink-soft">
            <BrandMark className="h-4 w-4" /> {practice.ratings.google.value}★ ·{" "}
            {practice.ratings.google.count} Google reviews
          </p>
        </div>
      </Container>
    </div>
  );
}
