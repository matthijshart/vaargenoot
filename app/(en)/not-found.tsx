import type { Metadata } from "next";
import { NietGevondenPagina } from "@/components/paginas";
import { nietGevonden, site } from "@/content/en";

export const metadata: Metadata = {
  metadataBase: new URL(site.domein),
  title: nietGevonden.titel,
  robots: { index: false },
};

export default function NietGevonden() {
  return <NietGevondenPagina taal="en" />;
}
