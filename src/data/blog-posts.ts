export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  tag: string;
};

export const posts: BlogPost[] = [
  {
    slug: "cockroach-gel-baiting-guide",
    title: "Why gel baiting beats spraying for cockroaches",
    excerpt:
      "Sprays scatter roaches. Slow-acting gel bait recruits them into feeding the colony — killing eggs you can't see.",
    date: "May 2, 2026",
    read: "5 min",
    tag: "Science",
  },
  {
    slug: "monsoon-mosquito-plan",
    title: "The 3-step monsoon mosquito plan for Indian apartments",
    excerpt:
      "Larvicide before the fog. Here's the audit-ready sequence we run across West Bengal every June.",
    date: "Apr 21, 2026",
    read: "6 min",
    tag: "Playbook",
  },
  {
    slug: "termite-treatment-checklist",
    title: "How to evaluate a termite treatment company before you sign",
    excerpt:
      "Not every drill-and-inject job is done right. Here's what actually separates a thorough termite protocol from a rushed one.",
    date: "Mar 18, 2026",
    read: "8 min",
    tag: "Consumer",
  },
  {
    slug: "family-safe-chemistry",
    title: "Family-safe chemistry: what CIB approval actually means",
    excerpt:
      "'Herbal' isn't automatically safer. 'Chemical' isn't automatically dangerous. A quick primer on labels and MSDS.",
    date: "Feb 4, 2026",
    read: "7 min",
    tag: "Science",
  },
  {
    slug: "restaurant-pest-audit",
    title: "How to pass a restaurant pest audit the first time",
    excerpt:
      "FSSAI, HACCP, and the paperwork every food business fails on. Our checklist, downloadable.",
    date: "Jan 22, 2026",
    read: "9 min",
    tag: "Commercial",
  },
  {
    slug: "bed-bugs-two-visit",
    title: "Why one visit will never fix a bed bug problem",
    excerpt:
      "Eggs hatch on day 10. If your vendor promised a single visit, they promised a re-infestation.",
    date: "Dec 12, 2025",
    read: "4 min",
    tag: "Science",
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);
