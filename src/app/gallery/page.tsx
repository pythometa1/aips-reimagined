import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/site/Section";
import galleryHeroBanner from "@/assets/gallery-hero-banner.jpg";
import heroCrew from "@/assets/hero-crew.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroHandover from "@/assets/hero-handover.jpg";
import familySafe from "@/assets/family-safe.jpg";
import equipment from "@/assets/equipment-flatlay.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";
import serviceFogging from "@/assets/service-fogging.jpg";
import serviceCockroach from "@/assets/service-cockroach-gel.jpg";
import serviceTermite from "@/assets/service-termite.jpg";

export const metadata: Metadata = {
  title: "Gallery — Field Work Across West Bengal",
  description:
    "Photos of our field crew, treatments, job report handovers and audit-ready commercial jobs across West Bengal.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "AIPS Gallery — Field Work Across West Bengal",
    description: "Real photos from real jobs — treatments, handovers, commercial audits.",
  },
};

const shots = [
  { src: heroCrew, cap: "Field technician on-site at an Indian residential society" },
  { src: serviceBedbug, cap: "Bed bug treatment — mattress seam & headboard spray" },
  { src: serviceFogging, cap: "Society fogging for mosquito control at dusk" },
  { src: serviceCockroach, cap: "Odourless cockroach gel bait — kitchen hinge" },
  { src: serviceTermite, cap: "Anti-termite injection at door-frame skirting" },
  { src: heroKitchen, cap: "Commercial kitchen treatment" },
  { src: heroHandover, cap: "Job report handover after a residential job" },
  { src: familySafe, cap: "A family back on the floor within the hour" },
  { src: equipment, cap: "The kit — CIB-labelled chemistry and gloves" },
];

export default function Gallery() {
  return (
    <>
      <section className="bg-forest-deep">
        <Image
          src={galleryHeroBanner}
          alt="AIPS gallery — real jobs, real crews, real receipts. On-ground excellence across West Bengal, 1000+ jobs completed."
          priority
          fetchPriority="high"
          sizes="100vw"
          className="w-full"
        />
      </section>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
            >
              <Image
                src={s.src}
                alt={s.cap}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="bg-card px-5 py-3 text-sm text-muted-foreground">
                {s.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
