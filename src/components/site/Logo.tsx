import { Link } from "@tanstack/react-router";
import logo from "@/assets/aips-logo.png";

export function Logo({
  compact = false,
  variant = "default",
}: {
  compact?: boolean;
  variant?: "default" | "footer";
}) {
  const isFooter = variant === "footer";
  return (
    <Link
      to="/"
      className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
      aria-label="Advanced Indian Pest Solution — Protecting Our India"
    >
      <img
        src={logo}
        alt=""
        width={52}
        height={52}
        className={
          isFooter
            ? "h-14 w-14 shrink-0 transition-transform group-hover:-rotate-3"
            : compact
              ? "h-10 w-10 shrink-0"
              : "h-10 w-10 shrink-0 transition-transform group-hover:-rotate-3 sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
        }
      />
      {!compact && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={
              isFooter
                ? "font-serif text-[1.25rem] font-bold tracking-tight text-foreground"
                : "truncate font-serif text-[15px] font-bold tracking-tight text-foreground sm:text-lg lg:text-[1.25rem]"
            }
          >
            Advanced Indian <span className="text-forest">Pest Solution</span>
          </span>
          <span
            className={
              isFooter
                ? "mt-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber"
                : "mt-1.5 flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.22em] text-amber sm:gap-2 sm:text-[9px] lg:text-[10px]"
            }
          >
            <span aria-hidden className="h-px w-3 bg-amber sm:w-5" />
            Protecting Our India
            <span aria-hidden className="h-px w-3 bg-amber sm:w-5" />
          </span>
        </span>
      )}
    </Link>
  );
}
