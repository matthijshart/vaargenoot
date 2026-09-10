import { aandelen } from "./aandeel";
import { foto } from "./foto";
import { site } from "./site";

/**
 * Voor bedrijven, de verkooppagina. Volgorde: wat het is en wat het kost,
 * wat het oplevert voor je mensen, je klanten en je naam, de eerlijke
 * vergelijking met kopen en leasen, het aanbod met de prijs, en de vragen
 * die een bedrijf stelt voordat het tekent.
 */
export const bedrijven = {
  label: "Voor bedrijven",
  kop: "Een sloep voor je bedrijf. Voor een deel van de prijs.",
  intro: `Je bedrijf wordt deel-eigenaar van een hoogwaardige elektrische sloep in de grachten. Geen investering, geen lease van een hele sloep die stilligt, geen beheer. Eén vast bedrag per maand, vanaf ${aandelen[0].prijs} euro, indicatief.`,
  cta: "Aanmelden voor je bedrijf",
  kennismaking: "Plan een kennismaking",
  kennismakingHref: "#kennismaking",
  onderKnop: `Zes nieuwe sloepen in ${site.seizoen}. Vol is vol. Aanmelden is vrijblijvend.`,

  voordelenLabel: "Wat het je oplevert",
  voordelenKop: "Voor je mensen, je klanten en je naam.",
  punten: [
    {
      kop: "Voor je mensen",
      tekst: "Een vrijdagmiddag op het water, een teamdag, een zomerborrel. Daar blijven mensen voor.",
    },
    {
      kop: "Voor je klanten",
      tekst: "Amsterdam vanaf het water, aan een gedekte tafel. Dat vergeten ze niet.",
    },
    {
      kop: "Voor je naam",
      tekst: "Een eigen sloep in de grachten zegt iets over je bedrijf. Rustig, ruim, elektrisch.",
    },
    {
      kop: "Tot 40 personen",
      tekst: "Je hele team aan boord, aan een lange tafel. Green Egg, koelkast en geluid staan klaar.",
    },
    {
      kop: "Iedereen een glas",
      tekst: "Boek de schipper bij en zit zelf aan tafel. Jij bent gastheer, wij varen.",
    },
    {
      kop: "Het hele jaar",
      tekst: "In de zomer een lange avond op het water, in december het Light Festival met je klanten.",
    },
  ],

  aanbodLabel: "Het aanbod",
  aanbodKop: "Eén vast bedrag per maand. Verder niets.",
  aanbodIntro: "Schoon en opgeladen aan de steiger. Wij regelen alles, jij stuurt de uitnodiging.",
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
  ctaTekst: "Kies in het formulier voor een aandeel voor je bedrijf. Je hoort persoonlijk van ons.",

  vragenLabel: "Vragen van bedrijven",
  vragenKop: "Wat je wilt weten voordat je tekent.",
  vragen: [
    {
      vraag: "Staat het aandeel op naam van mijn bedrijf?",
      antwoord:
        "Ja. Je bedrijf wordt deel-eigenaar en de overeenkomst staat op naam van je bedrijf. Hoe dat juridisch precies zit, lees je rustig in de overeenkomst voordat je tekent.",
    },
    {
      vraag: "Wat als we vaker willen varen dan ons deel?",
      antwoord:
        "Is een dagdeel vrij, dan boek je het zonder punten, ook op de dag zelf. Wil je zekerheid op elk moment, dan neem je een half of de hele sloep.",
    },
    {
      vraag: "Kunnen we een schipper regelen?",
      antwoord: "Ja. Je boekt een schipper bij je reservering. Dan zit iedereen aan tafel en drinkt iedereen mee.",
    },
    {
      vraag: "Wanneer kunnen we varen?",
      antwoord: `In ${site.seizoen}. Zes nieuwe sloepen, vol is vol. Meld je bedrijf nu aan of plan een kennismaking, dan hoor je persoonlijk van ons.`,
    },
  ],

  beeld: foto.grachtBloemen,
};
