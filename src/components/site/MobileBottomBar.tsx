import { Phone, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function MobileBottomBar() {
  return (
    <>
      <div className="h-24 md:hidden" aria-hidden />
      <nav
        className="fixed inset-x-3 bottom-3 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Quick contact"
      >
        <div className="relative flex items-stretch justify-between rounded-2xl border border-forest-deep/10 bg-cream/95 px-2 py-2 shadow-[0_12px_40px_-8px_rgba(11,61,46,0.35)] backdrop-blur-md">
          <a
            href={site.phoneHref}
            className="group flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[11px] font-semibold text-forest-deep transition-colors active:bg-forest-deep/10"
            aria-label="Call us"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep/10 transition-colors group-active:bg-forest-deep/20">
              <Phone className="h-4 w-4" />
            </span>
            Call
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[11px] font-semibold text-forest-deep transition-colors active:bg-forest-deep/10"
            aria-label="WhatsApp us"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366]/15 text-[#128C4A] transition-colors group-active:bg-[#25D366]/25">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            WhatsApp
          </a>

          <Link
            to="/contact"
            className="group relative -mt-7 flex flex-1 flex-col items-center justify-end gap-1 pb-1 text-[11px] font-bold text-forest-deep"
            aria-label="Book a free inspection"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-amber to-amber/85 text-forest-deep shadow-[0_10px_24px_-6px_rgba(212,148,44,0.7)] ring-4 ring-cream transition-transform group-active:scale-95">
              <CalendarCheck className="h-5 w-5" strokeWidth={2.4} />
            </span>
            Free Inspection
          </Link>
        </div>
      </nav>
    </>
  );
}
