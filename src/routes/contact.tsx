import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { InspectionForm } from "@/components/site/InspectionForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AIPS — Free Pest Control Inspection | 18 Indian Cities" },
      { name: "description", content: "Book a free pest control inspection across 18 Indian cities. Call +91 94774 01805 or WhatsApp us — real human, business hours." },
      { property: "og:title", content: "Contact AIPS — Free Inspection" },
      { property: "og:description", content: "Call, WhatsApp or book online. Same-day inspection in Kolkata, next day elsewhere." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Real human, business hours", href: site.whatsapp },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Hours", value: site.hours },
  { icon: MapPin, label: "Headquarters", value: site.address },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Free inspection. <em className="text-amber">Firm quote.</em></>}
        intro="Tell us what you need. A trained technician will call you back within business hours."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Talk to us the way you prefer.</h2>
            <p className="mt-3 text-muted-foreground">
              We answer calls and WhatsApp inside business hours — usually within the hour.
            </p>
            <ul className="mt-8 space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:border-forest-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-deep text-amber">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                      <p className="mt-0.5 font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <InspectionForm />
          </div>
        </div>
      </Section>
    </>
  );
}
