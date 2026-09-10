import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/content/config";
import "./globals.css";

/** Inter, variabel, latin. next/font host hem zelf, zonder flits (swap met metrische fallback). */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domein),
  title: {
    default: `${site.naam}. Een sloep voor je bedrijf, in deeleigendom.`,
    template: `%s. ${site.naam}`,
  },
  description: site.omschrijving,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.naam,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
