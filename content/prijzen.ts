import { btw, modellen, producten, reservering, sloepen, vaarten, voorbeeldovereenkomst, type ModelId, type ProductId } from "./config";
import { bedrag } from "@/lib/utils";

const modelIds: ModelId[] = ["prinsen", "amstel"];
const productIds: ProductId[] = ["duo", "solo"];

export type PrijsRij = { label: string; sleutel: "aanBoord" | "beschikbaarheid" | "huisstijl" | "looptijd" | "voorkeursrecht" };

export const prijzen = {
  meta: {
    title: "Duo of Solo, prijzen",
    description:
      "Duo: twee bedrijven op één sloep, vanaf € 995 per maand per bedrijf. Solo: de hele sloep, vanaf € 1.595 per maand. Exclusief btw, indicatief, alles inbegrepen.",
  },
  kop: "Duo of Solo.",
  intro:
    "Twee producten, twee modellen. Per maand, exclusief btw, indicatief. Twaalf maanden, alles inbegrepen.",

  tabel: {
    rijen: [
      { label: "Wie aan boord", sleutel: "aanBoord" },
      { label: "Beschikbaarheid", sleutel: "beschikbaarheid" },
      { label: "Huisstijl", sleutel: "huisstijl" },
      { label: "Looptijd", sleutel: "looptijd" },
      { label: "Voorkeursrecht", sleutel: "voorkeursrecht" },
    ] as PrijsRij[],
    kolommen: productIds.map((id) => ({
      id,
      naam: producten[id].naam,
      kort: producten[id].kort,
      prijzen: modelIds.map((m) => ({
        model: modellen[m].naam,
        lengte: `${modellen[m].lengte} m, tot ${modellen[m].personen} personen`,
        bedrag: bedrag(producten[id].prijs[m]),
        noot: `per maand${id === "duo" ? " per bedrijf" : ""}, ${btw}`,
      })),
      waarden: producten[id],
    })),
    onder: `${reservering.founding} ${reservering.duoPartnerActie}`,
  },

  beschikbaarheid: {
    boven: "Beschikbaarheid",
    kop: "Welke sloepen nog vrij zijn.",
    intro: `Elke sloep heeft twee helften. Zijn ze allebei vrij, dan kan hij ook als Solo. Oplevering ${reservering.oplevering}.`,
    kolommen: ["Sloep", "Duo, helft 1", "Duo, helft 2", "Solo"],
    sloepen: sloepen.map((s) => {
      const alleVrij = s.helften.every((h) => h === "vrij");
      return {
        naam: s.naam,
        model: `${modellen[s.model].lengte} m`,
        helften: s.helften.map((h) => ({ tekst: h === "vrij" ? "vrij" : "gereserveerd", vrij: h === "vrij" })),
        solo: { tekst: alleVrij ? "vrij" : "niet meer mogelijk", vrij: alleVrij },
      };
    }),
    onder: "Bijgewerkt bij elke reservering. Wil je zeker zijn van een helft of een Solo, reserveer dan vandaag.",
  },

  perVaart: {
    boven: "Kosten per vaart",
    kop: "Wat een vaart kost, afhankelijk van hoe vaak je gaat.",
    intro: "Maandbedrag gedeeld door het aantal vaarten per maand. Exclusief btw, indicatief.",
    vaarten: vaarten.perMaand,
    vaartenKop: "Vaarten per maand",
    kolommen: [`${producten.solo.naam} eigenaar`, `${producten.duo.naam} eigenaar`],
    modellen: modelIds.map((m) => ({
      naam: modellen[m].naam,
      lengte: `${modellen[m].lengte} m`,
      maand: [producten.solo.prijs[m], producten.duo.prijs[m]],
    })),
    onder: "Bij Solo is de sloep elke dag van jou. Bij Duo deel je hem met één ander bedrijf, en betaal je de helft.",
  },

  overeenkomst: {
    kop: "Lees de overeenkomst voordat je tekent.",
    tekst: "De voorbeeldovereenkomst staat hier als download, in gewone taal. Geen kleine lettertjes.",
    download: "Download:",
    bestand: voorbeeldovereenkomst,
  },
};
