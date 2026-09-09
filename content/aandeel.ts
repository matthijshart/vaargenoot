export type Aandeel = {
  id: "achtste" | "kwart" | "half";
  naam: string;
  /** Vaste vaarten per maand in het vaarseizoen. Vaker kan als de sloep vrij is. */
  vaarten: number;
  /** Maandbedrag in euro, indicatief. */
  prijs: number;
};

export const aandelen: Aandeel[] = [
  { id: "achtste", naam: "Een achtste", vaarten: 4, prijs: 395 },
  { id: "kwart", naam: "Een kwart", vaarten: 8, prijs: 695 },
  { id: "half", naam: "Een half", vaarten: 16, prijs: 1195 },
];

export const aandeelTekst = {
  label: "Jouw aandeel",
  kop: "Een vast bedrag per maand. Verder niets.",
  intro:
    "Je kiest een aandeel in een specifieke sloep. Dat geeft je vaste vaarten per maand in het vaarseizoen. Is de sloep vrij, dan vaar je vaker.",
  perMaand: "per maand",
  indicatief: "indicatief",
  vaarten: "vaste vaarten per maand in het vaarseizoen",
  vaker: "Vaker varen als de sloep vrij is",
  inbegrepen: "Alles inbegrepen",
  cta: "Plan een proefvaart",
  winter:
    "En buiten het seizoen? Dan vaar je ook. Het Amsterdam Light Festival, een knusse winterdag met soep en thee, met onze fleecedekens aan boord.",
  vergelijking:
    "Ter vergelijking: een eigen elektrische sloep kost al snel 15.200 euro per jaar aan afschrijving, liggeld en winterstalling. Onderhoud, verzekering, vignet en stroom komen daar nog bij. Alle bedragen zijn indicatief.",
};
