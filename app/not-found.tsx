import Link from "next/link";
import { Home, Phone } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { practice } from "@/lib/practice";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="label text-bronze">Error 404</p>
      <p className="mt-6 font-display text-7xl text-ink sm:text-8xl">404</p>
      <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
        This page took a <span className="accent-italic">coffee break</span>
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
        We couldn&apos;t find the page you were looking for, but we can still
        help you find your way to a healthier smile.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "ink", size: "lg" })}>
          <Home size={15} /> Back home
        </Link>
        <a
          href={`tel:${practice.phone.tel}`}
          className={buttonVariants({ variant: "outline", size: "lg", className: "tnum" })}
        >
          <Phone size={14} /> {practice.phone.display}
        </a>
      </div>
    </Container>
  );
}
