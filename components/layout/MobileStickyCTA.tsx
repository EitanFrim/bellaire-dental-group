"use client";

import { useEffect, useState } from "react";
import { Phone, CalendarCheck } from "lucide-react";
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
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center gap-2 rounded-2xl border border-line bg-white/90 p-2 shadow-[0_8px_30px_-8px_rgba(10,31,64,0.45)] backdrop-blur">
        <a
          href={`tel:${practice.phone.tel}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-navy-200 font-semibold text-navy-800"
        >
          <Phone className="h-4 w-4 text-cyan-600" /> Call
        </a>
        <button
          onClick={open}
          className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-cyan-400 font-semibold text-navy-950 shadow-[0_8px_24px_-8px_rgba(43,182,232,0.8)]"
        >
          <CalendarCheck className="h-[18px] w-[18px]" /> Book appointment
        </button>
      </div>
    </div>
  );
}
