import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/content/config";
import "./globals.css";

/** Inter, variabel, latin. next/font host hem zelf. display optional: geen flits en geen verschuiving, de metrische fallback vangt een trage lading op. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
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

/** LocalBusiness zonder verzonnen gegevens: alleen naam, site en plaats. */
const structured = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.naam,
  url: site.domein,
  description: site.omschrijving,
  address: { "@type": "PostalAddress", addressLocality: site.plaats, addressCountry: "NL" },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      </body>
    </html>
  );
}
