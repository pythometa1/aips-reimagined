import { SITE_URL } from "@/lib/site-url";
import { site, cities } from "@/data/site";

/**
 * LocalBusiness node. Emitted sitewide from the root layout with the canonical
 * @id so every other node can reference it via `provider`/`publisher`.
 *
 * Pass a `city` on locality pages to tighten `areaServed` to that city — a
 * page-specific local signal that a sitewide state-level value can't give.
 */
export function localBusinessJsonLd({ city }: { city?: string } = {}) {
  const { addressParts, geo, openingHours } = site;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    alternateName: site.short,
    description:
      "Licensed, science-led pest control with CIB-approved, family-safe treatments across West Bengal.",
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.foundingDate,
    image: `${SITE_URL}/icon-512.png`,
    logo: `${SITE_URL}/icon-512.png`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts.street,
      addressLocality: addressParts.locality,
      addressRegion: addressParts.region,
      postalCode: addressParts.postalCode,
      addressCountry: addressParts.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHours.days,
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    areaServed: city
      ? [
          {
            "@type": "City",
            name: city,
            containedInPlace: { "@type": "State", name: "West Bengal" },
          },
        ]
      : cities.map((c) => ({ "@type": "City", name: c })),
    sameAs: [site.instagram],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#legal-entity`,
    name: site.name,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
    foundingDate: site.foundingDate,
    sameAs: [site.instagram],
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

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
