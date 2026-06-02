import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { ArrowRight, Clock } from "lucide-react";
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
    "Practical, friendly dental health tips from Bellaire Dental Group in Houston — answering the questions real patients ask, from prevention to anxiety to modern technology.",
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
            Tips &amp; answers from <span className="text-gradient">our team</span>
          </>
        }
        intro="Friendly, practical guidance on keeping your smile healthy — answering the questions we hear most often in the chair."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-white/80 shadow-[0_2px_24px_-14px_rgba(10,31,64,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(10,31,64,0.4)] lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              {featured.cover && (
                <Img
                  src={featured.cover}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-aqua px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
                {featured.category}
              </span>
              <h2 className="mt-4 font-display text-2xl text-navy-900 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-ink-soft">
                <span>{formatDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {featured.readMinutes} min read
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-cyan-700">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/80 shadow-[0_2px_20px_-14px_rgba(10,31,64,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-24px_rgba(10,31,64,0.4)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {post.cover && (
                      <Img
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg text-navy-900">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-ink-soft">
                      <span>{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readMinutes} min
                      </span>
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
