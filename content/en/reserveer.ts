import type { reserveer as reserveerNl } from "../reserveer";
import { bedrag } from "@/lib/utils";
import { modellen, producten, reservering } from "./config";

export const reserveer: typeof reserveerNl = {
  meta: {
    title: "Reserve your boat",
    description: "Reserve a Duo half or a Solo for 2027. Agreement within two working days, sign, delivery April 2027.",
  },
  kop: "Reserve your boat.",
  intro: `Four steps, and in ${reservering.oplevering} it's ready for you.`,
  stappen: [
    { kop: "Reserve", tekst: "Fill in the form. You choose the model and Duo or Solo; a duo partner is optional." },
    {
      kop: `Agreement within ${reservering.overeenkomstBinnen}`,
      tekst: "You get the agreement by email, in plain language. Questions? Then we call.",
    },
    { kop: "Sign", tekst: "You sign, we confirm your boat and your half. From that moment it's yours." },
    {
      kop: `Delivery ${reservering.oplevering}`,
      tekst: "Clean and charged in the canal ring or at a spot of your choice, in your branding, with the app on your phone. Payment starts at delivery.",
    },
  ],
  founding: reservering.founding,

  formulier: {
    kop: "Your details",
    velden: {
      bedrijf: "Company",
      contactpersoon: "Contact person",
      email: "Email",
      telefoon: "Phone",
      model: "Model",
      product: "Duo or Solo",
      duoPartner: "Duo partner",
      teamgrootte: "Team size",
    },
    modellen: [
      { waarde: "", label: "Choose a model" },
      ...(["prinsen", "amstel"] as const).map((m) => ({
        waarde: m,
        label: `${modellen[m].naam}, ${modellen[m].lengte} m, up to ${modellen[m].personen} people`,
      })),
    ],
    producten: [
      { waarde: "", label: "Choose Duo or Solo" },
      ...(["duo", "solo"] as const).map((p) => ({
        waarde: p,
        label: `${producten[p].naam}: ${producten[p].kort}`,
      })),
    ],
    prijsregel: (model, product) =>
      model && product
        ? `${bedrag(producten[product].prijs[model], "en")} a month${product === "duo" ? " per company" : ""}, excl. VAT, indicative.`
        : "",
    duoPartnerHulp: "Already have a company to share with? Fill in the name. Then you both sail the first month for free.",
    teamgrootteHulp: "How many people usually come along?",
    knop: "Reserve",
    bezig: "One moment",
    klaar: "Reserved.",
    bevestiging: `You'll hear from us within ${reservering.overeenkomstBinnen}, with the agreement attached.`,
    onder: "A reservation is only binding once the agreement is signed. We use your details for this reservation only.",
    privacy: { label: "Privacy", href: "/en/privacy" },
  },
};
