import { inbegrepen, looptijd, modellen, producten, reservering, samen, site, type ModelId } from "./config";
import { bedrag } from "@/lib/utils";

const ids: ModelId[] = ["prinsen", "amstel"];

/** Printvriendelijke samenvatting op één A4. */
export const aanbod = {
  kop: "Een sloep voor je bedrijf. In deeleigendom.",
  sub: "Alleen, of met één ander bedrijf. Alles geregeld, één vast bedrag per maand, twaalf maanden.",
  producten: (["duo", "solo"] as const).map((p) => ({
    naam: producten[p].naam,
    kort: producten[p].kort,
    prijzen: ids.map((m) => `${modellen[m].naam} ${modellen[m].lengte} m: ${bedrag(producten[p].prijs[m])} per maand${p === "duo" ? " per bedrijf" : ""}`),
    punten: [producten[p].aanBoord, producten[p].beschikbaarheid, producten[p].huisstijl, producten[p].voorkeursrecht],
  })),
  prijsnoot: `Exclusief btw, indicatief. Twaalf maanden vanaf ${looptijd.start}. ${reservering.founding}`,
  inbegrepen: inbegrepen.join(", ") + ". " + site.ligplaats + " Schipper en catering regel je erbij.",
  samen: { kop: `${producten.duo.naam}: ${samen.naam.toLowerCase()}`, regels: samen.regels },
  verder: {
    kop: "Zo gaat het verder",
    regels: [
      `Reserveer op de site of ter plekke. Overeenkomst binnen ${reservering.overeenkomstBinnen}, in gewone taal.`,
      `Je tekent, wij bevestigen je sloep. Oplevering ${reservering.oplevering}, in je huisstijl.`,
      looptijd.uitstappen,
      reservering.duoPartnerActie,
    ],
  },
  contact: [site.naam, site.plaats, site.email, site.telefoon, site.domein.replace("https://", "")],
  knop: "Print of bewaar als pdf",
};
