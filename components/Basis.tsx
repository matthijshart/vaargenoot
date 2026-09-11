import type { ReactNode } from "react";
import { inhoud } from "@/content";
import type { Taal } from "@/lib/taal";
import { inter, mono, tight } from "@/lib/fonts";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { MobieleBalk, Voortgang } from "./Scroll";

/**
 * Het skelet van elke pagina, in beide talen: html met de juiste taal,
 * nav, inhoud, footer en de twee scrollhulpen.
 */
export function Basis({ taal, children }: { taal: Taal; children: ReactNode }) {
  const { site } = inhoud(taal);
  /** LocalBusiness zonder verzonnen gegevens: alleen naam, site en plaats. */
  const structured = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.naam,
    url: site.domein,
    description: site.omschrijving,
    address: { "@type": "PostalAddress", addressLocality: site.plaats, addressCountry: "NL" },
  };
  return (
    <html lang={taal} className={`${inter.variable} ${tight.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <Voortgang />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer taal={taal} />
        <MobieleBalk />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      </body>
    </html>
  );
}
