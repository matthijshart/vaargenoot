import type { Metadata } from "next";
import { DuoOfSoloPagina } from "@/components/paginas";
import { prijzen } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/duo-of-solo", prijzen.meta);

export default function Pagina() {
  return <DuoOfSoloPagina taal="nl" />;
}
