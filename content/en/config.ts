/**
 * Engelse teksten bij de feiten in ../config.ts. De cijfers (prijzen,
 * lengtes, aantallen, beschikbaarheid) komen daarvandaan; hier staan alleen
 * de woorden. Wat in het Nederlands nog [INVULLEN] is, is dat hier ook.
 */
import {
  check,
  invullen,
  dagdelen as nlDagdelen,
  looptijd as nlLooptijd,
  modellen as nlModellen,
  producten as nlProducten,
  site as nlSite,
  sloepen as nlSloepen,
  vergelijking as nlVergelijking,
} from "../config";

export { invullen, check };
export type { ModelId, ProductId, HelftStatus } from "../config";

export const site: typeof nlSite = {
  ...nlSite,
  omschrijving:
    "A boat for your company on the Amsterdam canals, in co-ownership. On your own, or with one other company. Everything taken care of, one fixed amount a month, twelve months.",
  ligplaats: "Always clean and charged, ready in the canal ring or at a spot of your choice.",
};

export const modellen: typeof nlModellen = {
  prinsen: {
    ...nlModellen.prinsen,
    uitrusting: ["Long table", "Fridge", "Green Egg", "Sun deck", "Cushions", "Bimini", "Swim ladder", "Sound", "230 V"],
    voorWie: "The whole office, a client evening, or a lunch for four.",
  },
  amstel: {
    ...nlModellen.amstel,
    uitrusting: ["Long table", "Fridge", "Sun deck", "Cushions", "Swim ladder", "Sound", "230 V"],
    voorWie: "Smaller groups and a lower price.",
  },
};

export const checks = {
  vaarbewijs: check("electric boat under 15 m and 20 km/h"),
  fiscaal: check("exclusion of investment deduction for representative vessels, BUA"),
};

export const producten: typeof nlProducten = {
  duo: {
    ...nlProducten.duo,
    kort: "Two companies on one boat, half each.",
    aanBoord: "Your people and guests. Your duo partner sails in their own slots.",
    beschikbaarheid: "Request in the app whenever you like, even on the day itself.",
    huisstijl: "Both logos on the boat. Your own flag and welcome board when you sail.",
    looptijd: "Twelve months from 1 April.",
    voorkeursrecht: "First right to the other half. Move to Solo on 1 April.",
  },
  solo: {
    ...nlProducten.solo,
    kort: "One company, the whole boat.",
    aanBoord: "Only your company. Shared with no one.",
    beschikbaarheid: "Always available.",
    huisstijl: "Full branding and lettering included.",
    looptijd: "Twelve months from 1 April.",
    voorkeursrecht: "Bring in a partner and go back to Duo.",
  },
};

export const btw = "excl. VAT";
export const indicatief = "indicative";

export const dagdelen = [
  { ...nlDagdelen[0], naam: "Morning" },
  { ...nlDagdelen[1], naam: "Afternoon" },
  { ...nlDagdelen[2], naam: "Evening" },
];

export const seizoen = {
  van: "April",
  tot: "October",
  buiten: "Outside the season you simply sail: the Light Festival, winter days with blankets and hot drinks.",
};

export const looptijd: typeof nlLooptijd = {
  maanden: nlLooptijd.maanden,
  start: "1 April",
  uitstappen: "Leaving early is possible with a successor. We help with that.",
};

export const reservering = {
  oplevering: "April 2027",
  overeenkomstBinnen: "two working days",
  founding: "The first companies are founding sloepmaten: their price is fixed for three years.",
  duoPartnerActie: "Bring your own duo partner and you both sail the first month for free.",
};

/** How two companies share one boat. No points, no fixed days. */
export const samen = {
  naam: "Sharing, without the hassle",
  regels: [
    "No points, no fixed days. You request a slot in the app whenever you like, even on the day itself.",
    "You see straight away what's free. So does your duo partner.",
    "If you both want the same slot, whoever went first last time gives way.",
    "Both logos on the boat. Your own flag and welcome board when you sail.",
  ],
};

/** What we take care of. Everywhere on the site as "everything included". */
export const inbegrepen = [
  "A berth in the canal ring, or a spot of your choice",
  "Permits and vignette",
  "Insurance",
  "Charging and power",
  "Maintenance",
  "Cleaning after every trip",
  "Winterising",
  "Replacement boat",
  "App",
  "Service line",
];

export const extra = {
  zin: "A skipper and catering you arrange on top.",
  schipper: invullen("skipper rate per slot"),
  catering: invullen("catering partners and rates"),
};

export const vergelijking: typeof nlVergelijking = {
  lease: {
    ...nlVergelijking.lease,
    naam: "Leasing a whole boat elsewhere",
    looptijd: "Four to five years, fixed",
    huisstijl: "Varies per provider",
    aanBoord: "Only your company",
  },
  vaartenPerMaand: nlVergelijking.vaartenPerMaand,
};

export const sloepen = nlSloepen;

export const oprichter = invullen("founder's name and one sentence about the founder, in English");

export const juridisch = invullen("legal structure in two sentences, in plain English");

export const schade = {
  eigenRisico: invullen("deductible"),
};

export const proefvaren = {
  duur: "an hour",
  prijs: invullen("price of the trial trip, or free"),
};

export const fiscaal = "Ask your accountant about the tax treatment; restrictions apply to vessels.";

export const voorbeeldovereenkomst = invullen("sample agreement pdf");
