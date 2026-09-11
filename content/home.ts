import { inbegrepen, extra, looptijd, modellen, producten, samen, site, vergelijking } from "./config";
import { bedrag } from "@/lib/utils";

export const home = {
  hero: {
    boven: "Amsterdamse grachten",
    kop: "Een sloep voor je bedrijf.\nIn *deeleigendom*.",
    sub: "Iedereen bij jou op kantoor pakt de sloep via de app. Alleen, of samen met één ander bedrijf. Wij regelen de rest.",
    punten: ["Eén vast bedrag per maand", "Alles inbegrepen", "Twaalf maanden"],
  },

  waarom: {
    boven: "Waarom bedrijven dit doen",
    kop: "De leukste secundaire arbeidsvoorwaarde van de gracht.",
    intro: "Een sloep op naam van je bedrijf zegt in één keer wie je bent. Naar je mensen, je klanten en de kandidaat die twijfelt.",
    items: [
      { kop: "Je valt op bij sollicitaties", tekst: "Een eigen sloep in de gracht staat in elke vacaturetekst, en blijft hangen na het gesprek." },
      { kop: "Je geeft je mensen iets extra's", tekst: "Vrijdagmiddag varen in plaats van vrijdagmiddagborrel. Iedereen mag hem pakken." },
      { kop: "Je klanten onthouden het", tekst: "Een uur op het water doet meer dan een vergaderzaal met uitzicht op de A10." },
      { kop: "Het kost je geen tijd", tekst: "Aanvragen in de app, aan boord stappen, wegvaren. Wij doen schoonmaak, onderhoud en de rest." },
    ],
  },

  voorWie: {
    boven: "Waar je hem voor gebruikt",
    kop: "Voor je mensen, je klanten en iedereen daartussen.",
    intro: "Iedereen in je bedrijf kan de sloep pakken, via de app. Van een lunch met vier tot een borrel met veertig.",
    items: [
      "Vrijdagmiddag op het water met het team",
      "Lunch of diner met klanten, midden in de stad",
      "Relaties en partners ontvangen: Amsterdam vanaf het water, langs de grachtenpanden",
      "Teamdag, jubileum, zomerborrel, kerstborrel",
      "Vergaderen of een presentatie aan de lange tafel",
      "Gasten uit het buitenland de grachten laten zien",
      "Green Egg en koelkast aan boord, schipper erbij als iedereen een glas wil",
    ],
  },

  amsterdam: {
    boven: "Amsterdamse grachten",
    kop: "Je ligplaats midden in de stad.",
    intro: "In de grachtengordel, of op een plek naar keuze. Vanaf kantoor het water op, en binnen tien minuten ligt de stad aan je voeten.",
    items: [
      "De Herengracht, de Keizersgracht, de Prinsengracht, de Amstel en het IJ",
      "Elektrisch en stil, dus ook welkom in het uitstootvrije centrum",
      "Langs de grachtenpanden en onder de Magere Brug door",
      "In december het Light Festival, met dekens en warme dranken",
    ],
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
      { kop: "Varen", tekst: "Vraag een dagdeel aan in de app en stap aan boord. Hij ligt schoon en opgeladen klaar. Wij doen de rest." },
    ],
    link: "Zo werkt het",
    href: "/zo-werkt-het",
  },

  inbegrepen: {
    boven: "Wij regelen alles",
    kop: "Jij vaart. Wij doen de rest.",
    intro: "Ligplaats, vergunningen, verzekering, opladen, onderhoud, schoonmaak. Alles zit in het maandbedrag, en jij hoeft er niet aan te denken.",
    items: inbegrepen,
    extra: `${site.ligplaats} ${extra.zin}`,
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
    rijen: ["Per maand", "Looptijd", "Huisstijl", "Aan boord"],
    labels: { wij: "Sloepmaten", elders: "Elders" },
    link: "Alle prijzen en de kosten per vaart",
    href: "/duo-of-solo",
  },

  slot: {
    kop: "Een uur op het water zegt meer dan deze pagina.",
    tekst: "Kom met je team proefvaren, of reserveer meteen je sloep.",
  },
};
