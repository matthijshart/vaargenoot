import type { Metadata } from "next";
import { Voorpagina } from "@/components/paginas";
import { paginaMeta } from "@/lib/meta";
import { meta } from "@/content/en";

export const metadata: Metadata = paginaMeta("en", "/", { title: meta.titel, description: meta.omschrijving });

export default function Pagina() {
  return <Voorpagina taal="en" />;
}
