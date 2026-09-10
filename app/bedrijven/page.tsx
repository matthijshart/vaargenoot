import type { Metadata } from "next";
import { Bedrijven } from "@/components/Bedrijven";
import { Pagina } from "@/components/Pagina";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Voor bedrijven. ${site.naam}`,
  description: "Je bedrijf wordt deel-eigenaar van een sloep in de grachten. Voor je mensen, je klanten en je gasten. Zonder aanschaf, zonder beheer, met schipper als je wilt.",
};

export default function BedrijvenPagina() {
  return (
    <Pagina>
      <Bedrijven />
    </Pagina>
  );
}
