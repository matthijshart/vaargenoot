import type { Metadata } from "next";
import { SloepenPagina } from "@/components/paginas";
import { sloepenPagina } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/sloepen", sloepenPagina.meta);

export default function Pagina() {
  return <SloepenPagina taal="nl" />;
}
