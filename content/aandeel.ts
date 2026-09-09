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
    "Je kiest een aandeel in een specifieke sloep. Dat geeft je vaste vaarten per maand in het vaarseizoen. Is de sloep vrij, dan vaar je vaker.",
  winter:
    "En buiten het seizoen? Dan vaar je ook. Het Amsterdam Light Festival, een knusse winterdag met soep en thee, met onze fleecedekens aan boord.",
  indicatief: "indicatief",
  rekenblok: {
    kop: "Hoe vaak wil je varen?",
    tekst: "Schuif en zie welk aandeel bij je past, wat een vaart je kost, en wat een eigen sloep je zou kosten.",
    vaarten: "vaarten per maand",
    vaart: "vaart per maand",
    past: "past bij jou",
    perVaart: "per vaart",
    perJaar: "per jaar",
    perMaand: "per maand",
    seizoen: "vaarten per maand in het vaarseizoen",
    eigen: "Eigen elektrische sloep",
    eigenToelichting:
      "Eigen sloep: circa 80.000 euro aanschaf, circa 6.000 euro liggeld en 4.000 euro winterstalling per jaar, afgeschreven over tien jaar. Onderhoud, verzekering, vignet en stroom zijn nog niet meegerekend.",
    aannames: "Alle bedragen zijn indicatief.",
  },
};

/** Het kleinste aandeel dat dit aantal vaarten per maand dekt. */
export function passendAandeel(vaartenPerMaand: number): Aandeel {
  return aandelen.find((a) => vaartenPerMaand <= a.vaarten) ?? aandelen[aandelen.length - 1];
}
