export type PriceRow = {
  service: string;
  slug: string;
  startingPrice: string;
  unit: string;
  note?: string;
};

export type CityPricing = {
  slug: string;
  city: string;
  rows: PriceRow[];
  factors: string[];
  included: string[];
};

// Only price points explicitly confirmed by the client (already published on
// /faq) are listed with a number. Every other service is marked "Free
// on-site quote" rather than an invented figure — see PLACEHOLDERS.md.
export const cityPricing: CityPricing[] = [
  {
    slug: "kolkata",
    city: "Kolkata",
    rows: [
      {
        service: "General Pest Control",
        slug: "general-pest-control",
        startingPrice: "₹1,499",
        unit: "2 BHK, one-time visit",
      },
      {
        service: "Termite Control (pre-construction)",
        slug: "termite-control",
        startingPrice: "₹9",
        unit: "per sq.ft",
      },
      {
        service: "Termite Control (post-construction)",
        slug: "termite-control",
        startingPrice: "Free on-site quote",
        unit: "priced after inspection",
        note: "Depends on drill points and infestation spread — quoted after a free inspection.",
      },
      {
        service: "Cockroach Control",
        slug: "cockroach-control",
        startingPrice: "Free on-site quote",
        unit: "priced after inspection",
      },
      {
        service: "Bed Bug Control",
        slug: "bed-bug-control",
        startingPrice: "Free on-site quote",
        unit: "priced after inspection",
      },
      {
        service: "Rodent Control",
        slug: "rodent-control",
        startingPrice: "Free on-site quote",
        unit: "priced after inspection",
      },
      {
        service: "Mosquito Control / Fogging",
        slug: "mosquito-control",
        startingPrice: "Free on-site quote",
        unit: "priced after inspection",
      },
      {
        service: "Commercial Pest Control",
        slug: "commercial-pest-control",
        startingPrice: "Free on-site quote",
        unit: "priced per sq.ft after inspection",
        note: "Restaurants, hotels, offices, hospitals and warehouses — quoted after a site visit and scope discussion.",
      },
    ],
    factors: [
      "Size of the home or facility (BHK / sq.ft) and number of rooms treated",
      "Type and severity of infestation found during inspection",
      "One-time treatment vs. quarterly/annual AMC",
      "Herbal (botanical-only) protocol vs. standard CIB-approved chemistry",
      "Residential vs. commercial site, and any audit or documentation requirements",
    ],
    included: [
      "Free on-site inspection before any price is finalised",
      "All chemicals, equipment and technician labour for the visit",
      "A documented job report on company letterhead — what was applied, where and why",
      "Scheduled follow-up visit where the protocol calls for one (e.g. bed bugs, cockroach gel)",
    ],
  },
];

export const findCityPricing = (slug: string) => cityPricing.find((c) => c.slug === slug);
