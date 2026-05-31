import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { practice } from "@/lib/practice";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-7xl text-cyan-300">404</p>
      <h1 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
        This page took a coffee break
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        We couldn&apos;t find the page you were looking for — but we can still help you
        find your way to a healthier smile.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "primary", size: "lg" })}>
          <Home className="h-4 w-4" /> Back home
        </Link>
        <a
          href={`tel:${practice.phone.tel}`}
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          <Phone className="h-4 w-4 text-cyan-600" /> {practice.phone.display}
        </a>
      </div>
    </Container>
  );
}
