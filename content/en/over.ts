import type { over as overNl, privacy as privacyNl } from "../over";
import { oprichter, site } from "./config";

export const over: typeof overNl = {
  meta: {
    title: "About",
    description: "A simple idea: a boat that belongs to your company. On your own, or with one other company. Why Sloepmaten, and what we don't do.",
  },
  kop: "About Sloepmaten.",
  intro: "A simple idea: a boat on the Amsterdam canals that belongs to your company. On your own, or with one other company.",
  blokken: [
    {
      kop: "The founder",
      alinea: oprichter,
    },
    {
      kop: "Why Sloepmaten",
      alinea:
        "A boat sits idle most of the year, a leased one too. At the same time the canals are going electric and a place of your own on the water is getting scarce. Co-ownership solves both: two companies, one boat, or one company that has it all to itself.",
    },
    {
      kop: "What we don't do",
      alinea: "No private individuals, no points systems, no five-year contracts. What we do: prices, rules and term simply on the site.",
    },
  ],
};

export const privacy: typeof privacyNl = {
  meta: {
    title: "Privacy",
    description: "What Sloepmaten does with the details from the reservation and trial trip form. No cookies, no tracking.",
  },
  kop: "Privacy.",
  intro: "Short and in plain language. We don't track, so there's no cookie banner.",
  blokken: [
    {
      kop: "What we collect",
      tekst:
        "Only what you fill in yourself in the reservation or trial trip form: company, name, email address, phone number and your choices. No cookies, no analytics, no pixels.",
    },
    {
      kop: "What for",
      tekst: "To contact you about your reservation or trial trip, and to draw up the agreement. Nothing else.",
    },
    {
      kop: "Where it's kept",
      tekst: `Your message reaches us by email and sits in our mailbox and in the website's log files. We keep it as long as needed for your reservation or trial trip, and after that for at most ${"[INVULLEN: bewaartermijn]"}.`,
    },
    {
      kop: "Your rights",
      tekst: `You can always ask what we have on you, have it corrected or deleted. Email ${site.email}.`,
    },
    {
      kop: "Who",
      tekst: `${site.naam}, ${site.plaats}, Chamber of Commerce ${site.kvk}.`,
    },
  ],
};
