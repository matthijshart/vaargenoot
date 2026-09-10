import { eigenSloepPerJaar, kosten } from "./kosten";

export type Aandeel = {
  id: "kwart" | "half" | "heel";
  naam: string;
  /** Korte ondertitel onder de naam. */
  onder: string;
  /** Vaarpunten per maand naar aandeel (zie docs/reserveren.md). Null: altijd beschikbaar. */
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
  /** Voor de kaart: "8 vaarpunten per maand, jouw vaste deel". */
  vaarten: "vaarpunten per maand, jouw vaste deel",
  vrij: "Is de sloep vrij, dan vaar je zonder punten, ook op de dag zelf",
  altijd: "Altijd beschikbaar, alleen voor jou",
  eigenSchipper: "Schipper bij te boeken",
  inbegrepen: "Alles inbegrepen",
  puntenUitleg:
    "Zo delen sloepmaten één sloep: elke maand krijg je vaarpunten naar je aandeel. Een dagdeel door de week kost er één, een weekend meer. Is een dagdeel 48 uur van tevoren nog vrij, dan boek je het zonder punten. Zo heeft iedereen zijn deel, en vaar je vaker als het kan.",
  puntenLink: "Zo werkt het",
  puntenHref: "/zo-werkt-het",
  inbegrepenLijst: "Inbegrepen: ligplaats met laadpunt, stroom, onderhoud, verzekering, schoonmaak, winterklaar en vignet. Schipper bij te boeken, dan drinkt iedereen mee.",
  cta: "Aanmelden voor 2027",
  winter:
    "En buiten het seizoen? Dan vaar je ook. Het Amsterdam Light Festival, een knusse winterdag met soep en thee, met onze fleecedekens aan boord.",
  vergelijking: `Ter vergelijking, indicatief: een eigen elektrische sloep van dit formaat kost rond de ${getal(kosten.aanschaf)} euro in aanschaf. Daarna ben je al snel ${getal(eigenSloepPerJaar())} euro per jaar kwijt aan afschrijving, liggeld en winterstalling. Onderhoud, verzekering en vignet komen daar nog bij.`,
};
