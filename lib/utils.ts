export function cn(...delen: Array<string | false | null | undefined>) {
  return delen.filter(Boolean).join(" ");
}

export function euro(bedrag: number, decimalen = 0) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimalen,
    maximumFractionDigits: decimalen,
  }).format(bedrag);
}
