import { foto } from "./foto";

export type Sloep = {
  naam: string;
  beeld: (typeof foto)[keyof typeof foto];
  specs: { label: string; waarde: string }[];
};

/**
 * Alleen specificaties die vaststaan. Vaartijd op een lading en ligplaats
 * komen erbij zodra ze bekend zijn, zie TODO.md.
 */
const aanBoord = "Koelkast, tafel, ligdek, kussens, bimini, geluid";

export const sloepen = {
  label: "De sloepen",
  kop: "Zes nieuwe sloepen in 2027.",
  intro: "Twee modellen, allebei elektrisch en stil. Vol is vol.",
  lijst: [
    {
      naam: "Amstel",
      beeld: foto.sloepAmstel,
      specs: [
        { label: "Lengte", waarde: "7,5 m" },
        { label: "Personen", waarde: "10" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Aan boord", waarde: aanBoord },
      ],
    },
    {
      naam: "Prinsen",
      beeld: foto.sloepPrinsen,
      specs: [
        { label: "Lengte", waarde: "8,5 m" },
        { label: "Personen", waarde: "12" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Aan boord", waarde: aanBoord },
      ],
    },
  ] satisfies Sloep[],
};
