import type { Metadata } from "next";
import { ZoWerktHetPagina } from "@/components/paginas";
import { werkt } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/zo-werkt-het", werkt.meta);

export default function Pagina() {
  return <ZoWerktHetPagina taal="nl" />;
}
