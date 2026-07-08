import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-deep text-cream shadow-[var(--shadow-card)] transition-transform group-hover:-rotate-3"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12Z"
            fill="currentColor"
            className="text-amber"
          />
          <path
            d="M12 8v13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-forest-deep"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[1.05rem] font-semibold text-foreground">
            Advanced Indian <span className="text-forest">Pest Solution</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Protecting Your India · since 2010
          </span>
        </span>
      )}
    </Link>
  );
}
