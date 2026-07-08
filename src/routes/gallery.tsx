import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import heroCrew from "@/assets/hero-crew.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroHandover from "@/assets/hero-handover.jpg";
import familySafe from "@/assets/family-safe.jpg";
import equipment from "@/assets/equipment-flatlay.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";
import serviceFogging from "@/assets/service-fogging.jpg";
import serviceCockroach from "@/assets/service-cockroach-gel.jpg";
import serviceTermite from "@/assets/service-termite.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Field Work Across India | AIPS" },
      { name: "description", content: "Photos of our field crew, treatments, warranty handovers and audit-ready commercial jobs across 18 Indian cities." },
      { property: "og:title", content: "AIPS Gallery — Field Work Across India" },
      { property: "og:description", content: "Real photos from real jobs — treatments, handovers, commercial audits." },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: heroCrew, cap: "Field technician on-site at an Indian residential society" },
  { src: serviceBedbug, cap: "Bed bug treatment — mattress seam & headboard spray" },
  { src: serviceFogging, cap: "Society fogging for mosquito control at dusk" },
  { src: serviceCockroach, cap: "Odourless cockroach gel bait — kitchen hinge" },
  { src: serviceTermite, cap: "Anti-termite injection at door-frame skirting" },
  { src: heroKitchen, cap: "Commercial kitchen treatment — Pune" },
  { src: heroHandover, cap: "Warranty handover after a residential job" },
  { src: familySafe, cap: "A family back on the floor within the hour" },
  { src: equipment, cap: "The kit — CIB-labelled chemistry and gloves" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Real jobs. Real crews. <em className="text-amber">Real receipts.</em></>}
        intro="A rolling glimpse of what family-safe pest control looks like on site — every day, across 18 Indian cities."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <figure key={i} className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={s.src}
                alt={s.cap}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="bg-card px-5 py-3 text-sm text-muted-foreground">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
