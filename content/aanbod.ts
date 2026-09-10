import { garantie, inbegrepen, looptijd, modellen, producten, reservering, site, type ModelId } from "./config";
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
  prijsnoot: "Exclusief btw, indicatief. Twaalf maanden vanaf 1 april, opzegtermijn " + looptijd.opzegtermijn + ".",
  inbegrepen: inbegrepen.join(", ") + ". Schipper en catering regel je erbij.",
  garantie: { kop: garantie.naam, regels: garantie.regels },
  kopen: {
    kop: "Zo kopen we de sloepen",
    regels: [
      "Per volle sloep. Duo: twee handtekeningen. Solo: één.",
      `Deelnameovereenkomst onder opschortende voorwaarde, reserveringsbijdrage van ${reservering.bijdrage}.`,
      `Niet besteld uiterlijk ${reservering.besteldatum}: bijdrage terug. Anders eerste maand, betaling vanaf oplevering in ${reservering.oplevering}.`,
      reservering.founding,
    ],
  },
  contact: [site.naam, site.plaats, site.email, site.telefoon, site.domein.replace("https://", "")],
  knop: "Print of bewaar als pdf",
};
