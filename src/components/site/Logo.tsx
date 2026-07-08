import { Link } from "@tanstack/react-router";
import logo from "@/assets/aips-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="AIPS — Advanced Indian Pest Solution home">
      <img
        src={logo}
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 transition-transform group-hover:-rotate-3 sm:h-11 sm:w-11"
      />
      {!compact && (
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="truncate font-serif text-[0.95rem] font-semibold text-foreground sm:text-[1.05rem]">
            Advanced Indian <span className="text-forest">Pest Solution</span>
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber sm:text-[11px]">
            Protecting Your India
            <span aria-hidden className="hidden text-muted-foreground/50 sm:inline">·</span>
            <span className="hidden font-medium normal-case tracking-normal text-muted-foreground sm:inline">
              Since 2010
            </span>
          </span>
        </span>
      )}
    </Link>
  );
}

