import type { Metadata } from "next";
import { ProefvaarFormulier } from "@/components/ProefvaarFormulier";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { Lijst } from "@/components/ui/Rijen";
import { Sectie } from "@/components/ui/Sectie";
import { proefvaren } from "@/content/proefvaren";

export const metadata: Metadata = {
  title: "Kom proefvaren",
  description: "Een uur mee het water op met de oprichter, met je team. Vrijblijvend. Daarna beslis je, of je reserveert ter plekke.",
};

export default function Proefvaren() {
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Kop niveau={1} kop={proefvaren.kop} intro={proefvaren.intro} />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-3">
            <Lijst items={proefvaren.wat} />
          </div>
        </div>
      </Container>
      <Sectie id="formulier" className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-[44rem]">
            <ProefvaarFormulier />
          </div>
        </Container>
      </Sectie>
    </>
  );
}
