import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import heroCrew from "@/assets/hero-crew.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroHandover from "@/assets/hero-handover.jpg";
import familySafe from "@/assets/family-safe.jpg";
import equipment from "@/assets/equipment-flatlay.jpg";

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
  { src: heroCrew, cap: "Field crew before dispatch — Kolkata warehouse" },
  { src: heroKitchen, cap: "Gel treatment in a commercial kitchen — Pune" },
  { src: heroHandover, cap: "Warranty handover after a residential job" },
  { src: familySafe, cap: "A family back on the floor within the hour" },
  { src: equipment, cap: "The kit — CIB-labelled chemistry and gloves" },
  { src: heroCrew, cap: "Morning briefing — species-specific protocols" },
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
