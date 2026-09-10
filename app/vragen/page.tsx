import type { Metadata } from "next";
import { Slot } from "@/components/Home";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { vragen } from "@/content/vragen";

export const metadata: Metadata = {
  title: "Vragen",
  description: "Veertien vragen over Duo, Solo, de altijd-varen-garantie, deeleigendom, looptijd, huisstijl, schade, vaarbewijs en het seizoen.",
};

export default function Vragen() {
  return (
    <>
      <Container className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Kop niveau={1} kop={vragen.kop} intro={vragen.intro} />
          </div>
          <Accordion items={vragen.lijst} niveau={2} className="md:col-span-8" />
        </div>
      </Container>
      <Slot />
    </>
  );
}
