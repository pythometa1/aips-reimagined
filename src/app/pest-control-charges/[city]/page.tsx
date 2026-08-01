import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { InspectionForm } from "@/components/site/InspectionForm";
import { JsonLd } from "@/components/site/JsonLd";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cityPricing, findCityPricing } from "@/data/pricing";
import { findCityLocation } from "@/data/locations";
import { site } from "@/data/site";
import { breadcrumbListJsonLd, faqPageJsonLd } from "@/lib/jsonld";
import { OG_DEFAULTS } from "@/app/layout";

export function generateStaticParams() {
  return cityPricing.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const pricing = findCityPricing(city);
  if (!pricing) return { title: "Pricing not found", robots: { index: false } };

  const title = `Pest Control Charges in ${pricing.city} | Price List`;
  const description = `Pest control charges in ${pricing.city}: general pest control from ₹1,499 (2 BHK), termite pre-construction from ₹9/sq.ft. Free on-site inspection. Call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/pest-control-charges-${pricing.slug}` },
    openGraph: {
      ...OG_DEFAULTS,
      title,
      description,
    },
  };
}

const faqs = (city: string) => [
  {
    q: `How much does pest control cost in ${city}?`,
    a: "Residential general pest control starts at ₹1,499 for a 2 BHK. Termite pre-construction treatment starts at ₹9 per sq.ft. Every other service — cockroach, bed bug, rodent, mosquito and commercial contracts — is quoted after a free on-site inspection, because the right price depends on the size of the space and the severity of the infestation.",
  },
  {
    q: "Why isn't every price listed upfront?",
    a: "We could publish a flat number, but it would either be wrong for most homes or padded to cover the worst case. Two 2 BHK flats with the same layout can need very different termite or bed bug treatment depending on what our technician actually finds. A free inspection gets you an accurate, firm quote instead of a guess.",
  },
  {
    q: "Is GST included in these prices?",
    a: "The prices above are pre-GST. Standard GST applies as per current rates and will be shown separately on your invoice.",
  },
  {
    q: "Do you charge for the inspection itself?",
    a: "No. The inspection is free and comes with no obligation to book. You'll get a firm, written quote before any treatment begins.",
  },
  {
    q: "Is a one-time treatment enough, or do I need an AMC?",
    a: "For most household infestations, one treatment plus a scheduled follow-up is enough. For kitchens, restaurants, warehouses and homes with recurring pest pressure, a quarterly or annual AMC works out cheaper per visit and keeps the same technician assigned to your address.",
  },
];

export default async function CityChargesPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const pricing = findCityPricing(city);
  if (!pricing) notFound();

  const loc = findCityLocation(pricing.slug);
  const pageFaqs = faqs(pricing.city);

  const breadcrumbJsonLd = breadcrumbListJsonLd([
    { name: "Home", path: "/" },
    ...(loc ? [{ name: `Pest Control in ${loc.city}`, path: `/pest-control-${loc.slug}` }] : []),
    {
      name: `Pest Control Charges in ${pricing.city}`,
      path: `/pest-control-charges-${pricing.slug}`,
    },
  ]);
  const faqJsonLd = faqPageJsonLd(pageFaqs);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow={`${pricing.city} · Pricing`}
        title={
          <>
            Pest Control Charges in <em className="text-amber">{pricing.city}</em>
          </>
        }
        intro="Transparent starting prices, plus exactly what affects your final quote. Every job starts with a free, no-obligation inspection."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber to-amber-glow px-6 text-base font-bold text-ink shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-whatsapp)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Price table + form */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              {pricing.city} price list
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Starting prices by service
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Prices are pre-GST and confirmed in writing after a free on-site inspection.
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-forest-deep text-cream">
                    <th className="p-4 font-serif text-base font-medium">Service</th>
                    <th className="p-4 font-serif text-base font-medium">Basis</th>
                    <th className="p-4 text-right font-serif text-base font-medium">
                      Starting price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map((r) => (
                    <tr key={r.service} className="border-b border-border last:border-0">
                      <td className="bg-card p-4 align-top font-medium text-foreground">
                        <Link href={`/services/${r.slug}`} className="hover:text-forest">
                          {r.service}
                        </Link>
                      </td>
                      <td className="bg-card p-4 align-top text-muted-foreground">
                        {r.unit}
                        {r.note && (
                          <p className="mt-1 text-xs text-muted-foreground/80">{r.note}</p>
                        )}
                      </td>
                      <td className="bg-card p-4 align-top text-right font-serif text-lg text-forest-deep">
                        {r.startingPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg text-foreground">What affects your price</h3>
                <ul className="mt-3 space-y-2">
                  {pricing.factors.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">What's included</h3>
                <ul className="mt-3 space-y-2">
                  {pricing.included.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <InspectionForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream" eyebrow="FAQ" title="Pricing questions, answered">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {pageFaqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA banner */}
      <Section>
        <div className="overflow-hidden rounded-3xl bg-forest-deep p-8 text-cream shadow-[var(--shadow-lifted)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-2xl text-cream md:text-3xl">
                Get your firm quote for {pricing.city} today.
              </h3>
              <p className="mt-2 text-cream/80">
                Free inspection, no obligation. We'll confirm the exact price before we treat
                anything.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.phoneHref}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber to-amber-glow px-7 text-base font-bold text-ink shadow-[var(--shadow-cta)] ring-1 ring-inset ring-white/25 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-5 w-5" /> Call now
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-whatsapp)] transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <Button
                asChild
                className="h-14 rounded-xl border border-cream/30 bg-cream px-7 text-base font-bold text-forest-deep shadow-sm hover:bg-cream/90"
              >
                <Link href="/contact">
                  Free inspection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
