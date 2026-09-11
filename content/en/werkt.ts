import type { werkt as werktNl } from "../werkt";
import { dagdelen, looptijd, modellen, producten, reservering, samen, seizoen } from "./config";

export const werkt: typeof werktNl = {
  meta: {
    title: "How it works",
    description: "From choosing to casting off in seven steps, and all the rules in full: slots, season, Duo, Solo, right of first refusal and term.",
  },
  kop: "How it works.",
  intro: "From choosing to casting off in seven steps. Then all the rules, in full.",
  stappen: [
    { kop: "Choose model and product", tekst: `${modellen.prinsen.naam} or ${modellen.amstel.naam}. ${producten.duo.naam} or ${producten.solo.naam}.` },
    { kop: "Come for a trial trip with your team", tekst: "An hour on the water. Then you know." },
    { kop: "Sign", tekst: `You get the agreement within ${reservering.overeenkomstBinnen}, in plain language. You sign, and the boat is yours.` },
    { kop: "We deliver", tekst: `In ${reservering.oplevering}, in your branding, with the app on your phone.` },
    { kop: "Request in the app", tekst: "Pick a slot, even on the day itself. You see straight away what's free." },
    { kop: "Step aboard", tekst: "The boat is clean and charged, waiting in the canal ring or at a spot of your choice. You sail off." },
    { kop: "We clean and charge", tekst: "After every trip. You don't have to do a thing." },
  ],

  spelregels: {
    boven: "The rules",
    kop: "Everything you need to know, without small print.",
    blokken: [
      {
        kop: "Slots and season",
        regels: [
          ...dagdelen.map((d) => `${d.naam}: ${d.van} to ${d.tot}.`),
          `The season runs from ${seizoen.van} to ${seizoen.tot}.`,
          seizoen.buiten,
        ],
      },
      {
        kop: `${producten.duo.naam}: ${samen.naam.toLowerCase()}`,
        regels: samen.regels,
      },
      {
        kop: `${producten.solo.naam}: always yours`,
        regels: [producten.solo.aanBoord, producten.solo.beschikbaarheid, producten.solo.huisstijl],
      },
      {
        kop: "Right of first refusal and your own duo partner",
        regels: [
          `A ${producten.duo.naam} owner has first right to the other half and can scale up to ${producten.solo.naam} on ${looptijd.start}.`,
          `A ${producten.solo.naam} owner can bring in a partner and go back to ${producten.duo.naam}.`,
          reservering.duoPartnerActie,
          "Nobody has to choose forever right now.",
        ],
      },
      {
        kop: "Term and leaving",
        regels: [`Twelve months from ${looptijd.start}.`, looptijd.uitstappen, reservering.founding],
      },
    ],
  },
};
