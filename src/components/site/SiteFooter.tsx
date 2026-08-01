import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { site, nav } from "@/data/site";
import { services } from "@/data/services";
import { cityLocations } from "@/data/locations";
import { locationAreas } from "@/data/location-areas";

export function SiteFooter() {
  // Sitewide internal links into the location cluster — without these, the
  // area pages hang off a single link near the bottom of the homepage.
  const areaLinks = locationAreas.slice(0, 8);

  return (
    <footer className="hero-gradient grain-overlay mt-24 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr_1.2fr_1.3fr]">
        <div>
          <div className="[&_span]:text-cream [&_.text-forest]:text-amber [&_.text-muted-foreground]:text-cream/60 [&_.text-muted-foreground\/50]:text-cream/40">
            <Logo variant="footer" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Licensed, science-led pest control with CIB-approved, family-safe treatments.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-cream/80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link href={n.to} className="hover:text-amber">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Popular services
          </h4>
          <ul className="space-y-2 text-sm text-cream/80">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-amber">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Talk to us
          </h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a href={`mailto:${site.email}`} className="break-all">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Areas we serve — sitewide entry point into the location cluster */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Areas we serve
          </h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/75">
            {cityLocations.map((c) => (
              <li key={c.slug}>
                <Link href={`/pest-control-${c.slug}`} className="hover:text-amber">
                  Pest Control in {c.city}
                </Link>
              </li>
            ))}
            {areaLinks.map((a) => (
              <li key={`${a.citySlug}-${a.slug}`}>
                <Link href={`/pest-control-${a.citySlug}/${a.slug}`} className="hover:text-amber">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>PCO Licensed · CIB Approved · HACCP & FSSAI aligned</p>
        </div>
      </div>
    </footer>
  );
}
