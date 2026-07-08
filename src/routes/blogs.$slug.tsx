import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { posts } from "./blogs.index";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Post not found | AIPS" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | AIPS Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "article:published_time", content: post.date },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${post.tag} · ${post.date} · ${post.read}`} title={post.title} intro={post.excerpt} />
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl font-sans text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <h2 className="mt-10 font-serif text-3xl text-foreground">The short version</h2>
          <p className="mt-4 text-muted-foreground">
            Every pest control problem in an Indian home comes down to three factors — the species, the harbourage,
            and the resident chemistry. Get any one wrong and the pest is back inside 30 days. This piece walks
            through how our field team gets all three right on the first visit.
          </p>
          <h2 className="mt-10 font-serif text-3xl text-foreground">Why this matters</h2>
          <p className="mt-4 text-muted-foreground">
            Most pest control vendors in India are set up to sell you an annual contract — not to solve the underlying
            problem. We built AIPS to be the opposite: fix it right, hand you the warranty, and only see us again if
            something changes.
          </p>
          <blockquote className="my-10 border-l-4 border-amber pl-6 font-serif text-xl italic text-forest-deep">
            "If your family can't be in the room an hour later, we shouldn't have used it."
          </blockquote>
          <p className="text-muted-foreground">
            Want a copy of the full field checklist we use on this exact scenario? Call us or book a free inspection —
            we'll walk you through it in person.
          </p>

          <div className="mt-12">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-deep">
              <ArrowLeft className="h-4 w-4" /> All posts
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
