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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { findCityLocation } from "@/data/locations";
import { findLocationArea, locationAreas } from "@/data/location-areas";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { breadcrumbListJsonLd, faqPageJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return locationAreas.map((a) => ({ city: a.citySlug, area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; area: string }>;
}): Promise<Metadata> {
  const { city, area } = await params;
  const loc = findCityLocation(city);
  const areaData = findLocationArea(city, area);
  if (!loc || !areaData) return { title: "Location not found", robots: { index: false } };

  const title = `Pest Control in ${areaData.name}, ${loc.city} | Near Me`;
  const description = `Looking for pest control near me in ${areaData.name}, ${loc.city}? ${site.short} offers cockroach, termite, bed bug, rodent and mosquito control with CIB-approved, family-safe treatments. Call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/pest-control-${loc.slug}/${areaData.slug}` },
    openGraph: { title, description },
  };
}

export default async function LocationAreaPage({
  params,
}: {
  params: Promise<{ city: string; area: string }>;
}) {
  const { city, area } = await params;
  const loc = findCityLocation(city);
  const areaData = findLocationArea(city, area);
  if (!loc || !areaData) notFound();

  const neighbours = areaData.neighbours
    .map((slug) => findLocationArea(loc.slug, slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumbJsonLd = breadcrumbListJsonLd([
    { name: "Home", path: "/" },
    { name: `Pest Control in ${loc.city}`, path: `/pest-control-${loc.slug}` },
    { name: areaData.name, path: `/pest-control-${loc.slug}/${areaData.slug}` },
  ]);
  const faqJsonLd = faqPageJsonLd(loc.faqs);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow={`${areaData.name} · ${loc.city}`}
        title={
          <>
            Pest Control Services in{" "}
            <em className="text-amber">
              {areaData.name}, {loc.city}
            </em>
          </>
        }
        intro={`Local pest control near me in ${areaData.name}. Family-safe, CIB-approved treatments — free inspection, firm quote.`}
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

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/pest-control-${loc.slug}`}>Pest Control in {loc.city}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{areaData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Local blurb + form */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Local to {areaData.name}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Pest pressure in {areaData.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {areaData.blurb}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {areaData.pestFocus.map((p) => (
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

      {/* Popular services */}
      <Section
        bg="cream"
        eyebrow={`Services near ${areaData.name}`}
        title="Popular treatments in your area"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {services.slice(0, 6).map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/services">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Nearby areas */}
      {neighbours.length > 0 && (
        <Section eyebrow="Nearby" title={`Also serving areas near ${areaData.name}`}>
          <div className="flex flex-wrap gap-3">
            {neighbours.map((n) => (
              <Link
                key={n.slug}
                href={`/pest-control-${loc.slug}/${n.slug}`}
                className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-forest-deep shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-forest-soft"
              >
                <MapPin className="h-3.5 w-3.5 text-amber" /> Pest Control in {n.name}
              </Link>
            ))}
            <Link
              href={`/pest-control-${loc.slug}`}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-dashed border-forest/30 bg-cream-warm px-4 py-2.5 text-sm font-medium text-forest-deep transition hover:bg-forest-deep/5"
            >
              See all of {loc.city} <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </Section>
      )}

      {/* Testimonial */}
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

      {/* FAQ */}
      <Section eyebrow="FAQ" title={`Pest control in ${loc.city} — your questions`}>
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
      <Section bg="cream">
        <div className="overflow-hidden rounded-3xl bg-forest-deep p-8 text-cream shadow-[var(--shadow-lifted)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-2xl text-cream md:text-3xl">
                Book a free inspection in {areaData.name} today.
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
