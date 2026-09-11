import { oprichter, site } from "./config";

export const over = {
  meta: {
    title: "Over",
    description: "Een simpel idee: een sloep die van je bedrijf is. Alleen, of met één ander bedrijf. Waarom Sloepmaten, en wat we niet doen.",
  },
  kop: "Over Sloepmaten.",
  intro: "Een simpel idee: een sloep in de Amsterdamse grachten die van je bedrijf is. Alleen, of met één ander bedrijf.",
  blokken: [
    {
      kop: "De oprichter",
      alinea: oprichter,
    },
    {
      kop: "Waarom Sloepmaten",
      alinea:
        "Een eigen sloep ligt het grootste deel van het jaar stil. Tegelijk gaan de grachten elektrisch en wordt een eigen plek op het water schaars. Deeleigendom lost allebei op: twee bedrijven, één sloep, of één bedrijf dat hem helemaal heeft.",
    },
    {
      kop: "Wat we niet doen",
      alinea: "Geen particulieren, geen puntensystemen, geen contracten van vijf jaar. Wel: prijzen, spelregels en looptijd gewoon op de site.",
    },
  ],
};

export const privacy = {
  meta: {
    title: "Privacy",
    description: "Wat Sloepmaten doet met de gegevens uit het reserverings- en proefvaartformulier. Geen cookies, geen tracking.",
  },
  kop: "Privacy.",
  intro: "Kort en in gewone taal. We tracken niet, dus er is geen cookiebanner.",
  blokken: [
    {
      kop: "Wat we verzamelen",
      tekst:
        "Alleen wat je zelf invult in het reserverings- of proefvaartformulier: bedrijf, naam, e-mailadres, telefoonnummer en je keuzes. Geen cookies, geen analytics, geen pixels.",
    },
    {
      kop: "Waarvoor",
      tekst: "Om contact met je op te nemen over je reservering of proefvaart, en om de overeenkomst op te stellen. Nergens anders voor.",
    },
    {
      kop: "Waar het staat",
      tekst: `Je bericht komt per e-mail bij ons binnen en staat in onze mailbox en in de logbestanden van de website. We bewaren het zolang het nodig is voor je reservering of proefvaart, en daarna maximaal ${"[INVULLEN: bewaartermijn]"}.`,
    },
    {
      kop: "Je rechten",
      tekst: `Je mag altijd vragen wat we van je hebben, het laten aanpassen of laten verwijderen. Mail naar ${site.email}.`,
    },
    {
      kop: "Wie",
      tekst: `${site.naam}, ${site.plaats}, KvK ${site.kvk}.`,
    },
  ],
};
