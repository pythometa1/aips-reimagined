import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Clock, MessageCircle, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md">
      {/* utility bar */}
      <div className="hidden border-b border-border/60 bg-cream-warm/70 text-xs text-forest-deep md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-forest">
              <Phone className="h-3.5 w-3.5 text-forest" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-forest">
              <Mail className="h-3.5 w-3.5 text-forest" /> {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-forest" /> {site.hours}
            </span>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-medium text-forest hover:text-forest-deep"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp us
          </a>
        </div>
      </div>

      {/* main nav */}
      <div className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Logo />

          <nav className="hidden justify-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              const isContact = item.to === "/contact";
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isContact
                      ? "bg-amber text-ink shadow-[var(--shadow-cta)] hover:brightness-105"
                      : active
                        ? "bg-forest-deep/5 text-ink"
                        : "text-ink hover:text-forest-deep"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border text-forest-deep lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
              {nav.map((item) => {
                const isContact = item.to === "/contact";
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-bold ${
                      isContact
                        ? "bg-amber text-ink shadow-[var(--shadow-cta)]"
                        : "text-ink hover:bg-cream-warm"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={site.phoneHref}
                className="mt-2 rounded-lg bg-forest-deep px-3 py-2.5 text-center text-sm font-medium text-cream"
              >
                Call {site.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
