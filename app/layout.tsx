import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { LenisProvider } from "@/components/LenisProvider";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Newsreader, alleen gewicht 300, met de optische-maat-as (opsz 6 tot 72).
 * Lokaal gehost omdat de volledige variabele versie van Google 132 KB is
 * en deze instantie 58 KB. Bron: Google Fonts, Newsreader v26, latin.
 */
const newsreader = localFont({
  src: "../fonts/newsreader-300-opsz-latin.woff2",
  variable: "--font-newsreader",
  weight: "300",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.titel,
  description: site.omschrijving,
};

export const viewport: Viewport = {
  themeColor: "#f4f7fa",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${newsreader.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
