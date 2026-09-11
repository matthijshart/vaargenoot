import type { Metadata } from "next";
import { Basis } from "@/components/Basis";
import { NietGevondenPagina } from "@/components/paginas";
import { nietGevonden, site } from "@/content/nl";
import "./globals.css";

/**
 * 404 voor adressen die nergens bij horen. De site heeft twee root layouts
 * (nl en en), dus die pagina moet hier staan, met eigen styles en fonts.
 * Nederlands, want een verkeerd adres kent geen taal.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.domein),
  title: nietGevonden.titel,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <Basis taal="nl">
      <NietGevondenPagina taal="nl" />
    </Basis>
  );
}
