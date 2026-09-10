import type { Metadata } from "next";
import { cta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { KnopLink, PijlLink } from "@/components/ui/Knop";
import { Kop } from "@/components/ui/Kop";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false },
};

export default function NietGevonden() {
  return (
    <Container className="pt-36 pb-24 md:pt-48 md:pb-40">
      <Kop
        niveau={1}
        kop="Deze pagina ligt niet aan de steiger."
        intro="Het adres klopt niet meer of heeft nooit bestaan. Begin opnieuw op de voorpagina, of kom meteen proefvaren."
      />
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <KnopLink href="/">Naar de voorpagina</KnopLink>
        <PijlLink href={cta.proefvaren.href}>{cta.proefvaren.label}</PijlLink>
      </div>
    </Container>
  );
}
