import type { Metadata } from "next";
import { VragenPagina } from "@/components/paginas";
import { vragen } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/vragen", vragen.meta);

export default function Pagina() {
  return <VragenPagina taal="nl" />;
}
