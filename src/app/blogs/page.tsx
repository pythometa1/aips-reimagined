import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import blogsHeroBanner from "@/assets/blogs-hero-banner.jpg";
import { posts } from "@/data/blog-posts";
import { OG_DEFAULTS } from "@/app/layout";

export const metadata: Metadata = {
  title: "Blog — Pest Science & Family Safety Guides",
  description:
    "Field-tested guides on cockroach gel baiting, monsoon mosquito control, evaluating termite treatment quality, and family-safe chemistry from AIPS.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "AIPS Blog — Pest Science & Family Safety",
    description: "Written by our agronomists. Read before you hire your next pest control company.",
  },
};

export default function Blogs() {
  return (
    <>
      <section className="bg-forest-deep">
        <Image
          src={blogsHeroBanner}
          alt="AIPS journal — field-tested notes from our agronomists. Real field experience, practical insights, trusted by professionals, helping you make better decisions."
          priority
          fetchPriority="high"
          sizes="100vw"
          className="w-full"
        />
      </section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blogs/${p.slug}`}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cream-warm px-3 py-1 text-xs font-medium uppercase tracking-wider text-forest">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-forest opacity-0 transition group-hover:opacity-100" />
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Questions?
          </p>
          <h2 className="mt-3 font-serif text-2xl text-foreground">Browse our FAQ</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cost, safety, AMC, chemicals — real answers to real questions.
          </p>
          <Link
            href="/faq"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-forest-deep px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest"
          >
            Read FAQ
          </Link>
        </div>
      </Section>
    </>
  );
}
