// Canonical origin for the site. Lives in its own module (rather than in
// app/layout.tsx) so schema/sitemap helpers can import it without creating a
// circular dependency back through the root layout.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.advancedindianpestsolution.com";
