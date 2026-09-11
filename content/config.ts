/**
 * Eén bron van waarheid voor alle feiten op de site: modellen, producten,
 * prijzen, dagdelen, seizoen, looptijd, beschikbaarheid en de gegevens
 * van de oprichter. Bedragen in euro, exclusief btw, indicatief.
 *
 * Wat nog niet vaststaat, staat als [INVULLEN: ...] en verschijnt zichtbaar
 * op de site. Wat getoetst moet worden, staat als [CHECK: ...].
 */
export const invullen = (wat: string) => `[INVULLEN: ${wat}]`;
export const check = (wat: string) => `[CHECK: ${wat}]`;

export const site = {
  naam: "Sloepmaten",
  domein: "https://sloepmaten.nl",
  plaats: "Amsterdam",
  omschrijving:
    "Een sloep voor je bedrijf in de Amsterdamse grachten, in deeleigendom. Alleen, of met één ander bedrijf. Alles geregeld, één vast bedrag per maand, twaalf maanden.",
  email: invullen("e-mailadres"),
  telefoon: invullen("telefoonnummer"),
  kvk: invullen("KvK-nummer"),
  ligplaats: "Altijd schoon en opgeladen klaar in de grachtengordel, of op een plek naar keuze.",
};

export type ModelId = "prinsen" | "amstel";
export type ProductId = "duo" | "solo";

export const modellen: Record<
  ModelId,
  {
    id: ModelId;
    naam: string;
    lengte: number;
    personen: number;
    uitrusting: string[];
    voorWie: string;
  }
> = {
  prinsen: {
    id: "prinsen",
    naam: "Prinsen",
    lengte: 10,
    personen: 40,
    uitrusting: [
      "Lange tafel",
      "Koelkast",
      "Green Egg",
      "Ligdek",
      "Kussens",
      "Bimini",
      "Zwemtrap",
      "Geluid",
      "230 V",
    ],
    voorWie: "Het hele kantoor, een klantenavond, of een lunch met vier.",
  },
  amstel: {
    id: "amstel",
    naam: "Amstel",
    lengte: 8,
    personen: 25,
    uitrusting: ["Lange tafel", "Koelkast", "Ligdek", "Kussens", "Zwemtrap", "Geluid", "230 V"],
    voorWie: "Kleinere groepen en een lagere prijs.",
  },
};

export const checks = {
  vaarbewijs: check("elektrische sloep onder 15 m en 20 km/u"),
  fiscaal: check("uitsluiting investeringsaftrek representatieve vaartuigen, BUA"),
};

export const producten: Record<
  ProductId,
  {
    id: ProductId;
    naam: string;
    kort: string;
    prijs: Record<ModelId, number>;
    aanBoord: string;
    beschikbaarheid: string;
    huisstijl: string;
    looptijd: string;
    voorkeursrecht: string;
  }
> = {
  duo: {
    id: "duo",
    naam: "Duo",
    kort: "Twee bedrijven op één sloep, ieder de helft.",
    prijs: { prinsen: 1295, amstel: 995 },
    aanBoord: "Jouw mensen en gasten. Je duo-partner vaart op zijn eigen dagdelen.",
    beschikbaarheid: "Aanvragen in de app wanneer je wilt, ook op de dag zelf.",
    huisstijl: "Beide logo's op de sloep. Je eigen vlag en welkomstbord als jij vaart.",
    looptijd: "Twaalf maanden vanaf 1 april.",
    voorkeursrecht: "Eerste recht op de andere helft. Per 1 april naar Solo.",
  },
  solo: {
    id: "solo",
    naam: "Solo",
    kort: "Eén bedrijf, de hele sloep.",
    prijs: { prinsen: 1995, amstel: 1595 },
    aanBoord: "Alleen jouw bedrijf. Met niemand gedeeld.",
    beschikbaarheid: "Altijd beschikbaar.",
    huisstijl: "Volledige huisstijl en bestickering inbegrepen.",
    looptijd: "Twaalf maanden vanaf 1 april.",
    voorkeursrecht: "Draag een partner aan en ga terug naar Duo.",
  },
};

