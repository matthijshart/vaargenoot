import { modellen, producten, reservering } from "./config";
import { bedrag } from "@/lib/utils";

export const reserveer = {
  meta: {
    title: "Reserveer je sloep",
    description: "Reserveer een Duo-helft of een Solo voor 2027. Overeenkomst binnen twee werkdagen, tekenen, oplevering april 2027.",
  },
  kop: "Reserveer je sloep.",
  intro: `Vier stappen, en in ${reservering.oplevering} ligt hij voor je klaar.`,
  stappen: [
    { kop: "Reserveren", tekst: "Vul het formulier in. Je kiest het model en Duo of Solo; een duo-partner is optioneel." },
    {
      kop: `Overeenkomst binnen ${reservering.overeenkomstBinnen}`,
      tekst: "Je krijgt de overeenkomst per e-mail, in gewone taal. Vragen? Dan bellen we.",
    },
    { kop: "Tekenen", tekst: "Je tekent, wij bevestigen je sloep en je helft. Vanaf dat moment is hij van jullie." },
    {
      kop: `Oplevering ${reservering.oplevering}`,
      tekst: "Schoon en opgeladen klaar in de grachtengordel of op een plek naar keuze, in je huisstijl, met de app op je telefoon. De betaling start bij oplevering.",
    },
  ],
  founding: reservering.founding,

  formulier: {
    kop: "Je gegevens",
    velden: {
      bedrijf: "Bedrijf",
      contactpersoon: "Contactpersoon",
      email: "E-mail",
      telefoon: "Telefoon",
      model: "Model",
      product: "Duo of Solo",
      duoPartner: "Duo-partner",
      teamgrootte: "Teamgrootte",
    },
    modellen: [
      { waarde: "", label: "Kies een model" },
      ...(["prinsen", "amstel"] as const).map((m) => ({
        waarde: m,
        label: `${modellen[m].naam}, ${modellen[m].lengte} m, tot ${modellen[m].personen} personen`,
      })),
    ],
    producten: [
      { waarde: "", label: "Kies Duo of Solo" },
      ...(["duo", "solo"] as const).map((p) => ({
        waarde: p,
        label: `${producten[p].naam}: ${producten[p].kort}`,
      })),
    ],
    prijsregel: (model: "prinsen" | "amstel" | "", product: "duo" | "solo" | "") =>
      model && product
        ? `${bedrag(producten[product].prijs[model])} per maand${product === "duo" ? " per bedrijf" : ""}, excl. btw, indicatief.`
        : "",
    duoPartnerHulp: "Heb je zelf een bedrijf om mee te delen? Vul de naam in. Dan varen jullie allebei de eerste maand gratis.",
    teamgrootteHulp: "Hoeveel mensen gaan er meestal mee?",
    knop: "Reserveer",
    bezig: "Even geduld",
    klaar: "Gereserveerd.",
    bevestiging: `Je hoort binnen ${reservering.overeenkomstBinnen} van ons, met de overeenkomst erbij.`,
    onder: "Reserveren is pas bindend na het tekenen van de overeenkomst. We gebruiken je gegevens alleen voor deze reservering.",
    privacy: { label: "Privacy", href: "/privacy" },
  },
};
