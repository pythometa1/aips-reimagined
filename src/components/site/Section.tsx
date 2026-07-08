import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  align = "left",
  bg = "default",
  id,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  align?: "left" | "center";
  bg?: "default" | "cream" | "forest";
  id?: string;
}) {
  const bgClass =
    bg === "forest"
      ? "hero-gradient grain-overlay text-cream"
      : bg === "cream"
      ? "bg-cream-warm"
      : "";

  const alignClass = align === "center" ? "text-center items-center" : "";

  return (
    <section id={id} className={`${bgClass} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || intro) && (
          <div className={`flex max-w-3xl flex-col ${alignClass} ${align === "center" ? "mx-auto" : ""}`}>
            {eyebrow && (
              <span
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  bg === "forest" ? "text-amber" : "text-forest"
                }`}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-3 font-serif text-3xl font-medium leading-[1.1] md:text-5xl ${
                  bg === "forest" ? "text-cream" : "text-foreground"
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-base leading-relaxed md:text-lg ${
                  bg === "forest" ? "text-cream/75" : "text-muted-foreground"
                }`}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        <div className={eyebrow || title || intro ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
