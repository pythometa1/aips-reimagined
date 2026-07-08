import { stats } from "@/data/site";

export function StatsRow({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-y-8 rounded-3xl p-8 sm:grid-cols-4 sm:gap-6 sm:p-10 ${
        tone === "dark"
          ? "bg-forest-deep/95 text-cream"
          : "bg-card text-foreground shadow-[var(--shadow-card)]"
      }`}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`text-center ${i > 0 ? "sm:border-l sm:border-cream/10" : ""}`}
        >
          <div
            className={`font-serif text-3xl font-medium md:text-4xl ${
              tone === "dark" ? "text-amber" : "text-forest-deep"
            }`}
          >
            {s.value}
          </div>
          <div
            className={`mt-1 text-xs uppercase tracking-wider ${
              tone === "dark" ? "text-cream/70" : "text-muted-foreground"
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
