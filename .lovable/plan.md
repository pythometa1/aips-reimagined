
## Goal

Rebuild the Advanced Indian Pest Solution site (aips-next.vercel.app) inside this TanStack Start project. Keep every route and information block from the reference, but upgrade the visual system to a premium, competitive standard with proper imagery, refined typography, and cohesive design tokens.

## Design direction (locked defaults)

Since the design questions were skipped, I'm committing to a direction that matches the existing brand DNA and current industry standard:

- **Palette — Deep Forest & Amber**: forest green primary (`oklch` equivalents of #0B3D2E / #146B4A), warm amber CTA (#F4A11A), cream surfaces (#FFF8EC), ink (#0F1A15). All defined as semantic tokens in `src/styles.css` (no hardcoded colors in components).
- **Typography — Fraunces (headline serif) + Inter (body)**, loaded via `<link>` in `__root.tsx`. Fraunces preserves the editorial "Protecting your home, the natural way." feel; Inter keeps body crisp.
- **Style**: hybrid editorial — real photography for hero/team/gallery, custom illustrated pest cards, data callouts, generous whitespace, soft shadows, subtle grain texture on green sections.
- **Motion**: restrained — fade/slide on scroll, hover lifts on cards, no heavy animation.

## Route structure (preserved from reference)

```
src/routes/
  __root.tsx              → shared header/footer, fonts, SEO
  index.tsx               → Home (hero + inspection form + pest grid + trust + testimonials + CTA)
  about.tsx               → About (story since 2010, certifications, team)
  services.tsx            → Services index
  services.$slug.tsx      → Service detail (cockroach, termite, bed-bug, rodent, mosquito, ant, lizard, silverfish, carpet-beetle, spider, fly, general-pest, commercial, herbal)
  clients.tsx             → Client logos + case snippets
  gallery.tsx             → Photo gallery grid
  blogs.tsx               → Blog index
  blogs.$slug.tsx         → Blog post
  faq.tsx                 → FAQ accordion
  contact.tsx             → Contact + inspection form + map
```

Each route gets its own `head()` with unique title, description, og:title, og:description. Leaf routes with hero imagery get `og:image`.

## Components (in `src/components/`)

- `SiteHeader` — top utility bar (phone, email, hours, WhatsApp) + main nav with logo, sticky, mobile drawer.
- `SiteFooter` — 4-column with brand, quick links, services, contact + copyright.
- `Hero` — dark-green editorial hero with serif headline, feature bullets, photo cluster.
- `InspectionForm` — reusable booking form (name, phone, address, service select, type, submit). Frontend-only (no backend yet); logs to console + shows success toast.
- `PestCard` — illustrated pest card with hover lift, links to service detail.
- `TrustBar` — stats row (40,000+ customers, 18 cities, 10-yr warranty, since 2010).
- `WarrantyCallout`, `ProcessSteps`, `TestimonialCard`, `CertBadges`, `CTASection`, `FAQAccordion` (shadcn accordion), `GalleryGrid`.

## Imagery (generated with imagegen)

Real photographic + illustrated assets under `src/assets/`:

- Hero cluster: crew-with-van, technician-in-kitchen, warranty-handover (3 photos).
- Service detail hero per major service (cockroach, termite, bed-bug, rodent, mosquito, commercial, herbal) — 7 photos.
- 14 illustrated pest icons (flat, friendly, on cream background, transparent PNG).
- About: team portrait, certifications shot.
- Gallery: 6-8 job-site photos.
- OG social image (1200x630) with brand mark + tagline.

Placeholder-free: no stock URLs, no lorem imagery. Generated in parallel batches.

## Design system work

- Replace default shadcn tokens in `src/styles.css` with the forest+amber palette (light mode only; dark mode kept as sensible dark variant).
- Add semantic tokens: `--brand-forest`, `--brand-forest-deep`, `--brand-amber`, `--brand-amber-glow`, `--brand-cream`, `--surface-elevated`, gradient tokens (`--gradient-hero`, `--gradient-amber-cta`), shadow tokens (`--shadow-card`, `--shadow-cta`, `--shadow-lifted`).
- Register all as `@theme inline` so `bg-brand-forest`, `text-brand-amber` etc. work.
- Fraunces + Inter loaded via `<link>` in root head; `--font-serif` / `--font-sans` in `@theme`.
- Subtle noise/grid overlay utility for dark green sections via `@utility`.

## SEO & metadata

- Real title/description on `__root.tsx` (replace "Lovable App" defaults) and per-route overrides.
- JSON-LD `LocalBusiness` schema on home.
- Semantic HTML: single H1 per page, proper heading hierarchy, alt text on every image, lazy loading below the fold.

## Scope notes

- Frontend + presentation only. No backend, no Lovable Cloud, no form submission integration in this pass (form UI is complete; wiring can be a follow-up).
- Content copied/rewritten from the reference site (same claims, city coverage, service list). No fabricated certifications.
- All 14 service detail pages built from a shared data file (`src/data/services.ts`) so `services.$slug.tsx` renders each without duplication.

## Deliverable

A polished, production-quality pest-control marketing site with the same structure as the reference, upgraded to compete with modern industry sites — cohesive brand, real imagery, editorial typography, refined interactions.
