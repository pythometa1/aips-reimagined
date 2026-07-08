import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-gradient grain-overlay text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
