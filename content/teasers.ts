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
    kop: "Een sloep voor je bedrijf. Voor een deel van de prijs.",
    tekst: "Je bedrijf wordt deel-eigenaar. Voor je mensen, je klanten en je naam. Geen investering, geen lease van een hele sloep die stilligt, geen beheer.",
    punten: ["Vrijdagmiddag op het water met je team", "Klanten ontvangen aan een gedekte tafel", "Tot 40 personen, schipper bij te boeken"],
    link: "Alles voor bedrijven",
    href: "/bedrijven",
  },
  werkt: {
    label: "Zo werkt het",
    kop: "Kies je sloep, reserveer, stap aan boord.",
    tekst: "Vaarpunten naar je aandeel, plus elk vrij dagdeel zonder punten. Ruilen kan altijd.",
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
