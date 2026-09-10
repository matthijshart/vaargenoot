import { aandelen } from "./aandeel";
import { site } from "./site";
import { sloepen } from "./sloepen";

const amstel = sloepen.lijst[0];
const spec = (label: string) => amstel.specs.find((s) => s.label === label)?.waarde ?? "";

/**
 * De hero: eerst de sloep, dan het naamplaatje. Eén kop die zegt wat
 * Sloepmaten is, één regel die zegt wat je ervoor doet (niets) en de knop.
 */
export const hero = {
  boven: "Vaarseizoen 2027. Zes nieuwe sloepen. Vol is vol.",
  kop: "Word deel-eigenaar van een sloep.",
  sub: "Een hoogwaardige elektrische sloep in de grachten, met maximaal vier sloepmaten. Alles voor je geregeld, voor één vast bedrag per maand. Jij hoeft alleen te varen.",
  primair: site.cta,
  secundair: "Bekijk de prijzen",
  secundairHref: "/prijzen",
  toelichting: `Vanaf ${aandelen[0].prijs} euro per maand voor een kwart aandeel, indicatief. Aanmelden is vrijblijvend.`,
  /** Onderschrift in de foto. De hero toont de Amstel. */
  onderschrift: `${amstel.naam}, ${spec("Lengte").replace(/ m$/, " meter")}, elektrisch, ${spec("Personen")} personen`,
  /** Vier feiten onder de kop, in één oogopslag. */
  feiten: [
    { label: "Aandeel", waarde: "Een kwart, een half of de hele sloep" },
    { label: "Varen", waarde: "Wanneer je wilt. Reserveren in de app, ook op de dag zelf" },
    {
      label: "Inbegrepen",
      waarde: "Ligplaats met laadpunt, stroom, onderhoud, verzekering, schoonmaak, winterklaar en vignet",
    },
    { label: "Schipper", waarde: "Bij te boeken" },
  ],
};
