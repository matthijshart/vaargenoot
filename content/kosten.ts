/**
 * Aannames voor de vergelijking met een eigen elektrische sloep.
 * Alle bedragen in euro en indicatief.
 */
export const kosten = {
  /** Aanschafprijs van een vergelijkbare elektrische sloep. */
  aanschaf: 85000,
  /** Restwaarde als deel van de aanschaf, na de afschrijvingsperiode. */
  restwaarde: 0.35,
  /** Afschrijvingsperiode in jaren. */
  jaren: 10,
  /** Ligplaats in de stad, per jaar. */
  ligplaats: 2400,
  /** Verzekering, per jaar. */
  verzekering: 700,
  /** Onderhoud, per jaar. */
  onderhoud: 1800,
  /** Winterstalling, per jaar. */
  stalling: 1100,
  /** Vignet en stroom voor het laden, per jaar. */
  vignetEnStroom: 500,
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
    kosten.verzekering +
    kosten.onderhoud +
    kosten.stalling +
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

/** Kosten per vaart bij een aandeel, bij dit aantal vaarten per maand in het seizoen. */
export function aandeelPerVaart(maandbedrag: number, vaartenPerMaand: number) {
  return (maandbedrag * kosten.maandenPerJaar) / (vaartenPerMaand * kosten.seizoenMaanden);
}
