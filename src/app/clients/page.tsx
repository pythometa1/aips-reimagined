import type { Metadata } from "next";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { Building2 } from "lucide-react";
import { Section } from "@/components/site/Section";
import { clients } from "@/data/clients";
import clientsHeroBanner from "@/assets/clients-hero-banner.jpg";

export const metadata: Metadata = {
  title: "Our Clients — Trusted by 40,000+ Homes & Businesses",
  description:
    "From Fortune 500 pharma plants to family homes, AIPS is trusted by 40,000+ clients across West Bengal.",
  alternates: { canonical: "/clients" },
  openGraph: {
    title: "Our Clients | AIPS",
    description: "Trusted by 40,000+ homes and businesses across West Bengal.",
  },
};

const industries = [
  "Residential",
  "Commercial",
  "Industrial & Manufacturing",
  "Food Industry",
  "Restaurants & Cafés",
  "Warehouse & Logistics",
  "Hospitality & Hotel",
  "Pharmaceutical",
  "Hospitals & Healthcare",
  "IT Parks & Offices",
  "Retail & Malls",
  "Logistics & Transport",
];

const clientsWithLogo = clients
  .map((c) => ({
    ...c,
    hasLogo: existsSync(path.join(process.cwd(), "public", "clients", `${c.slug}.png`)),
  }))
  // Clients with a real logo first, name-only fallback tiles at the bottom.
  .sort((a, b) => Number(b.hasLogo) - Number(a.hasLogo));

export default function Clients() {
  return (
    <>
      <section className="bg-forest-deep">
        <Image
          src={clientsHeroBanner}
          alt="AIPS clients — trusted by 40,000+ homes and businesses across homes, clinics, industries, restaurants and retail spaces."
          priority
          fetchPriority="high"
          sizes="100vw"
          className="w-full"
        />
      </section>

      <Section eyebrow="Sectors" title="Sectors we proudly serve">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-forest-deep shadow-[var(--shadow-card)]"
            >
              {i}
            </div>
          ))}
        </div>
      </Section>

      <Section
        bg="cream"
        eyebrow="Our clients"
        title="Organizations that trust us"
        intro="Banks, hospitals, hotels, industries and government offices we've protected across West Bengal."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clientsWithLogo.map((c) => (
            <div
              key={c.slug}
              title={c.name}
              className="flex h-full min-h-[172px] flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)]"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream-warm">
                {c.hasLogo ? (
                  <Image
                    src={`/clients/${c.slug}.png`}
                    alt={`${c.name} logo`}
                    width={48}
                    height={48}
                    className="h-11 w-11 object-contain"
                  />
                ) : (
                  <Building2 className="h-7 w-7 text-forest/50" strokeWidth={1.6} />
                )}
              </div>
              <p className="line-clamp-4 text-xs leading-snug font-medium text-foreground">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
