import { modellen, producten, reservering } from "./config";
import { bedrag } from "@/lib/utils";

export const reserveer = {
  kop: "Reserveer je sloep.",
  intro: "Vier stappen, en in april 2027 ligt hij voor je klaar.",
  stappen: [
    { kop: "Reserveren", tekst: "Vul het formulier in. Je kiest het model en Duo of Solo; een duo-partner is optioneel." },
    {
      kop: `Overeenkomst binnen ${reservering.overeenkomstBinnen}`,
      tekst: `Je krijgt de deelnameovereenkomst onder opschortende voorwaarde. Na tekenen betaal je een reserveringsbijdrage van ${reservering.bijdrage}.`,
    },
    {
      kop: "Sloep vol, dan bestellen",
      tekst: `Duo: twee handtekeningen, Solo: één. Wordt de sloep niet uiterlijk ${reservering.besteldatum} besteld, dan krijg je je bijdrage terug.`,
    },
    {
      kop: `Oplevering ${reservering.oplevering}`,
      tekst: "Je bijdrage is je eerste maand. De betaling start bij oplevering, in je huisstijl, met de app op je telefoon.",
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
  },
};
