"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Mail, Phone, X } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppIcon } from "./icons";
import technician from "@/assets/pest-control-technician-3d.png";

const actions = [
  {
    key: "call",
    label: "Call Now",
    href: site.phoneHref,
    external: false,
    className: "bg-amber text-ink",
    Icon: Phone,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: site.whatsapp,
    external: true,
    className: "bg-whatsapp text-whatsapp-foreground",
    Icon: WhatsAppIcon,
  },
  {
    key: "mail",
    label: "Email Us",
    href: `mailto:${site.email}`,
    external: false,
    className: "bg-forest-deep text-cream",
    Icon: Mail,
  },
] as const;

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("aips-assistant-seen")) return;
    const showTimer = setTimeout(() => setShowNudge(true), 2200);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showNudge) return;
    const hideTimer = setTimeout(() => {
      setShowNudge(false);
      sessionStorage.setItem("aips-assistant-seen", "1");
    }, 6000);
    return () => clearTimeout(hideTimer);
  }, [showNudge]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleToggle() {
    setOpen((current) => !current);
    setShowNudge(false);
    sessionStorage.setItem("aips-assistant-seen", "1");
  }

  return (
    <div
      ref={rootRef}
      className="fixed right-3 bottom-28 z-40 flex flex-col items-end sm:right-5 md:right-6 md:bottom-6"
    >
      {/* Speed-dial action menu */}
      <div
        role="menu"
        aria-hidden={!open}
        className={`mb-3 flex flex-col items-end gap-2.5 ${open ? "" : "pointer-events-none"}`}
      >
        {open &&
          actions.map(({ key, label, href, external, className, Icon }, index) => (
            <a
              key={key}
              role="menuitem"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="animate-pop-in group flex items-center gap-2.5"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <span className="rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-cream shadow-md">
                {label}
              </span>
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full shadow-[0_10px_24px_-6px_rgba(11,61,46,0.45)] ring-2 ring-cream/70 transition-transform duration-150 group-hover:scale-110 group-active:scale-95 ${className}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.3} />
              </span>
            </a>
          ))}
      </div>

      {/* Nudge bubble */}
      {showNudge && !open && (
        <div className="animate-bubble-in mb-2 max-w-[168px] rounded-2xl rounded-br-sm border border-cream/60 bg-cream px-3 py-2 text-right text-[11px] leading-snug font-semibold text-forest-deep shadow-[0_12px_28px_-10px_rgba(11,61,46,0.4)]">
          Need help? Tap me for a quick call or chat 👋
        </div>
      )}

      {/* Mascot toggle */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-label={open ? "Close quick contact menu" : "Open quick contact menu"}
        className="group relative grid h-[86px] w-[86px] place-items-center rounded-full transition-transform duration-200 active:scale-95 sm:h-[98px] sm:w-[98px] md:h-[112px] md:w-[112px]"
      >
        <span
          aria-hidden
          className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle,var(--amber-glow)_0%,transparent_72%)] opacity-70 blur-md"
        />
        <span
          aria-hidden
          className="absolute inset-2 rounded-full border border-cream/50 bg-cream/40 shadow-[0_16px_34px_-10px_rgba(11,61,46,0.5)] backdrop-blur-sm"
        />
        <span
          className={`animate-mascot-float relative block h-full w-full ${open ? "[animation-play-state:paused]" : ""}`}
        >
          <Image
            src={technician}
            alt=""
            fill
            sizes="112px"
            className="object-contain drop-shadow-[0_10px_16px_rgba(11,61,46,0.35)]"
            priority
          />
        </span>
        <span
          aria-hidden
          className={`absolute top-0 right-0 grid h-7 w-7 place-items-center rounded-full shadow-md ring-2 ring-cream transition-all duration-200 ${
            open ? "scale-100 bg-ink text-cream" : "scale-100 bg-amber text-ink"
          }`}
        >
          {open ? (
            <X className="h-3.5 w-3.5" strokeWidth={2.6} />
          ) : (
            <span className="h-2 w-2 animate-pulse rounded-full bg-whatsapp" />
          )}
        </span>
      </button>
    </div>
  );
}
