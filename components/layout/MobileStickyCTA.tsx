"use client";

import { useEffect, useState } from "react";
import { Phone } from "@/components/ui/Icons";
import { useBooking } from "@/components/booking/BookingProvider";
import { practice } from "@/lib/practice";
import { cn } from "@/lib/utils";

/** Persistent one-tap Call + Book bar on mobile - appears once past the hero. */
export function MobileStickyCTA() {
  const { open } = useBooking();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="flex items-stretch border-t border-line bg-paper pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${practice.phone.tel}`}
          className="flex h-14 flex-1 items-center justify-center gap-2 border-r border-line text-sm font-medium text-ink"
        >
          <Phone size={14} /> Call
        </a>
        <button
          onClick={open}
          className="flex h-14 flex-[1.6] items-center justify-center bg-ink text-sm font-medium text-bone"
        >
          Book appointment
        </button>
      </div>
    </div>
  );
}
