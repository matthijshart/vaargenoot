import type { proefvaren as proefvarenNl } from "../proefvaren";
import { proefvaren as p } from "./config";

export const proefvaren: typeof proefvarenNl = {
  meta: {
    title: "Come for a trial trip",
    description: "An hour on the water with the founder, with your team. No obligation. Then you decide, or you reserve on the spot.",
  },
  kop: "Come for a trial trip.",
  intro: `An hour on the water with the founder, with your team. No obligation. ${p.prijs}`,
  wat: [
    "You sail yourself, we explain how the boat works.",
    "You see the table, the fridge, the sun deck and the jetty where it will be moored.",
    "We go through the agreement, in plain language.",
    "Then you decide. Or you reserve on the spot.",
  ],
  formulier: {
    kop: "When suits you?",
    velden: {
      bedrijf: "Company",
      naam: "Name",
      email: "Email",
      telefoon: "Phone",
      teamgrootte: "Team size",
      voorkeursdag: "Preferred day",
    },
    voorkeursdagHulp: "For example: Thursday afternoon, or a date.",
    knop: "Request a trial trip",
    bezig: "One moment",
    klaar: "Requested.",
    bevestiging: "We'll call or email you to set a time.",
    onder: "We only use your details to plan the trial trip.",
    privacy: { label: "Privacy", href: "/en/privacy" },
  },
};
