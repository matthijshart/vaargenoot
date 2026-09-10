import { oprichter, site } from "./config";

export const over = {
  kop: "Over Sloepmaten.",
  intro: "Een verhuurder die al jaren in de grachten vaart, en een simpel idee: een sloep die van je bedrijf is.",
  blokken: [
    {
      kop: "De oprichter",
      alinea: `${oprichter.naam} verhuurt sinds ${oprichter.sinds} sloepen in ${site.plaats} met ${oprichter.verhuurbedrijf}: ${oprichter.boten} boten, ${oprichter.vaarten} vaarten per jaar. Die vloot ligt aan dezelfde steiger als de sloepen van Sloepmaten en is het vangnet achter de altijd-varen-garantie.`,
    },
    {
      kop: "Waarom Sloepmaten",
      alinea:
        "Een sloep ligt het grootste deel van het jaar stil, ook een geleasde. Tegelijk gaan de grachten elektrisch en wordt een eigen plek op het water schaars. Deeleigendom lost allebei op: twee bedrijven, één sloep, en toch altijd varen.",
    },
    {
      kop: "Wat we niet doen",
      alinea: "Geen particulieren, geen puntensystemen, geen contracten van vijf jaar. Wel: prijzen, spelregels en looptijd gewoon op de site.",
    },
  ],
};

export const privacy = {
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
