import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Users, Award } from "lucide-react";
import heroCrew from "@/assets/hero-crew.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import familySafe from "@/assets/family-safe.jpg";
import equipment from "@/assets/equipment-flatlay.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";
import serviceFogging from "@/assets/service-fogging.jpg";
import serviceCockroach from "@/assets/service-cockroach-gel.jpg";
import serviceTermite from "@/assets/service-termite.jpg";
import { InspectionForm } from "@/components/site/InspectionForm";
import { PestCard } from "@/components/site/PestCard";
import { Section } from "@/components/site/Section";
import { StatsRow } from "@/components/site/StatsRow";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cities } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
});

const bullets = [
  "Same-day inspection",
  "Written warranty up to 10 years",
  "Children & pet-safe",
  "40,000+ customers served",
];

const testimonials = [
  {
    quote:
      "Door frame had termite tubes — they drilled and injected very neatly. Three years on, zero termites. The 5-year letter on their letterhead was the reason we picked them.",
    who: "Meera J. · Kolkata",
  },
  {
    quote:
      "Office kitchen was overrun. Gel treatment overnight, clean by Monday. Booking the yearly AMC now.",
    who: "Rohan G. · Pune",
  },
  {
    quote:
      "Same-day inspection, same-day treatment, WhatsApp follow-up. This is what professional service should look like.",
    who: "Priya S. · Bengaluru",
  },
  {
    quote:
      "I was nervous about an old family home. They were patient, explained every step, and gave a written warranty.",
    who: "Nirmal B. · Guwahati",
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
    t: "Safe treatment + written warranty",
    d: "We treat, brief you on what to expect, and issue your warranty on company letterhead. Free callbacks within warranty.",
  },
];

const pillars = [
  { icon: Award, t: "Licensed since 2010", d: "Pest Control Operation License. Decade-plus track record across India." },
  { icon: ShieldCheck, t: "Family & pet safe", d: "CIB-approved actives. Herbal protocol available for newborns, asthmatics and pets." },
  { icon: Sparkles, t: "Written warranty", d: "Up to 10 years on pre-construction termite. Free re-treatment within warranty." },
  { icon: Users, t: "40,000+ customers", d: "Trusted across 18 cities and 10 states, from homes to Fortune 500 plants." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient grain-overlay text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-medium text-amber ring-1 ring-inset ring-amber/30">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Family-safe pest control · since 2010
            </span>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] text-cream md:text-7xl">
              Protecting your home,
              <br />
              <span className="italic text-amber">the natural way.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              Licensed, science-led pest control with CIB-approved, family-safe treatments and a
              written warranty on every job — across 18 Indian cities.
            </p>

            <ul className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-cream/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">
              <img src={heroCrew} alt="Our trained field crew before dispatch" width={480} height={360} className="aspect-[4/3] rounded-2xl object-cover ring-1 ring-cream/10" />
              <img src={heroKitchen} alt="Commercial kitchen pest treatment" width={480} height={360} loading="lazy" className="aspect-[4/3] rounded-2xl object-cover ring-1 ring-cream/10" />
              <img src={heroHandover} alt="Warranty handover after a home service" width={480} height={360} loading="lazy" className="aspect-[4/3] rounded-2xl object-cover ring-1 ring-cream/10" />
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-cream/60">
              <ShieldCheck className="h-4 w-4 text-amber" /> Written warranty on company letterhead
            </p>
          </div>

          <div>
            <InspectionForm />
          </div>
        </div>
      </section>

      {/* PEST GRID */}
      <Section
        eyebrow="What we treat"
        title="A specialist protocol for every pest"
        intro="Each species has its own biology, chemistry and warranty. Tap any pest to see exactly how we treat it — family-safe, every time."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {services.slice(0, 11).map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
          <Link
            to="/services"
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
              img: heroKitchen,
              title: "Commercial",
              body: "Restaurants, hotels, offices, hospitals and retail — audit-ready and discreet.",
              bullets: ["HACCP & FSSAI-aligned documentation", "Same technician on every visit", "Flexible schedules", "We attend your audits with you"],
            },
            {
              img: equipment,
              title: "Industrial",
              body: "Factories, warehouses and food-processing units with high pest pressure.",
              bullets: ["Tamper-proof bait-station perimeters", "Sighting & trend reporting", "Per-sq.ft annual contracts", "NDA-friendly for pharma & IT"],
            },
            {
              img: familySafe,
              title: "Residential",
              body: "Homes, apartments and villas — family-safe treatment with written warranty.",
              bullets: ["Children & pet-safe protocols", "Odorless gel & herbal options", "Warranty up to 10 years", "Free callbacks within warranty"],
            },
          ].map((c) => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
              <img src={c.img} alt="" width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
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
                if your family can't be in the room an hour later, we shouldn't have used it.
              </span>
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-forest-deep">CIB-approved actives only</p>
                <p className="mt-1 text-sm text-muted-foreground">Every chemical carries a valid label and MSDS.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-forest-deep">Same technician every time</p>
                <p className="mt-1 text-sm text-muted-foreground">No new face on a callback. Ever.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={equipment}
              alt="Pest control equipment — sprayer, amber chemical bottle, gloves and neem"
              width={1280}
              height={960}
              loading="lazy"
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
            <div key={t} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
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
            <div key={p.n} className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <span className="font-serif text-5xl font-medium text-amber">{p.n}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CITIES */}
      <Section eyebrow="Where we work" title="Local teams across 18 Indian cities" intro="Headquartered in Kolkata. Local technicians and warehouses in every city below." bg="cream">
        <div className="flex flex-wrap gap-2">
          {cities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-forest-deep shadow-[var(--shadow-card)]"
            >
              Pest Control {c}
            </span>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="The receipts" title="What our customers actually say" intro="Real reviews from homes and offices across India.">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.who} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-forest">— {t.who}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="hero-gradient grain-overlay">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center text-cream md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Trusted by 40,000+ customers across India
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
            Get them out today.
            <br /> <em className="text-amber">Keep them out for years.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-cream/75 md:text-lg">
            Free inspection · firm quote · family-safe treatment · written warranty. That's the AIPS way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-12 rounded-xl px-6 text-base font-semibold shadow-[var(--shadow-cta)]" style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}>
              <Link to="/contact">Book free inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <a href="tel:+919477401805" className="inline-flex h-12 items-center justify-center rounded-xl border border-cream/30 px-6 text-base font-medium text-cream hover:bg-cream/10">
              +91 94774 01805
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
