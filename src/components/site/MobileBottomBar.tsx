import { Phone, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export function MobileBottomBar() {
  return (
    <>
      <div className="h-24 md:hidden" aria-hidden />
      <nav
        className="fixed inset-x-3 bottom-3 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Quick contact"
      >
        <div className="relative flex items-center justify-between gap-1.5 rounded-3xl border border-cream/40 bg-cream/85 px-2 py-2 shadow-[0_12px_40px_-8px_rgba(11,61,46,0.35)] backdrop-blur-2xl">
          {/* WhatsApp */}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-[56px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[10px] font-semibold uppercase tracking-wider text-forest-deep transition-all duration-200 active:scale-90"
            aria-label="WhatsApp us"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#25D366]/15 text-[#128C4A] transition-all duration-200 group-active:bg-[#25D366]/25">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            WhatsApp
          </a>

          {/* Free Inspection */}
          <Link
            href="/contact"
            className="group flex min-w-[56px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[10px] font-semibold uppercase tracking-wider text-forest-deep transition-all duration-200 active:scale-90"
            aria-label="Book a free inspection"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber/20 text-forest-deep transition-all duration-200 group-active:bg-amber/30">
              <CalendarCheck className="h-4 w-4" strokeWidth={2.2} />
            </span>
            Inspection
          </Link>

          {/* Call — primary */}
          <a
            href={site.phoneHref}
            className="group relative flex-[1.8] overflow-hidden rounded-2xl transition-all duration-200 active:scale-95"
            aria-label="Call us"
          >
            {/* Shimmer background */}
            <span
              className="absolute inset-0 animate-shimmer rounded-2xl border-t border-cream/30 bg-[length:200%_100%] shadow-[0_8px_20px_-4px_rgba(217,119,6,0.5)]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--amber) 0%, var(--amber-glow) 45%, var(--amber) 90%)",
              }}
            />
            <span className="relative flex h-12 items-center justify-center gap-1.5 px-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream/25">
                <Phone className="h-4 w-4 text-ink" strokeWidth={2.4} />
              </span>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[13px] font-bold text-ink">Call Now</span>
                <span className="text-[9px] font-medium text-ink/70">Available 24/7</span>
              </span>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
