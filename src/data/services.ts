import cockroach from "@/assets/pest-cockroach.png";
import termite from "@/assets/pest-termite.png";
import bedbug from "@/assets/pest-bedbug.png";
import rat from "@/assets/pest-rat.png";
import mosquito from "@/assets/pest-mosquito.png";
import ant from "@/assets/pest-ant.png";
import lizard from "@/assets/pest-lizard.png";
import silverfish from "@/assets/pest-silverfish.png";
import carpetbeetle from "@/assets/pest-carpetbeetle.png";
import spider from "@/assets/pest-spider.png";
import fly from "@/assets/pest-fly.png";
import woodborer from "@/assets/pest-woodborer.png";
import photoCockroach from "@/assets/service-cockroach-gel.jpg";
import photoTermite from "@/assets/service-termite.jpg";
import photoBedbug from "@/assets/service-bedbug.jpg";
import photoFogging from "@/assets/service-fogging.jpg";
import photoWoodborer from "@/assets/service-woodborer.jpg";
import photoRodent from "@/assets/service-rodent.jpg";

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  illust: string;
  photo?: string;
  summary: string;
  approach: string[];
  warranty: string;
  intro?: string;
  signs?: string[];
  risks?: string[];
  benefits?: string[];
  faqs?: FAQ[];
};

