import type { Metadata } from "next";
import { Bedrijven } from "@/components/Bedrijven";
import { Pagina } from "@/components/Pagina";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Voor bedrijven. ${site.naam}`,
  description: "Je bedrijf wordt deel-eigenaar van een sloep. Altijd klaar voor je mensen, je uitjes en je gasten. Met schipper als je wilt.",
};

export default function BedrijvenPagina() {
  return (
    <Pagina>
      <Bedrijven />
    </Pagina>
  );
}
