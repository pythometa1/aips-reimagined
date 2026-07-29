import type { MetadataRoute } from "next";
import { SITE_URL } from "./layout";
import { services } from "@/data/services";
import { posts } from "@/data/blog-posts";
import { cityLocations } from "@/data/locations";
import { locationAreas } from "@/data/location-areas";
import { cityPricing } from "@/data/pricing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/clients",
    "/gallery",
    "/blogs",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blogs/${p.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cityLocations.map((c) => ({
    url: `${SITE_URL}/pest-control-${c.slug}`,
    lastModified: new Date(),
  }));

  const cityChargesRoutes = cityPricing.map((c) => ({
    url: `${SITE_URL}/pest-control-charges-${c.slug}`,
    lastModified: new Date(),
  }));

  const areaRoutes = locationAreas.map((a) => ({
    url: `${SITE_URL}/pest-control-${a.citySlug}/${a.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...cityRoutes,
    ...cityChargesRoutes,
    ...areaRoutes,
  ];
}
