import Image from "next/image";
import {
  Layers,
  GitBranch,
  Utensils,
  Search,
  Scale,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { PestBiology } from "@/data/pest-biology";

export function PestBiologySection({ data }: { data: PestBiology }) {
  const { classification, media } = data;

  return (
    <Section eyebrow="The science behind the treatment" title={data.title} intro={data.intro} wide>
      {/* Hero photo + classification — small image beside the content, vertically centered */}
      <div className={media?.hero ? "flex flex-col gap-5 sm:flex-row sm:items-center" : ""}>
        {media?.hero && (
          <figure className="mx-auto w-32 shrink-0 sm:mx-0 sm:w-36">
            <Image
              src={media.hero}
              alt={media.heroCaption ?? data.title}
              sizes="144px"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </figure>
        )}
        <div>
          <div className="flex flex-wrap gap-2">
            {[
              ["Kingdom", classification.kingdom],
              ["Phylum", classification.phylum],
              ["Class", classification.class],
              ["Order", classification.order],
              ...(classification.family ? [["Family", classification.family]] : []),
            ].map(([label, value]) => (
              <span
                key={label}
                className="rounded-full bg-forest-deep px-3.5 py-1.5 text-xs font-semibold text-cream shadow-sm"
              >
                <span className="text-amber uppercase tracking-wide">{label}:</span> {value}
              </span>
            ))}
          </div>
          {media?.heroCaption && (
            <p className="mt-4 rounded-xl border-l-4 border-amber bg-cream-warm px-4 py-2.5 text-sm italic leading-relaxed text-forest-deep">
              {media.heroCaption}
            </p>
          )}
        </div>
      </div>

      {/* Life cycle */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-forest-deep text-amber">
            <GitBranch className="h-5 w-5" />
          </span>
          <h3 className="font-serif text-xl text-foreground">Life cycle</h3>
        </div>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
          {media?.lifeCycle && (
            <figure className="mx-auto w-44 shrink-0 sm:mx-0 sm:w-52">
              <Image
                src={media.lifeCycle}
                alt={media.lifeCycleCaption ?? "Life cycle diagram"}
                sizes="(min-width: 640px) 208px, 176px"
                className="w-full rounded-2xl border border-border object-contain shadow-[var(--shadow-card)]"
              />
            </figure>
          )}

          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            {data.lifeCycle.duration.map((d) => (
              <div key={d.label} className="rounded-2xl bg-cream-warm p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                  {d.label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signs of infestation — image floats beside the list so it stays proportionate to any list length */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-forest-deep text-amber">
            <Search className="h-5 w-5" />
          </span>
          <h3 className="font-serif text-xl text-foreground">Signs of infestation</h3>
        </div>
        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
          {media?.signs && (
            <figure className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
              <Image
                src={media.signs}
                alt={media.signsCaption ?? "Signs of infestation"}
                sizes="(min-width: 640px) 192px, 160px"
                className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
              />
            </figure>
          )}
          <ul className="grid flex-1 gap-2 sm:grid-cols-2">
            {data.signsOfInfestation.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Integrated management approach */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-forest-deep text-amber">
            <ClipboardList className="h-5 w-5" />
          </span>
          <h3 className="font-serif text-xl text-foreground">Integrated management approach</h3>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {data.management.map((m) => (
            <div key={m.title} className="rounded-2xl border border-border p-4">
              <p className="font-serif text-base text-forest-deep">{m.title}</p>
              <ul className="mt-2 space-y-1.5">
                {m.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion: types/colony, feeding, economic importance, safety */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-card)] sm:p-4">
        <Accordion type="single" collapsible className="w-full">
          {(data.types || data.colonyStructure) && (
            <AccordionItem value="types">
              <AccordionTrigger className="text-left font-serif text-lg text-foreground">
                <span className="flex items-center gap-3">
                  <Layers className="h-5 w-5 shrink-0 text-forest" />
                  {data.colonyStructure ? "Common types & colony structure" : "Common types"}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[...(data.types ?? []), ...(data.colonyStructure ?? [])].map((t) => (
                    <div key={t.title} className="rounded-2xl bg-cream-warm p-4">
                      <p className="font-serif text-base text-forest-deep">{t.title}</p>
                      <ul className="mt-2 space-y-1.5">
                        {t.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem value="feeding">
            <AccordionTrigger className="text-left font-serif text-lg text-foreground">
              <span className="flex items-center gap-3">
                <Utensils className="h-5 w-5 shrink-0 text-forest" />
                Feeding habits
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {data.feedingHabits.intro}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {data.feedingHabits.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="economic">
            <AccordionTrigger className="text-left font-serif text-lg text-foreground">
              <span className="flex items-center gap-3">
                <Scale className="h-5 w-5 shrink-0 text-forest" />
                Economic & ecological importance
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream-warm p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                    Beneficial
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {data.economicImportance.beneficial.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-forest-deep p-4 text-cream">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber">
                    Harmful
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {data.economicImportance.harmful.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-cream/85">
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety" className="border-border/60">
            <AccordionTrigger className="text-left font-serif text-lg text-foreground">
              <span className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 text-forest" />
                Safety precautions
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {data.safety.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ShieldIcon />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Conclusion */}
      <blockquote className="mt-8 rounded-2xl border-l-4 border-amber bg-forest-deep p-6 text-cream md:p-8">
        <Quote className="h-5 w-5 text-amber" />
        <p className="mt-2 font-serif text-lg italic leading-relaxed text-cream md:text-xl">
          {data.conclusion}
        </p>
      </blockquote>
    </Section>
  );
}

function ShieldIcon() {
  return <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />;
}
