import { modellen, producten, reservering, sloepen, vergelijking, voorbeeldovereenkomst, type ModelId, type ProductId } from "./config";
import { bedrag } from "@/lib/utils";

const modelIds: ModelId[] = ["prinsen", "amstel"];
const productIds: ProductId[] = ["duo", "solo"];

export const prijzen = {
  kop: "Duo of Solo.",
  intro:
    "Twee producten, twee modellen. Per maand, exclusief btw, indicatief. Twaalf maanden, alles inbegrepen.",

  tabel: {
    rijen: [
      { label: "Wie aan boord", sleutel: "aanBoord" },
      { label: "Beschikbaarheid", sleutel: "beschikbaarheid" },
      { label: "Huisstijl", sleutel: "huisstijl" },
      { label: "Garantie", sleutel: "garantie" },
      { label: "Looptijd", sleutel: "looptijd" },
      { label: "Voorkeursrecht", sleutel: "voorkeursrecht" },
    ] as const,
    kolommen: productIds.map((id) => ({
      id,
      naam: producten[id].naam,
      kort: producten[id].kort,
      prijzen: modelIds.map((m) => ({
        model: modellen[m].naam,
        lengte: `${modellen[m].lengte} m, tot ${modellen[m].personen} personen`,
        bedrag: bedrag(producten[id].prijs[m]),
        perBedrijf: id === "duo",
      })),
      waarden: producten[id],
    })),
    onder: `${reservering.founding} ${reservering.duoPartnerActie}`,
  },

  beschikbaarheid: {
    boven: "Beschikbaarheid",
    kop: "Welke sloepen nog vrij zijn.",
    intro: `We bestellen per volle sloep. Een Duo-helft reserveer je alleen, een Solo reserveer je in één keer. Oplevering ${reservering.oplevering}.`,
    kolommen: ["Sloep", "Duo, helft 1", "Duo, helft 2", "Solo"],
    sloepen: sloepen.map((s) => ({
      naam: s.naam,
      model: `${modellen[s.model].lengte} m`,
      helften: s.helften,
      solo: s.helften.every((h) => h === "vrij") ? "vrij" : "niet meer mogelijk",
    })),
    status: { vrij: "vrij", gereserveerd: "gereserveerd" },
    onder: "Bijgewerkt bij elke reservering. Wil je zeker zijn van een helft of een Solo, reserveer dan vandaag.",
  },

  perVaart: {
    boven: "Kosten per vaart",
    kop: "Wat een vaart kost, afhankelijk van hoe vaak je gaat.",
    intro: "Maandbedrag gedeeld door het aantal vaarten per maand. Exclusief btw, indicatief.",
    vaarten: vergelijking.vaartenPerMaand,
    kolommen: [vergelijking.lease.naam, `${producten.solo.naam} bij Sloepmaten`, `${producten.duo.naam} bij Sloepmaten`],
    modellen: modelIds.map((m) => ({
      naam: modellen[m].naam,
      lengte: `${modellen[m].lengte} m`,
      maand: [vergelijking.lease.prijs[m], producten.solo.prijs[m], producten.duo.prijs[m]],
    })),
    onder: "Bij Duo deel je de sloep, dus je vaart op je eigen dagdelen. Bij Solo en bij leasen elders is de sloep elke dag van jou, ook als hij stilligt.",
  },

  overeenkomst: {
    kop: "Lees de overeenkomst voordat je tekent.",
    tekst: "De voorbeeldovereenkomst staat hier als download, in gewone taal. Geen kleine lettertjes.",
    bestand: voorbeeldovereenkomst,
  },
};
