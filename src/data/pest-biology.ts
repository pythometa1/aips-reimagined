// Deep-dive scientific reference content — biology, life cycle and Integrated
// Pest Management (IPM) methodology — rendered on each service detail page,
// keyed by the same slug used in services.ts.
import type { StaticImageData } from "next/image";
import termiteColonyMacro from "@/assets/termite-colony-macro.jpg";
import termiteLifeCycleDiagram from "@/assets/termite-life-cycle-diagram.jpg";
import termiteFurnitureInfestation from "@/assets/termite-furniture-infestation.jpg";
import termiteSoilTreatment from "@/assets/termite-soil-treatment.jpg";
import cockroachNymphAdult from "@/assets/cockroach-nymph-adult.jpg";
import cockroachLifeCycleDiagram from "@/assets/cockroach-life-cycle-diagram.jpg";
import flyMacro from "@/assets/fly-macro.jpg";
import flyLifeCycleDiagram from "@/assets/fly-life-cycle-diagram.jpg";
import mosquitoMacro from "@/assets/mosquito-macro.jpg";
import mosquitoLifeCycleDiagram from "@/assets/mosquito-life-cycle-diagram.jpg";
import rodentMouseCharacteristics from "@/assets/rodent-mouse-characteristics.jpg";
import bedbugMacro from "@/assets/bedbug-macro.jpg";
import bedbugLifeCycleDiagram from "@/assets/bedbug-life-cycle-diagram.jpg";

export type BiologySection = { title: string; points: string[] };

export type PestBiology = {
  title: string;
  intro: string;
  classification: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family?: string;
  };
  media?: {
    hero?: StaticImageData;
    heroCaption?: string;
    lifeCycle?: StaticImageData;
    lifeCycleCaption?: string;
    signs?: StaticImageData;
    signsCaption?: string;
    management?: StaticImageData;
    managementCaption?: string;
  };
  types?: BiologySection[];
  colonyStructure?: BiologySection[];
  lifeCycle: { flow: string[]; duration: { label: string; value: string }[] };
  feedingHabits: { intro: string; items: string[] };
  signsOfInfestation: string[];
  economicImportance: { beneficial: string[]; harmful: string[] };
  management: BiologySection[];
  safety: string[];
  conclusion: string;
};

