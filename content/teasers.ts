import { aandelen } from "./aandeel";

/** Korte verwijzingen op de voorpagina naar de onderliggende pagina's. */
export const teasers = {
  prijs: {
    label: "Jouw aandeel",
    kop: `Vanaf ${aandelen[0].prijs} euro per maand. Alles inbegrepen.`,
    tekst: "Een kwart, een half of de hele sloep. Maximaal vier sloepmaten per sloep. Prijzen indicatief.",
    link: "Bekijk de aandelen",
    href: "/prijzen",
  },
  bedrijven: {
    label: "Voor bedrijven",
    kop: "Ook voor je bedrijf.",
    tekst: "Altijd een sloep klaar voor je mensen, je uitjes en je gasten uit het buitenland. Met schipper als je wilt.",
    link: "Lees meer over bedrijven",
    href: "/bedrijven",
  },
  werkt: {
    label: "Zo werkt het",
    kop: "Kies je sloep, reserveer, stap aan boord.",
    tekst: "Vaarpunten naar je aandeel, weekenden begrensd, ruilen kan altijd.",
    link: "Zo werkt het",
    href: "/zo-werkt-het",
  },
};
