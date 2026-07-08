import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blog — Pest Science & Family Safety Guides | AIPS" },
      { name: "description", content: "Field-tested guides on cockroach gel baiting, monsoon mosquito control, termite warranty myths, and family-safe chemistry from AIPS." },
      { property: "og:title", content: "AIPS Blog — Pest Science & Family Safety" },
      { property: "og:description", content: "Written by our agronomists. Read before you hire your next pest control company." },
    ],
  }),
  component: Blogs,
});

export const posts = [
  {
    slug: "cockroach-gel-baiting-guide",
    title: "Why gel baiting beats spraying for cockroaches",
    excerpt: "Sprays scatter roaches. Slow-acting gel bait recruits them into feeding the colony — killing eggs you can't see.",
    date: "May 2, 2026",
    read: "5 min",
    tag: "Science",
  },
  {
    slug: "monsoon-mosquito-plan",
    title: "The 3-step monsoon mosquito plan for Indian apartments",
    excerpt: "Larvicide before the fog. Here's the audit-ready sequence we run in Mumbai and Kolkata every June.",
    date: "Apr 21, 2026",
    read: "6 min",
    tag: "Playbook",
  },
  {
    slug: "termite-warranty-myths",
    title: "Termite warranty myths that cost Indian homeowners lakhs",
    excerpt: "Not every 10-year warranty is real. Here's how to read the letterhead — and what disqualifies a callback.",
    date: "Mar 18, 2026",
    read: "8 min",
    tag: "Consumer",
  },
  {
    slug: "family-safe-chemistry",
    title: "Family-safe chemistry: what CIB approval actually means",
    excerpt: "'Herbal' isn't automatically safer. 'Chemical' isn't automatically dangerous. A quick primer on labels and MSDS.",
    date: "Feb 4, 2026",
    read: "7 min",
    tag: "Science",
  },
  {
    slug: "restaurant-pest-audit",
    title: "How to pass a restaurant pest audit the first time",
    excerpt: "FSSAI, HACCP, and the paperwork every food business fails on. Our checklist, downloadable.",
    date: "Jan 22, 2026",
    read: "9 min",
    tag: "Commercial",
  },
  {
    slug: "bed-bugs-two-visit",
    title: "Why one visit will never fix a bed bug problem",
    excerpt: "Eggs hatch on day 10. If your vendor promised a single visit, they promised a re-infestation.",
    date: "Dec 12, 2025",
    read: "4 min",
    tag: "Science",
  },
];

function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={<>Field-tested notes from our <em className="text-amber">agronomists.</em></>}
        intro="No SEO fluff. Just what actually works — from the technicians running 200+ jobs a week."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blogs/$slug"
              params={{ slug: p.slug }}
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
    </>
  );
}
