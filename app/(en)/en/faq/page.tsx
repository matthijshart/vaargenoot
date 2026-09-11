import type { Metadata } from "next";
import { VragenPagina } from "@/components/paginas";
import { vragen } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/vragen", vragen.meta);

export default function Pagina() {
  return <VragenPagina taal="en" />;
}
