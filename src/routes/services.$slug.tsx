import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle, Sparkles,
  Phone, MessageCircle,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { InspectionForm } from "@/components/site/InspectionForm";
import { PestCard } from "@/components/site/PestCard";
import { findService, getServiceContent, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import serviceHeroFallback from "@/assets/service-hero-technician.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | AIPS" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} in India — Family-Safe, Written Warranty | AIPS` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.name} | AIPS` },
        { property: "og:description", content: service.summary },
        ...(service.photo ? [{ property: "og:image", content: service.photo }] : []),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const content = getServiceContent(service);
  const heroImage = service.photo ?? serviceHeroFallback;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      {/* Immersive image hero — on desktop image sits behind text (right), on mobile image stacks on top of text panel */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
        {/* Mobile: image on top as a proper aspect-ratio banner */}
        <div className="relative aspect-[4/3] w-full md:hidden">
          <img
            src={heroImage}
            alt={`AIPS technician performing ${service.name.toLowerCase()}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
        </div>

        {/* Desktop: image absolute background, text overlays on left */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1024}
          className="absolute inset-0 hidden h-full w-full object-cover object-right md:block"
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,61,46,0.95) 0%, rgba(11,61,46,0.85) 30%, rgba(11,61,46,0.35) 55%, rgba(11,61,46,0) 72%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber ring-1 ring-inset ring-amber/40">
                Service
              </span>
              <span className="rounded-full border border-cream/25 bg-cream/5 px-3 py-1 text-[11px] font-semibold text-cream/85 backdrop-blur-sm">
                CIB · Family-safe
              </span>
              <span className="rounded-full border border-cream/25 bg-cream/5 px-3 py-1 text-[11px] font-semibold text-cream/85 backdrop-blur-sm">
                Written warranty
              </span>
            </div>

            <h1 className="mt-4 font-serif text-[2rem] font-medium leading-[1.1] text-cream md:mt-5 md:text-6xl">
              {service.name} <span className="text-amber">in India</span>
            </h1>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-cream/85 md:mt-5 md:text-lg">
              {service.summary}
            </p>

            <div className="mt-4 inline-flex items-start gap-2 rounded-2xl bg-cream/10 px-4 py-2 text-sm text-cream ring-1 ring-inset ring-amber/30 backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>{service.warranty}</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <Button
                asChild
                className="h-12 w-full rounded-xl px-6 text-base font-semibold shadow-[var(--shadow-cta)] sm:w-auto"
                style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}
              >
                <Link to="/contact">Book free inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-cream/30 bg-cream/5 px-6 text-base font-medium text-cream backdrop-blur-sm hover:bg-cream/10"
              >
                <Phone className="h-4 w-4 text-amber" /> {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-cream/30 bg-cream/5 px-6 text-base font-medium text-cream backdrop-blur-sm hover:bg-cream/10"
              >
                <MessageCircle className="h-4 w-4 text-amber" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Overview + inspection form */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Overview</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              What our {service.short.toLowerCase()} protocol does
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.intro}
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <p className="text-sm text-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <InspectionForm />
          </div>
        </div>
      </Section>

      {/* Signs + Risks (two-column dark/light) */}
      <Section bg="cream">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber/20 text-forest-deep">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-foreground">Signs you need this service</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {content.signs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-forest-deep p-8 text-cream shadow-[var(--shadow-lifted)]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber/25 text-amber">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-cream">Health & property risks</h3>
            </div>
            <ul className="mt-5 space-y-3 text-cream/85">
              {content.risks.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-cream/10 p-4 text-sm text-cream/85 ring-1 ring-inset ring-cream/15">
              Untreated {service.short.toLowerCase()} problems compound month after month. A single inspection tells
              you exactly what you're dealing with.
            </div>
          </article>
        </div>
      </Section>

      {/* Our process */}
      <Section
        eyebrow="Our scientific approach"
        title={`How AIPS delivers ${service.short.toLowerCase()} treatment`}
        intro="Inspection first, chemistry second. Every step is documented so nothing is left to guesswork."
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.process.map((p) => (
            <li
              key={p.step}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-deep font-serif text-base text-amber">
                {p.step}
              </span>
              <h4 className="mt-4 font-serif text-lg text-foreground">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-3xl bg-cream-warm p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-forest" />
            <div>
              <p className="font-semibold text-forest-deep">Warranty on every job</p>
              <p className="mt-1 text-muted-foreground">{service.warranty}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why AIPS */}
      <Section bg="cream" eyebrow="Why AIPS" title="Built by agricultural scientists, not call-centre sales.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "15+ years in the field", b: "Founded 2010 · 40,000+ homes & businesses protected." },
            { t: "CIB-approved chemistry", b: "Envu, FMC, Syngenta, UPL — strict label-rate dilutions only." },
            { t: "Same technician, every visit", b: "Trained in-house for 90+ hrs. No sub-contractors." },
            { t: "Written warranty", b: "Free callbacks if activity returns within the warranty period." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-lg text-foreground">{c.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title={`${service.name} — your questions, answered.`}>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {content.faqs.map((f, i) => (
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
          <div className="grid gap-6 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-2xl text-cream md:text-3xl">
                Book a free {service.short.toLowerCase()} inspection today.
              </h3>
              <p className="mt-2 text-cream/80">
                A trained AIPS technician will visit, inspect, quote — and only then treat. No pressure, no upsell.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-xl px-6 text-base font-semibold shadow-[var(--shadow-cta)]"
                style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}
              >
                <Link to="/contact">Book inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-cream/30 bg-cream/5 px-6 text-base font-medium text-cream hover:bg-cream/10"
              >
                <Phone className="h-4 w-4 text-amber" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="cream" eyebrow="Also popular" title="Other specialist protocols">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {others.map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
