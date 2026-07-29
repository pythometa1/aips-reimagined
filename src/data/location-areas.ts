export type AreaPestFocus = { title: string; body: string };

export type LocationArea = {
  citySlug: string;
  slug: string;
  name: string;
  blurb: string;
  pestFocus: AreaPestFocus[];
  neighbours: string[];
};

// Each blurb/pestFocus pair describes the area's real, publicly-known
// character (housing age, land use, geography) and which AIPS services are
// most relevant there — not fabricated claims about AIPS's service volume or
// history in that specific area. See PLACEHOLDERS.md.
export const locationAreas: LocationArea[] = [
  // Kolkata
  {
    citySlug: "kolkata",
    slug: "jadavpur",
    name: "Jadavpur",
    blurb:
      "Jadavpur is home to our head office and warehouse on Central Park East, so inspections here are usually the fastest to schedule in the city. It's a dense mix of university-belt housing near Jadavpur University, older independent homes and newer apartment blocks.",
    pestFocus: [
      {
        title: "Older independent homes",
        body: "Original wooden door frames and window fittings in the area's older houses are common termite and wood borer sites.",
      },
      {
        title: "Student & rental housing",
        body: "High-turnover rented flats and PGs near the university see frequent cockroach and general pest bookings.",
      },
    ],
    neighbours: ["garia", "tollygunge"],
  },
  {
    citySlug: "kolkata",
    slug: "ballygunge",
    name: "Ballygunge",
    blurb:
      "Ballygunge is one of Kolkata's older, more established residential pockets, with a mix of colonial-era bungalows, mansions and newer apartment towers along its tree-lined streets.",
    pestFocus: [
      {
        title: "Heritage buildings",
        body: "Original woodwork in older bungalows and mansions is a recurring termite and wood borer treatment site.",
      },
      {
        title: "Dense apartment blocks",
        body: "Newer high-rises see standard cockroach, ant and general pest bookings typical of any dense residential pocket.",
      },
    ],
    neighbours: ["bhowanipore", "alipore"],
  },
  {
    citySlug: "kolkata",
    slug: "tollygunge",
    name: "Tollygunge",
    blurb:
      "Tollygunge is a dense, largely residential neighbourhood best known as Kolkata's film-studio belt, with a mix of older housing and newer development along Tollygunge Circular Road.",
    pestFocus: [
      {
        title: "Dense older housing",
        body: "Close-set older buildings and narrow lanes create conditions where cockroaches and rodents move easily between homes.",
      },
      {
        title: "Studio & commercial units",
        body: "Film studios, offices and small commercial units in the area book general pest and rodent control alongside residential clients.",
      },
    ],
    neighbours: ["jadavpur", "behala"],
  },
  {
    citySlug: "kolkata",
    slug: "salt-lake",
    name: "Salt Lake (Bidhannagar)",
    blurb:
      "Salt Lake (Bidhannagar) is Kolkata's planned IT and business hub, with Sector V's offices sitting alongside residential blocks laid out around the area's characteristic canals and water bodies.",
    pestFocus: [
      {
        title: "Sector V offices",
        body: "IT parks and corporate offices in Sector V are common clients for our HACCP-aligned commercial pest management plans.",
      },
      {
        title: "Canal-side humidity",
        body: "The area's planned canal network keeps ambient humidity — and mosquito breeding potential — higher than drier parts of the city.",
      },
    ],
    neighbours: ["new-town", "rajarhat"],
  },
  {
    citySlug: "kolkata",
    slug: "new-town",
    name: "New Town",
    blurb:
      "New Town is Kolkata's newest development corridor — high-rise residential towers and business parks are still being built out alongside stretches of open, undeveloped land.",
    pestFocus: [
      {
        title: "Open plots nearby",
        body: "Undeveloped land bordering new societies is a common source of standing water and mosquito breeding.",
      },
      {
        title: "Newly possessed flats",
        body: "Freshly handed-over flats commonly need a pre-construction or post-construction anti-termite check before residents move in.",
      },
    ],
    neighbours: ["rajarhat", "salt-lake"],
  },
  {
    citySlug: "kolkata",
    slug: "behala",
    name: "Behala",
    blurb:
      "Behala is one of South-West Kolkata's largest residential neighbourhoods, running along Diamond Harbour Road with a dense mix of older independent houses and newer apartment complexes.",
    pestFocus: [
      {
        title: "Dense residential lanes",
        body: "Close-packed housing along the interior lanes is a typical setting for cockroach and rodent movement between homes.",
      },
      {
        title: "Mixed housing age",
        body: "Older independent houses in the area often need termite and wood borer attention that newer flats generally don't.",
      },
    ],
    neighbours: ["tollygunge", "garia"],
  },
  {
    citySlug: "kolkata",
    slug: "garia",
    name: "Garia",
    blurb:
      "Garia is a fast-growing residential pocket in South Kolkata, with independent houses giving way to new apartment complexes as the area expands along the Baruipur line.",
    pestFocus: [
      {
        title: "Older independent houses",
        body: "Standalone older houses in the area are common termite and wood borer clients, especially around wooden staircases and door frames.",
      },
      {
        title: "New apartment complexes",
        body: "Newer flats typically book general pest control and cockroach gel treatment shortly after possession.",
      },
    ],
    neighbours: ["jadavpur", "behala"],
  },
  {
    citySlug: "kolkata",
    slug: "dum-dum",
    name: "Dum Dum",
    blurb:
      "Dum Dum sits close to Kolkata's airport, with a dense mix of older residential lanes, a busy local market and commercial strips along the main road.",
    pestFocus: [
      {
        title: "Market-area pressure",
        body: "The neighbourhood's market and commercial strip create steady rodent and cockroach pressure for nearby homes and shops.",
      },
      {
        title: "Older residential lanes",
        body: "Densely packed older housing behind the main road is a typical setting for general pest and cockroach bookings.",
      },
    ],
    neighbours: ["salt-lake", "rajarhat"],
  },
  {
    citySlug: "kolkata",
    slug: "howrah",
    name: "Howrah",
    blurb:
      "Howrah sits across the Hooghly from central Kolkata, combining older industrial areas with dense residential neighbourhoods and some of the city's highest ambient humidity.",
    pestFocus: [
      {
        title: "Riverside humidity",
        body: "Howrah's proximity to the Hooghly keeps humidity high year-round, which is why gel and injection protocols hold up better here than surface sprays.",
      },
      {
        title: "Older industrial & residential mix",
        body: "A mix of older factory buildings and residential housing means termite, wood borer and rodent enquiries are all common.",
      },
    ],
    neighbours: ["behala", "bhowanipore"],
  },
  {
    citySlug: "kolkata",
    slug: "rajarhat",
    name: "Rajarhat",
    blurb:
      "Rajarhat sits alongside New Town as part of Kolkata's newer eastern development belt, with high-rise residential towers built out around still-developing surrounding land.",
    pestFocus: [
      {
        title: "Surrounding open land",
        body: "Undeveloped plots bordering newer societies are a recurring source of mosquito breeding in the area.",
      },
      {
        title: "New possession flats",
        body: "Like New Town, freshly handed-over flats here commonly need post-construction anti-termite treatment.",
      },
    ],
    neighbours: ["new-town", "salt-lake"],
  },
  {
    citySlug: "kolkata",
    slug: "alipore",
    name: "Alipore",
    blurb:
      "Alipore is one of Kolkata's most established addresses — a leafy, low-density pocket of colonial-era bungalows near the zoo and racecourse, alongside newer premium apartments.",
    pestFocus: [
      {
        title: "Colonial-era bungalows",
        body: "Original woodwork in the area's older bungalows is a recurring termite and wood borer treatment site.",
      },
      {
        title: "Green, low-density cover",
        body: "The area's heavier tree cover tends to keep ant and mosquito activity higher than Kolkata's denser commercial pockets.",
      },
    ],
    neighbours: ["ballygunge", "bhowanipore"],
  },
  {
    citySlug: "kolkata",
    slug: "bhowanipore",
    name: "Bhowanipore",
    blurb:
      "Bhowanipore is one of South Kolkata's older, denser neighbourhoods, with narrow lanes of century-old buildings sitting alongside newer commercial and residential development.",
    pestFocus: [
      {
        title: "Century-old buildings",
        body: "This is one of the neighbourhoods with the most original woodwork and door frames still in place — a natural fit for termite and wood borer treatment.",
      },
      {
        title: "Commercial-residential mix",
        body: "Ground-floor shops and offices mixed in with housing add steady cockroach and general pest demand.",
      },
    ],
    neighbours: ["alipore", "ballygunge"],
  },
  {
    citySlug: "kolkata",
    slug: "park-street",
    name: "Park Street",
    blurb:
      "Park Street is Kolkata's commercial and hospitality core — restaurants, bars, offices and hotels packed along one of the city's busiest stretches.",
    pestFocus: [
      {
        title: "Restaurants & hospitality",
        body: "F&B outlets along Park Street are exactly the kind of client our HACCP/FSSAI-aligned commercial AMC plans are built for.",
      },
      {
        title: "High footfall commercial units",
        body: "Offices and retail units in the area typically book cockroach and fly control alongside general pest management.",
      },
    ],
    neighbours: ["ballygunge", "bhowanipore"],
  },
];

export const areasForCity = (citySlug: string) =>
  locationAreas.filter((a) => a.citySlug === citySlug);

export const findLocationArea = (citySlug: string, areaSlug: string) =>
  locationAreas.find((a) => a.citySlug === citySlug && a.slug === areaSlug);
