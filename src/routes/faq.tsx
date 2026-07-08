import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pest Control Cost, Safety & Warranty | AIPS" },
      { name: "description", content: "Everything you'd want to ask before booking pest control — cost, safety for kids and pets, warranty, AMCs, chemicals, preparation." },
      { property: "og:title", content: "AIPS FAQ — Everything Before You Book" },
      { property: "og:description", content: "Cost, safety, warranty, AMC, chemicals — real answers to real questions." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How much does pest control cost in Kolkata?", a: "Residential general pest control starts at ₹1,499 for a 2 BHK, with a 3-month written warranty. Termite pre-construction from ₹9/sq.ft. Commercial contracts are quoted after a free on-site inspection." },
  { q: "Is your treatment safe for kids and pets?", a: "Yes. Every active we use is CIB-approved and applied at strict label-rate dilutions. Our gel-baiting protocol is fully odour-safe. For newborns, asthmatics or homes with pets, we offer a 100% botanical (herbal) protocol." },
  { q: "How long does a treatment take?", a: "A typical 2 BHK gel + spray treatment takes 45–60 minutes. Termite drilling takes 2–3 hours. Commercial jobs are quoted per shift." },
  { q: "Do I need to leave my home during treatment?", a: "No. Gel and residual sprays are safe to be around. Only for full mist-fumigation (rare, on request) do we ask you to vacate for 3–4 hours." },
  { q: "What if pests come back during the warranty period?", a: "We come back at no charge, as many times as needed, until the warranty period ends. Callbacks are typically scheduled within 48 hours." },
  { q: "Do you provide AMC (Annual Maintenance Contracts)?", a: "Yes. Quarterly AMCs are our most popular residential plan. Commercial clients typically choose monthly or fortnightly schedules." },
  { q: "How do I prepare for the treatment?", a: "Empty base kitchen cabinets, cover exposed food, and keep pets in one room. That's it — our technician handles the rest." },
  { q: "Which chemicals do you use?", a: "Envu Premise SC, Syngenta Advion, FMC Talstar and other CIB-approved actives. We hand over the MSDS on request for every product used in your home." },
];

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title={<>Everything you'd want to ask <em className="text-amber">before booking.</em></>}
        intro="Can't see your question? Call +91 94774 01805 or WhatsApp us — real human, business hours."
      />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)] mb-4">
              <AccordionTrigger className="py-5 text-left font-serif text-lg text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
