import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Building2, Sprout, ShieldCheck, Trophy, Quote, Briefcase, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { StatsRow } from "@/components/site/StatsRow";
import familySafe from "@/assets/family-safe.jpg";
import heroCrew from "@/assets/hero-crew.jpg";
import founderAnup from "@/assets/founder-anup.jpg";
import cofounderAshwini from "@/assets/cofounder-ashwini.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AIPS — Built by Agricultural Scientists Since 2010" },
      { name: "description", content: "Meet the founders, timeline and awards of Advanced Indian Pest Solution — family-safe, CIB-approved pest control across 18 Indian cities since 2010." },
      { property: "og:title", content: "About AIPS — Family-Safe Pest Control Since 2010" },
      { property: "og:description", content: "Founded by agronomist Anup Karmakar in 2010. 40,000+ customers, 18 cities, national industry leadership." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2010", title: "AIPS is founded", body: "Anup Karmakar, a B.Sc. Agriculture graduate, launches Advanced Indian Pest Solution in Kolkata with one van and a promise: family-safe chemistry, done right." },
  { year: "2013", title: "First commercial contracts", body: "HACCP-aligned protocols win our first food-processing and hospitality accounts across West Bengal." },
  { year: "2016", title: "Expansion beyond Bengal", body: "Operations open in Pune, Mumbai and Delhi NCR — same technicians, same protocol, everywhere." },
  { year: "2019", title: "10,000+ homes protected", body: "Herbal protocol launched for newborns, elderly and asthmatic households." },
  { year: "2023", title: "Most Popular Leader Award", body: "Anup Karmakar recognised as Most Popular Leader in Public Health & Hygiene Services." },
  { year: "2024", title: "National Ambassador, PMA", body: "Anup Karmakar appointed National Ambassador & General Secretary of the Pest Management Association." },
  { year: "2026", title: "40,000+ customers · 18 cities", body: "Serving 18 cities across 10 states with a written warranty on every job." },
];

