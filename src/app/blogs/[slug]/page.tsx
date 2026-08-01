import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { posts, findPost } from "@/data/blog-posts";
import { OG_DEFAULTS } from "@/app/layout";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: "Post not found", robots: { index: false } };

  return {
    title: `${post.title} | AIPS Journal`,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      ...OG_DEFAULTS,
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${post.tag} · ${post.date} · ${post.read}`}
        title={post.title}
        intro={post.excerpt}
      />
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl font-sans text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <h2 className="mt-10 font-serif text-3xl text-foreground">The short version</h2>
          <p className="mt-4 text-muted-foreground">
            Every pest control problem in an Indian home comes down to three factors — the species,
            the harbourage, and the resident chemistry. Get any one wrong and the pest is back
            inside 30 days. This piece walks through how our field team gets all three right on the
            first visit.
          </p>
          <h2 className="mt-10 font-serif text-3xl text-foreground">Why this matters</h2>
          <p className="mt-4 text-muted-foreground">
            Most pest control vendors in India are set up to sell you an annual contract — not to
            solve the underlying problem. We built AIPS to be the opposite: fix it right, document
            exactly what we did, and only see us again if something changes.
          </p>
          <blockquote className="my-10 border-l-4 border-amber pl-6 font-serif text-xl italic text-forest-deep">
            &ldquo;If your family can&apos;t be in the room an hour later, we shouldn&apos;t have
            used it.&rdquo;
          </blockquote>
          <p className="text-muted-foreground">
            Want a copy of the full field checklist we use on this exact scenario? Call us or book a
            free inspection — we&apos;ll walk you through it in person.
          </p>

          <div className="mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-deep"
            >
              <ArrowLeft className="h-4 w-4" /> All posts
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
