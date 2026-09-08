import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import { site } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
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
