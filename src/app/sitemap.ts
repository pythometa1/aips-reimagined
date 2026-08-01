import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { services } from "@/data/services";
import { posts } from "@/data/blog-posts";
import { cityLocations } from "@/data/locations";
import { locationAreas } from "@/data/location-areas";
import { cityPricing } from "@/data/pricing";

// Fixed build-stamp rather than `new Date()` per entry: a timestamp that
// changes on every deploy tells Google nothing and gets discounted.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: `${SITE_URL}`, priority: 1.0, changeFrequency: "weekly" },
      { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
      { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" },
      { url: `${SITE_URL}/about`, priority: 0.6, changeFrequency: "yearly" },
      { url: `${SITE_URL}/clients`, priority: 0.6, changeFrequency: "monthly" },
      { url: `${SITE_URL}/gallery`, priority: 0.5, changeFrequency: "monthly" },
      { url: `${SITE_URL}/blogs`, priority: 0.6, changeFrequency: "weekly" },
      { url: `${SITE_URL}/faq`, priority: 0.7, changeFrequency: "monthly" },
    ] satisfies MetadataRoute.Sitemap
  ).map((r) => ({ ...r, lastModified }));

  // Commercial money pages — highest priority after the homepage.
  const cityRoutes: MetadataRoute.Sitemap = cityLocations.map((c) => ({
    url: `${SITE_URL}/pest-control-${c.slug}`,
    lastModified,
    priority: 0.95,
    changeFrequency: "weekly",
  }));

  const cityChargesRoutes: MetadataRoute.Sitemap = cityPricing.map((c) => ({
    url: `${SITE_URL}/pest-control-charges-${c.slug}`,
    lastModified,
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const areaRoutes: MetadataRoute.Sitemap = locationAreas.map((a) => ({
    url: `${SITE_URL}/pest-control-${a.citySlug}/${a.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blogs/${p.slug}`,
    lastModified,
    priority: 0.5,
    changeFrequency: "yearly",
  }));

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...cityChargesRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
  ];
}
