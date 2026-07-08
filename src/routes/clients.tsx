import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Trusted by 40,000+ Homes & Businesses | AIPS" },
      { name: "description", content: "From Fortune 500 pharma plants to family homes, AIPS is trusted by 40,000+ clients across 18 Indian cities." },
      { property: "og:title", content: "Our Clients | AIPS" },
      { property: "og:description", content: "Trusted by 40,000+ homes and businesses across India." },
    ],
  }),
  component: Clients,
});

const industries = [
  "Residential", "Commercial", "Industrial & Manufacturing", "Food Industry",
  "Restaurants & Cafés", "Warehouse & Logistics", "Hospitality & Hotel",
  "Pharmaceutical", "Hospitals & Healthcare", "IT Parks & Offices",
  "Retail & Malls", "Logistics & Transport",
];

const featured = [
  { name: "Taj Bengal", sector: "Hospitality" },
  { name: "ITC Sonar", sector: "Hospitality" },
  { name: "PwC Kolkata", sector: "IT / Offices" },
  { name: "Apollo Gleneagles", sector: "Healthcare" },
  { name: "Big Bazaar", sector: "Retail" },
  { name: "Reliance Fresh", sector: "Retail" },
  { name: "Haldiram's", sector: "Food" },
  { name: "Wipro Salt Lake", sector: "IT Parks" },
];

function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title={<>Trusted by <em className="text-amber">40,000+</em> homes and businesses.</>}
        intro="From a single clinic to a multi-acre factory, our protocols and documentation are built to pass the strictest audits in every sector."
      />

      <Section eyebrow="Sectors" title="Sectors we proudly serve">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-forest-deep shadow-[var(--shadow-card)]">
              {i}
            </div>
          ))}
        </div>
      </Section>

      <Section bg="cream" eyebrow="Featured clients" title="A few of the teams we protect">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((c) => (
            <div key={c.name} className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <p className="font-serif text-xl text-foreground">{c.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-forest">{c.sector}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
