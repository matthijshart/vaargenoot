import type { Metadata } from "next";
import { LeasenOfDelen, Slot } from "@/components/Home";
import { Beschikbaarheid, KostenPerVaart, Overeenkomst, Prijstabel } from "@/components/Prijzen";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { prijzen } from "@/content/prijzen";

export const metadata: Metadata = {
  title: "Duo of Solo, prijzen",
  description:
    "Duo: twee bedrijven op één sloep, vanaf € 995 per maand per bedrijf. Solo: de hele sloep, vanaf € 1.595 per maand. Exclusief btw, indicatief, alles inbegrepen.",
};

export default function DuoOfSolo() {
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={prijzen.kop} intro={prijzen.intro} />
      </Container>
      <Prijstabel />
      <Beschikbaarheid />
      <LeasenOfDelen id="vergelijking" />
      <KostenPerVaart />
      <Overeenkomst />
      <Slot />
    </>
  );
}
