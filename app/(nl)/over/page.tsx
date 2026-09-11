import type { Metadata } from "next";
import { OverPagina } from "@/components/paginas";
import { over } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/over", over.meta);

export default function Pagina() {
  return <OverPagina taal="nl" />;
}
