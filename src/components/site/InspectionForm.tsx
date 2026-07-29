"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";

const typeLabels: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
};

export function InspectionForm({ variant = "card" }: { variant?: "card" | "flat" }) {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const serviceLabel =
      data.service === "unsure"
        ? "Not sure — needs advice"
        : (services.find((s) => s.slug === data.service)?.name ?? data.service);
    const typeLabel = typeLabels[data.type] ?? data.type;

    const message = [
      "Hi AIPS, I'd like to book a free inspection.",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Address: ${data.address}`,
      `Service: ${serviceLabel}`,
      `Type: ${typeLabel}`,
    ].join("\n");

    const waNumber = site.whatsapp.split("?")[0];
    const link = `${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
    setWaLink(link);
    setSent(true);
  };

  const wrap =
    variant === "card" ? "rounded-3xl bg-card p-6 shadow-[var(--shadow-lifted)] sm:p-8" : "";

  return (
    <div className={wrap}>
      <div className="mb-5">
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Book a free inspection
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us what you need — we'll call you back within business hours.
        </p>
      </div>

      {sent ? (
        <div className="flex items-start gap-3 rounded-2xl bg-forest-deep/5 p-5 text-sm text-forest-deep">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
          <div>
            <p className="font-semibold">Almost done — send the WhatsApp message.</p>
            <p className="text-forest-deep/80">
              We&apos;ve opened WhatsApp with your details filled in. Just hit send and a trained
              technician will call you back within business hours.
            </p>
            <p className="mt-2 text-forest-deep/80">
              Didn&apos;t open?{" "}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Tap here to open WhatsApp
              </a>{" "}
              or call {site.phone}.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="name"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Name
            </Label>
            <Input id="name" name="name" placeholder="Your full name" required className="mt-1" />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Contact number
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="9XXXXXXXXX"
              type="tel"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label
              htmlFor="address"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Address
            </Label>
            <Input id="address" name="address" placeholder="Area, city" required className="mt-1" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label
                htmlFor="service"
                className="text-xs uppercase tracking-wider text-muted-foreground"
              >
                Service required
              </Label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" disabled>
                  Select service
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.short}
                  </option>
                ))}
                <option value="unsure">Not sure — advise me</option>
              </select>
            </div>
            <div>
              <Label
                htmlFor="type"
                className="text-xs uppercase tracking-wider text-muted-foreground"
              >
                Service type
              </Label>
              <select
                id="type"
                name="type"
                required
                defaultValue=""
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl text-base font-semibold shadow-[var(--shadow-cta)]"
            style={{ background: "var(--gradient-amber)", color: "var(--ink)" }}
          >
            Get my free inspection <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No OTP. No spam. We use your number only to call you back.
          </p>
        </form>
      )}
    </div>
  );
}
