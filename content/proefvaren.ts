import { proefvaren as p } from "./config";

export const proefvaren = {
  meta: {
    title: "Kom proefvaren",
    description: "Een uur mee het water op met de oprichter, met je team. Vrijblijvend. Daarna beslis je, of je reserveert ter plekke.",
  },
  kop: "Kom proefvaren.",
  intro: `Een uur mee het water op met de oprichter, met je team. Vrijblijvend. ${p.prijs}`,
  wat: [
    "Je vaart zelf, wij leggen uit hoe de sloep werkt.",
    "Je ziet de tafel, de koelkast, het ligdek en de steiger waar hij komt te liggen.",
    "We nemen de overeenkomst door, in gewone taal.",
    "Daarna beslis je. Of je reserveert ter plekke.",
  ],
  formulier: {
    kop: "Wanneer komt het uit?",
    velden: {
      bedrijf: "Bedrijf",
      naam: "Naam",
      email: "E-mail",
      telefoon: "Telefoon",
      teamgrootte: "Teamgrootte",
      voorkeursdag: "Voorkeursdag",
    },
    voorkeursdagHulp: "Bijvoorbeeld: donderdagmiddag, of een datum.",
    knop: "Vraag een proefvaart aan",
    bezig: "Even geduld",
    klaar: "Aangevraagd.",
    bevestiging: "We bellen of mailen je om een moment te prikken.",
    onder: "We gebruiken je gegevens alleen om de proefvaart te plannen.",
    privacy: { label: "Privacy", href: "/privacy" },
  },
};
