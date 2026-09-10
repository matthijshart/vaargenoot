export function cn(...delen: Array<string | false | null | undefined>) {
  return delen.filter(Boolean).join(" ");
}

/** "€ 1.295", met spatie, zonder decimalen. */
export function bedrag(n: number) {
  return `€ ${new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 }).format(n)}`;
}

/** "€ 1.295" met eventueel decimalen, voor bedragen per vaart. */
export function bedragRond(n: number) {
  return `€ ${new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 }).format(Math.round(n))}`;
}

/** Percentage verschil, afgerond: hoeveel goedkoper b is dan a. */
export function procentMinder(a: number, b: number) {
  return Math.round((1 - b / a) * 100);
}
