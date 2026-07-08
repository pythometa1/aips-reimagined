import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { PestCard } from "@/components/site/PestCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Pest Control Services — 14 Specialist Protocols | AIPS" },
      { name: "description", content: "Cockroach, termite, bed bug, rodent, mosquito, ant, commercial and herbal pest control — each with its own family-safe protocol and written warranty." },
      { property: "og:title", content: "Pest Control Services | AIPS" },
      { property: "og:description", content: "14 specialist pest control protocols — family-safe, CIB-approved, with a written warranty on every job." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>One <em className="text-amber">specialist protocol</em> for every pest.</>}
        intro="Each species has its own biology, chemistry and warranty. Pick the one that's bothering you — we'll show you exactly how we treat it."
      />
      <Section>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
