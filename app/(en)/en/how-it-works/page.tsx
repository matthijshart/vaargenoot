import type { Metadata } from "next";
import { ZoWerktHetPagina } from "@/components/paginas";
import { werkt } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/zo-werkt-het", werkt.meta);

export default function Pagina() {
  return <ZoWerktHetPagina taal="en" />;
}