export const btw = "excl. btw";
export const indicatief = "indicatief";

export const dagdelen = [
  { naam: "Ochtend", van: "09:00", tot: "13:00" },
  { naam: "Middag", van: "13:00", tot: "17:00" },
  { naam: "Avond", van: "17:00", tot: "22:00" },
];

export const seizoen = {
  van: "april",
  tot: "oktober",
  buiten: "Buiten het seizoen vaar je gewoon: het Light Festival, winterdagen met dekens en warme dranken.",
};

export const looptijd = {
  maanden: 12,
  start: "1 april",
  uitstappen: "Tussentijds uitstappen kan met een opvolger. Wij helpen daarbij.",
};

export const reservering = {
  oplevering: "april 2027",
  overeenkomstBinnen: "twee werkdagen",
  founding: "De eerste bedrijven zijn founding sloepmaten: hun prijs staat drie jaar vast.",
  duoPartnerActie: "Neem je je eigen duo-partner mee, dan varen jullie allebei de eerste maand gratis.",
};

/** Zo delen twee bedrijven één sloep. Geen punten, geen vaste dagen. */
export const samen = {
  naam: "Samen, zonder gedoe",
  regels: [
    "Geen punten, geen vaste dagen. Je vraagt een dagdeel aan in de app wanneer je wilt, ook op de dag zelf.",
    "Je ziet meteen wat vrij is. Je duo-partner ook.",
    "Willen jullie allebei hetzelfde dagdeel, dan wijkt wie de vorige keer voorging.",
    "Beide logo's op de sloep. Je eigen vlag en welkomstbord als jij vaart.",
  ],
};

/** Wat wij regelen. Staat overal als "alles inbegrepen". */
export const inbegrepen = [
  "Ligplaats in de grachtengordel, of een plek naar keuze",
  "Vergunningen en vignet",
  "Verzekering",
  "Opladen en stroom",
  "Onderhoud",
  "Schoonmaak na elke vaart",
  "Winterklaar",
  "Vervangende sloep",
  "App",
  "Servicelijn",
];

export const extra = {
  zin: "Schipper en catering regel je erbij.",
  schipper: invullen("tarief schipper per dagdeel"),
  catering: invullen("cateringpartners en tarieven"),
};

/** Hoe vaak een sloepmaat gemiddeld vaart, voor de kosten per vaart. */
export const vaarten = {
  perMaand: [4, 8, 12],
};

export type HelftStatus = "vrij" | "gereserveerd";

/**
 * Beschikbaarheid per sloep, live op de site. Per sloep twee helften:
 * allebei vrij, dan is ook Solo mogelijk. Aanpassen na elke reservering.
 * Het aantal sloepen is een aanname: zes voor 2027, vier Prinsen en twee Amstel.
 */
export const sloepen: { id: string; naam: string; model: ModelId; helften: [HelftStatus, HelftStatus] }[] = [
  { id: "prinsen-1", naam: "Prinsen 1", model: "prinsen", helften: ["vrij", "vrij"] },
  { id: "prinsen-2", naam: "Prinsen 2", model: "prinsen", helften: ["vrij", "vrij"] },
  { id: "prinsen-3", naam: "Prinsen 3", model: "prinsen", helften: ["vrij", "vrij"] },
  { id: "prinsen-4", naam: "Prinsen 4", model: "prinsen", helften: ["vrij", "vrij"] },
  { id: "amstel-1", naam: "Amstel 1", model: "amstel", helften: ["vrij", "vrij"] },
  { id: "amstel-2", naam: "Amstel 2", model: "amstel", helften: ["vrij", "vrij"] },
];

export const oprichter = invullen("naam en één zin over de oprichter");

export const juridisch = invullen("juridische vorm in twee zinnen, in gewone taal");

export const schade = {
  eigenRisico: invullen("eigen risico"),
};

export const proefvaren = {
  duur: "een uur",
  prijs: invullen("prijs proefvaart of gratis"),
};

export const fiscaal = "Vraag je accountant naar de fiscale behandeling; voor vaartuigen gelden beperkingen.";

export const voorbeeldovereenkomst = invullen("pdf voorbeeldovereenkomst");
