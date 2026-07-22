import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
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
            <h2 key={i} className="mt-12 font-display text-2xl text-ink sm:text-[1.75rem]">
              {b.text}
            </h2>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="mt-5 space-y-2.5">
              {b.items.map((it, j) => (
                <li
                  key={j}
                  className="flex items-baseline gap-4 text-pretty leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="relative top-[0.6em] h-px w-4 shrink-0 bg-bronze/60"
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="mt-5 text-pretty leading-relaxed text-ink-soft">
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
        <div className="tnum flex items-center gap-3 text-sm text-ink-faint">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readMinutes} min read</span>
        </div>
      </PageHero>

      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          {post.cover && (
            <div className="mb-12 border border-line bg-paper p-2.5">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Img
                  src={post.cover}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="text-lg">
            <p className="text-pretty text-xl leading-relaxed text-ink">
              {post.excerpt}
            </p>
            <Blocks blocks={post.body} />
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-bronze"
            >
              <ArrowLeft size={15} /> All articles
            </Link>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line py-16">
          <Container className="max-w-3xl">
            <p className="label text-bronze">Keep reading</p>
            <ol className="mt-6 border-t border-line">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-5"
                  >
                    <span>
                      <span className="label block text-ink-faint">
                        {r.category}
                      </span>
                      <span className="mt-1.5 block font-display text-lg text-ink transition-colors group-hover:text-bronze">
                        {r.title}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1.5 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <FinalCTA />
      <JsonLd data={[articleSchema, breadcrumbSchema(crumbs)]} />
    </>
  );
}
