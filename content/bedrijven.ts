import { foto } from "./foto";

/**
 * Voor bedrijven. Een aandeel als vast onderdeel van je bedrijf:
 * voor je mensen en je klantrelaties. Eerst wat het oplevert,
 * dan het aanbod, dan de prijs en de knop.
 */
export const bedrijven = {
  label: "Voor bedrijven",
  kop: "Een sloep voor je bedrijf. Altijd klaar.",
  intro:
    "Je bedrijf wordt deel-eigenaar van een sloep in de grachten. Zonder aanschaf, zonder beheer, voor één vast bedrag per maand. Voor je mensen en je klantrelaties.",

  voordelenLabel: "Wat het je oplevert",
  voordelenKop: "Meer dan een boot.",
  punten: [
    {
      kop: "Voor je mensen",
      tekst: "Een vrijdagmiddag op het water, een teamdag, een zomerborrel. Daar blijven mensen voor.",
    },
    {
      kop: "Klantrelaties",
      tekst: "Amsterdam vanaf het water. Dat vergeten ze niet.",
    },
    {
      kop: "Altijd klaar",
      tekst: "Schoon en opgeladen aan de steiger. Jij stuurt alleen de uitnodiging.",
    },
    {
      kop: "Tot 40 personen",
      tekst: "Je hele team aan boord, aan een lange tafel. Green Egg, koelkast en geluid staan klaar.",
    },
    {
      kop: "Met schipper",
      tekst: "Iedereen een glas? Boek de schipper bij en zit zelf aan tafel. Jij bent gastheer, wij varen.",
    },
    {
      kop: "Het hele jaar",
      tekst: "In de zomer een lange avond op het water, in december het Light Festival met je klanten.",
    },
  ],

  aanbodLabel: "Het aanbod",
  aanbodKop: "Eén vast bedrag per maand. Verder niets.",
  aanbodIntro:
    "Geen aanschaf, geen lease van een hele sloep die de meeste dagen stilligt. Je betaalt alleen je deel. Wij regelen alles, jij nodigt uit.",
  feiten: [
    { label: "Aandeel", waarde: "Een kwart, een half of de hele sloep, op naam van je bedrijf" },
    { label: "Varen", waarde: "Je vaste deel via vaarpunten, plus elk vrij dagdeel zonder punten" },
    {
      label: "Inbegrepen",
      waarde: "Ligplaats met laadpunt, stroom, onderhoud, verzekering, schoonmaak, winterklaar en vignet",
    },
    { label: "Schipper", waarde: "Bij te boeken. Dan drinkt iedereen mee" },
  ],
  perMaand: "per maand, indicatief",
  opAanvraag: "Op aanvraag",
  prijsLink: "Bekijk de aandelen",
  prijsHref: "/prijzen",

  cta: "Aanmelden voor je bedrijf",
  ctaTekst: "Kies in het formulier voor een aandeel voor je bedrijf. Je hoort persoonlijk van ons.",
  beeld: foto.grachtBloemen,
};
