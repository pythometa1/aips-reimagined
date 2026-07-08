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
      aria-label="AIPS — Advanced Indian Pest Solution home"
    >
      <span
        className={`relative grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-deep to-forest shadow-[0_8px_20px_-8px_rgba(20,60,40,0.55)] ring-1 ring-forest-deep/20 transition-transform group-hover:-rotate-3 ${
          isFooter ? "h-12 w-12" : "h-11 w-11 sm:h-12 sm:w-12"
        }`}
      >
        <img
          src={logo}
          alt=""
          className={isFooter ? "h-9 w-9" : "h-8 w-8 sm:h-9 sm:w-9"}
        />
        <span
          aria-hidden
          className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-amber ring-2 ring-background"
        />
      </span>
      {!compact && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={
              isFooter
                ? "text-[10px] font-bold uppercase tracking-[0.22em] text-amber"
                : "text-[9px] font-bold uppercase tracking-[0.22em] text-amber sm:text-[10px]"
            }
          >
            Advanced Indian
          </span>
          <span
            className={
              isFooter
                ? "mt-1 font-serif text-xl font-bold text-forest-deep"
                : "mt-1 font-serif text-lg font-bold text-forest-deep sm:text-xl"
            }
          >
            Pest <span className="text-forest">Solution</span>
          </span>
          {isFooter && (
            <span className="mt-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
              Protecting Your India · Since 2010
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
