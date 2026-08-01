import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Users,
  Building2,
  Sprout,
  ShieldCheck,
  Trophy,
  Quote,
  Briefcase,
  GraduationCap,
  Globe2,
  Bug,
  Leaf,
  Microscope,
  HeartHandshake,
  Target,
  Compass,
  Flag,
  MapPin,
  Linkedin,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { StatsRow } from "@/components/site/StatsRow";
import aboutHeroBanner from "@/assets/about-hero-banner.jpg";
import familySafe from "@/assets/family-safe.jpg";
import heroCrew from "@/assets/hero-crew.jpg";
import founderAnup from "@/assets/founder-anup.jpg";
import cofounderAshwini from "@/assets/cofounder-ashwini.jpg";
import certFssai from "@/assets/cert-fssai-fostac.jpg";
import certFaopma from "@/assets/cert-faopma-termite.jpg";
import certPma from "@/assets/cert-pma-membership.jpg";
import companyProfile from "@/assets/company-profile.jpg";
import { site } from "@/data/site";
import { OG_DEFAULTS } from "@/app/layout";

export const metadata: Metadata = {
  title: "About AIPS — Scientific, Sustainable Pest Management Since 2010",
  description:
    "Advanced Indian Pest Solution Pvt. Ltd. — founded 2010 in Kolkata by agronomist Anup Karmakar. 40,000+ customers, CIB-approved, women-led opportunities, national industry leadership.",
  alternates: { canonical: "/about" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "About AIPS — Scientific, Sustainable Pest Management Since 2010",
    description:
      "Founded by Anup Karmakar (National Ambassador & General Secretary, PMA). 40,000+ customers across West Bengal.",
  },
};

const timeline = [
  {
    year: "2010",
    title: "Founded in Kolkata",
    body: "Anup Karmakar (B.Sc. Agriculture) launches Advanced Indian Pest Solution with a vision to create safer, healthier and pest-free environments through advanced pest management.",
  },
  {
    year: "2013",
    title: "First HACCP contracts",
    body: "Food-safe protocols aligned to HACCP win our first hospitality and food-processing accounts across West Bengal.",
  },
  {
    year: "2016",
    title: "Expansion beyond Bengal",
    body: "Operations open in Jharkhand, Bihar and Odisha — same technicians, same protocol, everywhere.",
  },
  {
    year: "2019",
    title: "Herbal protocol launched",
    body: "Dedicated herbal treatment programme for newborns, elderly and asthmatic households.",
  },
  {
    year: "2021",
    title: "Pan-India footprint",
    body: "Teams established in Pune, Mumbai, Delhi NCR, Lucknow, Varanasi and Guwahati; women-led professional opportunities scaled across branches.",
  },
  {
    year: "2023",
    title: "Most Popular Leader Award",
    body: "Anup Karmakar recognised as Most Popular Leader in Public Health & Hygiene Services 2023 by News18 Network.",
  },
  {
    year: "2024",
    title: "National Ambassador, PMA",
    body: "Anup Karmakar appointed National Ambassador & General Secretary of the Pest Management Association.",
  },
  {
    year: "2025",
    title: "Pest Mentor Signature Award",
    body: "Voice of the Industry 2025 by E & G Pathway — for contribution to India's professional pest management sector.",
  },
  {
    year: "2026",
    title: "40,000+ customers · 8 cities in West Bengal",
    body: "Refocused on being the deepest, most trusted pest control team in West Bengal — same documented, CIB-approved protocol on every job.",
  },
];

const awards = [
  {
    icon: Trophy,
    title: "Pest Mentor Signature Award",
    body: "Voice of the Industry 2025 · E & G Pathway",
  },
  {
    icon: Award,
    title: "Most Popular Leader 2023",
    body: "Public Health & Hygiene Services · News18 Network",
  },
  { icon: ShieldCheck, title: "CIB & RC Approved", body: "Central Insecticides Board licensed" },
  { icon: Sprout, title: "HACCP & FSSAI Aligned", body: "Food-safe protocols for F&B clients" },
];

