import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Users, Award } from "lucide-react";
import heroCrew from "@/assets/hero-crew.jpg";
import herbalProtocol from "@/assets/herbal-protocol.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";
import serviceFogging from "@/assets/service-fogging.jpg";
import serviceCockroach from "@/assets/service-cockroach-gel.jpg";
import serviceTermite from "@/assets/service-termite.jpg";
import serveCommercial from "@/assets/serve-commercial.jpg";
import serveIndustrial from "@/assets/serve-industrial.jpg";
import serveResidential from "@/assets/serve-residential.jpg";
import { InspectionForm } from "@/components/site/InspectionForm";
import { PestCard } from "@/components/site/PestCard";
import { Section } from "@/components/site/Section";
import { StatsRow } from "@/components/site/StatsRow";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cities } from "@/data/site";
import { cityLocations } from "@/data/locations";
import { JsonLd } from "@/components/site/JsonLd";
import { websiteJsonLd } from "@/lib/jsonld";

const bullets = [
  "Same-day inspection",
  "Same technician, every visit",
  "Children & pet-safe",
  "40,000+ customers served",
];

const testimonials = [
  {
    quote:
      "Door frame had termite tubes — they drilled and injected very neatly. Three years on, zero termites. The detailed job report on their letterhead was the reason we picked them.",
    who: "Meera J. · Kolkata",
  },
];

const process = [
  {
    n: "01",
    t: "Tell us your problem",
    d: "Call, WhatsApp or use the form. We respond inside business hours within the hour.",
  },
  {
    n: "02",
    t: "Free on-site inspection",
    d: "A trained technician inspects your space — usually same day in Kolkata, next day elsewhere. Quote is firm after inspection.",
  },
  {
    n: "03",
    t: "Safe treatment + clear reporting",
    d: "We treat, brief you on what to expect, and leave you with a documented job report on company letterhead.",
  },
];

