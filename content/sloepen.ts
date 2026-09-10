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
const aanBoordAmstel = "Koelkast, Green Egg, tafel, ligdek, kussens, zwemtrap, geluid";
const aanBoordPrinsen = "Koelkast, Green Egg, tafel, ligdek, kussens, bimini, zwemtrap, geluid";

export const sloepen = {
  label: "De sloepen",
  kop: "Zes nieuwe sloepen in 2027.",
  intro: "Twee modellen, allebei elektrisch en stil.",
  lijst: [
    {
      naam: "Amstel",
      beeld: foto.sloepAmstel,
      specs: [
        { label: "Lengte", waarde: "10 m" },
        { label: "Personen", waarde: "tot 40" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Aan boord", waarde: aanBoordAmstel },
      ],
    },
    {
      naam: "Prinsen",
      beeld: foto.sloepPrinsen,
      specs: [
        { label: "Lengte", waarde: "10 m" },
        { label: "Personen", waarde: "tot 40" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Aan boord", waarde: aanBoordPrinsen },
      ],
    },
  ] satisfies Sloep[],
};
