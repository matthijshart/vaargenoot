import { eigenSloepPerJaar, kosten } from "./kosten";

export type Aandeel = {
  id: "kwart" | "half" | "heel";
  naam: string;
  /** Korte ondertitel onder de naam. */
  onder: string;
  /** Minimum aantal vaarten per maand in het vaarseizoen. Null: altijd beschikbaar. */
  vaarten: number | null;
  /** Maandbedrag in euro, indicatief. Null: op aanvraag. */
  prijs: number | null;
};

export const aandelen: Aandeel[] = [
  { id: "kwart", naam: "Een kwart", onder: "Met maximaal drie andere sloepmaten", vaarten: 8, prijs: 695 },
  { id: "half", naam: "Een half", onder: "Met één andere sloepmaat", vaarten: 16, prijs: 1195 },
  { id: "heel", naam: "De hele sloep", onder: "Alleen jij, of je bedrijf", vaarten: null, prijs: null },
];

/** Getal in Nederlandse notatie, zonder valutateken: 80.000. */
const getal = (n: number) => new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 }).format(Math.round(n / 100) * 100);

export const aandeelTekst = {
  label: "Jouw aandeel",
  kop: "Een vast bedrag per maand. Verder niets.",
  intro:
    "Je wordt deel-eigenaar van een specifieke sloep, met maximaal vier sloepmaten. Of je neemt de hele sloep voor jezelf.",
  perMaand: "per maand",
  indicatief: "indicatief",
  opAanvraag: "Op aanvraag",
  /** Voor de kaart: "Minstens 8 vaarten per maand in het seizoen". */
  minstens: "Minstens",
  vaarten: "vaarten per maand in het seizoen",
  altijd: "Altijd beschikbaar, alleen voor jou",
  wanneer: "Varen wanneer je wilt, ook op de dag zelf",
  eigenSchipper: "Schipper bij te boeken",
  inbegrepen: "Alles inbegrepen",
  inbegrepenLijst: "Inbegrepen: ligplaats met laadpunt, stroom, onderhoud, verzekering, schoonmaak, winterklaar en vignet. Schipper bij te boeken.",
  cta: "Aanmelden voor 2027",
  winter:
    "En buiten het seizoen? Dan vaar je ook. Het Amsterdam Light Festival, een knusse winterdag met soep en thee, met onze fleecedekens aan boord.",
  vergelijking: `Ter vergelijking, indicatief: een eigen elektrische sloep van dit formaat kost rond de ${getal(kosten.aanschaf)} euro in aanschaf. Daarna ben je al snel ${getal(eigenSloepPerJaar())} euro per jaar kwijt aan afschrijving, liggeld en winterstalling. Onderhoud, verzekering en vignet komen daar nog bij.`,
};
