import type { Metadata } from "next";
import { AanbodPagina } from "@/components/paginas";
import { aanbod } from "@/content/nl";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("nl", "/aanbod", { ...aanbod.meta, robots: { index: false, follow: false } });

export default function Pagina() {
  return <AanbodPagina taal="nl" />;
}
