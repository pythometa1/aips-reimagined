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
      className="group flex items-center gap-3"
      aria-label="Advanced Indian Pest Solution — Protecting Your India"
    >
      <img
        src={logo}
        alt=""
        width={56}
        height={56}
        className={
          isFooter
            ? "h-14 w-14 shrink-0 transition-transform group-hover:-rotate-3"
            : compact
              ? "h-11 w-11 shrink-0"
              : "h-12 w-12 shrink-0 transition-transform group-hover:-rotate-3 sm:h-14 sm:w-14"
        }
      />
      {!compact && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={
              isFooter
                ? "font-serif text-[1.35rem] font-bold tracking-tight text-foreground"
                : "font-serif text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-[1.4rem]"
            }
          >
            Advanced Indian <span className="text-forest">Pest Solution</span>
          </span>
          <span
            className={
              isFooter
                ? "mt-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber"
                : "mt-1.5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-amber sm:text-[10px]"
            }
          >
            <span aria-hidden className="h-px w-4 bg-amber sm:w-6" />
            Protecting Your India
            <span aria-hidden className="h-px w-4 bg-amber sm:w-6" />
          </span>
        </span>
      )}
    </Link>
  );
}
