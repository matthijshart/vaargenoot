import type { Metadata } from "next";
import { ProefvarenPagina } from "@/components/paginas";
import { proefvaren } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/proefvaren", proefvaren.meta);

export default function Pagina() {
  return <ProefvarenPagina taal="en" />;
}
