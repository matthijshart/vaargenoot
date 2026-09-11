import type { Metadata } from "next";
import { ReserveerPagina } from "@/components/paginas";
import { reserveer } from "@/content/en";
import { paginaMeta } from "@/lib/meta";

export const metadata: Metadata = paginaMeta("en", "/reserveer", reserveer.meta);

export default function Pagina() {
  return <ReserveerPagina taal="en" />;
}
