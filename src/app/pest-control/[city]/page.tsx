import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { InspectionForm } from "@/components/site/InspectionForm";
import { PestCard } from "@/components/site/PestCard";
import { StatsRow } from "@/components/site/StatsRow";
import { JsonLd } from "@/components/site/JsonLd";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cityLocations, findCityLocation } from "@/data/locations";
import { areasForCity } from "@/data/location-areas";
import { findCityPricing } from "@/data/pricing";
import { services } from "@/data/services";
import { site } from "@/data/site";
import {
  breadcrumbListJsonLd,
  faqPageJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
} from "@/lib/jsonld";
import { OG_DEFAULTS } from "@/app/layout";

export function generateStaticParams() {
  return cityLocations.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = findCityLocation(city);
  if (!loc) return { title: "Location not found", robots: { index: false } };

  const title = `Pest Control in ${loc.city} | Near Me — ${loc.isHQ ? "Same-Day" : "Local"} Service`;
  const description = `Looking for pest control near me in ${loc.city}? ${site.short} offers cockroach, termite, bed bug, rodent and mosquito control with CIB-approved, family-safe treatments. Call ${site.phone} for a free inspection.`;

  return {
    title,
    description,
    alternates: { canonical: `/pest-control-${loc.slug}` },
    openGraph: {
      ...OG_DEFAULTS,
      title,
      description,
    },
  };
}

export default async function CityLocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = findCityLocation(city);
  if (!loc) notFound();

  const pricing = findCityPricing(loc.slug);
  const areas = areasForCity(loc.slug);

  const breadcrumbJsonLd = breadcrumbListJsonLd([
    { name: "Home", path: "/" },
    { name: `Pest Control in ${loc.city}`, path: `/pest-control-${loc.slug}` },
  ]);
  const faqJsonLd = faqPageJsonLd(loc.faqs);
  const businessJsonLd = localBusinessJsonLd({ city: loc.city });
  const cityServiceJsonLd = serviceJsonLd({
    name: `Pest Control in ${loc.city}`,
    description: loc.intro,
    areaServed: loc.city,
  });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={businessJsonLd} />
      <JsonLd data={cityServiceJsonLd} />

      <PageHero
        eyebrow={loc.isHQ ? `${loc.city} · Head Office` : `Pest Control in ${loc.city}`}
        title={
          <>
            Pest Control Services in <em className="text-amber">{loc.city}</em>
          </>
        }
        intro={`${loc.isHQ ? "Same-day inspection from our head office in " + loc.city + "." : `Local service across ${loc.city}.`} Family-safe, CIB-approved treatments — free inspection, firm quote.`}
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

      {/* Local intro + inspection form */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Local to {loc.city}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Why {loc.city} needs a local pest control plan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {loc.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {loc.pestPressure.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
                >
                  <p className="font-semibold text-forest-deep">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <InspectionForm />
          </div>
        </div>

        <div className="mt-14">
          <StatsRow />
        </div>
      </Section>

      {/* Services in this city */}
      <Section
        bg="cream"
        eyebrow={`Services in ${loc.city}`}
        title={`Every treatment, delivered locally in ${loc.city}`}
        intro="Tap a service to see the exact protocol we follow — inspection, treatment, follow-up and reporting."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {services.slice(0, 11).map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
          <Link
            href="/services"
            className="grid place-items-center rounded-3xl border border-dashed border-forest/30 bg-cream-warm p-5 text-center text-sm font-medium text-forest-deep transition hover:bg-forest-deep/5"
          >
            View all services <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Areas served */}
      <Section
        eyebrow="Coverage"
        title={`Local pest control in ${loc.city} near me`}
        intro={`Searching for "pest control near me" in ${loc.city}? Tap your area below for local pest pressure, coverage and a free inspection. Don't see your area? Call or WhatsApp us and we'll confirm coverage.`}
      >
        {areas.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/pest-control-${loc.slug}/${a.slug}`}
                className="group flex items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-forest-deep shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-forest-soft"
              >
                <MapPin className="h-4 w-4 shrink-0 text-amber" />
                <span className="underline decoration-forest/30 underline-offset-2 group-hover:decoration-forest">
                  Pest Control in {a.name}, {loc.city}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {loc.areasServed.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-forest-deep shadow-[var(--shadow-card)]"
              >
                <MapPin className="h-3.5 w-3.5 text-amber" /> {a}
              </span>
            ))}
          </div>
        )}
      </Section>

      {/* Testimonials */}
      {loc.testimonials.length > 0 && (
        <Section bg="cream" eyebrow="The receipts" title={`What ${loc.city} customers say`}>
          <div className="grid gap-6 md:grid-cols-2">
            {loc.testimonials.map((t) => (
              <figure
                key={t.who}
                className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-forest">— {t.who}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {/* Pricing teaser */}
      {pricing && (
        <Section
          eyebrow="Pricing"
          title={`How much does pest control cost in ${loc.city}?`}
          intro="A quick look — full price list and what's included on our dedicated pricing page."
        >
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <table className="w-full text-left text-sm">
              <tbody>
                {pricing.rows.slice(0, 4).map((r) => (
                  <tr key={r.service} className="border-b border-border last:border-0">
                    <td className="bg-card p-4 font-medium text-foreground">{r.service}</td>
                    <td className="bg-card p-4 text-muted-foreground">{r.unit}</td>
                    <td className="bg-card p-4 text-right font-serif text-lg text-forest-deep">
                      {r.startingPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href={`/pest-control-charges-${loc.slug}`}>
                See full {loc.city} price list <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section bg="cream" eyebrow="FAQ" title={`Pest control in ${loc.city} — your questions`}>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {loc.faqs.map((f, i) => (
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
                Book a free inspection in {loc.city} today.
              </h3>
              <p className="mt-2 text-cream/80">
                A trained AIPS technician will visit, inspect, quote — and only then treat.
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
