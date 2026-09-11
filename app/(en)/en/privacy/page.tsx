import type { Metadata } from "next";
import { PrivacyPagina } from "@/components/paginas";
import { privacy } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/privacy", { ...privacy.meta, robots: { index: false, follow: true } });

export default function Pagina() {
  return <PrivacyPagina taal="en" />;
}