const pillars = [
  {
    icon: Award,
    t: "Licensed since 2010",
    d: "Pest Control Operation License. Decade-plus track record across West Bengal.",
  },
  {
    icon: ShieldCheck,
    t: "Family & pet safe",
    d: "CIB-approved actives. Herbal protocol available for newborns, asthmatics and pets.",
  },
  {
    icon: Sparkles,
    t: "Transparent reporting",
    d: "Every visit ends with a documented job report — what was applied, where and why.",
  },
  {
    icon: Users,
    t: "40,000+ customers",
    d: "Trusted across 8 cities in West Bengal, from homes to Fortune 500 plants.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      {/* HERO — full-bleed technician photo, editorial overlay */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
        <Image
          src={heroCrew}
          alt="AIPS field technician in branded uniform treating a residential society at sunset"
          fill
          priority
          fetchPriority="high"
          quality={68}
          sizes="100vw"
          className="object-cover object-center opacity-75 md:opacity-95"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-transparent md:from-forest-deep/90 md:via-forest-deep/50"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-medium text-amber ring-1 ring-inset ring-amber/30 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              West Bengal&apos;s trusted pest control · since 2010
            </span>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.02] text-cream drop-shadow-sm md:text-6xl lg:text-7xl">
              Protecting your India,
              <br />
              <span className="italic text-amber">done right the first time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
              Licensed, science-led pest control with CIB-approved, family-safe treatments — across
              West Bengal.
            </p>

            <ul className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-cream/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-xl px-6 text-base font-semibold shadow-[var(--shadow-cta)]"
                style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}
              >
                <Link href="/contact">
                  Book free inspection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="tel:+919477401805"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-cream/30 bg-cream/5 px-6 text-base font-medium text-cream backdrop-blur hover:bg-cream/15"
              >
                Call +91 94774 01805
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-cream/70">
              <ShieldCheck className="h-4 w-4 text-amber" /> Documented job report on company
              letterhead
            </p>
          </div>

          <div className="hidden lg:block">
            <InspectionForm />
          </div>
        </div>
      </section>

      {/* Inspection form for small screens */}
      <section className="bg-cream-warm px-6 py-10 lg:hidden">
        <div className="mx-auto max-w-lg">
          <InspectionForm />
        </div>
      </section>

      {/* REAL WORK STRIP — Entomon-style service photo grid */}
      <Section
        eyebrow="Real crews · real jobs"
        title="What a family-safe treatment actually looks like"
        intro="No stock photos. Every image below is a treatment we perform every day, in Indian homes and societies."
        spacing="tight"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: serviceBedbug,
              slug: "bed-bug-control",
              title: "Bed bug treatment",
              tag: "Residential",
            },
            {
              img: serviceFogging,
              slug: "mosquito-control",
              title: "Society fogging",
              tag: "Apartment complex",
            },
            {
              img: serviceCockroach,
              slug: "cockroach-control",
              title: "Cockroach gel baiting",
              tag: "Kitchen · odourless",
            },
            {
              img: serviceTermite,
              slug: "termite-control",
              title: "Termite inspection & injection",
              tag: "Drill & inject protocol",
            },
          ].map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="group relative block overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
            >
              <Image
                src={c.img}
                alt={c.title}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent p-5 text-cream">
                <p className="text-[11px] uppercase tracking-widest text-amber">{c.tag}</p>
                <p className="mt-1 font-serif text-lg leading-tight">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PEST GRID */}
      <Section
        eyebrow="What we treat"
        title="A specialist protocol for every pest"
        intro="Each species has its own biology and chemistry. Tap any pest to see exactly how we treat it — family-safe, every time."
        spacing="tight"
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

      {/* WHO WE SERVE */}
      <Section
        eyebrow="Who we serve"
        title="Tailored protection for every space"
        intro="Whether it's a one-bedroom flat or a 200,000 sq.ft plant, we have a protocol built for it."
        bg="cream"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: serveCommercial,
              title: "Commercial",
              body: "Restaurants, hotels, offices, hospitals and retail — audit-ready and discreet.",
              bullets: [
                "HACCP & FSSAI-aligned documentation",
                "Same technician on every visit",
                "Flexible schedules",
                "We attend your audits with you",
              ],
            },
            {
              img: serveIndustrial,
              title: "Industrial",
              body: "Factories, warehouses and food-processing units with high pest pressure.",
              bullets: [
                "Tamper-proof bait-station perimeters",
                "Sighting & trend reporting",
                "Per-sq.ft annual contracts",
                "NDA-friendly for pharma & IT",
              ],
            },
            {
              img: serveResidential,
              title: "Residential",
              body: "Homes, apartments and villas — family-safe treatment for every room.",
              bullets: [
                "Children & pet-safe protocols",
                "Odorless gel & herbal options",
                "Same technician on every visit",
                "Documented job report after treatment",
              ],
            },
          ].map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]"
            >
              <Image
                src={c.img}
                alt=""
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/90">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <StatsRow />
        </div>
      </Section>

      {/* PROMISE */}
      <Section eyebrow="Our promise · since 2010">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-5xl">
              The cleanest treatment a home can get — and one your family can{" "}
              <em className="text-forest">live with.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We started AIPS because too many Indian homes were being treated by untrained sprayers
              with banned chemicals. Every technician is trained internally, supervised by
              agricultural scientists, and held to one rule:{" "}
              <span className="font-medium text-foreground">
                if your family can&apos;t be in the room an hour later, we shouldn&apos;t have used
                it.
              </span>
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-forest-deep">CIB-approved actives only</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every chemical carries a valid label and MSDS.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-forest-deep">Same technician every time</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No new face on a callback. Ever.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={herbalProtocol}
              alt="AIPS technician applying herbal, family-safe pest treatment in an Indian home"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-forest-deep p-5 text-cream shadow-[var(--shadow-lifted)] sm:block">
              <p className="text-xs uppercase tracking-widest text-amber">Herbal protocol</p>
              <p className="mt-1 font-serif text-lg">For newborns & asthmatics</p>
            </div>
          </div>
        </div>
      </Section>

      {/* PILLARS */}
      <Section
        eyebrow="Why families pick us"
        title="The five things every pest control company should give you"
        bg="cream"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-deep text-amber">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="From call to clean" title="Three steps, no surprises">
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((p) => (
            <div
              key={p.n}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <span className="font-serif text-5xl font-medium text-amber">{p.n}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CITIES */}
      <Section
        eyebrow="Where we work"
        title="Local teams across West Bengal"
        intro="Headquartered in Kolkata. Local technicians and warehouses in every city below."
        bg="cream"
      >
        <div className="flex flex-wrap gap-2">
          {cities.map((c) => {
            const loc = cityLocations.find((l) => l.city === c);
            const label = `Pest Control ${c}`;
            const className =
              "rounded-full border border-border bg-card px-4 py-2 text-sm text-forest-deep shadow-[var(--shadow-card)]";
            return loc ? (
              <Link
                key={c}
                href={`/pest-control-${loc.slug}`}
                className={`${className} transition hover:border-forest-soft hover:text-forest`}
              >
                {label}
              </Link>
            ) : (
              <span key={c} className={className}>
                {label}
              </span>
            );
          })}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="The receipts"
        title="What our customers actually say"
        intro="Real reviews from homes and offices across West Bengal."
      >
        <div className="mx-auto grid max-w-xl gap-6 md:max-w-none md:grid-cols-2">
          {testimonials.map((t) => (
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
    </>
  );
}
