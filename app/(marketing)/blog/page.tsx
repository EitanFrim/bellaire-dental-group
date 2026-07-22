import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { sortedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description:
    "Practical, friendly dental health tips from Bellaire Dental Group in Houston, answering the questions real patients ask, from prevention to anxiety to modern technology.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;
  return (
    <>
      <PageHero
        eyebrow="Dental health, made simple"
        title={
          <>
            Tips &amp; answers from{" "}
            <span className="accent-italic">our team</span>
          </>
        }
        intro="Friendly, practical guidance on keeping your smile healthy, answering the questions we hear most often in the chair."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid border border-line bg-paper lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              {featured.cover && (
                <Img
                  src={featured.cover}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <span className="label text-bronze">{featured.category}</span>
              <h2 className="mt-4 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-bronze sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {featured.excerpt}
              </p>
              <div className="tnum mt-6 flex items-center gap-3 text-sm text-ink-faint">
                <span>{formatDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                Read article
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border border-line bg-paper"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {post.cover && (
                      <Img
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="label text-bronze">{post.category}</span>
                    <h3 className="mt-3 font-display text-lg leading-snug text-ink transition-colors group-hover:text-bronze">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="tnum mt-5 flex items-center gap-3 border-t border-line pt-4 text-xs text-ink-faint">
                      <span>{formatDate(post.date)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readMinutes} min</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
