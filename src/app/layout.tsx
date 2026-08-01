import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { FloatingAssistant } from "@/components/site/FloatingAssistant";
import { site } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";
import { localBusinessJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-fraunces",
  display: "swap",
});

// Re-exported for existing importers; canonical definition lives in lib.
export { SITE_URL };

const SITE_TITLE = "Advanced Indian Pest Solution — Family-Safe Pest Control Since 2010";
const SITE_DESC =
  "Licensed, science-led pest control with CIB-approved, family-safe treatments — across West Bengal.";

/**
 * Next.js *replaces* rather than deep-merges `openGraph`, so any page that
 * sets its own would otherwise drop locale/siteName/type/image. Spread this
 * into every page-level `openGraph` to keep those intact.
 */
export const OG_DEFAULTS = {
  type: "website" as const,
  siteName: site.name,
  locale: "en_IN",
  images: [{ url: "/icon-512.png", width: 512, height: 512, alt: site.name }],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${site.short}` },
  description: SITE_DESC,
  authors: [{ name: site.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    ...OG_DEFAULTS,
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3D2E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileBottomBar />
        <FloatingAssistant />
        <Analytics />
      </body>
    </html>
  );
}
