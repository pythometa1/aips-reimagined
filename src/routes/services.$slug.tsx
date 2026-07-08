import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { InspectionForm } from "@/components/site/InspectionForm";
import { PestCard } from "@/components/site/PestCard";
import { findService, services } from "@/data/services";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | AIPS" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} — Family-Safe, Written Warranty | AIPS` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.name} | AIPS` },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} intro={service.summary}>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm text-cream ring-1 ring-inset ring-amber/30">
          <ShieldCheck className="h-4 w-4 text-amber" /> {service.warranty}
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {service.photo ? (
              <img
                src={service.photo}
                alt={`AIPS technician performing ${service.name.toLowerCase()}`}
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
              />
            ) : (
              <img
                src={service.illust}
                alt={`${service.name} illustration`}
                width={512}
                height={512}
                className="h-48 w-48 object-contain"
              />
            )}
            <h2 className="mt-8 font-serif text-3xl text-foreground md:text-4xl">Our approach</h2>
            <ul className="mt-6 space-y-4">
              {service.approach.map((a: string, i: number) => (
                <li key={a} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-deep font-serif text-sm text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground">{a}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-cream-warm p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-forest" />
                <div>
                  <p className="font-semibold text-forest-deep">Warranty</p>
                  <p className="mt-1 text-muted-foreground">{service.warranty}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-xl px-6 text-base font-semibold shadow-[var(--shadow-cta)]" style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}>
                <Link to="/contact">Book free inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a href="tel:+919477401805" className="inline-flex h-12 items-center justify-center rounded-xl border border-input px-6 text-base font-medium text-foreground hover:bg-cream-warm">
                Call +91 94774 01805
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <InspectionForm />
          </div>
        </div>
      </Section>

      <Section bg="cream" eyebrow="Also popular" title="Other specialist protocols">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {others.map((s) => (
            <PestCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