export const pestBiology: Record<string, PestBiology> = {
  "cockroach-control": {
    title: "Biology of Cockroaches and Their Management",
    intro:
      "Cockroaches are among the most common and persistent urban pests. They are nocturnal, highly adaptable insects that contaminate food, spread disease-causing microorganisms, trigger allergies and asthma, and damage the reputation of food processing, pharmaceutical, hospitality and healthcare facilities. Their ability to reproduce rapidly and survive in harsh conditions makes them difficult to control without an Integrated Pest Management (IPM) approach.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Blattodea",
      family: "Blattidae, Ectobiidae, Blattellidae (depending on species)",
    },
    media: {
      hero: cockroachNymphAdult,
      heroCaption:
        "A German cockroach nymph and adult side by side — the most common indoor species.",
      lifeCycle: cockroachLifeCycleDiagram,
      lifeCycleCaption:
        "Egg (ootheca) → nymph → adult — incomplete metamorphosis over several months.",
    },
    types: [
      {
        title: "German cockroach (Blattella germanica)",
        points: [
          "Most common indoor species",
          "Light brown with two dark stripes on the thorax",
          "Length: 10–15 mm",
          "Prefers kitchens, restaurants, hospitals and food industries",
        ],
      },
      {
        title: "American cockroach (Periplaneta americana)",
        points: [
          "Largest common household cockroach",
          "Reddish-brown",
          "Length: 35–50 mm",
          "Found in sewers, drains, basements and warehouses",
        ],
      },
      {
        title: "Oriental cockroach (Blatta orientalis)",
        points: [
          "Dark brown to black",
          "Prefers cool, damp environments",
          "Common in drains, basements and garbage areas",
        ],
      },
      {
        title: "Brown-banded cockroach (Supella longipalpa)",
        points: [
          "Small, light brown with two pale bands",
          "Often found in offices, furniture, electrical equipment and bedrooms",
        ],
      },
      {
        title: "Body structure",
        points: [
          "Three main body regions: head, thorax and abdomen",
          "Long antennae and compound eyes, with chewing mouthparts",
          "Six spiny legs adapted for fast running",
          "Two pairs of wings in some species, capable of short flights",
          "Flattened body that allows entry into narrow cracks",
        ],
      },
    ],
    lifeCycle: {
      flow: ["Egg (Ootheca)", "Nymph", "Adult"],
      duration: [
        { label: "Eggs per ootheca", value: "German: 30–40 · American: 14–16" },
        { label: "Nymph stage", value: "6–13 instars over 2–12 months" },
        { label: "Adult lifespan", value: "6–18 months" },
        { label: "Development", value: "Incomplete metamorphosis (hemimetabolous)" },
      ],
    },
    feedingHabits: {
      intro:
        "Cockroaches are nocturnal, omnivorous scavengers that prefer warm, humid environments and hide in cracks and crevices during the day. They can survive for weeks without food but only a few days without water, and are capable of rapid movement and climbing.",
      items: [
        "Food residues, grease and sugar",
        "Meat and pet food",
        "Paper, cardboard and leather",
        "Glue and soap",
        "Organic waste",
      ],
    },
    signsOfInfestation: [
      "Live cockroaches, especially at night",
      "Egg cases (oothecae) in cracks or behind appliances",
      "Dark droppings resembling black pepper or coffee grounds",
      "Cast (shed) skins from moulting nymphs",
      "An unpleasant, musty odour",
      "Smear marks near water sources",
      "Increased night-time activity",
    ],
    economicImportance: {
      beneficial: ["Minor role as detritivores in natural, non-urban habitats"],
      harmful: [
        "Mechanically transmit pathogens linked to food poisoning, gastroenteritis, diarrhoea, dysentery and salmonellosis",
        "May carry bacteria, fungi, protozoa and helminth eggs on their bodies and legs",
        "Allergens trigger asthma, allergic rhinitis, skin allergies and respiratory irritation",
        "Damage the reputation of food processing, pharmaceutical, hospitality and healthcare facilities",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Kitchens, food preparation areas and washrooms",
          "Drains, utility ducts and electrical panels",
          "False ceilings and storage rooms",
          "Cracks and crevices, under sinks and refrigerators",
        ],
      },
      {
        title: "Sanitation",
        points: [
          "Clean food spills immediately and remove grease deposits",
          "Empty garbage daily and store food in sealed containers",
          "Eliminate clutter and clean drains regularly",
        ],
      },
      {
        title: "Exclusion",
        points: [
          "Seal cracks and crevices",
          "Repair leaking pipes and install door sweeps",
          "Seal utility penetrations and improve housekeeping",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Sticky monitoring traps and glue boards",
          "Pheromone traps where appropriate",
          "Regular inspection records and trend analysis of trap catches",
        ],
      },
      {
        title: "Chemical control — gel baits",
        points: [
          "Active ingredients: fipronil, indoxacarb, imidacloprid, clothianidin, dinotefuran",
          "Highly effective with low odour and minimal disruption",
          "Suitable for sensitive environments such as hospitals and kitchens",
        ],
      },
      {
        title: "Chemical control — sprays & dusts",
        points: [
          "Residual sprays at cracks, crevices, wall-floor junctions and pipe entries — never on food-contact surfaces",
          "Dust formulations (silica aerogel, boric acid, diatomaceous earth) for electrical panels, wall voids and false ceilings",
        ],
      },
      {
        title: "Non-chemical control",
        points: [
          "Vacuuming for heavy infestations",
          "Steam or heat treatment in selected locations",
          "Improved ventilation and moisture reduction",
        ],
      },
    ],
    safety: [
      "Follow label directions for all insecticides",
      "Wear appropriate PPE during application",
      "Keep insecticides away from food, medicines and food-contact surfaces",
      "Avoid contamination of water sources",
      "Maintain proper treatment and monitoring records",
    ],
    conclusion:
      "Cockroaches are among the most significant urban pests because of their rapid reproduction, ability to contaminate food, and role in triggering allergies. Successful management requires an Integrated Pest Management (IPM) approach that combines thorough inspection, sanitation, exclusion, continuous monitoring, and the judicious use of gel baits, residual insecticides and non-chemical methods. Consistent follow-up and good housekeeping are essential for long-term control, particularly in food industries, pharmaceutical facilities, hospitals, hotels and residential buildings.",
  },

  "termite-control": {
    title: "Biology and Management of Termites",
    intro:
      "Termites are social insects belonging to the order Blattodea (formerly classified separately as Isoptera). They play an important ecological role by decomposing cellulose in dead wood and plant material. However, termites are among the most destructive structural pests, causing extensive damage to buildings, furniture, books, packaging materials and crops.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Blattodea",
      family: "Infraorder Isoptera",
    },
    media: {
      hero: termiteColonyMacro,
      heroCaption:
        "A subterranean termite colony — workers and soldiers tending the queen inside a mud gallery.",
      lifeCycle: termiteLifeCycleDiagram,
      lifeCycleCaption:
        "Egg → nymph → worker, soldier or reproductive alate — the full termite life cycle.",
      signs: termiteFurnitureInfestation,
      signsCaption:
        "Active termite activity and mud shelter tubes on wooden furniture — a clear sign of infestation.",
      management: termiteSoilTreatment,
      managementCaption:
        "Pre-construction soil injection — termiticide delivered directly to the foundation perimeter.",
    },
    types: [
      {
        title: "Subterranean termites",
        points: [
          "Live in soil and construct mud tubes to reach food sources",
          "Require constant moisture for survival",
          "The most destructive species to buildings in India",
        ],
      },
      {
        title: "Drywood termites",
        points: [
          "Live entirely inside dry wood with no soil contact",
          "Common in furniture, doors, windows and roof timber",
        ],
      },
      {
        title: "Dampwood termites",
        points: ["Prefer moist, decaying wood", "Rarely attack dry structural timber"],
      },
    ],
    colonyStructure: [
      {
        title: "Queen",
        points: [
          "Primary reproductive female",
          "Can live 10–20 years",
          "Lays thousands of eggs daily",
        ],
      },
      { title: "King", points: ["Fertilises the queen throughout her life"] },
      {
        title: "Workers",
        points: [
          "Sterile; feed the colony, build the nest, forage, tend eggs and nymphs, and repair tunnels",
        ],
      },
      {
        title: "Soldiers",
        points: [
          "Sterile defenders with large mandibles or chemical-spraying heads",
          "Protect the colony from ants and predators",
        ],
      },
      {
        title: "Alates (winged reproductives)",
        points: ["Swarm during suitable weather", "Found new colonies after mating"],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg",
        "Nymph",
        "Worker / Soldier",
        "Winged reproductive (Alate)",
        "King & Queen found a new colony",
      ],
      duration: [
        { label: "Egg incubation", value: "2–4 weeks" },
        { label: "Colony establishment", value: "Several months" },
        { label: "Mature colony", value: "3–5 years" },
        { label: "Queen lifespan", value: "Up to 20 years" },
      ],
    },
    feedingHabits: {
      intro:
        "Termites feed mainly on cellulose. Symbiotic microorganisms in their digestive system break the cellulose down into digestible sugars.",
      items: [
        "Wood",
        "Paper and cardboard",
        "Cotton",
        "Books and packaging materials",
        "Plant roots",
      ],
    },
    signsOfInfestation: [
      "Mud tubes running along walls or foundations",
      "Hollow-sounding wood when tapped",
      "Blistered or bubbling paint",
      "Winged termites (swarmers) indoors, or discarded wings near windowsills",
      "Frass (drywood termite pellets) below wooden fixtures",
      "Sagging doors, windows or skirting boards",
    ],
    economicImportance: {
      beneficial: [
        "Decompose dead wood in forest ecosystems",
        "Improve soil fertility",
        "Recycle nutrients back into the soil",
      ],
      harmful: [
        "Structural damage to buildings",
        "Destruction of furniture and fittings",
        "Damage to records, archives and books",
        "Crop losses in agriculture",
        "Damage to electrical cable insulation",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Foundation, wall-floor junctions and expansion joints",
          "Wooden structures, furniture and roof timber",
          "Utility entry points and moisture-prone areas",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Eliminate wood-to-soil contact",
          "Repair plumbing leaks and improve drainage",
          "Maintain ventilation and remove tree stumps",
          "Seal cracks and crevices",
          "Install physical termite barriers during construction",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Termite monitoring stations and wooden inspection stakes",
          "Moisture meters",
          "Regular professional inspections",
        ],
      },
      {
        title: "Chemical control — pre-construction",
        points: [
          "Soil treatment before the foundation is laid",
          "Plinth filling and external perimeter treatment",
          "Expansion joint treatment",
          "Common termiticides: fipronil, imidacloprid, chlorantraniliprole",
        ],
      },
      {
        title: "Chemical control — post-construction",
        points: [
          "Drilling and chemical injection at floor-wall junctions",
          "Soil rodding and perimeter trench treatment",
          "Wood injection for infested timber",
        ],
      },
      {
        title: "Baiting systems",
        points: [
          "Slow-acting insecticide baits carried back to the colony by workers",
          "Eliminates the entire colony, including the queen",
          "Low pesticide usage and long-term monitoring",
        ],
      },
      {
        title: "Wood protection",
        points: [
          "Borate wood preservatives and pressure-treated timber",
          "Protective coatings and anti-termite paints",
        ],
      },
    ],
    safety: [
      "Only approved termiticides are used, following label instructions and recommended dosages",
      "Technicians wear appropriate PPE — gloves, coveralls, goggles and a respirator where required",
      "Food, water sources and animal feed are protected from contamination during treatment",
      "Chemical containers are disposed of according to local regulations",
    ],
    conclusion:
      "Termites are among the most economically significant structural pests worldwide. Effective management relies on early detection, preventive construction practices, moisture management, regular inspections and Integrated Termite Management (ITM) using a combination of physical, biological and chemical control measures. A well-planned programme minimises structural damage while reducing unnecessary pesticide use, ensuring long-term protection of buildings and wooden assets.",
  },

  "bed-bug-control": {
    title: "Biology and Management of Bed Bugs",
    intro:
      "Bed bugs are small, wingless, blood-feeding insects that have become one of the most challenging urban pests worldwide. They infest homes, hotels, hospitals, hostels, dormitories, public transport and other places where people sleep or rest. Although bed bugs are not known to transmit diseases to humans, their bites can cause itching, allergic reactions, sleep disturbances, anxiety and economic losses. The most common species affecting humans is Cimex lectularius.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Hemiptera",
      family: "Cimicidae — genus Cimex, species Cimex lectularius",
    },
    media: {
      hero: bedbugMacro,
      heroCaption:
        "An adult bed bug — reddish-brown, flattened and oval, turning darker and swollen after feeding.",
      lifeCycle: bedbugLifeCycleDiagram,
      lifeCycleCaption:
        "Egg → five nymphal instars → adult — a blood meal is required before each moult.",
    },
    types: [
      {
        title: "Adult bed bug",
        points: [
          "Length: 5–7 mm, oval and flattened body",
          "Reddish-brown, wingless, with six legs",
          "Piercing and sucking mouthparts",
          "Turns darker and swollen after feeding",
        ],
      },
      {
        title: "Eggs",
        points: [
          "Pearly white, about 1 mm long",
          "Cemented to surfaces in hidden cracks and crevices",
        ],
      },
      {
        title: "Nymphs",
        points: [
          "Pale yellow to translucent, similar in shape to adults",
          "Pass through five nymphal stages",
          "Require a blood meal before each moult",
        ],
      },
      {
        title: "Body structure",
        points: [
          "Three body regions: head, thorax and abdomen",
          "Flattened body enables hiding in narrow crevices",
          "Cannot fly or jump; moves quickly by crawling",
          "Attracted to body heat and carbon dioxide released by humans",
        ],
      },
    ],
    lifeCycle: {
      flow: ["Egg", "Nymph (5 instars, each needs a blood meal)", "Adult"],
      duration: [
        { label: "Eggs per day", value: "1–5, up to 200–500 in a lifetime" },
        { label: "Egg hatch", value: "6–10 days, depending on temperature" },
        { label: "Egg to adult", value: "Usually 5–8 weeks under favourable conditions" },
        {
          label: "Adult lifespan",
          value: "6–12 months; longer without feeding in cool conditions",
        },
      ],
    },
    feedingHabits: {
      intro:
        "Bed bugs are primarily nocturnal, feeding on human blood usually just before dawn. They hide close to sleeping areas during the day and can survive several months without feeding, spreading mainly through luggage, furniture, clothing, bedding and second-hand items.",
      items: ["Human blood (obligate blood feeders)", "Fed usually once every few days, at night"],
    },
    signsOfInfestation: [
      "Live bed bugs, eggs and eggshells",
      "Cast skins (shed exoskeletons)",
      "Small black faecal spots on mattresses and furniture",
      "Blood stains on bed sheets",
      "Sweet, musty odour in heavy infestations",
      "Itchy bite marks, often in rows or clusters",
    ],
    economicImportance: {
      beneficial: ["None — bed bugs have no ecological or economic benefit to humans"],
      harmful: [
        "Itching, skin irritation and allergic reactions; secondary bacterial infections from scratching",
        "Insomnia, disturbed sleep, stress and psychological discomfort",
        "Rapid spread between rooms, floors and buildings via luggage and furniture",
        "Serious reputational and financial cost for hotels, hostels and rental properties",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Mattresses, bed frames, headboards and upholstered furniture",
          "Curtains, electrical outlets and wall cracks",
          "Luggage and adjacent rooms in hotels and apartments",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Interceptor traps under bed legs and sticky monitoring traps",
          "Visual inspections with flashlights and inspection tools",
          "Detection by trained personnel or canine detection where available",
        ],
      },
      {
        title: "Sanitation & housekeeping",
        points: [
          "Reduce clutter around sleeping areas",
          "Vacuum mattresses, furniture and floor edges thoroughly, disposing of contents in sealed bags",
          "Wash bedding and clothing regularly after infestation is detected",
        ],
      },
      {
        title: "Physical control",
        points: [
          "Wash infested fabrics in hot water (≥60°C) and dry on high heat for at least 30 minutes",
          "Steam-treat mattresses, furniture and cracks",
          "Mattress and box-spring encasements",
          "Freeze small infested items at −18°C or below for several days, if practical",
        ],
      },
      {
        title: "Heat treatment",
        points: [
          "Whole-room or localised heat to 50–60°C, maintained for several hours",
          "Chemical-free; kills eggs, nymphs and adults",
          "Suitable for sensitive environments when performed correctly",
        ],
      },
      {
        title: "Chemical control",
        points: [
          "Applied only to harbourages, per product label — deltamethrin, lambda-cyhalothrin, alpha-cypermethrin, bifenthrin",
          "Silica gel dust and diatomaceous earth for cracks and voids",
          "Resistance to some pyrethroids is documented — combine with non-chemical methods",
        ],
      },
      {
        title: "Follow-up",
        points: [
          "Reinspect after 10–14 days",
          "Repeat treatment if live bugs or newly hatched nymphs are found",
          "Continue monitoring until no activity is detected over multiple inspections",
        ],
      },
    ],
    safety: [
      "Use only approved insecticides, following all label instructions",
      "Wear appropriate PPE during treatment",
      "Do not spray mattresses or bedding unless the product label specifically permits it",
      "Ensure treated rooms are ventilated before reoccupation",
    ],
    conclusion:
      "Bed bugs are resilient, blood-feeding pests that reproduce rapidly and conceal themselves in very small harbourages. Successful control requires an Integrated Pest Management (IPM) approach combining detailed inspection, sanitation, physical methods (vacuuming, steam, laundering and heat treatment), continuous monitoring and carefully targeted insecticide applications. Early detection and prompt intervention are the keys to preventing widespread infestations in homes, hotels, healthcare facilities and other occupied buildings.",
  },

  "rodent-control": {
    title: "Biology and Management of Rodents",
    intro:
      "Rodents are among the most destructive urban and agricultural pests. They cause significant economic losses by contaminating food, damaging buildings and electrical wiring, and transmitting diseases to humans and animals. Their rapid reproductive rate, excellent climbing and gnawing abilities, and adaptability make them difficult to control without an Integrated Rodent Management (IRM) programme. The most common commensal rodent pests are the house mouse (Mus musculus), roof rat (Rattus rattus) and Norway rat (Rattus norvegicus).",
    classification: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Rodentia",
      family: "Muridae",
    },
    media: {
      hero: rodentMouseCharacteristics,
      heroCaption:
        "House mouse characteristics — large round ears, large eyes, long whiskers and a long narrow tail.",
    },
    types: [
      {
        title: "House mouse (Mus musculus)",
        points: [
          "Body length 7–10 cm, weight 15–30 g",
          "Grey to light brown fur, large ears and pointed nose",
          "Excellent climber",
          "Common in homes, offices, food industries and warehouses",
        ],
      },
      {
        title: "Roof rat (Rattus rattus)",
        points: [
          "Body length 16–22 cm, weight 120–250 g",
          "Slender body with a pointed nose; tail longer than the body",
          "Excellent climber",
          "Common in roofs, false ceilings, trees and warehouses",
        ],
      },
      {
        title: "Norway rat (Rattus norvegicus)",
        points: [
          "Body length 20–28 cm, weight 250–500 g",
          "Heavy body with a blunt nose; tail shorter than the body",
          "Strong burrower",
          "Found in drains, sewers, basements and ground floors",
        ],
      },
      {
        title: "Body structure",
        points: [
          "Compact, fur-covered body with four limbs and a long tail (species dependent)",
          "Large incisors that grow continuously throughout life, worn down by constant gnawing",
          "Strong jaw muscles; well-developed smell, hearing and touch",
          "Poor colour vision but excellent night vision",
        ],
      },
    ],
    lifeCycle: {
      flow: ["Gestation", "Litter", "Weaning", "Sexual maturity", "Continuous breeding"],
      duration: [
        { label: "Gestation", value: "House mouse: 19–21 days · Rats: 21–23 days" },
        { label: "Litter size", value: "House mouse: 4–8 · Rats: 6–12" },
        { label: "Sexual maturity", value: "House mouse: 6–8 weeks · Rats: 2–3 months" },
        { label: "Litters per year", value: "House mouse: 5–10 · Rats: 4–7" },
      ],
    },
    feedingHabits: {
      intro:
        "Rodents are omnivorous, preferring to feed at night and consuming small quantities from multiple food sources rather than one large meal. Rats in particular need regular access to water, and constant gnawing keeps their continuously growing incisors worn down.",
      items: [
        "Cereals and grains",
        "Fruits and vegetables",
        "Meat, fish and pet food",
        "Food waste and stored products",
      ],
    },
    signsOfInfestation: [
      "Droppings near food storage, drains or wall edges",
      "Gnaw marks on wood, plastic or cables",
      "Grease (rub) marks along frequently used walls",
      "Footprints and tail marks in dusty areas",
      "Burrows near foundations and scratching noises in ceilings or walls",
      "Nesting materials and damaged food packaging",
    ],
    economicImportance: {
      beneficial: [
        "Negligible in an urban context — wild rodent populations aid seed dispersal in natural ecosystems",
      ],
      harmful: [
        "Associated with leptospirosis, salmonellosis, plague, hantavirus infections and rat-bite fever",
        "Fire hazard from gnawed electrical wiring",
        "Contamination of food and losses in agriculture and food storage",
        "Structural damage and losses in pharmaceutical and food processing facilities",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Building perimeter, warehouses and food storage areas",
          "False ceilings, utility rooms, drains and sewers",
          "Roof voids, exterior vegetation and loading docks",
        ],
      },
      {
        title: "Sanitation",
        points: [
          "Remove food debris promptly; store food in rodent-proof containers",
          "Keep waste bins tightly covered and clean spills immediately",
          "Eliminate clutter that provides nesting sites; maintain vegetation around buildings",
        ],
      },
      {
        title: "Exclusion (proofing)",
        points: [
          "Seal openings larger than 6 mm for mice and 12 mm for rats",
          "Install door sweeps and screen vents and drains",
          "Seal pipe penetrations and repair damaged walls, doors and windows",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Non-toxic monitoring blocks, tracking patches and glue boards where appropriate",
          "Mechanical traps and tamper-resistant bait stations",
          "Routine inspection records and trend analysis",
        ],
      },
      {
        title: "Mechanical control",
        points: [
          "Snap traps, multi-catch traps and electronic traps",
          "Placed along walls, near runways, close to nesting sites and behind equipment or storage racks",
        ],
      },
      {
        title: "Chemical control",
        points: [
          "First-generation anticoagulants: warfarin, chlorophacinone",
          "Second-generation anticoagulants: brodifacoum, bromadiolone, difenacoum, difethialone",
          "Used only as part of an integrated programme, in tamper-resistant bait stations",
        ],
      },
      {
        title: "Environmental management",
        points: [
          "Remove harbourage around buildings and maintain good drainage",
          "Trim vegetation away from structures",
          "Eliminate unnecessary storage and debris; keep loading and waste areas clean",
        ],
      },
    ],
    safety: [
      "Place rodenticides only in secure, tamper-resistant bait stations",
      "Keep baits away from children, pets, livestock and non-target wildlife",
      "Wear appropriate PPE when handling rodents, traps or rodenticides",
      "Remove and dispose of dead rodents safely using gloves",
      "Maintain detailed inspection, monitoring and treatment records",
    ],
    conclusion:
      "Rodents are highly adaptable mammals that pose serious risks to public health, food safety and property. Effective control requires an Integrated Rodent Management (IRM) approach that combines accurate species identification, sanitation, exclusion, monitoring, trapping, environmental management and the careful use of rodenticides. Continuous inspection, record-keeping and preventive maintenance are essential for long-term rodent control in residential, commercial, food processing, pharmaceutical and industrial facilities.",
  },

  "mosquito-control": {
    title: "Biology and Management of Mosquitoes",
    intro:
      "Mosquitoes are among the most medically important insects because they transmit numerous diseases affecting millions of people worldwide. Only female mosquitoes feed on blood, which is required for egg development. Mosquitoes are vectors of diseases such as malaria, dengue, chikungunya, Zika, yellow fever, Japanese encephalitis and lymphatic filariasis. Effective mosquito control requires an Integrated Vector Management (IVM) approach that combines environmental management, biological control, personal protection and judicious use of insecticides.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Diptera",
      family: "Culicidae",
    },
    media: {
      hero: mosquitoMacro,
      heroCaption:
        "An Aedes mosquito — black body with distinctive white markings on the legs and body, a daytime biter and dengue vector.",
      lifeCycle: mosquitoLifeCycleDiagram,
      lifeCycleCaption:
        "Egg → larva (4 instars) → pupa → adult — complete metamorphosis, with three aquatic stages.",
    },
    types: [
      {
        title: "Aedes spp.",
        points: [
          "Black mosquito with distinctive white markings on legs and body",
          "Active mainly during the daytime",
          "Breeds in clean, stagnant water",
          "Transmits dengue, chikungunya, Zika and yellow fever",
        ],
      },
      {
        title: "Anopheles spp.",
        points: [
          "Rests at an angle with the abdomen raised",
          "Mostly active from dusk to dawn",
          "Breeds in clean or slightly polluted water",
          "Transmits malaria",
        ],
      },
      {
        title: "Culex spp.",
        points: [
          "Brown mosquito with no distinct body markings",
          "Active mainly at night",
          "Breeds in polluted water, drains and sewage",
          "Transmits lymphatic filariasis, Japanese encephalitis and (in some regions) West Nile fever",
        ],
      },
      {
        title: "Body structure",
        points: [
          "Three body regions: head, thorax and abdomen",
          "One pair of wings, long slender legs and large compound eyes",
          "Long proboscis for piercing and sucking",
          "Antennae are plumose in males, less feathery in females",
          "Only females bite for blood; males feed on nectar and plant juices",
        ],
      },
    ],
    lifeCycle: {
      flow: ["Egg", "Larva (wriggler, 4 instars)", "Pupa (tumbler)", "Adult"],
      duration: [
        { label: "Eggs per batch", value: "Aedes: 100–200 · Culex: laid in rafts" },
        { label: "Larval stage", value: "4 instars, aquatic and actively feeding" },
        { label: "Pupal stage", value: "2–3 days to adult, does not feed" },
        { label: "Adult lifespan", value: "2–4 weeks; females mate and blood-feed within days" },
      ],
    },
    feedingHabits: {
      intro:
        "Only female mosquitoes bite humans and animals, needing a blood meal to develop each batch of eggs. Males feed exclusively on nectar and plant juices and never bite.",
      items: [
        "Human and animal blood (females only, for egg development)",
        "Plant nectar and sap (both sexes, primary energy source)",
      ],
    },
    signsOfInfestation: [
      "Presence of stagnant water nearby",
      "Larvae ('wrigglers') visible in water containers",
      "Pupae ('tumblers') at the water surface",
      "Increased adult activity at dawn, dusk or night, depending on species",
    ],
    economicImportance: {
      beneficial: [
        "Larvae and adults form part of the aquatic and aerial food chain for fish and birds",
        "Minor pollination role",
      ],
      harmful: [
        "Vectors of malaria, dengue, chikungunya, Zika, yellow fever, Japanese encephalitis and lymphatic filariasis",
        "Major public-health and economic burden, especially during monsoon season",
        "Significant sleep and quality-of-life disruption",
      ],
    },
    management: [
      {
        title: "Surveillance",
        points: [
          "Identify mosquito species and survey breeding sites",
          "Monitor adult populations and record seasonal trends",
        ],
      },
      {
        title: "Source reduction",
        points: [
          "Drain stagnant water; empty and scrub containers weekly",
          "Cover overhead tanks and dispose of tyres, cans and containers that collect water",
          "Maintain drainage and clean roof gutters",
        ],
      },
      {
        title: "Biological control",
        points: [
          "Larvivorous fish (Gambusia, Poecilia)",
          "Bacillus thuringiensis israelensis (Bti) and Bacillus sphaericus",
          "Dragonfly nymphs in natural habitats",
        ],
      },
      {
        title: "Larval control",
        points: [
          "Approved larvicides applied where source reduction is not possible",
          "Common larvicides: temephos, pyriproxyfen (IGR), Bti formulations",
        ],
      },
      {
        title: "Adult mosquito control",
        points: [
          "Residual spraying on walls and dark resting places — deltamethrin, lambda-cyhalothrin, alpha-cypermethrin",
          "Space spraying (ULV/fogging) for rapid knockdown during outbreaks or heavy infestations",
          "Most effective when combined with larval source management",
        ],
      },
      {
        title: "Personal protection",
        points: [
          "Insecticide-treated nets (ITNs/LLINs) and window/door screens",
          "Long-sleeved clothing and repellents containing DEET, picaridin or IR3535",
          "Electric vaporisers and mosquito coils per manufacturer instructions",
        ],
      },
    ],
    safety: [
      "Use only approved larvicides and adulticides, following label directions and recommended dosages",
      "Wear appropriate PPE during pesticide application",
      "Avoid contamination of drinking water and food",
      "Maintain records of surveillance, treatments and monitoring",
    ],
    conclusion:
      "Mosquitoes are major vectors of serious human diseases and pose a significant public health challenge. Their control depends on an Integrated Vector Management (IVM) programme that emphasises surveillance, elimination of breeding sites, biological and larval control, responsible insecticide use and personal protection. Community participation, environmental sanitation and regular monitoring are essential for sustainable mosquito management and reducing the burden of mosquito-borne diseases.",
  },

  "ant-control": {
    title: "Biology and Management of Ants",
    intro:
      "Ants are highly organised social insects living in colonies that can range from a few dozen to many thousands of individuals. While most household ant species are more nuisance than hazard, carpenter ants can cause genuine structural damage, and any colony left untreated will keep sending new foraging trails back into the kitchen.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Hymenoptera",
      family: "Formicidae",
    },
    types: [
      {
        title: "House / sugar ants (Monomorium spp.)",
        points: [
          "Small, fast-moving, drawn to sugar and food residue",
          "Form long visible trails between the nest and food source",
        ],
      },
      {
        title: "Carpenter ants (Camponotus spp.)",
        points: [
          "Nest inside damp or decaying wood, hollowing it out for galleries",
          "Do not eat the wood, but weaken it structurally over time",
        ],
      },
      {
        title: "Black garden ants",
        points: [
          "Nest outdoors under paving or soil",
          "Enter buildings foraging for food, especially during rain",
        ],
      },
    ],
    colonyStructure: [
      {
        title: "Queen(s)",
        points: [
          "Sole or primary reproductive",
          "Can live several years, laying eggs continuously",
        ],
      },
      { title: "Workers", points: ["Sterile females; forage, build the nest and tend the brood"] },
      { title: "Males", points: ["Short-lived; their sole role is to mate with a new queen"] },
      {
        title: "Soldiers (in some species)",
        points: ["Larger workers specialised for colony defence"],
      },
    ],
    lifeCycle: {
      flow: ["Egg", "Larva", "Pupa", "Adult"],
      duration: [
        { label: "Egg to adult", value: "6–10 weeks, depending on species and temperature" },
        { label: "Queen lifespan", value: "Several years" },
        { label: "Mature colony size", value: "A few hundred to several thousand workers" },
      ],
    },
    feedingHabits: {
      intro:
        "Ants are omnivorous foragers that lay down pheromone trails to guide nest-mates to a food source, which is why a single ant scout quickly becomes a visible trail.",
      items: [
        "Sugars, syrups and sweet spills",
        "Proteins and grease",
        "Dead insects",
        "Pet food left uncovered",
      ],
    },
    signsOfInfestation: [
      "Visible foraging trails to a food or water source",
      "Small piles of soil or wood shavings near baseboards (carpenter ants)",
      "Winged reproductive swarmers indoors, usually before monsoon",
      "Nests found under slabs, paving or inside wall voids",
    ],
    economicImportance: {
      beneficial: [
        "Aerate and improve soil structure",
        "Natural predators of other insect pests",
        "Assist seed dispersal in natural ecosystems",
      ],
      harmful: [
        "Contaminate stored food and food-preparation surfaces",
        "Carpenter ants weaken structural and decorative wood over time",
        "Painful bites or stings from some species",
        "Persistent kitchen and pantry nuisance",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Trace foraging trails back to entry points and, where possible, the nest",
          "Check moisture-damaged wood for carpenter ant galleries",
          "Inspect the garden perimeter for outdoor nests",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Seal cracks and gaps at entry points",
          "Fix moisture issues — carpenter ants strongly prefer damp wood",
          "Store food, including pet food, in sealed containers",
          "Trim vegetation touching the building",
        ],
      },
      {
        title: "Monitoring",
        points: ["Bait stations along known trails", "Ongoing visual trail monitoring"],
      },
      {
        title: "Chemical control",
        points: [
          "Slow-acting gel or granular bait (fipronil, indoxacarb or borax-based) carried back to eliminate the queen and colony",
          "Perimeter residual spray to prevent outdoor re-entry",
          "Dust formulations injected into wall voids for carpenter ant galleries",
        ],
      },
    ],
    safety: [
      "Baits are placed in cracks, voids and bait stations, out of reach of children and pets",
      "Only CIB-approved actives are used at label-rate dilutions",
      "Kitchens remain usable the same day, once bait points are set",
    ],
    conclusion:
      "Ants are colony insects — spraying the visible trail only kills the foragers you can see, while the queen keeps producing more. Slow-acting bait that workers carry back to the nest is what actually collapses the colony, and is why our protocol favours baiting over surface spraying wherever possible.",
  },

  "lizard-control": {
    title: "Biology and Management of House Lizards",
    intro:
      "The common house gecko is one of the few household 'pests' that is genuinely beneficial — it feeds on mosquitoes, cockroaches and other insects, making it a natural ally in pest control. Most requests for lizard control are really requests for humane deterrence, not extermination, which is why our programme is built entirely around herbal repellents rather than chemical kill treatments.",
    classification: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Gekkonidae",
    },
    types: [
      {
        title: "Common house gecko (Hemidactylus frenatus)",
        points: [
          "The species found in almost all Indian homes",
          "Nocturnal, with excellent climbing ability via adhesive toe pads",
          "Can shed and regenerate its tail when threatened",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg (laid in pairs, hidden in crevices)",
        "Hatchling (miniature adult form)",
        "Juvenile",
        "Adult",
      ],
      duration: [
        { label: "Incubation", value: "45–60 days" },
        { label: "Sexual maturity", value: "~1 year" },
        { label: "Lifespan", value: "5+ years" },
      ],
    },
    feedingHabits: {
      intro:
        "House geckos are insectivorous predators, and this is exactly what makes them a natural pest-control asset indoors.",
      items: [
        "Moths and other flying insects drawn to indoor lights",
        "Mosquitoes",
        "Cockroach nymphs",
        "Ants and small spiders",
      ],
    },
    signsOfInfestation: [
      "Small dark droppings with a white tip on walls, shelves or floors",
      "Shed skins in corners or behind furniture",
      "Sightings on walls and ceilings near light fixtures at night",
      "Small clusters of eggs tucked into corners or behind picture frames",
    ],
    economicImportance: {
      beneficial: [
        "Significant natural control of mosquitoes, cockroaches and other flying/crawling insects",
        "Not venomous and does not transmit disease to humans",
      ],
      harmful: [
        "Droppings on walls, shelves and food-adjacent surfaces are a hygiene nuisance",
        "Fear or discomfort for many households, especially around kitchens and puja rooms",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Entry points — gaps under doors, windows and AC ducting",
          "Light fixtures where insects (their food source) gather",
          "Ceiling corners for droppings and egg clusters",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Control other indoor insects to remove the gecko's food source",
          "Seal gaps around doors, windows and pipe entries",
          "Reduce outdoor lighting directly beside entry points at night",
        ],
      },
      {
        title: "Monitoring",
        points: ["Visual sighting log and dropping count between visits"],
      },
      {
        title: "Herbal repellent treatment",
        points: [
          "Naphthalene-free herbal spray at ceiling corners, windows and entry points",
          "Formulated to repel, not kill — safe for kitchens and puja rooms",
          "Existing egg clusters removed to prevent local population growth",
          "Follow-up top-up application around day 45",
        ],
      },
    ],
    safety: [
      "The entire protocol is herbal and non-lethal by design",
      "Food-safe formulation suitable for kitchens and prayer spaces",
      "No harm to the gecko population — they are repelled, not exterminated",
    ],
    conclusion:
      "House geckos are more ally than adversary — they quietly reduce the insect population that draws other pests indoors. Our approach respects that ecological role, using herbal repellents to keep them out of living spaces without resorting to extermination.",
  },

  "silverfish-control": {
    title: "Biology and Management of Silverfish",
    intro:
      "Silverfish are primitive, wingless insects named for their silvery, fish-like movement. They are among the few insects that continue moulting throughout their adult life, and can live for several years — long enough to do quiet, cumulative damage to books, documents and stored fabric before most households even notice them.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Zygentoma",
      family: "Lepismatidae",
    },
    types: [
      {
        title: "Common silverfish (Lepisma saccharina)",
        points: [
          "Silvery, carrot-shaped body, 12–19 mm long",
          "Fast-moving and light-averse",
          "Prefers dark, humid areas — bookshelves, bathrooms, basements",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg",
        "Nymph (resembles a small adult; continues moulting)",
        "Adult (keeps moulting throughout life)",
      ],
      duration: [
        { label: "Egg hatch", value: "2–8 weeks, depending on humidity and temperature" },
        { label: "Nymph to adult", value: "3–24 months — slow, and highly humidity-dependent" },
        { label: "Adult lifespan", value: "2–8 years, unusually long for an insect" },
      ],
    },
    feedingHabits: {
      intro:
        "Silverfish feed on carbohydrates and proteins, with a particular appetite for starch — which is exactly what makes book bindings and wallpaper paste attractive to them.",
      items: [
        "Starch in book bindings, paper and wallpaper paste",
        "Cellulose",
        "Cotton and silk fibres",
        "Dried food such as flour",
        "Dead skin cells and dust",
      ],
    },
    signsOfInfestation: [
      "Yellow staining or small notched holes on paper, documents or fabric",
      "Tiny pepper-like black droppings near books or in cupboards",
      "Shed scales left behind in drawers or shelves",
      "Fast-darting insects when a cupboard or drawer is disturbed",
    ],
    economicImportance: {
      beneficial: ["Minor role as a detritivore — otherwise negligible ecological benefit indoors"],
      harmful: [
        "Damage to books, documents, archives and photographs",
        "Damage to wallpaper, silk clothing and curtains",
        "Contamination of stored dry food",
        "A persistent nuisance in libraries, museums and almirahs",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Cupboards, bookshelves and storage boxes",
          "Bathrooms and basements — the highest-humidity zones",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Dehumidify — silverfish thrive above roughly 75% relative humidity",
          "Fix leaks and improve ventilation in storage areas",
          "Store books and documents in sealed containers with silica gel",
          "Reduce clutter that creates dark, undisturbed hiding spots",
        ],
      },
      {
        title: "Monitoring",
        points: ["Sticky traps placed inside cupboards and corners"],
      },
      {
        title: "Chemical control",
        points: [
          "Diatomaceous earth or boric-based residual dust in cracks and cupboard corners",
          "Crack-and-crevice residual spray with a cupboard-safe formulation",
          "Follow-up inspection around day 30",
        ],
      },
    ],
    safety: [
      "Cupboard-safe formulations are chosen specifically not to stain fabric or paper",
      "Dust treatments are kept away from direct food contact",
      "Treated cupboards are ventilated before clothes or books are restocked",
    ],
    conclusion:
      "Silverfish damage is slow and easy to miss until a favourite book or heirloom document already has holes in it. Because humidity control does most of the prevention work, our protocol pairs cupboard-safe residual treatment with practical dehumidification advice for lasting protection.",
  },

  "carpet-beetle-control": {
    title: "Biology and Management of Carpet Beetles",
    intro:
      "Carpet beetles are small beetles whose larvae — not the adults — are responsible for the damage. The larvae feed on keratin-based natural fibres, quietly chewing through woollens, carpets and upholstery stored in the dark, undisturbed corners of a wardrobe for months at a time.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Coleoptera",
      family: "Dermestidae",
    },
    types: [
      {
        title: "Varied carpet beetle (Anthrenus verbasci)",
        points: [
          "Mottled adult beetle, often seen near windowsills",
          "Bristled, 'woolly bear' larvae are the destructive stage",
        ],
      },
      {
        title: "Black carpet beetle (Attagenus spp.)",
        points: [
          "Larger, darker larvae with a distinctive tail tuft of hairs",
          "Prefers dark, undisturbed storage areas",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg",
        "Larva (the destructive feeding stage)",
        "Pupa",
        "Adult (feeds on pollen outdoors, not fabric)",
      ],
      duration: [
        { label: "Egg hatch", value: "1–3 weeks" },
        {
          label: "Larval stage",
          value: "Several months to 2+ years, depending on food and temperature",
        },
        { label: "Adult lifespan", value: "2–6 weeks" },
      ],
    },
    feedingHabits: {
      intro:
        "Only the larvae damage textiles. Adults feed on pollen and nectar outdoors and are usually just passing through an open window.",
      items: [
        "Wool, silk and fur",
        "Feathers and leather",
        "Processed animal-derived textiles",
        "Stored dry-food debris in pantries",
      ],
    },
    signsOfInfestation: [
      "Irregular holes in wool or silk garments and carpets",
      "Bristly shed larval skins caught in fabric folds",
      "Live 'woolly bear' larvae in dark, undisturbed textile storage",
      "Adult beetles found near windowsills",
    ],
    economicImportance: {
      beneficial: ["Adults play a minor pollinator role outdoors"],
      harmful: [
        "Significant damage to woollens, carpets and upholstery",
        "Destruction of fur garments and heritage or museum textiles",
        "Occasional infestation of stored food products",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Wardrobes and stored woollens",
          "Carpet and rug edges, and under furniture",
          "Heritage or museum textile stores where relevant",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Regular vacuuming to remove eggs, larvae and hair debris the larvae feed on",
          "Store woollens in sealed containers with mothballs or cedar",
          "Air stored fabrics in sunlight periodically",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Pheromone traps for adult activity",
          "Visual larval inspection in dark corners and folds",
        ],
      },
      {
        title: "Treatment",
        points: [
          "Vacuum and steam preparation of affected textiles",
          "Residual spray at skirtings and under furniture",
          "Steam treatment of infested items — heat kills all life stages without chemicals",
        ],
      },
    ],
    safety: [
      "All fabric-contact treatments are tested for colourfastness first",
      "Delicate or silk fabrics are steam-treated rather than sprayed directly",
      "Treated areas are ventilated before storing clothing again",
    ],
    conclusion:
      "Carpet beetle damage often goes unnoticed until a stored woollen is unpacked at the start of winter with holes already in it. Because the larvae — not the visible adult beetles — do the damage, our protocol focuses on locating and treating the dark, undisturbed storage spots where they actually feed.",
  },

  "wood-borer-control": {
    title: "Biology and Management of Wood Borers",
    intro:
      "Wood borers are beetles whose larvae tunnel deep inside timber, weakening furniture, beams and antiques from within long before any damage is visible on the surface. Because different species attack different types of wood over very different timeframes, correct identification during inspection is what determines the right treatment.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Coleoptera",
      family: "Bostrichidae / Anobiidae / Cerambycidae",
    },
    types: [
      {
        title: "Powder-post beetle (Lyctus spp.)",
        points: [
          "Attacks hardwood and sapwood",
          "Leaves fine, powdery frass — the most common household wood borer",
        ],
      },
      {
        title: "Furniture / death-watch beetle (Anobium punctatum)",
        points: [
          "Known for a faint ticking sound during mating",
          "Attacks seasoned softwood and hardwood, often older furniture",
        ],
      },
      {
        title: "Old-house borer (Hylotrupes bajulus)",
        points: [
          "Attacks structural softwood — beams and rafters",
          "Can cause serious structural weakening over years",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg (laid in wood pores or cracks)",
        "Larva (the destructive tunnelling stage)",
        "Pupa (within the wood, near the surface)",
        "Adult (emerges through a round exit hole)",
      ],
      duration: [
        { label: "Powder-post beetle", value: "~1–2 years, egg to adult" },
        { label: "Death-watch beetle", value: "2–10 years in older timber" },
        { label: "Old-house borer", value: "3–10 years" },
      ],
    },
    feedingHabits: {
      intro:
        "Larvae feed on starches and cellulose within the wood, especially sapwood. Adults feed minimally, if at all, focusing their short life on mating and laying the next generation of eggs.",
      items: ["Sapwood and, in some species, heartwood", "Starch content within seasoned timber"],
    },
    signsOfInfestation: [
      "Small round exit holes (1–2 mm) on furniture, door frames, beams or plywood",
      "Fine powdery dust (frass) collecting under wooden items or in drawers",
      "Faint tapping or clicking sounds from within the wood, usually at night",
      "Weak, hollow or crumbling wood — sagging beams or soft patches on furniture",
      "Repeat holes appearing after DIY polish or surface sprays",
    ],
    economicImportance: {
      beneficial: ["Natural decomposers of dead wood in forest ecosystems"],
      harmful: [
        "Structural weakening of beams, staircases, door frames and heritage woodwork",
        "Irreversible damage to antiques, musical instruments and imported furniture",
        "Spread from a single infested piece to every wooden item in a room",
        "Costly carpentry and replacement bills once damage is discovered",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Moisture meter reading and exit-hole mapping across all wooden items",
          "Species identification — powder-post, death-watch or old-house borer",
        ],
      },
      {
        title: "Preventive measures",
        points: [
          "Moisture control — dry timber is far less attractive to borers",
          "Use of seasoned or pre-treated timber in new construction",
          "Adequate ventilation around wooden fixtures",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Annual inspection of heritage or valuable timber",
          "Tap-testing to detect hollow sections early",
        ],
      },
      {
        title: "Chemical control",
        points: [
          "Direct injection of anti-borer chemistry into every exit hole",
          "Surface coat with a protective borer-resistant sealer on exposed timber",
          "Fumigation reserved for severe or high-value antique infestations",
        ],
      },
      {
        title: "Wood protection",
        points: [
          "Borate wood preservatives",
          "Pressure-treated timber for new builds",
          "Protective coatings and anti-borer paints",
        ],
      },
    ],
    safety: [
      "Only CIB-approved borer actives are used, applied by targeted injection rather than open spraying",
      "Rooms are safe to re-enter within an hour of treatment",
      "Injected chemistry is chosen not to stain or damage wood finishes",
    ],
    conclusion:
      "Because wood borer larvae live and feed entirely inside the timber, surface sprays and polishes never reach the source of the problem — which is why repeat holes keep appearing after DIY treatment. Species-specific injection reaches the larvae where they actually are, and a protective sealer coat stops fresh egg-laying from starting the cycle again.",
  },

  "spider-control": {
    title: "Biology and Management of Spiders",
    intro:
      "Spiders are predatory arachnids, not insects, and the vast majority found in Indian homes are harmless to humans — in fact, they are one of the more beneficial pests to have around, quietly controlling flies, mosquitoes and cockroach nymphs. Management is therefore mostly about cobweb removal and reducing the insect prey that draws them indoors, rather than aggressive elimination.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Araneae",
    },
    types: [
      {
        title: "House / cobweb spiders",
        points: [
          "Build irregular webs in ceiling corners and undisturbed areas",
          "The most common household species, generally harmless",
        ],
      },
      {
        title: "Wolf spiders",
        points: [
          "Ground-dwelling active hunters that do not build webs",
          "Found in gardens, basements and store rooms",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg (laid in a silk egg sac)",
        "Spiderling (miniature adult form)",
        "Adult (via repeated moulting, no pupal stage)",
      ],
      duration: [
        { label: "Egg sac hatch", value: "2–4 weeks" },
        { label: "Spiderling to maturity", value: "A few months to 2 years, depending on species" },
        { label: "Adult lifespan", value: "1–2 years, often longer for females" },
      ],
    },
    feedingHabits: {
      intro:
        "Spiders are carnivorous predators that feed on other insects — either trapped in a web or actively hunted — which makes them a natural check on the insect population indoors.",
      items: ["Flies and mosquitoes", "Moths", "Cockroach nymphs", "Other small household insects"],
    },
    signsOfInfestation: [
      "Visible cobwebs in ceiling corners, storage rooms or undisturbed furniture",
      "Silk egg sacs in similar locations",
      "Live spiders spotted in basements, garages or store rooms",
      "Rising insect activity elsewhere in the home, which draws spiders in",
    ],
    economicImportance: {
      beneficial: [
        "Significant natural predators of flies, mosquitoes and cockroach nymphs",
        "The great majority of Indian household species are non-venomous and rarely bite",
      ],
      harmful: [
        "Aesthetic and psychological nuisance (arachnophobia)",
        "Cobweb build-up looks unhygienic in commercial spaces",
        "A small number of medically significant species exist, though rare in urban homes",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: ["Ceiling corners, storage rooms and balconies", "Staircases and outdoor eaves"],
      },
      {
        title: "Preventive measures",
        points: [
          "Reduce clutter — fewer hiding spots for both spiders and their prey",
          "Control other indoor insects to remove the food source",
          "Regular cleaning to remove webs before egg sacs mature",
        ],
      },
      {
        title: "Monitoring",
        points: ["Visual cobweb and egg-sac count on scheduled visits"],
      },
      {
        title: "Treatment",
        points: [
          "Full cobweb removal at ceilings and corners",
          "Residual spray on entry cracks and window frames",
          "Insect-source control to remove the underlying food supply",
        ],
      },
    ],
    safety: [
      "Any medically significant species is identified before treatment, though rare in urban India",
      "Only CIB-approved residual actives are used at label-rate dilutions",
    ],
    conclusion:
      "Because most household spiders are harmless and even beneficial, our protocol focuses on removing webs and egg sacs and treating the insect problem that attracts them — giving lasting, low-chemical control rather than a one-off spray that leaves the underlying food source untouched.",
  },

  "fly-control": {
    title: "Biology and Management of Flies",
    intro:
      "Flies are among the most important public health pests because they contaminate food and surfaces with disease-causing microorganisms. They are mechanical vectors of numerous pathogens and are major pests in homes, restaurants, hospitals, food processing industries, dairy plants, pharmaceutical facilities and livestock farms. The house fly (Musca domestica) is the most common and economically important fly species worldwide.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Diptera",
      family: "Muscidae — common species: Musca domestica (house fly)",
    },
    media: {
      hero: flyMacro,
      heroCaption:
        "The house fly (Musca domestica) — grey body with four dark longitudinal stripes, the most common domestic fly species.",
      lifeCycle: flyLifeCycleDiagram,
      lifeCycleCaption:
        "Egg → larva (three instars) → pupa → adult — complete metamorphosis in as little as a week.",
    },
    types: [
      {
        title: "House fly (Musca domestica)",
        points: [
          "Most common domestic fly",
          "Grey body with four dark longitudinal stripes",
          "Length: 6–8 mm",
          "Breeds in garbage, manure and decaying organic matter",
        ],
      },
      {
        title: "Blow fly (Calliphora spp., Lucilia spp.)",
        points: [
          "Metallic blue or green body",
          "Associated with carrion and waste",
          "Important in forensic entomology",
        ],
      },
      {
        title: "Flesh fly (Sarcophaga spp.)",
        points: [
          "Grey body with black stripes",
          "Larvae are deposited directly instead of eggs",
          "Common around decaying meat and refuse",
        ],
      },
      {
        title: "Fruit fly (Drosophila spp.)",
        points: [
          "Small, yellowish-brown flies with red eyes",
          "Breed in overripe fruits and fermenting materials",
          "Common in kitchens and food establishments",
        ],
      },
      {
        title: "Body structure",
        points: [
          "Three body regions: head, thorax and abdomen",
          "One pair of functional wings, large compound eyes, short antennae",
          "Sponging mouthparts (house fly)",
          "Six legs with sticky pads that aid walking on smooth surfaces",
          "Fine body hairs that readily pick up microorganisms",
        ],
      },
    ],
    lifeCycle: {
      flow: ["Egg", "Larva (maggot, 3 instars)", "Pupa", "Adult"],
      duration: [
        { label: "Eggs per lifetime", value: "400–600, hatching in 8–24 hours" },
        { label: "Larval stage", value: "3 instars over 3–7 days" },
        { label: "Pupal stage", value: "3–6 days to adult" },
        { label: "Adult lifespan", value: "2–4 weeks; reproductive within 2–3 days" },
      ],
    },
    feedingHabits: {
      intro:
        "Flies are active during daylight hours and are attracted to food, garbage, manure and animal waste. They feed by regurgitating digestive enzymes onto food and then sucking up the liquefied material, frequently moving between contaminated materials and human food — which makes them efficient mechanical vectors of disease.",
      items: [
        "Garbage bins and food waste",
        "Animal manure and compost heaps",
        "Sewage and organic refuse",
        "Decaying fruits and vegetables",
        "Poultry and dairy farm waste",
      ],
    },
    signsOfInfestation: [
      "Numerous adult flies indoors",
      "Maggots in garbage or organic waste",
      "Dark fly specks (faeces) on surfaces",
      "Fly activity around windows and lights",
      "Persistent nuisance around food preparation areas",
    ],
    economicImportance: {
      beneficial: ["Larvae assist decomposition of organic waste in nature"],
      harmful: [
        "Mechanically transmit pathogens responsible for food poisoning, cholera, typhoid, dysentery, diarrhoea, salmonellosis and eye infections",
        "Contaminate food and surfaces through body hairs, legs, regurgitation and defecation",
        "Major pests in food processing, dairy, pharmaceutical and healthcare facilities",
        "Trigger regulatory action during hygiene audits and food-safety inspections",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Garbage storage areas, drains and waste disposal points",
          "Food preparation areas and loading docks",
          "Manure storage, compost pits and external surroundings",
        ],
      },
      {
        title: "Sanitation",
        points: [
          "Remove garbage daily and clean spills immediately",
          "Keep waste bins covered; clean drains and grease traps",
          "Dispose of decaying organic matter promptly",
        ],
      },
      {
        title: "Exclusion",
        points: [
          "Insect-proof screens on doors and windows",
          "Air curtains at entrances; keep doors closed when not in use",
          "Seal gaps and cracks around entry points",
        ],
      },
      {
        title: "Monitoring",
        points: [
          "Sticky fly ribbons, glue boards and baited fly traps",
          "UV insect light traps (ILTs)",
          "Routine fly count records and trend analysis",
        ],
      },
      {
        title: "Mechanical & chemical control",
        points: [
          "UV light traps, electric fly killers and sticky traps",
          "Residual sprays (deltamethrin, cypermethrin, lambda-cyhalothrin) on resting surfaces and external walls",
          "Fly baits (imidacloprid, dinotefuran, acetamiprid, spinosad), placed away from food areas",
          "Space sprays (ULV/fogging) for rapid knockdown during heavy infestations",
        ],
      },
      {
        title: "Biological control",
        points: [
          "Parasitoid wasps (Muscidifurax spp., Spalangia spp.)",
          "Predatory beetles and entomopathogenic fungi",
          "Beneficial nematodes — especially useful in livestock and poultry facilities",
        ],
      },
    ],
    safety: [
      "Use only approved insecticides, following label instructions and recommended dosages",
      "Wear appropriate PPE during application",
      "Prevent contamination of food, water and food-contact surfaces",
      "Maintain records of inspections, treatments and monitoring results",
    ],
    conclusion:
      "Flies are significant public health pests capable of contaminating food and transmitting disease-causing microorganisms. Their rapid life cycle and prolific breeding require a comprehensive Integrated Fly Management (IFM) programme that combines sanitation, exclusion, source reduction, monitoring, biological methods and targeted chemical control. Regular inspections and good housekeeping remain the most effective long-term strategies for preventing fly infestations in residential, commercial and industrial environments.",
  },

  "stored-grain-pest-control": {
    title: "Biology and Management of Stored Grain & Seed Pests",
    intro:
      "Stored grain and seed pests are insects that attack cereals, pulses and processed grain products during storage — in godowns, warehouses, silos, retail shops and home pantries. Because infestation often begins inside the kernel itself, damage can be well underway before it is visible from outside. Left unmanaged, these pests are responsible for a significant share of India's post-harvest food losses, reducing both the weight and the market grade of stored produce.",
    classification: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Coleoptera (mainly); some Lepidoptera",
      family:
        "Curculionidae, Tenebrionidae, Bostrichidae, Dermestidae, Bruchidae (depending on species)",
    },
    types: [
      {
        title: "Rice weevil (Sitophilus oryzae)",
        points: [
          "Small snout beetle, 2–3 mm, reddish-brown",
          "A primary pest — the female bores into a whole grain to lay each egg",
          "Larva develops concealed inside the kernel; attacks rice, wheat and maize",
        ],
      },
      {
        title: "Red flour beetle (Tribolium castaneum)",
        points: [
          "Small, flattened, reddish-brown beetle",
          "A secondary pest — attacks flour, broken grain and milled products, not sound whole grain",
          "Common in flour mills, warehouses and kitchen stores",
        ],
      },
      {
        title: "Khapra beetle (Trogoderma granarium)",
        points: [
          "One of the world's most destructive stored-grain pests and a major quarantine concern",
          "Hairy larvae can survive long periods without food in cracks and crevices",
          "Primarily attacks wheat and other cereals in bulk storage",
        ],
      },
      {
        title: "Lesser grain borer (Rhyzopertha dominica)",
        points: [
          "Small, cylindrical, powerful borer",
          "A primary pest capable of attacking whole grain and even structural wood",
        ],
      },
      {
        title: "Pulse beetle / bruchid (Callosobruchus spp.)",
        points: [
          "Attacks pulses and legumes — chickpea, moong, lentil",
          "Eggs are laid on the pod or seed surface; larvae bore directly into the seed",
        ],
      },
    ],
    lifeCycle: {
      flow: [
        "Egg (often laid inside the kernel)",
        "Larva (feeds concealed within the grain)",
        "Pupa",
        "Adult",
      ],
      duration: [
        { label: "Eggs per female", value: "300–400 over a lifetime (rice weevil)" },
        { label: "Egg to adult", value: "4–6 weeks at 28–30°C and high humidity" },
        { label: "Adult lifespan", value: "A few months to about a year" },
        { label: "Development", value: "Complete metamorphosis (holometabolous)" },
      ],
    },
    feedingHabits: {
      intro:
        "Primary pests such as the rice weevil and lesser grain borer attack sound, whole grain directly, often developing concealed inside a single kernel. Secondary pests such as the red flour beetle feed on grain that is already broken, milled or damaged.",
      items: [
        "Whole cereal grains — rice, wheat, maize, sorghum",
        "Pulses and legumes",
        "Flour, semolina and other milled products",
        "Dried fruits, nuts and seed stock",
      ],
    },
    signsOfInfestation: [
      "Live weevils or beetles in stored grain, flour or pulses",
      "Small exit holes in grain kernels",
      "Grain dust, frass or webbing in storage containers",
      "A musty or foul odour from the grain mass",
      "Localised warmth ('hot spots') in bulk grain from insect activity",
      "Weight loss and reduced germination in seed grain",
    ],
    economicImportance: {
      beneficial: ["Negligible — a very minor decomposer role outside stored produce"],
      harmful: [
        "Significant post-harvest weight loss and reduced market grade of grain",
        "Loss of seed viability and germination in stored seed stock",
        "Contamination with insect fragments and frass, risking rejection in quality audits and exports",
        "Khapra beetle in particular carries serious quarantine restrictions on international grain trade",
        "Direct financial losses for farmers, traders and public distribution godowns",
      ],
    },
    management: [
      {
        title: "Inspection",
        points: [
          "Godown, warehouse and container inspection before and during storage",
          "Grain sampling and sieving to check for live insects",
          "Moisture content checks — damp grain is far more attractive to pests",
          "Screening new stock before it is added to existing storage",
        ],
      },
      {
        title: "Sanitation",
        points: [
          "Clean empty godowns and bins thoroughly before restocking",
          "Remove spillage, dust and old grain residue from cracks and crevices",
          "Treat storage structure walls and floors with a residual spray before refilling",
        ],
      },
      {
        title: "Physical & storage control",
        points: [
          "Sun-dry grain to below 10–12% moisture before storage",
          "Sieve and clean grain to remove infested kernels and insects",
          "Hermetic (airtight) storage or modified-atmosphere bins to suppress insects without chemicals",
          "Proper aeration and stacking to avoid moisture pockets",
        ],
      },
      {
        title: "Fumigation",
        points: [
          "Phosphine (aluminium phosphide) fumigation of sealed godowns or containers for active infestations",
          "Requires a gas-tight seal, trained applicators and a fixed exposure period",
          "Reserved for confirmed infestations, not routine use",
        ],
      },
      {
        title: "Protectants & monitoring",
        points: [
          "Approved grain protectant dusts admixed at bulk storage level, per label rate",
          "Diatomaceous earth as a non-chemical protectant option",
          "Pheromone and probe traps, plus temperature probes to catch early 'hot spots'",
        ],
      },
    ],
    safety: [
      "Fumigation is carried out only by certified, trained applicators",
      "Fumigated structures are sealed, clearly posted, and aerated for the full label-specified period before re-entry",
      "PPE, including respirators, is used during fumigant application",
      "Protectant-treated grain follows the label's post-treatment waiting period before consumption",
    ],
    conclusion:
      "Because primary stored-grain pests develop concealed inside the kernel itself, infestation is often invisible until losses are already significant. Managing them well means controlling moisture and storage conditions first, sampling and sieving grain regularly to catch problems early, and reserving fumigation for confirmed infestations rather than routine use — protecting both the weight and the quality grade of stored produce.",
  },
};

export const getPestBiology = (slug: string) => pestBiology[slug];
