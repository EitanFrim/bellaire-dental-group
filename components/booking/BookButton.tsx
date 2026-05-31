"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { useBooking } from "./BookingProvider";

/** A button that opens the global booking modal from anywhere on the site. */
export function BookButton({
  children = "Book appointment",
  ...props
}: ButtonProps) {
  const { open } = useBooking();
  return (
    <Button onClick={open} {...props}>
      {children}
    </Button>
  );
}
