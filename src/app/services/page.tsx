import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/site/Section";
import { PestCard } from "@/components/site/PestCard";
import { services } from "@/data/services";
import servicesHeroBanner from "@/assets/services-hero-banner.jpg";

export const metadata: Metadata = {
  title: "Pest Control Services — 14 Specialist Protocols",
  description:
    "Cockroach, termite, bed bug, rodent, mosquito, ant, commercial and herbal pest control — each with its own family-safe protocol.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Pest Control Services | AIPS",
    description: "14 specialist pest control protocols — family-safe and CIB-approved.",
  },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="bg-forest-deep">
        <Image
          src={servicesHeroBanner}
          alt="AIPS services — one specialist protocol for every pest, including cockroaches, ants, mosquitoes, rodents and termites."
          priority
          fetchPriority="high"
          sizes="100vw"
          className="w-full"
        />
      </section>
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
