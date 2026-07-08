import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function PestCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-forest-soft hover:shadow-[var(--shadow-lifted)]"
    >
      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-cream-warm text-forest-deep opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <div className="grid h-24 w-24 place-items-center rounded-2xl bg-cream-warm">
        <img
          src={service.illust}
          alt={`${service.short} illustration`}
          width={96}
          height={96}
          loading="lazy"
          className="h-20 w-20 object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-sans text-sm font-semibold text-foreground">
        {service.name}
      </h3>
    </Link>
  );
}
