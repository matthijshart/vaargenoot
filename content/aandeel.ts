export type Aandeel = {
  id: "achtste" | "kwart" | "half";
  naam: string;
  /** Vaste vaarten per maand. Vaker kan als de sloep vrij is. */
  vaarten: number;
  /** Maandbedrag in euro, indicatief. */
  prijs: number;
};

export const aandelen: Aandeel[] = [
  { id: "achtste", naam: "Een achtste", vaarten: 4, prijs: 395 },
  { id: "kwart", naam: "Een kwart", vaarten: 8, prijs: 695 },
  { id: "half", naam: "Een half", vaarten: 16, prijs: 1195 },
];

/**
 * Extra rijen in de tabel. Waarden die nog niet vaststaan staan
 * als "volgt", zie TODO.md.
 */
export const aandeelRijen: { label: string; waarden: [string, string, string] }[] = [
  {
    label: "Vaker varen",
    waarden: ["Als de sloep vrij is", "Als de sloep vrij is", "Als de sloep vrij is"],
  },
  { label: "Reserveren vooruit", waarden: ["volgt", "volgt", "volgt"] },
  { label: "Weekenden", waarden: ["volgt", "volgt", "volgt"] },
  { label: "Schipper bijboeken", waarden: ["volgt", "volgt", "volgt"] },
];

export const aandeelTekst = {
  label: "Jouw aandeel",
  kop: "Een vast bedrag per maand. Verder niets.",
  intro:
    "Je kiest een aandeel in een specifieke sloep. Dat geeft je vaste vaarten per maand. Is de sloep vrij, dan vaar je vaker.",
  indicatief: "indicatief",
  rekenblok: {
    kop: "Hoe vaak wil je varen?",
    tekst: "Schuif en zie welk aandeel bij je past en wat een vaart je kost.",
    vaarten: "vaarten per maand",
    vaart: "vaart per maand",
    past: "past bij jou",
    perVaart: "per vaart",
    perMaand: "per maand",
    eigen: "Eigen elektrische sloep",
    eigenToelichting:
      "Bij hetzelfde aantal vaarten, met afschrijving, ligplaats, verzekering, onderhoud, stalling, vignet en stroom.",
    aannames: "Alle bedragen zijn indicatief. De aannames staan in de code.",
  },
};

/** Het kleinste aandeel dat dit aantal vaarten per maand dekt. */
export function passendAandeel(vaartenPerMaand: number): Aandeel {
  return aandelen.find((a) => vaartenPerMaand <= a.vaarten) ?? aandelen[aandelen.length - 1];
}
