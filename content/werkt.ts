import { dagdelen, garantie, looptijd, modellen, producten, reservering, seizoen } from "./config";

export const werkt = {
  kop: "Zo werkt het.",
  intro: "Van kiezen tot wegvaren in zeven stappen. Daarna alle spelregels, voluit.",
  stappen: [
    { kop: "Kies model en product", tekst: `${modellen.prinsen.naam} of ${modellen.amstel.naam}. ${producten.duo.naam} of ${producten.solo.naam}.` },
    { kop: "Kom proefvaren met je team", tekst: "Een uur op het water. Dan weet je het." },
    { kop: "Teken", tekst: `Deelnameovereenkomst onder opschortende voorwaarde, reserveringsbijdrage van ${reservering.bijdrage}.` },
    { kop: "Wij bestellen en leveren op", tekst: `Per volle sloep. Oplevering ${reservering.oplevering}, in je huisstijl.` },
    { kop: "Vraag aan in de app", tekst: "Kies een dagdeel, ook op de dag zelf. Je ziet meteen wat vrij is." },
    { kop: "Stap aan boord", tekst: "De sloep ligt schoon en opgeladen aan de steiger. Jij vaart weg." },
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
        kop: `${producten.duo.naam}: delen zonder gedoe`,
        regels: [
          "Geen punten, geen vaste dagen. Je vraagt aan wanneer je wilt, ook op de dag zelf.",
          garantie.botsing,
          producten.duo.huisstijl,
        ],
      },
      {
        kop: `${producten.solo.naam}: altijd van jou`,
        regels: [producten.solo.aanBoord, producten.solo.beschikbaarheid, producten.solo.huisstijl],
      },
      {
        kop: garantie.naam,
        regels: garantie.regels,
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
        regels: [
          `Twaalf maanden vanaf ${looptijd.start}. Opzegtermijn ${looptijd.opzegtermijn}.`,
          looptijd.uitstappen,
          reservering.founding,
        ],
      },
      {
        kop: "Zo kopen we de sloepen",
        regels: [
          "We bestellen per volle sloep. Duo: twee handtekeningen. Solo: één.",
          `Je tekent een deelnameovereenkomst onder opschortende voorwaarde en betaalt een reserveringsbijdrage van ${reservering.bijdrage}.`,
          `Wordt de sloep niet uiterlijk ${reservering.besteldatum} besteld, dan krijg je die terug. Anders is het je eerste maand en start de betaling bij oplevering in ${reservering.oplevering}.`,
          "De beschikbaarheid per sloep staat live op de prijspagina.",
        ],
      },
    ],
  },
};
