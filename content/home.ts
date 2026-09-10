import { inbegrepen, extra, looptijd, modellen, producten, samen, vergelijking } from "./config";
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
        tekst: "Twee bedrijven op één sloep, ieder de helft. Je vraagt een dagdeel aan wanneer je wilt, ook op de dag zelf.",
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

  samen: {
    boven: samen.naam,
    kop: "Delen zonder gedoe.",
    zinnen: samen.regels,
    link: "Zo werkt Duo in de praktijk",
    href: "/zo-werkt-het",
  },

  stappen: {
    boven: "Zo makkelijk is het",
    kop: "Kiezen, tekenen, varen.",
    lijst: [
      { kop: "Kiezen", tekst: "Prinsen of Amstel, Duo of Solo. Kom proefvaren als je twijfelt." },
      { kop: "Tekenen", tekst: "Eén overeenkomst in gewone taal. Daarna is de sloep van jullie." },
      { kop: "Varen", tekst: "Vraag een dagdeel aan in de app en stap aan boord. Wij doen de rest." },
    ],
    link: "Zo werkt het",
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
        looptijd: `${looptijd.maanden} maanden`,
        huisstijl: "Volledige huisstijl inbegrepen",
        aanBoord: "Alleen jouw bedrijf",
        wij: true,
      },
      {
        naam: `${producten.duo.naam} bij Sloepmaten`,
        prijs: bedrag(producten.duo.prijs.prinsen),
        prijsKlein: `${modellen.amstel.naam} ${bedrag(producten.duo.prijs.amstel)}`,
        looptijd: `${looptijd.maanden} maanden`,
        huisstijl: "Beide logo's, je eigen vlag als jij vaart",
        aanBoord: "Jouw bedrijf en één duo-partner",
        wij: true,
      },
    ],
    rijen: ["Per maand", "Looptijd", "Huisstijl", "Aan boord"] as const,
    link: "Alle prijzen en de kosten per vaart",
    href: "/duo-of-solo",
  },

  slot: {
    kop: "Een uur op het water zegt meer dan deze pagina.",
    tekst: "Kom met je team proefvaren, of reserveer meteen je sloep.",
  },
};
