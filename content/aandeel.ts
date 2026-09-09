export type Aandeel = {
  id: "kwart" | "half" | "heel";
  naam: string;
  /** Korte ondertitel onder de naam. */
  onder: string;
  /** Vaste vaarten per maand in het vaarseizoen. Null: altijd beschikbaar. */
  vaarten: number | null;
  /** Maandbedrag in euro, indicatief. Null: op aanvraag. */
  prijs: number | null;
};

export const aandelen: Aandeel[] = [
  { id: "kwart", naam: "Een kwart", onder: "Met maximaal drie andere sloepmaten", vaarten: 8, prijs: 695 },
  { id: "half", naam: "Een half", onder: "Met één andere sloepmaat", vaarten: 16, prijs: 1195 },
  { id: "heel", naam: "De hele sloep", onder: "Alleen jij, of je bedrijf", vaarten: null, prijs: null },
];

export const aandeelTekst = {
  label: "Jouw aandeel",
  kop: "Een vast bedrag per maand. Verder niets.",
  intro:
    "Je wordt deel-eigenaar van een specifieke sloep, met maximaal vier sloepmaten. Of je neemt de hele sloep voor jezelf.",
  perMaand: "per maand",
  indicatief: "indicatief",
  opAanvraag: "Op aanvraag",
  vaarten: "vaste vaarten per maand in het vaarseizoen",
  altijd: "Altijd beschikbaar, alleen voor jou",
  vaker: "Vaker varen als de sloep vrij is",
  eigenSchipper: "Schipper bij te boeken",
  inbegrepen: "Alles inbegrepen",
  inbegrepenLijst: "Inbegrepen: ligplaats met laadpunt, stroom, onderhoud, verzekering, schoonmaak, winterklaar en vignet. Schipper bij te boeken.",
  cta: "Aanmelden voor 2027",
  winter:
    "En buiten het seizoen? Dan vaar je ook. Het Amsterdam Light Festival, een knusse winterdag met soep en thee, met onze fleecedekens aan boord.",
  vergelijking:
    "Ter vergelijking, indicatief: een eigen elektrische sloep kost al snel 15.200 euro per jaar aan afschrijving, liggeld en winterstalling. Onderhoud en verzekering komen daar nog bij.",
};
