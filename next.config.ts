import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [68, 75],
  },
  compress: true,
  // App Router folders can't mix static text with a dynamic segment
  // (e.g. "pest-control-[city]"), so the flat, hyphenated SEO URLs are
  // served via rewrite from nested dynamic routes ("pest-control/[city]").
  async rewrites() {
    return [
      { source: "/pest-control-charges-:city", destination: "/pest-control-charges/:city" },
      { source: "/pest-control-:city/:area", destination: "/pest-control/:city/:area" },
      { source: "/pest-control-:city", destination: "/pest-control/:city" },
    ];
  },
};

export default nextConfig;
