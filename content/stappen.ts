export const stappen = {
  label: "Zo werkt het",
  kop: "Drie stappen, dan vaar je.",
  lijst: [
    {
      kop: "Kies je sloep en je aandeel",
      tekst:
        "De Amstel of de Prinsen. Een achtste, een kwart of een half. Je kiest wat past bij hoe vaak je wilt varen.",
    },
    {
      kop: "Reserveer in de app",
      tekst:
        "Kies een dag en een dagdeel. Je ziet meteen wat vrij is. Is de sloep vrij, dan vaar je ook buiten je vaste vaarten.",
    },
    {
      kop: "Stap aan boord",
      tekst:
        "De sloep ligt schoon en opgeladen op de ligplaats. Jij stapt aan boord en vaart weg.",
    },
  ],
  week: {
    dagen: ["ma", "di", "wo", "do", "vr", "za", "zo"],
    dagdelen: ["ochtend", "middag", "avond"],
    /** Rij (dagdeel) en kolom (dag) van het vakje "jij". */
    jij: { dagdeel: 2, dag: 5 },
    /** Illustratieve bezette vakjes. */
    bezet: [
      [0, 2],
      [1, 5],
      [2, 3],
      [1, 6],
    ],
  },
};