export const services: Service[] = [
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    short: "Cockroach",
    illust: cockroach,
    photo: photoCockroach,
    summary:
      "Odourless gel-baiting protocol that removes the entire colony — kitchens ready for use the same evening.",
    approach: [
      "Species-specific gel bait placement at 40+ harbourage points",
      "IGR (insect growth regulator) to break the reproduction cycle",
      "Follow-up visit at day 21 to confirm zero activity",
    ],
    warranty: "3 months written warranty · free callbacks",
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    short: "Termite",
    illust: termite,
    photo: photoTermite,
    summary:
      "Drill-and-inject anti-termite treatment with CIB-approved chemistry, backed by an industry-leading 10-year letterhead warranty.",
    approach: [
      "Perimeter and internal drill points at floor-wall junctions",
      "Chlorpyrifos or Fipronil dilution to strict label rate",
      "Pre-construction pipe-injection for new builds",
    ],
    warranty: "Up to 10 years on pre-construction · 5 years post-construction",
  },
  {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    short: "Bed Bug",
    illust: bedbug,
    photo: photoBedbug,
    summary:
      "Two-visit heat + residual spray protocol that clears eggs and adults — no need to throw out mattresses.",
    approach: [
      "Mattress seam, headboard and skirting inspection",
      "Residual spray with contact + IGR combination",
      "Mandatory second visit at day 14 to break hatch cycle",
    ],
    warranty: "45 days written warranty",
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    short: "Rodent",
    illust: rat,
    summary:
      "Discreet trap-and-monitor programme for homes; tamper-proof bait-station perimeters for commercial sites.",
    approach: [
      "Snap traps and glue boards indoors — no poisons around food",
      "Sealed bait stations outdoors for continuous protection",
      "Monthly sighting reports for AMC clients",
    ],
    warranty: "Monthly / quarterly AMC with sighting reports",
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    short: "Mosquito",
    illust: mosquito,
    photo: photoFogging,
    summary:
      "Larvicidal treatment at breeding sites plus outdoor residual mist — you can finally sleep without nets.",
    approach: [
      "Standing-water audit and larvicide dosing",
      "Residual mist on outdoor walls, drains and vegetation",
      "Optional monthly AMC through monsoon",
    ],
    warranty: "30 day residual · monthly AMC available",
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    short: "Ant",
    illust: ant,
    summary:
      "Sugar-ant and carpenter-ant colonies eliminated at the queen with slow-acting bait — no repeat trails.",
    approach: [
      "Trail tracing to locate nest entry",
      "Slow-acting bait so workers feed the colony",
      "Perimeter residual for outdoor re-entry",
    ],
    warranty: "3 months written warranty",
  },
  {
    slug: "lizard-control",
    name: "Lizard Control",
    short: "Lizard",
    illust: lizard,
    summary:
      "Herbal repellent programme that clears lizards without harming them — safe for kitchens and puja rooms.",
    approach: [
      "Herbal repellent spray at ceiling corners and windows",
      "Food-source (insect) elimination for lasting effect",
      "Follow-up top-up at day 45",
    ],
    warranty: "45 days written warranty",
  },
  {
    slug: "silverfish-control",
    name: "Silverfish Control",
    short: "Silverfish",
    illust: silverfish,
    summary:
      "Cupboard-safe residual dust that protects books, silks and paperwork from silverfish damage.",
    approach: [
      "Diatomaceous / boric residual in cupboards and shelves",
      "Humidity advice to prevent re-infestation",
      "Follow-up inspection at day 30",
    ],
    warranty: "3 months written warranty",
  },
  {
    slug: "carpet-beetle-control",
    name: "Carpet Beetle Control",
    short: "Carpet Beetle",
    illust: carpetbeetle,
    summary:
      "Fabric-safe treatment for carpet beetle larvae that eat wool, silk and stored textiles.",
    approach: [
      "Vacuum + steam prep of affected textiles",
      "Residual spray at skirting and under furniture",
      "Storage advice for silks and woollens",
    ],
    warranty: "3 months written warranty",
  },
  {
    slug: "wood-borer-control",
    name: "Wood Borer Control",
    short: "Wood Borer",
    illust: woodborer,
    photo: photoWoodborer,
    summary:
      "Targeted injection-and-seal treatment for powder-post beetles, old-house borers and death-watch beetles — protects furniture, door frames, beams and antiques from within.",
    approach: [
      "Full inspection to identify borer species, exit-hole pattern and infestation stage",
      "Direct injection of anti-borer chemistry into every exit hole",
      "Surface coat with protective borer-resistant sealer on exposed timber",
      "Follow-up inspection at day 45 and preventive advice for humidity control",
    ],
    warranty: "12 months written warranty · free callbacks",
    intro:
      "Wood borers are beetles — not termites — but the damage they cause looks similar. Their larvae tunnel deep inside furniture, door frames, beams and antiques, weakening the wood from the inside out. At AIPS, our wood borer control programme is built to reach the larvae inside the timber, not just the surface. Every treatment starts with species identification (powder-post beetle, old-house borer or death-watch beetle) and ends with a written 12-month warranty so you never pay twice.",
    signs: [
      "Small round exit holes (1–2 mm) on furniture, door frames, beams or plywood",
      "Fine powdery dust (frass) collecting under wooden items or in drawers",
      "Faint tapping or clicking sounds from within the wood, usually at night",
      "Weak, hollow or crumbling wood — sagging beams or soft patches on furniture",
      "Repeat holes appearing after DIY polish or surface sprays",
    ],
    risks: [
      "Structural weakening of beams, staircases, door frames and heritage woodwork",
      "Irreversible damage to antiques, musical instruments and imported furniture",
      "Spread from a single infested piece to every wooden item in the room",
      "Costly carpentry and replacement bills when damage is discovered too late",
    ],
    benefits: [
      "Species-specific injection reaches larvae hidden deep inside the timber",
      "CIB-approved borer chemistry — safe for indoor furniture and cupboards",
      "Protective sealer coat prevents fresh egg-laying on exposed wood",
      "Written 12-month warranty with free re-treatment if activity returns",
      "Detailed report showing every treated item and product used",
    ],
    faqs: [
      {
        q: "Are wood borers the same as termites?",
        a: "No. Wood borers are beetles whose larvae tunnel through wood; termites are social insects that build mud tubes and colonies. The damage can look similar but the treatment is completely different. That is why species identification during our inspection is critical.",
      },
      {
        q: "Which wood borer species do you treat?",
        a: "All the common Indian species — powder-post beetles (the most frequent in furniture and plywood), old-house borers (beams and rafters) and death-watch beetles (older, seasoned hardwood). Each has a different life cycle, and our protocol is tuned to the species we identify on site.",
      },
      {
        q: "Do I need to move my furniture out of the house?",
        a: "No. Our injection-and-seal treatment is done in place, item by item. We only ask you to clear the drawers and shelves so the technician has full access to the wood surface and exit holes.",
      },
      {
        q: "Is the treatment safe for children, elderly and pets?",
        a: "Yes. We use CIB-approved borer actives at strict label-rate dilutions, applied through targeted injection rather than open spraying. Rooms are safe to re-enter within an hour of treatment.",
      },
      {
        q: "Will a single treatment be enough?",
        a: "For most household infestations, one properly injected treatment plus a follow-up inspection at day 45 is enough — and it is covered by our 12-month written warranty. Heritage properties, old wooden beams or repeat-infestation homes may need an annual preventive coat.",
      },
      {
        q: "In which cities do you offer wood borer control?",
        a: "Across all 19 AIPS cities — including Kolkata, Howrah, Durgapur, Bhubaneswar, Ranchi, Jamshedpur, Patna, Guwahati, Pune, Mumbai, Delhi NCR, Lucknow and Varanasi. Book a free inspection and a trained technician will visit within 24–48 hours.",
      },
    ],
  },
  {
    slug: "spider-control",
    name: "Spider Control",
    short: "Spider",
    illust: spider,
    summary:
      "Cobweb removal and residual spray at ceilings, balconies and staircases — dust settles, spiders don't return.",
    approach: [
      "Full cobweb removal at ceilings and corners",
      "Residual spray on entry cracks and window frames",
      "Insect-source control to remove the food supply",
    ],
    warranty: "3 months written warranty",
  },
  {
    slug: "fly-control",
    name: "Fly Control",
    short: "Fly",
    illust: fly,
    summary:
      "Bait, ILT and residual programme for kitchens, dairies and food-processing plants.",
    approach: [
      "Sanitation audit — the real fix for flies",
      "ILT (insect light trap) placement for indoor catch",
      "Residual spray at bin and drain zones",
    ],
    warranty: "30 days · monthly AMC recommended",
  },
  {
    slug: "general-pest-control",
    name: "General Pest Control",
    short: "General Pest",
    illust: cockroach,
    summary:
      "Combined cockroach + ant + spider + silverfish treatment — the most popular annual package for Indian homes.",
    approach: [
      "Full-home inspection and species identification",
      "Combined gel + residual protocol in one visit",
      "Quarterly follow-ups for AMC clients",
    ],
    warranty: "3 months per visit · annual AMC available",
  },
  {
    slug: "commercial-pest-control",
    name: "Commercial Pest Control",
    short: "Commercial",
    illust: rat,
    summary:
      "HACCP and FSSAI-aligned pest management for restaurants, hotels, hospitals, offices and food processing.",
    approach: [
      "Site-specific pest management plan on letterhead",
      "Same technician on every visit; audit-ready logs",
      "We attend your audits with you",
    ],
    warranty: "Annual contract with documented visits",
  },
  {
    slug: "herbal-pest-control",
    name: "Herbal Pest Control",
    short: "Herbal",
    illust: lizard,
    summary:
      "Botanical-only protocol using neem, eucalyptus and pyrethrum — for newborns, asthmatics and pet families.",
    approach: [
      "100% botanical actives; no synthetic residues",
      "Slightly reduced residual life — monthly touch-ups recommended",
      "Fully odour-safe for infants and pets",
    ],
    warranty: "30 days · monthly AMC recommended",
  },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug);

