import { foto } from "./foto";

/**
 * Voor bedrijven. Een aandeel als vast onderdeel van je bedrijf:
 * voor je mensen, je eigen uitjes en je gasten uit het buitenland.
 */
export const bedrijven = {
  label: "Voor bedrijven",
  kop: "Een sloep voor je bedrijf. Altijd klaar.",
  intro: "Een aandeel op naam van je bedrijf. Altijd een luxe sloep klaar, zonder aanschaf en zonder gedoe.",
  punten: [
    {
      kop: "Voor je mensen",
      tekst: "Een vrijdagmiddag op het water. Daar blijven mensen voor.",
    },
    {
      kop: "Je eigen uitjes",
      tekst: "Teamdag, jubileum, zomerborrel. De sloep ligt klaar.",
    },
    {
      kop: "Gasten uit het buitenland",
      tekst: "Amsterdam vanaf het water. Dat vergeten ze niet.",
    },
    {
      kop: "Met schipper",
      tekst: "Jij bent gastheer, wij varen.",
    },
  ],
  cta: "Plan een proefvaart",
  ctaTekst: "Wil je dit voor je bedrijf? Kies in het formulier voor een aandeel op naam van je bedrijf.",
  beeld: foto.detailTafel,
};
