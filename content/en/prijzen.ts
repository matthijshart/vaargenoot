import type { prijzen as prijzenNl, PrijsRij } from "../prijzen";
import { bedrag } from "@/lib/utils";
import { btw, modellen, producten, reservering, sloepen, vaarten, voorbeeldovereenkomst, type ModelId, type ProductId } from "./config";

const en = (n: number) => bedrag(n, "en");
const modelIds: ModelId[] = ["prinsen", "amstel"];
const productIds: ProductId[] = ["duo", "solo"];

export const prijzen: typeof prijzenNl = {
  meta: {
    title: "Duo or Solo, prices",
    description:
      "Duo: two companies on one boat, from € 995 a month per company. Solo: the whole boat, from € 1,595 a month. Excluding VAT, indicative, everything included.",
  },
  kop: "Duo or Solo.",
  intro: "Two products, two models. Per month, excluding VAT, indicative. Twelve months, everything included.",

  tabel: {
    rijen: [
      { label: "On board", sleutel: "aanBoord" },
      { label: "Availability", sleutel: "beschikbaarheid" },
      { label: "Branding", sleutel: "huisstijl" },
      { label: "Term", sleutel: "looptijd" },
      { label: "Right of first refusal", sleutel: "voorkeursrecht" },
    ] as PrijsRij[],
    kolommen: productIds.map((id) => ({
      id,
      naam: producten[id].naam,
      kort: producten[id].kort,
      prijzen: modelIds.map((m) => ({
        model: modellen[m].naam,
        lengte: `${modellen[m].lengte} m, up to ${modellen[m].personen} people`,
        bedrag: en(producten[id].prijs[m]),
        noot: `a month${id === "duo" ? " per company" : ""}, ${btw}`,
      })),
      waarden: producten[id],
    })),
    onder: `${reservering.founding} ${reservering.duoPartnerActie}`,
  },

  beschikbaarheid: {
    boven: "Availability",
    kop: "Which boats are still free.",
    intro: `Every boat has two halves. If both are free, it can also go as a Solo. Delivery ${reservering.oplevering}.`,
    kolommen: ["Boat", "Duo, half 1", "Duo, half 2", "Solo"],
    sloepen: sloepen.map((s) => {
      const alleVrij = s.helften.every((h) => h === "vrij");
      return {
        naam: s.naam,
        model: `${modellen[s.model].lengte} m`,
        helften: s.helften.map((h) => ({ tekst: h === "vrij" ? "free" : "reserved", vrij: h === "vrij" })),
        solo: { tekst: alleVrij ? "free" : "no longer possible", vrij: alleVrij },
      };
    }),
    onder: "Updated with every reservation. If you want to be sure of a half or a Solo, reserve today.",
  },

  perVaart: {
    boven: "Cost per trip",
    kop: "What a trip costs, depending on how often you go.",
    intro: "Monthly amount divided by the number of trips a month. Excluding VAT, indicative.",
    vaarten: vaarten.perMaand,
    vaartenKop: "Trips a month",
    kolommen: [`${producten.solo.naam} owner`, `${producten.duo.naam} owner`],
    modellen: modelIds.map((m) => ({
      naam: modellen[m].naam,
      lengte: `${modellen[m].lengte} m`,
      maand: [producten.solo.prijs[m], producten.duo.prijs[m]],
    })),
    onder: "With Solo the boat is yours every day. With Duo you share it with one other company, and you pay half.",
  },

  overeenkomst: {
    kop: "Read the agreement before you sign.",
    tekst: "The sample agreement is here as a download, in plain language. No small print.",
    download: "Download:",
    bestand: voorbeeldovereenkomst,
  },
};