// Rich content used by service detail pages. Per-service overrides win;
// otherwise we render sensible, pest-name-aware defaults so no page ever feels empty.
export function getServiceContent(s: Service) {
  const name = s.short.toLowerCase();

  const intro =
    s.intro ??
    `${s.name} at AIPS is delivered by trained, in-house technicians using CIB-approved, family-safe chemistry — with a written warranty on every job. From the first inspection to the final follow-up, every step of our ${name} protocol is documented, so you know exactly what was applied, where and why.`;

  const signs =
    s.signs ?? [
      `Live ${name} activity in kitchens, bathrooms or storage areas`,
      `Droppings, shed skins or trails along skirtings and cabinets`,
      `Damage to furniture, food packaging, fabric or wiring`,
      `Musty odour or unusual sounds at night`,
      `Repeat sightings even after DIY sprays`,
    ];

  const risks =
    s.risks ?? [
      `Contamination of food, utensils and drinking water`,
      `Allergies, asthma triggers and skin reactions for children and elderly`,
      `Structural or fabric damage that quietly compounds over months`,
      `Loss of business reputation for restaurants, hotels and clinics`,
    ];

  const benefits =
    s.benefits ?? [
      `CIB-approved, label-rate chemistry — safe around children and pets`,
      `Same trained technician on every follow-up visit`,
      `Written warranty with free callbacks if activity returns`,
      `No fogging, no strong odour, no need to leave the home for hours`,
      `Detailed job report and MSDS on request`,
    ];

  const faqs: FAQ[] =
    s.faqs ?? [
      {
        q: `Is the ${name} treatment safe for children, elderly and pets?`,
        a: `Yes. We use CIB-approved actives at strict label-rate dilutions with targeted gel or crack-and-crevice application. Rooms are safe to re-enter within an hour of treatment. A herbal-only protocol is available for newborns, asthmatics and pet families.`,
      },
      {
        q: `How long does one ${name} service take?`,
        a: `A standard residential visit takes 45–90 minutes depending on the size of your home and infestation level. Our technician arrives on time, in uniform, with the full inspection and treatment plan ready.`,
      },
      {
        q: `Do you provide a warranty?`,
        a: `Every ${s.name.toLowerCase()} job comes with a written warranty — ${s.warranty}. If pest activity returns within that period, we come back and re-treat at no extra cost.`,
      },
      {
        q: `Do we need to leave the house during treatment?`,
        a: `No. Our protocol is designed so families can stay in the home. We ask you to cover food, put away utensils, and give the technician access to the affected areas. That is usually enough.`,
      },
      {
        q: `Will one visit be enough or do you recommend an AMC?`,
        a: `For most household infestations a single treatment plus a follow-up is enough. For kitchens, restaurants, warehouses and buildings with recurring pressure, we recommend a monthly, quarterly or annual AMC — with the same technician on every visit.`,
      },
    ];

  const process = s.approach.map((a, i) => ({
    step: String(i + 1).padStart(2, "0"),
    title: [`Inspection & assessment`, `Targeted treatment`, `Follow-up & prevention`, `Warranty & reporting`][i] ?? `Step ${i + 1}`,
    body: a,
  }));

  return { intro, signs, risks, benefits, faqs, process };
}
