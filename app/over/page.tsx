import type { Metadata } from "next";
import { Slot } from "@/components/Home";
import { Container } from "@/components/ui/Container";
import { Foto } from "@/components/ui/Foto";
import { Kop } from "@/components/ui/Kop";
import { Tekst } from "@/components/ui/Tekst";
import { foto } from "@/content/foto";
import { over } from "@/content/over";

export const metadata: Metadata = {
  title: "Over",
  description: "Een verhuurder die al jaren in de Amsterdamse grachten vaart, en een simpel idee: een sloep die van je bedrijf is.",
};

export default function Over() {
  return (
    <>
      <Container className="pt-32 pb-20 md:pt-44 md:pb-32">
        <Kop niveau={1} kop={over.kop} intro={over.intro} />
        <Foto src={foto.grachtBrug.src} alt={foto.grachtBrug.alt} ratio="16 / 8" sizes="(min-width: 1200px) 1200px, 100vw" className="mt-14 rounded-kaart md:mt-20" positie="50% 60%" />
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          {over.blokken.map((b) => (
            <div key={b.kop} className="grid gap-3 md:col-span-12 md:grid-cols-12 md:gap-8">
              <h2 className="text-[24px] md:col-span-4 md:text-[28px]">{b.kop}</h2>
              <p className="maat leading-relaxed text-grijs md:col-span-7 md:col-start-6 md:text-[19px]">
                <Tekst>{b.alinea}</Tekst>
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Slot />
    </>
  );
}
