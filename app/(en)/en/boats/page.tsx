import type { Metadata } from "next";
import { SloepenPagina } from "@/components/paginas";
import { sloepenPagina } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/sloepen", sloepenPagina.meta);

export default function Pagina() {
  return <SloepenPagina taal="en" />;
}
