import { SITE_URL } from "@/app/layout";
import { site } from "@/data/site";

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed
      ? (Array.isArray(areaServed) ? areaServed : [areaServed]).map((a) => ({
          "@type": "City",
          name: a,
        }))
      : { "@type": "State", name: "West Bengal" },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
