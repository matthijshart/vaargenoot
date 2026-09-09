/**
 * Aannames voor de vergelijking met een eigen elektrische sloep.
 * Alle bedragen in euro en indicatief. Bewust conservatief: onderhoud,
 * verzekering, vignet en stroom zijn nog niet meegerekend.
 * Het rekenblok is van de site gehaald; de zin onder de aandelen noemt
 * het jaarbedrag uit eigenSloepPerJaar(). Pas beide aan als dit verandert.
 */
export const kosten = {
  /** Aanschafprijs van een vergelijkbare elektrische sloep. */
  aanschaf: 80000,
  /** Restwaarde als deel van de aanschaf, na de afschrijvingsperiode. */
  restwaarde: 0.35,
  /** Afschrijvingsperiode in jaren. */
  jaren: 10,
  /** Liggeld in de stad, per jaar, circa. */
  ligplaats: 6000,
  /** Winterstalling, per jaar, circa. */
  stalling: 4000,
  /** Onderhoud, per jaar. Nog niet meegerekend. */
  onderhoud: 0,
  /** Verzekering, per jaar. Nog niet meegerekend. */
  verzekering: 0,
  /** Vignet en stroom voor het laden, per jaar. Nog niet meegerekend. */
  vignetEnStroom: 0,
  /** Vaarseizoen in maanden. Vaarten per maand gelden binnen het seizoen. */
  seizoenMaanden: 7,
  /** Het maandbedrag van een aandeel loopt het hele jaar door. */
  maandenPerJaar: 12,
} as const;

/** Jaarlijkse afschrijving van een eigen sloep. */
export function afschrijvingPerJaar() {
  return (kosten.aanschaf * (1 - kosten.restwaarde)) / kosten.jaren;
}

/** Vaste jaarkosten van een eigen sloep, zonder afschrijving. */
export function vasteKostenPerJaar() {
  return (
    kosten.ligplaats +
    kosten.stalling +
    kosten.onderhoud +
    kosten.verzekering +
    kosten.vignetEnStroom
  );
}

/** Totale jaarkosten van een eigen sloep. */
export function eigenSloepPerJaar() {
  return afschrijvingPerJaar() + vasteKostenPerJaar();
}

/** Kosten per vaart bij een eigen sloep, bij dit aantal vaarten per maand in het seizoen. */
export function eigenSloepPerVaart(vaartenPerMaand: number) {
  return eigenSloepPerJaar() / (vaartenPerMaand * kosten.seizoenMaanden);
}

/** Jaarbedrag van een aandeel. */
export function aandeelPerJaar(maandbedrag: number) {
  return maandbedrag * kosten.maandenPerJaar;
}

/** Kosten per vaart bij een aandeel, bij dit aantal vaarten per maand in het seizoen. */
export function aandeelPerVaart(maandbedrag: number, vaartenPerMaand: number) {
  return aandeelPerJaar(maandbedrag) / (vaartenPerMaand * kosten.seizoenMaanden);
}
