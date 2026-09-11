import type { Metadata } from "next";
import { OverPagina } from "@/components/paginas";
import { over } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/over", over.meta);

export default function Pagina() {
  return <OverPagina taal="en" />;
}