const expertise = [
  { icon: Bug, title: "Urban & Structural Pest Management" },
  { icon: HeartHandshake, title: "Public Health Pest Control" },
  { icon: Microscope, title: "Vector & Mosquito Management" },
  { icon: ShieldCheck, title: "Anti-Termite Solutions" },
  { icon: Sprout, title: "Fumigation & Hygiene Management" },
  { icon: Leaf, title: "Food Safety & Integrated Pest Management" },
  { icon: GraduationCap, title: "Training & Skill Development" },
  { icon: Globe2, title: "Post-Harvest & Warehouse Protection" },
];

const international = [
  "FAOPMA International Summit — Malaysia, Mumbai & Thailand",
  "AIB (American Institute of Baking) — Food Safety Standards",
  "FSMA & Food Safety Training Programs",
  "Universiti Sains Malaysia — Entomology & Pest Management",
  "Advanced fumigation & agricultural commodity protection systems",
];

const certifications = [
  {
    image: certFssai,
    title: "FSSAI FoSTaC — Food Safety Supervisor",
    body: "Certificate of Competence · Anup Karmakar · Certified under Food Safety Training & Certification (FoSTaC)",
  },
  {
    image: certFaopma,
    title: "FAOPMA — Termite Management Masterclass",
    body: 'Certificate of Attendance · "Termites without Borders" Skillitech Webinar · Anup Karmakar',
  },
  {
    image: certPma,
    title: "Pest Management Association — Membership",
    body: "Certificate of Membership · Advanced Indian Pest Solution Pvt. Ltd. · Active member, valid upto 31.3.2027",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-forest-deep">
        <Image
          src={aboutHeroBanner}
          alt="Advanced Indian Pest Solution — scientific, sustainable, women-supported pest management since 2010 in Kolkata. Eco-friendly solutions, safe and reliable service, trained professionals, healthy spaces."
          priority
          fetchPriority="high"
          sizes="100vw"
          className="w-full"
        />
      </section>

      {/* Mission & Vision */}
      <Section eyebrow="What we stand for" title="A mission written on every job sheet.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-deep text-amber">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-foreground">Our Mission</h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To provide safe, scientific and sustainable pest management solutions that protect
              health, property and environment — while ensuring customer satisfaction and long-term
              prevention.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-deep text-amber">
                <Compass className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-foreground">Our Vision</h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To become a trusted leader in pest management by combining innovation, eco-friendly
              practice, technology and empowered professional service.
            </p>
          </article>
        </div>
      </Section>

      {/* Founder spotlight */}
      <Section bg="cream" eyebrow="Meet the founder" title="Anup Karmakar">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative">
            <Image
              src={founderAnup}
              alt="Anup Karmakar, Founder & Managing Director of AIPS"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="w-full rounded-3xl object-cover object-top shadow-[var(--shadow-lifted)]"
            />
            <div className="absolute -bottom-5 -right-3 hidden max-w-[240px] rounded-2xl bg-forest-deep px-5 py-4 text-cream shadow-[var(--shadow-lifted)] md:block">
              <p className="font-serif text-lg leading-tight text-amber">20+ years</p>
              <p className="text-xs text-cream/75">In pest management, public health & training</p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest-deep px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber">
                Founder & MD
              </span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">
                B.Sc. Agriculture
              </span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">
                20+ yrs experience
              </span>
              <a
                href={site.founderLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep transition hover:border-forest/40 hover:text-forest"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>

            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              National Ambassador & General Secretary — Pest Management Association
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With over 20 years in pest management, public health services and professional
              training, Anup Karmakar is a recognised leader in India&apos;s pest industry. He has
              contributed extensively to urban pest control, public health awareness, vector
              management, food safety and professional skill development — across India and on
              international platforms.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              As Founder of Advanced Indian Pest Solution Pvt. Ltd., he is committed to delivering
              scientific, sustainable and innovative pest management solutions for residential,
              commercial, industrial and public health sectors.
            </p>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-amber bg-cream-warm p-5">
              <Quote className="h-5 w-5 text-amber" />
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground">
                To promote safer environments, healthier communities, and scientifically managed
                pest control systems through innovation, education and sustainable practices.
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-forest">
                — Anup Karmakar
              </footer>
            </blockquote>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-forest-deep">
                  <Briefcase className="h-4 w-4 text-amber" />
                  <p className="text-xs font-semibold uppercase tracking-widest">Founder & MD</p>
                </div>
                <p className="mt-2 font-serif text-lg text-foreground">
                  Advanced Indian Pest Solution Pvt. Ltd.
                </p>
                <p className="text-xs text-muted-foreground">2010 – Present · 15+ years</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-forest-deep">
                  <Flag className="h-4 w-4 text-amber" />
                  <p className="text-xs font-semibold uppercase tracking-widest">
                    National Ambassador
                  </p>
                </div>
                <p className="mt-2 font-serif text-lg text-foreground">
                  Pest Management Association (PMA)
                </p>
                <p className="text-xs text-muted-foreground">
                  Mar 2024 – Present · Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise + international */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Areas of expertise
            </p>
            <h4 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
              A career spent across every corner of pest science.
            </h4>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {expertise.map((e) => (
                <div
                  key={e.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-deep/10 text-forest-deep">
                    <e.icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-foreground">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-forest-deep p-8 text-cream shadow-[var(--shadow-lifted)]">
            <div className="flex items-center gap-2 text-amber">
              <Globe2 className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-widest">
                International exposure
              </p>
            </div>
            <h4 className="mt-3 font-serif text-2xl text-cream">Trained where the world trains.</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/85">
              {international.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Co-founder */}
      <Section eyebrow="Meet the co-founder" title="Ashwini Sanjay Yeljale">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest-deep px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber">
                Director
              </span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">
                B.Sc. Agriculture
              </span>
              <span className="rounded-full border border-forest/20 bg-cream px-3 py-1 text-xs font-semibold text-forest-deep">
                10+ yrs experience
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Leading growth, quality and customer trust.
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ashwini Sanjay Yeljale plays a key role in leading Advanced Indian Pest Solution Pvt.
              Ltd. toward continuous growth. With strong experience in business management and pest
              industry knowledge, she is committed to maintaining quality, innovation and customer
              satisfaction — building long-term relationships with clients and partners through
              teamwork and professionalism.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-amber bg-cream-warm p-5">
              <Quote className="h-5 w-5 text-amber" />
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground">
                Our mission is to provide the best quality products and services while building
                long-term trust with our customers. We continuously work toward innovation, growth
                and excellence in every aspect of our business.
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-forest">
                — Ashwini Sanjay Yeljale
              </footer>
            </blockquote>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src={cofounderAshwini}
              alt="Ashwini Sanjay Yeljale, Director of AIPS"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
            />
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section
        bg="cream"
        eyebrow="Our journey"
        title="Fifteen years, one uncompromising standard."
        intro="From one office in Kolkata to a trusted name across West Bengal — every milestone earned by keeping the same promise."
      >
        <ol className="relative mx-auto max-w-3xl border-l-2 border-amber/40 pl-6 md:pl-10">
          {timeline.map((t) => (
            <li key={t.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[34px] grid h-6 w-6 place-items-center rounded-full bg-amber ring-4 ring-cream md:-left-[46px] md:h-7 md:w-7">
                <span className="h-2 w-2 rounded-full bg-forest-deep" />
              </span>
              <p className="font-serif text-2xl text-forest-deep md:text-3xl">{t.year}</p>
              <h4 className="mt-1 font-serif text-lg text-foreground md:text-xl">{t.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Awards & recognition */}
      <Section eyebrow="Awards & recognition" title="Recognised by the industry we serve.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <article
              key={a.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-deep text-amber">
                <a.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-serif text-lg text-foreground">{a.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Certifications & memberships */}
      <Section
        bg="cream"
        eyebrow="Certifications & memberships"
        title="Credentials that back every claim we make."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.image.src}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]"
            >
              <Image
                src={c.image}
                alt={c.title}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[3/4] w-full object-cover object-top transition group-hover:scale-[1.02]"
              />
              <div className="p-5">
                <h4 className="font-serif text-lg text-foreground">{c.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Company profile */}
      <Section eyebrow="Company profile" title="Our letter of introduction.">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-center">
          <a
            href={companyProfile.src}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]"
          >
            <Image
              src={companyProfile}
              alt="AIPS company profile — letter of introduction"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="w-full object-cover object-top transition group-hover:scale-[1.02]"
            />
          </a>
          <div>
            <p className="text-muted-foreground">
              ISO 9001:2015 certified, a Pest Management Association (PMA) member, MES-approved and
              an NSIC-registered SSI/MSME unit — trained by CBRI, ICAR, NIPHM and other reputed
              agricultural institutions. AIPS has served commercial firms, government factories,
              agro-commodity industries, food industries and nationalised banks across West Bengal
              since 2010.
            </p>
            <a
              href={companyProfile.src}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-forest-deep px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest"
            >
              View full company profile
            </a>
          </div>
        </div>
      </Section>

      {/* What makes us different */}
      <Section
        bg="cream"
        eyebrow="Why AIPS"
        title="A scientific approach, from inspection to prevention."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Inspection & assessment",
              b: "Every job starts with a site walk, not a spray gun.",
            },
            {
              t: "Customised solution",
              b: "Protocol built for your building, pest and household.",
            },
            { t: "Safe treatments", b: "CIB-approved actives at strict label-rate dilutions." },
            {
              t: "Long-term prevention",
              b: "Pre- and post-construction termite protocols built for lasting protection.",
            },
            {
              t: "Eco-friendly options",
              b: "Herbal protocol for newborns, elderly and asthmatics.",
            },
            {
              t: "Trained professionals",
              b: "31-strong team, 90+ hrs in-house training before first visit.",
            },
            {
              t: "Advanced technology",
              b: "International fumigation and IPM standards, applied locally.",
            },
            {
              t: "Women empowerment",
              b: "Active support for women-led professional opportunities.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-lg text-foreground">{c.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Chemistry / brands */}
      <Section
        eyebrow="The chemistry behind the calm"
        title="Industry-grade actives. Calibrated to the milligram."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We use the same actives the global pest industry uses — Envu, FMC, Syngenta, UPL, Arbuda
            and Sandhya — at strict label-rate dilutions. No black-market cocktails. No fogging your
            kitchen. Every product comes with an MSDS we&apos;ll hand you on request.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Envu", "FMC", "Syngenta", "UPL", "Arbuda", "Sandhya"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-5 py-2 font-serif text-lg text-forest-deep"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats + team */}
      <Section bg="cream">
        <div className="mb-12">
          <StatsRow />
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Image
            src={heroCrew}
            alt="AIPS field crew"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Our team
            </p>
            <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              31-strong team. Trained in-house. Supervised by agronomists.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Every technician is trained internally over 90+ hours before their first customer
              visit. Ongoing monthly re-certification, monitored by our agricultural science team,
              ensures the same technician on every callback — with the same protocol, every time.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: "40,000+ homes" },
                { icon: Building2, label: "8 cities" },
                { icon: ShieldCheck, label: "CIB-approved" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-3 text-center"
                >
                  <s.icon className="mx-auto h-5 w-5 text-amber" />
                  <p className="mt-2 text-xs font-semibold text-forest-deep">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <div>
                <p className="font-semibold text-forest-deep">Head office</p>
                <p>{site.address}</p>
                <p className="mt-1 text-xs">GST · {site.gst} · Mon–Sat, 9 AM – 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Promise */}
      <Section eyebrow="Our promise" title="A cleaner protocol, a cleaner conscience.">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Image
            src={familySafe}
            alt="Family playing safely on the floor after treatment"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-3xl object-cover shadow-[var(--shadow-lifted)]"
          />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            If your family can&apos;t be in the room an hour after treatment, we shouldn&apos;t have
            used it. That&apos;s the one rule every AIPS technician is held to — and the reason
            40,000+ West Bengal families and businesses have stayed with us since 2010.
          </p>
        </div>
      </Section>
    </>
  );
}
