import { dagdelen, looptijd, modellen, producten, reservering, samen, seizoen } from "./config";

export const werkt = {
  meta: {
    title: "Zo werkt het",
    description: "Van kiezen tot wegvaren in zeven stappen, en alle spelregels voluit: dagdelen, seizoen, Duo, Solo, voorkeursrecht en looptijd.",
  },
  kop: "Zo werkt het.",
  intro: "Van kiezen tot wegvaren in zeven stappen. Daarna alle spelregels, voluit.",
  stappen: [
    { kop: "Kies model en product", tekst: `${modellen.prinsen.naam} of ${modellen.amstel.naam}. ${producten.duo.naam} of ${producten.solo.naam}.` },
    { kop: "Kom proefvaren met je team", tekst: "Een uur op het water. Dan weet je het." },
    { kop: "Teken", tekst: `Je krijgt de overeenkomst binnen ${reservering.overeenkomstBinnen}, in gewone taal. Je tekent, en de sloep is van jullie.` },
    { kop: "Wij leveren op", tekst: `In ${reservering.oplevering}, in je huisstijl, met de app op je telefoon.` },
    { kop: "Vraag aan in de app", tekst: "Kies een dagdeel, ook op de dag zelf. Je ziet meteen wat vrij is." },
    { kop: "Stap aan boord", tekst: "De sloep ligt schoon en opgeladen klaar in de grachtengordel, of op een plek naar keuze. Jij vaart weg." },
    { kop: "Wij maken schoon en laden op", tekst: "Na elke vaart. Jij hoeft niets te doen." },
  ],

  spelregels: {
    boven: "De spelregels",
    kop: "Alles wat je moet weten, zonder kleine lettertjes.",
    blokken: [
      {
        kop: "Dagdelen en seizoen",
        regels: [
          ...dagdelen.map((d) => `${d.naam}: ${d.van} tot ${d.tot} uur.`),
          `Het seizoen loopt van ${seizoen.van} tot en met ${seizoen.tot}.`,
          seizoen.buiten,
        ],
      },
      {
        kop: `${producten.duo.naam}: ${samen.naam.toLowerCase()}`,
        regels: samen.regels,
      },
      {
        kop: `${producten.solo.naam}: altijd van jou`,
        regels: [producten.solo.aanBoord, producten.solo.beschikbaarheid, producten.solo.huisstijl],
      },
      {
        kop: "Voorkeursrecht en je eigen duo-partner",
        regels: [
          `Een ${producten.duo.naam}-eigenaar heeft het eerste recht op de andere helft en kan per ${looptijd.start} opschalen naar ${producten.solo.naam}.`,
          `Een ${producten.solo.naam}-eigenaar kan een partner aandragen en terug naar ${producten.duo.naam}.`,
          reservering.duoPartnerActie,
          "Niemand hoeft nu voor altijd te kiezen.",
        ],
      },
      {
        kop: "Looptijd en uitstappen",
        regels: [`Twaalf maanden vanaf ${looptijd.start}.`, looptijd.uitstappen, reservering.founding],
      },
    ],
  },
};
