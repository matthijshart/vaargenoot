export const stappen = {
  label: "Zo werkt het",
  kop: "Drie stappen, dan vaar je.",
  lijst: [
    {
      kop: "Kies je sloep en je aandeel",
      tekst: "De Amstel of de Prinsen. Een kwart, een half of de hele sloep.",
    },
    {
      kop: "Reserveer in de app",
      tekst: "Kies een dag en een dagdeel. Je ziet meteen wat vrij is.",
    },
    {
      kop: "Stap aan boord",
      tekst: "De sloep ligt schoon en opgeladen klaar. Jij vaart weg.",
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
