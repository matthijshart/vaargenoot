import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

/** Inter voor tekst en interface. next/font host hem zelf. display optional: geen flits en geen verschuiving, de metrische fallback vangt een trage lading op. */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
});

/** Inter Tight voor koppen, woordmerk en prijzen: strak, met negatieve letterspatiëring. */
export const tight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
  weight: "500",
  display: "optional",
  adjustFontFallback: true,
});

/** JetBrains Mono voor de kleine labels in kapitalen boven een sectie. Niet voorgeladen: klein en niet op het kritieke pad. */
export const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "500",
  display: "optional",
  preload: false,
  adjustFontFallback: true,
});
