export type Client = {
  slug: string;
  name: string;
  /** Official website domain, used to fetch a logo via scripts/fetch-client-logos.mjs. */
  domain?: string;
};

// Domains are only set when a client's official website could be confirmed
// with high confidence (not just a plausible-looking guess) — showing the
// wrong company's logo would misattribute a real trademark. Clients without
// a `domain`, or whose domain has no discoverable favicon, fall back to a
// name tile in the UI instead. Re-run `bun run fetch:logos` after editing.
export const clients: Client[] = [
  {
    slug: "maharashtra-state-ihm-catering-training",
    name: "Maharashtra State Institute of Hotel Management, Catering Technology & Administrative Training Institute",
  },
  { slug: "foodies-agro", name: "Foodies Agro" },
  { slug: "kanishk-trading-blinkit", name: "Kanishk Trading (Blinkit)" },
  { slug: "grs-enterprises", name: "GRS Enterprises" },
  {
    slug: "tata-steel-jusco",
    name: "Tata Steel (Jusco)",
    domain: "tatasteeluisl.com",
  },
  {
    slug: "iift",
    name: "Indian Institute of Foreign Trade (IIFT)",
    domain: "iift.ac.in",
  },
  {
    slug: "south-eastern-coalfield-mining",
    name: "M/s. South Eastern Coalfield Mining",
    domain: "secl-cil.in",
  },
  {
    slug: "hotel-peerless-inn",
    name: "Hotel Peerless Inn",
    domain: "peerlesshotels.com",
  },
  { slug: "pride-hotel", name: "Pride Hotel", domain: "pridehotel.com" },
  { slug: "hotel-lalit-international", name: "Hotel Lalit International" },
  { slug: "sonet-hotel", name: "Sonet Hotel", domain: "thesonnet.com" },
  {
    slug: "union-bank-of-india",
    name: "Union Bank of India",
    domain: "unionbankofindia.co.in",
  },
  { slug: "state-bank-of-india", name: "State Bank of India (SBI)", domain: "sbi.co.in" },
  { slug: "hdfc-bank", name: "HDFC Bank", domain: "hdfcbank.com" },
  { slug: "uco-bank", name: "UCO Bank", domain: "ucobank.com" },
  { slug: "indusind-bank", name: "IndusInd Bank", domain: "indusind.com" },
  { slug: "bandhan-bank", name: "Bandhan Bank", domain: "bandhanbank.com" },
  {
    slug: "wb-essential-commodities-supply-corp",
    name: "West Bengal Essential Commodities Supply Corporation Limited",
    domain: "wbecscegovernance.com",
  },
  {
    slug: "damodar-valley-corporation",
    name: "Damodar Valley Corporation (DVC)",
    domain: "dvc.gov.in",
  },
  {
    slug: "larsen-toubro",
    name: "Larsen & Toubro Limited (L&T)",
    domain: "larsentoubro.com",
  },
  {
    slug: "stpi",
    name: "Software Technology Park of India (STPI)",
    domain: "stpi.in",
  },
  {
    slug: "wb-housing-board",
    name: "West Bengal Housing Board",
    domain: "wbhousingboard.in",
  },
  { slug: "calcutta-university", name: "Calcutta University", domain: "caluniv.ac.in" },
  {
    slug: "icar-cish",
    name: "ICAR - Central Institute for Subtropical Horticulture",
    domain: "cish.icar.gov.in",
  },
  {
    // Given as "Neha Subhas..." — almost certainly Netaji Subhas Administrative
    // Training Institute (NSATI), Kolkata. Flagged for the client to confirm.
    slug: "netaji-subhas-administrative-training-institute",
    name: "Netaji Subhas Administrative Training Institute",
  },
  {
    slug: "esic-hospital",
    name: "ESIC Hospital (Kamarhati, Baltiguri, Durgapur, Joka, Siliguri & more)",
    domain: "esic.gov.in",
  },
  {
    slug: "esic-central-medical-stores",
    name: "ESIC – Central Medical Stores",
    domain: "esic.gov.in",
  },
  {
    slug: "tata-steel-kalinga-orissa",
    name: "Tata Steel (Kalinga Orissa Project)",
    domain: "tatasteel.com",
  },
  { slug: "rammx-infrastructure", name: "Rammx Infrastructure Limited" },
  {
    slug: "bhagirathi-coop-milk-union",
    name: "The Bhagirathi Co-op. Milk Producers' Union Ltd.",
    domain: "bhagirathimilk.com",
  },
  {
    slug: "sub-divisional-hospital",
    name: "Sub Divisional Hospital (Katwa, Burdwan, Durgapur & more)",
  },
  { slug: "wb-police", name: "West Bengal Police", domain: "wbpolice.gov.in" },
  {
    slug: "wb-state-election-commission",
    name: "West Bengal State Election Commission",
    domain: "wbsec.gov.in",
  },
  {
    slug: "wb-land-records-survey-office",
    name: "Office of the Director of Land Records & Surveys and Joint Land Reforms Commissioner, West Bengal (Survey Building)",
    domain: "banglarbhumi.gov.in",
  },
  {
    slug: "crescent-power",
    name: "Crescent Power Limited (RP-Sanjiv Goenka Group)",
  },
  {
    slug: "iffco-tokio-insurance",
    name: "IFFCO-Tokio General Insurance Company Limited",
    domain: "iffcotokio.co.in",
  },
  { slug: "viswa-industrial", name: "Viswa Industrial Co. Ltd." },
  { slug: "gkw-limited", name: "GKW Limited", domain: "gkwltd.com" },
  {
    slug: "suraksha-diagnostics",
    name: "Suraksha Diagnostics Pvt. Ltd.",
    domain: "surakshanet.com",
  },
  {
    slug: "glocal-healthcare",
    name: "Glocal Healthcare System Pvt. Ltd.",
    domain: "ghspl.com",
  },
];
