import type { home as homeNl } from "../home";
import { bedrag } from "@/lib/utils";
import { extra, inbegrepen, looptijd, modellen, producten, samen, site } from "./config";

const en = (n: number) => bedrag(n, "en");

export const home: typeof homeNl = {
  hero: {
    boven: "Amsterdam canals",
    kop: "A boat for your company.\nIn *co-ownership*.",
    sub: "Everyone at your office takes the boat out through the app. On your own, or together with one other company. We take care of the rest.",
    punten: ["One fixed amount a month", "Everything included", "Twelve months"],
  },

  waarom: {
    boven: "Why companies do this",
    kop: "The best perk on the canal.",
    intro: "A boat in your company's name says who you are in one go. To your people, your clients and the candidate who is still in doubt.",
    items: [
      { kop: "You stand out when hiring", tekst: "Your own boat on the canal goes in every job ad, and it sticks after the interview." },
      { kop: "You give your people something extra", tekst: "Friday afternoon on the water instead of Friday afternoon drinks. Anyone can take it out." },
      { kop: "Your clients remember it", tekst: "An hour on the water does more than a meeting room with a view of the ring road." },
      { kop: "It costs you no time", tekst: "Request it in the app, step aboard, sail off. We handle cleaning, maintenance and the rest." },
    ],
  },

  voorWie: {
    boven: "What you use it for",
    kop: "For your people, your clients and everyone in between.",
    intro: "Anyone at your company can take the boat out, via the app. From a lunch for four to drinks for forty.",
    items: [
      "Friday afternoon on the water with the team",
      "Lunch or dinner with clients, in the middle of the city",
      "Hosting partners and relations: Amsterdam from the water, along the canal houses",
      "Team day, anniversary, summer drinks, Christmas drinks",
      "A meeting or a presentation at the long table",
      "Showing guests from abroad the canals",
      "Green Egg and fridge on board, a skipper if everyone wants a drink",
    ],
  },

  amsterdam: {
    boven: "Amsterdam canals",
    kop: "Your berth in the heart of the city.",
    intro: "In the canal ring, or at a spot of your choice. From the office straight onto the water, and within ten minutes the city is at your feet.",
    items: [
      "The Herengracht, the Keizersgracht, the Prinsengracht, the Amstel and the IJ",
      "Electric and quiet, so welcome in the emission-free city centre too",
      "Past the canal houses and under the Skinny Bridge",
      "In December the Light Festival, with blankets and hot drinks",
    ],
  },

  duoSolo: {
    boven: "Duo or Solo",
    kop: "Two ways to have a boat.",
    kolommen: [
      {
        id: "duo",
        naam: producten.duo.naam,
        tekst: "Two companies on one boat, half each. You request a slot whenever you like, even on the day itself.",
        vanaf: `From ${en(producten.duo.prijs.amstel)} a month per company`,
        link: "See Duo",
        href: "/en/duo-or-solo#duo",
      },
      {
        id: "solo",
        naam: producten.solo.naam,
        tekst: "One company, the whole boat. Always available, only for you, in your full branding.",
        vanaf: `From ${en(producten.solo.prijs.amstel)} a month`,
        link: "See Solo",
        href: "/en/duo-or-solo#solo",
      },
    ],
    onder: "Prices excluding VAT, indicative. Amstel 8 m; the 10 m Prinsen is on the pricing page.",
  },

  samen: {
    boven: samen.naam,
    kop: "Sharing without the hassle.",
    zinnen: samen.regels,
    link: "How Duo works in practice",
    href: "/en/how-it-works",
  },

  stappen: {
    boven: "It's this easy",
    kop: "Choose, sign, sail.",
    lijst: [
      { kop: "Choose", tekst: "Prinsen or Amstel, Duo or Solo. Come for a trial trip if you're not sure." },
      { kop: "Sign", tekst: "One agreement in plain language. From then on the boat is yours." },
      { kop: "Sail", tekst: "Request a slot in the app and step aboard. It's clean and charged, waiting for you. We do the rest." },
    ],
    link: "How it works",
    href: "/en/how-it-works",
  },

  inbegrepen: {
    boven: "We take care of everything",
    kop: "You sail. We do the rest.",
    intro: "Berth, permits, insurance, charging, maintenance, cleaning. It's all in the monthly amount, and you never have to think about it.",
    items: inbegrepen,
    extra: `${site.ligplaats} ${extra.zin}`,
  },

  kosten: {
    boven: "What it costs",
    kop: "One amount a month, and nothing else.",
    intro: `A ${modellen.prinsen.naam} of ${modellen.prinsen.lengte} metres. Per month, excluding VAT, indicative.`,
    kolommen: [
      {
        naam: `${producten.solo.naam} owner`,
        prijs: en(producten.solo.prijs.prinsen),
        prijsKlein: `${modellen.amstel.naam} ${en(producten.solo.prijs.amstel)}`,
        looptijd: `${looptijd.maanden} months`,
        huisstijl: "Full branding included",
        aanBoord: "Only your company",
      },
      {
        naam: `${producten.duo.naam} owner`,
        prijs: `${en(producten.duo.prijs.prinsen)} per company`,
        prijsKlein: `${modellen.amstel.naam} ${en(producten.duo.prijs.amstel)}`,
        looptijd: `${looptijd.maanden} months`,
        huisstijl: "Both logos, your own flag when you sail",
        aanBoord: "Your company and one duo partner",
      },
    ],
    rijen: ["Per month", "Term", "Branding", "On board"],
    link: "All prices and the cost per trip",
    href: "/en/duo-or-solo",
  },

  slot: {
    kop: "An hour on the water says more than this page.",
    tekst: "Come for a trial trip with your team, or reserve your boat right away.",
  },
};
