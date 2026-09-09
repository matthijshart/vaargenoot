import type { Metadata } from "next";
import { Pagina } from "@/components/Pagina";
import { Vragen } from "@/components/Vragen";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Vragen. ${site.naam}`,
  description: "Veelgestelde vragen over deeleigendom van een elektrische sloep in Amsterdam.",
};

export default function VragenPagina() {
  return (
    <Pagina>
      <Vragen />
    </Pagina>
  );
}
