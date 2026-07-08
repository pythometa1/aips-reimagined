import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { StatsRow } from "@/components/site/StatsRow";
import familySafe from "@/assets/family-safe.jpg";
import heroCrew from "@/assets/hero-crew.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AIPS — Built by Agricultural Scientists Since 2010" },
      { name: "description", content: "AIPS is a pest control company built by agricultural scientists. Family-safe, CIB-approved chemistry, written warranty across 18 Indian cities." },
      { property: "og:title", content: "About AIPS — Family-Safe Pest Control Since 2010" },
      { property: "og:description", content: "Trained agronomists, CIB-approved actives, and 40,000+ customers across India." },
    ],
  }),
  component: About,
});

const leaders = [
  {
    initials: "AK",
    name: "Anup Karmakar",
    role: "Managing Director & Founder · B.Sc. Agriculture · 20 yrs",
    quote:
      "Our mission is to promote safer environments, healthier communities, and scientifically managed pest control through innovation, training and sustainable practice.",
  },
  {
    initials: "AS",
    name: "Ashwini Sanjay Yeljale",
    role: "Director · B.Sc. Agriculture · 10 yrs",
    quote:
      "Our mission is to provide the best quality services while building long-term trust with every customer we serve.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Since 2010"
        title={<>Built by agricultural scientists, <em className="text-amber">not call-center sales.</em></>}
        intro="We're a pest control company that thinks like a research lab — and a service company that treats your kitchen like our own."
      />

      <Section eyebrow="The chemistry behind the calm" title="Industry-grade actives. Calibrated to the milligram.">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We use the same actives the global pest industry uses — Envu Premise SC, Syngenta Advion, FMC Talstar —
            at strict label-rate dilutions. No black-market cocktails. No fogging your kitchen. Every product comes
            with an MSDS we'll hand you on request.
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

      <Section bg="cream">
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
              Every technician is trained internally over 90+ hours before their first customer visit. Ongoing
              monthly re-certification, monitored by our agricultural science team, ensures the same technician
              on every callback — with the same protocol, every time.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Leadership" title="The people behind the promise" intro="Pest Mentor Signature Award — Voice of the Industry 2025 · Most Popular Leader in Public Health & Hygiene Services 2023">
        <div className="grid gap-6 md:grid-cols-2">
          {leaders.map((l) => (
            <article key={l.name} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-deep font-serif text-xl text-amber">
                {l.initials}
              </div>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.role}</p>
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-foreground">
                “{l.quote}”
              </blockquote>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="cream" eyebrow="Our promise" title="A cleaner protocol, a cleaner conscience.">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <img src={familySafe} alt="Family playing safely on the floor after treatment" width={1280} height={960} loading="lazy" className="rounded-3xl object-cover shadow-[var(--shadow-lifted)]" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            If your family can't be in the room an hour after treatment, we shouldn't have used it. That's the
            one rule every AIPS technician is held to — and the reason 40,000+ Indian families and businesses have
            stayed with us since 2010.
          </p>
        </div>
      </Section>
    </>
  );
}
