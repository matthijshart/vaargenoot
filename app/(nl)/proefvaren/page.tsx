import type { Metadata } from "next";
import { ProefvarenPagina } from "@/components/paginas";
import { proefvaren } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/proefvaren", proefvaren.meta);

export default function Pagina() {
  return <ProefvarenPagina taal="nl" />;
}
