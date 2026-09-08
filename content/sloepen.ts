import { foto } from "./foto";

export type Sloep = {
  naam: string;
  beeld: (typeof foto)[keyof typeof foto];
  specs: { label: string; waarde: string }[];
};

/**
 * Specificaties die nog niet vaststaan staan als "volgt".
 * Zie TODO.md.
 */
const aanBoord = "Koelkast, tafel, ligdek, kussens, bimini, geluid";

export const sloepen = {
  label: "De sloepen",
  kop: "Twee sloepen, allebei elektrisch en stil.",
  intro: "Aandelen beschikbaar vanaf voorjaar 2027.",
  lijst: [
    {
      naam: "Amstel",
      beeld: foto.sloepAmstel,
      specs: [
        { label: "Lengte", waarde: "7,5 m" },
        { label: "Personen", waarde: "10" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Vaartijd op een lading", waarde: "volgt" },
        { label: "Aan boord", waarde: aanBoord },
        { label: "Ligplaats", waarde: "volgt" },
      ],
    },
    {
      naam: "Prinsen",
      beeld: foto.sloepPrinsen,
      specs: [
        { label: "Lengte", waarde: "8,5 m" },
        { label: "Personen", waarde: "12" },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Vaartijd op een lading", waarde: "volgt" },
        { label: "Aan boord", waarde: aanBoord },
        { label: "Ligplaats", waarde: "volgt" },
      ],
    },
  ] satisfies Sloep[],
};
