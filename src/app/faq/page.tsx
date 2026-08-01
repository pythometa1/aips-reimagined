import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { OG_DEFAULTS } from "@/app/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ — Pest Control Cost & Safety",
  description:
    "Everything you'd want to ask before booking pest control — cost, safety for kids and pets, AMCs, chemicals, preparation.",
  alternates: { canonical: "/faq" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "AIPS FAQ — Everything Before You Book",
    description: "Cost, safety, AMC, chemicals — real answers to real questions.",
  },
};

const faqs = [
  {
    q: "How much does pest control cost in Kolkata?",
    a: "Residential general pest control starts at ₹1,499 for a 2 BHK. Termite pre-construction from ₹9/sq.ft. Commercial contracts are quoted after a free on-site inspection.",
  },
  {
    q: "Is your treatment safe for kids and pets?",
    a: "Yes. Every active we use is CIB-approved and applied at strict label-rate dilutions. Our gel-baiting protocol is fully odour-safe. For newborns, asthmatics or homes with pets, we offer a 100% botanical (herbal) protocol.",
  },
  {
    q: "How long does a treatment take?",
    a: "A typical 2 BHK gel + spray treatment takes 45–60 minutes. Termite drilling takes 2–3 hours. Commercial jobs are quoted per shift.",
  },
  {
    q: "Do I need to leave my home during treatment?",
    a: "No. Gel and residual sprays are safe to be around. Only for full mist-fumigation (rare, on request) do we ask you to vacate for 3–4 hours.",
  },
  {
    q: "Do you provide AMC (Annual Maintenance Contracts)?",
    a: "Yes. Quarterly AMCs are our most popular residential plan. Commercial clients typically choose monthly or fortnightly schedules.",
  },
  {
    q: "How do I prepare for the treatment?",
    a: "Empty base kitchen cabinets, cover exposed food, and keep pets in one room. That's it — our technician handles the rest.",
  },
  {
    q: "Which chemicals do you use?",
    a: "Envu Premise SC, Syngenta Advion, FMC Talstar and other CIB-approved actives. We hand over the MSDS on request for every product used in your home.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Questions"
        title={
          <>
            Everything you&apos;d want to ask <em className="text-amber">before booking.</em>
          </>
        }
        intro="Can't see your question? Call +91 94774 01805 or WhatsApp us — real human, business hours."
      />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)] mb-4"
            >
              <AccordionTrigger className="py-5 text-left font-serif text-lg text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
