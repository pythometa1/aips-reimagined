export type LocationFAQ = { q: string; a: string };

export type CityLocation = {
  slug: string;
  city: string;
  state: string;
  isHQ: boolean;
  intro: string;
  pestPressure: { title: string; body: string }[];
  areasServed: string[];
  testimonials: { quote: string; who: string }[];
  faqs: LocationFAQ[];
};

// NOTE: areasServed lists well-known localities within the city as a guide to
// coverage. Confirm the exact serviced-neighbourhood list with the client
// before treating it as a hard commitment — see PLACEHOLDERS.md.
export const cityLocations: CityLocation[] = [
  {
    slug: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    isHQ: true,
    intro:
      "Kolkata is AIPS's home city — our head office and warehouse are on Central Park East in Jadavpur, so most Kolkata inspections are same-day. The city's humid, riverside climate and mix of century-old housing stock with new high-rises creates year-round pest pressure: monsoon damp brings out cockroaches and mosquitoes, older wooden fittings in South Kolkata's heritage homes attract termites and wood borers, and the density of restaurants and food stalls across the city keeps rodent and fly pressure high for commercial kitchens.",
    pestPressure: [
      {
        title: "Monsoon humidity (Jun–Sep)",
        body: "Waterlogging and damp walls drive cockroach and mosquito activity across every ward — this is our busiest season for gel-baiting and fogging bookings.",
      },
      {
        title: "Older housing stock",
        body: "Century-old buildings in Bhowanipore, Bhawanipur and North Kolkata often have original wooden beams and door frames — prime targets for termites and wood borers.",
      },
      {
        title: "Restaurant & food-stall density",
        body: "Kolkata's food culture means commercial kitchens face constant rodent and cockroach pressure — most of our AMC contracts here are restaurants and cloud kitchens.",
      },
      {
        title: "Riverside (Hooghly) belt",
        body: "Neighbourhoods closer to the Hooghly see higher ambient humidity, which shortens the residual life of surface sprays and is why we lean on gel and injection protocols locally.",
      },
    ],
    areasServed: [
      "Jadavpur",
      "Ballygunge",
      "Tollygunge",
      "Salt Lake (Bidhannagar)",
      "New Town",
      "Behala",
      "Garia",
      "Dum Dum",
      "Howrah",
      "Rajarhat",
      "Alipore",
      "Bhowanipore",
      "Park Street",
    ],
    testimonials: [
      {
        quote:
          "Door frame had termite tubes — they drilled and injected very neatly. Three years on, zero termites. The detailed job report on their letterhead was the reason we picked them.",
        who: "Meera J. · Kolkata",
      },
    ],
    faqs: [
      {
        q: "Do you have technicians based in Kolkata, or does someone travel in?",
        a: "Kolkata is our head office — the team and warehouse are on Central Park East, Jadavpur. Most Kolkata inspections are scheduled same-day, and every technician works out of this office.",
      },
      {
        q: "Searching for pest control near me in Kolkata — which areas do you actually cover?",
        a: "We regularly service Jadavpur, Ballygunge, Tollygunge, Salt Lake, New Town, Behala, Garia, Dum Dum, Howrah, Rajarhat, Alipore, Bhowanipore and Park Street, along with the rest of the city. If you're unsure whether your address is covered, call or WhatsApp us and we'll confirm before booking.",
      },
      {
        q: "Is pest control necessary every monsoon in Kolkata?",
        a: "Not always, but Kolkata's humidity during June–September does raise cockroach and mosquito activity citywide. Homes on ground floors or near drains benefit most from a pre-monsoon treatment or a quarterly AMC that covers the season automatically.",
      },
      {
        q: "I live in an old Kolkata house with wooden beams — can you treat for termites without damaging the woodwork?",
        a: "Yes. Our drill-and-inject protocol targets the floor-wall junctions and existing termite galleries directly, so original woodwork and flooring stay intact. We inspect first and explain exactly which points need drilling before we start.",
      },
      {
        q: "Do you handle pest control for Kolkata restaurants and cloud kitchens?",
        a: "Yes — this is one of our largest commercial segments in the city. We run HACCP/FSSAI-aligned pest management plans with the same technician on every visit and audit-ready documentation, and we attend food-safety audits alongside your team on request.",
      },
    ],
  },
];

export const findCityLocation = (slug: string) => cityLocations.find((c) => c.slug === slug);
