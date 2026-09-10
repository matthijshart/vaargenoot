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
    tekst: "Voor je mensen en je klantrelaties. Zonder aanschaf, zonder beheer, met schipper als je wilt.",
    link: "Lees meer over bedrijven",
    href: "/bedrijven",
  },
  werkt: {
    label: "Zo werkt het",
    kop: "Kies je sloep, reserveer, stap aan boord.",
    tekst: "Je ziet meteen wat vrij is. Reserveren en ruilen doe je in de app, ook op de dag zelf.",
    link: "Zo werkt het",
    href: "/zo-werkt-het",
  },
  vragen: {
    label: "Vragen",
    kop: "Word ik echt deel-eigenaar?",
    tekst: "Ja. Een vast aandeel in een specifieke sloep, met maximaal drie andere sloepmaten. De inrichting staat in de overeenkomst, in gewone taal.",
    link: "Alle vragen",
    href: "/vragen",
  },
};
