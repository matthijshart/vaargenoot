import type { Metadata } from "next";
import { Aandeel } from "@/components/Aandeel";
import { Pagina } from "@/components/Pagina";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Prijzen. ${site.naam}`,
  description: "Een kwart, een half of de hele sloep. Eén vast bedrag per maand, alles inbegrepen. Prijzen indicatief.",
};

export default function Prijzen() {
  return (
    <Pagina>
      <Aandeel />
    </Pagina>
  );
}
