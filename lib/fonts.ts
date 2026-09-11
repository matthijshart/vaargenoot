import { Inter, Instrument_Serif } from "next/font/google";

/** Inter, variabel, latin. next/font host hem zelf. display optional: geen flits en geen verschuiving, de metrische fallback vangt een trage lading op. */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
});

/** Instrument Serif voor koppen en prijzen: één gewicht, met cursief voor accenten. */
export const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "optional",
  adjustFontFallback: true,
});
