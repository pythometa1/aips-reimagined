import { Link } from "@tanstack/react-router";
import logo from "@/assets/aips-logo-full.png";

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
      className="group flex items-center"
      aria-label="AIPS — Advanced Indian Pest Solution home"
    >
      <img
        src={logo}
        alt="Advanced Indian Pest Solution — Protecting Your India"
        className={
          isFooter
            ? "h-14 w-auto transition-transform group-hover:-rotate-1"
            : compact
              ? "h-10 w-auto"
              : "h-12 w-auto sm:h-14 md:h-16 transition-transform group-hover:-rotate-1"
        }
      />
    </Link>
  );
}
