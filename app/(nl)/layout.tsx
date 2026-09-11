import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Basis } from "@/components/Basis";
import { meta, site } from "@/content/nl";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domein),
  title: { default: meta.titel, template: meta.sjabloon },
  description: meta.omschrijving,
  openGraph: { type: "website", locale: meta.locale, siteName: site.naam },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function NederlandseLayout({ children }: { children: ReactNode }) {
  return <Basis taal="nl">{children}</Basis>;
}