const awards = [
  { icon: Trophy, title: "Pest Mentor Signature Award", body: "Voice of the Industry — 2025" },
  { icon: Award, title: "Most Popular Leader 2023", body: "Public Health & Hygiene Services" },
  { icon: ShieldCheck, title: "CIB & RC Approved", body: "Central Insecticides Board licensed" },
  { icon: Sprout, title: "HACCP & FSSAI Aligned", body: "Food-safe protocols for F&B clients" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Since 2010 · 15+ years"
        title={<>Built by agricultural scientists, <em className="text-amber">not call-center sales.</em></>}
        intro="We're a pest control company that thinks like a research lab — and a service company that treats your kitchen like our own. Meet the people, the milestones and the mission behind AIPS."
      />

      {/* Founder spotlight */}
      <Section bg="cream" eyebrow="Meet the founder" title="Anup Karmakar">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative">
            <img
              src={founderAnup}
              alt="Anup Karmakar, Founder & Managing Director of AIPS"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
            />
            <div className="absolute -bottom-5 -right-3 hidden max-w-[240px] rounded-2xl bg-forest-deep px-5 py-4 text-cream shadow-[var(--shadow-lifted)] md:block">
              <p className="font-serif text-lg leading-tight text-amber">15+ years</p>
              <p className="text-xs text-cream/75">Leading India's family-safe pest movement</p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest-deep px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber">Founder & MD</span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">B.Sc. Agriculture</span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">20+ yrs experience</span>
            </div>

            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              National Ambassador & General Secretary — Pest Management Association
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anup Karmakar founded Advanced Indian Pest Solution Pvt. Ltd. in January 2011 with a single conviction:
              India deserves pest control built on agricultural science, not shortcuts. Fifteen years later he leads
              the industry from the front — appointed National Ambassador & General Secretary of the Pest Management
              Association (PMA) in March 2024, representing India's PCOs on public health, urban and rural pest policy.
            </p>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-amber bg-cream-warm p-5">
              <Quote className="h-5 w-5 text-amber" />
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground">
                Our mission is to promote safer environments, healthier communities, and scientifically managed pest
                control through innovation, training and sustainable practice.
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-forest">— Anup Karmakar</footer>
            </blockquote>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-forest-deep">
                  <Briefcase className="h-4 w-4 text-amber" />
                  <p className="text-xs font-semibold uppercase tracking-widest">Founder & MD</p>
                </div>
                <p className="mt-2 font-serif text-lg text-foreground">Advanced Indian Pest Solution Pvt. Ltd.</p>
                <p className="text-xs text-muted-foreground">Jan 2011 – Present · 15+ years</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-forest-deep">
                  <GraduationCap className="h-4 w-4 text-amber" />
                  <p className="text-xs font-semibold uppercase tracking-widest">National Ambassador</p>
                </div>
                <p className="mt-2 font-serif text-lg text-foreground">Pest Management Association (PMA)</p>
                <p className="text-xs text-muted-foreground">Mar 2024 – Present · Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Co-founder */}
      <Section eyebrow="Meet the co-founder" title="Ashwini Sanjay Yeljale">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest-deep px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber">Director & Co-Founder</span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">B.Sc. Agriculture</span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">10+ yrs experience</span>
            </div>
            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Building trust one household at a time.
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ashwini leads operations, client care and technician training in western India. Under her stewardship the
              Pune and Mumbai teams have grown into some of the region's most trusted family-safe pest specialists —
              with repeat business, referrals and long-term commercial contracts as the scorecard.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-amber bg-cream-warm p-5">
              <Quote className="h-5 w-5 text-amber" />
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground">
                Our mission is to provide the best quality services while building long-term trust with every customer
                we serve.
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-forest">— Ashwini Sanjay Yeljale</footer>
            </blockquote>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src={cofounderAshwini}
              alt="Ashwini Sanjay Yeljale, Director & Co-Founder of AIPS"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
            />
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="cream" eyebrow="Our journey" title="Fifteen years, one uncompromising standard." intro="From one van in Kolkata to 18 cities across India — every milestone earned by keeping the same promise.">
        <ol className="relative mx-auto max-w-3xl border-l-2 border-amber/40 pl-6 md:pl-10">
          {timeline.map((t) => (
            <li key={t.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[34px] grid h-6 w-6 place-items-center rounded-full bg-amber ring-4 ring-cream md:-left-[46px] md:h-7 md:w-7">
                <span className="h-2 w-2 rounded-full bg-forest-deep" />
              </span>
              <p className="font-serif text-2xl text-forest-deep md:text-3xl">{t.year}</p>
              <h4 className="mt-1 font-serif text-lg text-foreground md:text-xl">{t.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Awards & recognition */}
      <Section eyebrow="Awards & recognition" title="Recognised by the industry we serve.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <article key={a.title} className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-deep text-amber">
                <a.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-serif text-lg text-foreground">{a.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Chemistry / brands */}
      <Section bg="cream" eyebrow="The chemistry behind the calm" title="Industry-grade actives. Calibrated to the milligram.">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We use the same actives the global pest industry uses — Envu Premise SC, Syngenta Advion, FMC Talstar — at
            strict label-rate dilutions. No black-market cocktails. No fogging your kitchen. Every product comes with an
            MSDS we'll hand you on request.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Envu", "FMC", "Syngenta", "UPL", "Arbuda", "Sandhya"].map((b) => (
              <span key={b} className="rounded-full border border-border bg-card px-5 py-2 font-serif text-lg text-forest-deep">
                {b}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats + team */}
      <Section>
        <div className="mb-12">
          <StatsRow />
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={heroCrew} alt="AIPS field crew" width={1280} height={960} loading="lazy" className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Our team</p>
            <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Trained in-house. Supervised by agronomists.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Every technician is trained internally over 90+ hours before their first customer visit. Ongoing monthly
              re-certification, monitored by our agricultural science team, ensures the same technician on every
              callback — with the same protocol, every time.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: "40,000+ homes" },
                { icon: Building2, label: "18 cities" },
                { icon: ShieldCheck, label: "10-yr warranty" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-3 text-center">
                  <s.icon className="mx-auto h-5 w-5 text-amber" />
                  <p className="mt-2 text-xs font-semibold text-forest-deep">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Promise */}
      <Section bg="cream" eyebrow="Our promise" title="A cleaner protocol, a cleaner conscience.">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <img src={familySafe} alt="Family playing safely on the floor after treatment" width={1280} height={960} loading="lazy" className="rounded-3xl object-cover shadow-[var(--shadow-lifted)]" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            If your family can't be in the room an hour after treatment, we shouldn't have used it. That's the one rule
            every AIPS technician is held to — and the reason 40,000+ Indian families and businesses have stayed with us
            since 2010.
          </p>
        </div>
      </Section>
    </>
  );
}
