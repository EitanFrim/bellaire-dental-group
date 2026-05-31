import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, url } from "@/lib/schema";
import { getPost, posts, type Block } from "@/lib/blog";
import { practice } from "@/lib/practice";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return (
            <h2 key={i} className="mt-10 font-display text-2xl text-navy-900">
              {b.text}
            </h2>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="mt-4 space-y-2">
              {b.items.map((it, j) => (
                <li key={j} className="ml-5 list-disc text-pretty leading-relaxed text-ink-soft">
                  {it}
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="mt-4 text-pretty leading-relaxed text-ink-soft">
            {b.text}
          </p>
        );
      })}
    </>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.related ?? [])
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.cover ? url(post.cover) : undefined,
    author: { "@type": "Organization", name: practice.name },
    publisher: { "@id": `${url()}#dentist` },
    mainEntityOfPage: url(`/blog/${post.slug}`),
  };

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} crumbs={crumbs}>
        <div className="flex items-center gap-4 text-sm text-ink-soft">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
          </span>
        </div>
      </PageHero>

      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          {post.cover && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-line">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
          <div className="text-lg">
            <p className="text-pretty leading-relaxed text-ink-soft">{post.excerpt}</p>
            <Blocks blocks={post.body} />
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 hover:text-cyan-600"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-white/60 py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-2xl text-navy-900">Keep reading</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-line bg-white p-5 transition-colors hover:border-cyan-200"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                    {r.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg text-navy-900">{r.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-cyan-700">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
      <JsonLd data={[articleSchema, breadcrumbSchema(crumbs)]} />
    </>
  );
}
