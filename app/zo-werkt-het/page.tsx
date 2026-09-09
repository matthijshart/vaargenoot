import type { Metadata } from "next";
import { Pagina } from "@/components/Pagina";
import { Verdelen } from "@/components/Verdelen";
import { ZoWerktHet } from "@/components/ZoWerktHet";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Zo werkt het. ${site.naam}`,
  description: "Kies je sloep en je aandeel, reserveer met vaarpunten, stap aan boord. Weekenden begrensd, ruilen kan altijd.",
};

export default function ZoWerktHetPagina() {
  return (
    <Pagina>
      <ZoWerktHet />
      <Verdelen />
    </Pagina>
  );
}
