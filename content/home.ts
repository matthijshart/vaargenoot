import { garantie, inbegrepen, extra, looptijd, modellen, oprichter, producten, reservering, vergelijking } from "./config";
import { bedrag } from "@/lib/utils";

export const home = {
  hero: {
    kop: "Een sloep voor je bedrijf.\nIn deeleigendom.",
    sub: "Alleen, of met één ander bedrijf. Alles geregeld, één vast bedrag per maand, twaalf maanden.",
  },

  duoSolo: {
    boven: "Duo of Solo",
    kop: "Twee manieren om een sloep te hebben.",
    kolommen: [
      {
        id: "duo",
        naam: producten.duo.naam,
        tekst:
          "Twee bedrijven op één sloep, ieder de helft. Je vraagt hem aan wanneer je wilt, ook op de dag zelf, met de altijd-varen-garantie.",
        vanaf: `Vanaf ${bedrag(producten.duo.prijs.amstel)} per maand per bedrijf`,
        link: "Bekijk Duo",
        href: "/duo-of-solo#duo",
      },
      {
        id: "solo",
        naam: producten.solo.naam,
        tekst: "Eén bedrijf, de hele sloep. Altijd beschikbaar, alleen voor jou, in je volledige huisstijl.",
        vanaf: `Vanaf ${bedrag(producten.solo.prijs.amstel)} per maand`,
        link: "Bekijk Solo",
        href: "/duo-of-solo#solo",
      },
    ],
    onder: "Prijzen exclusief btw, indicatief. Amstel 8 m; de Prinsen van 10 m staat op de prijspagina.",
  },

  garantie: {
    boven: garantie.naam,
    kop: "Je pakt hem altijd.",
    zinnen: garantie.regels,
    link: "Zo werkt Duo in de praktijk",
    href: "/zo-werkt-het",
  },

  inbegrepen: {
    boven: "Alles inbegrepen",
    kop: "Eén bedrag. Verder niets.",
    items: inbegrepen,
    extra: extra.zin,
  },

  leasen: {
    boven: "Leasen of delen",
    kop: "Wat een hele sloep elders kost, en wat hij bij ons kost.",
    intro: `Een ${modellen.prinsen.naam} van ${modellen.prinsen.lengte} meter. Per maand, exclusief btw, indicatief.`,
    kolommen: [
      {
        naam: vergelijking.lease.naam,
        prijs: bedrag(vergelijking.lease.prijs.prinsen),
        prijsKlein: `${modellen.amstel.naam}-formaat ${bedrag(vergelijking.lease.prijs.amstel)}`,
        looptijd: vergelijking.lease.looptijd,
        huisstijl: vergelijking.lease.huisstijl,
        aanBoord: vergelijking.lease.aanBoord,
        wij: false,
      },
      {
        naam: `${producten.solo.naam} bij Sloepmaten`,
        prijs: bedrag(producten.solo.prijs.prinsen),
        prijsKlein: `${modellen.amstel.naam} ${bedrag(producten.solo.prijs.amstel)}`,
        looptijd: `${looptijd.maanden} maanden, opzegtermijn ${looptijd.opzegtermijn}`,
        huisstijl: "Volledige huisstijl inbegrepen",
        aanBoord: "Alleen jouw bedrijf",
        wij: true,
      },
      {
        naam: `${producten.duo.naam} bij Sloepmaten`,
        prijs: bedrag(producten.duo.prijs.prinsen),
        prijsKlein: `${modellen.amstel.naam} ${bedrag(producten.duo.prijs.amstel)}`,
        looptijd: `${looptijd.maanden} maanden, opzegtermijn ${looptijd.opzegtermijn}`,
        huisstijl: "Beide logo's, je eigen vlag als jij vaart",
        aanBoord: "Jouw bedrijf en één duo-partner",
        wij: true,
      },
    ],
    rijen: ["Per maand", "Looptijd", "Huisstijl", "Aan boord"] as const,
    link: "Alle prijzen en de kosten per vaart",
    href: "/duo-of-solo",
  },

  kopen: {
    boven: "Zo kopen we de sloepen",
    kop: "Per volle sloep, met jouw handtekening erop.",
    stappen: [
      "We bestellen per volle sloep. Duo: twee handtekeningen. Solo: één.",
      `Je tekent een deelnameovereenkomst onder opschortende voorwaarde en betaalt een reserveringsbijdrage van ${reservering.bijdrage}.`,
      `Wordt de sloep niet uiterlijk ${reservering.besteldatum} besteld, dan krijg je die terug.`,
      `Anders is het je eerste maand. De betaling start bij oplevering in ${reservering.oplevering}.`,
    ],
    founding: reservering.founding,
    link: "Bekijk welke sloepen nog vrij zijn",
    href: "/duo-of-solo#beschikbaarheid",
  },

  wie: {
    boven: "Wie zit hierachter",
    kop: "Wij varen hier al jaren.",
    zinnen: [
      `${oprichter.naam} verhuurt sinds ${oprichter.sinds} sloepen in de grachten met ${oprichter.verhuurbedrijf}: ${oprichter.boten} boten, ${oprichter.vaarten} vaarten per jaar.`,
      "Die vloot is het vangnet achter de altijd-varen-garantie.",
      "Sloepmaten is de volgende stap: een sloep die van je bedrijf is.",
    ],
    link: "Over Sloepmaten",
    href: "/over",
  },

  slot: {
    kop: "Een uur op het water zegt meer dan deze pagina.",
    tekst: "Kom met je team proefvaren, of reserveer meteen je sloep.",
  },
};
