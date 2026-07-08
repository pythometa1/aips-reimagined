import { Link } from "@tanstack/react-router";
import logo from "@/assets/aips-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logo}
        alt="AIPS — Advanced Indian Pest Solution logo"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 transition-transform group-hover:-rotate-3"
      />
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
