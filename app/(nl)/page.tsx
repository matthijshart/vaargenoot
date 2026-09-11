import type { Metadata } from "next";
import { Voorpagina } from "@/components/paginas";
import { paginaMeta } from "@/lib/meta";
import { meta } from "@/content/nl";

export const metadata: Metadata = paginaMeta("nl", "/", { title: meta.titel, description: meta.omschrijving });

export default function Pagina() {
  return <Voorpagina taal="nl" />;
}
