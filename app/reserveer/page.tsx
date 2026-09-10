import type { Metadata } from "next";
import { ReserveerFormulier } from "@/components/ReserveerFormulier";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { Sectie } from "@/components/ui/Sectie";
import { Tekst } from "@/components/ui/Tekst";
import { reserveer } from "@/content/reserveer";

export const metadata: Metadata = {
  title: "Reserveer je sloep",
  description: "Reserveer een Duo-helft of een Solo voor vaarseizoen 2027. Overeenkomst binnen twee werkdagen, oplevering april 2027.",
};

export default function Reserveer() {
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={reserveer.kop} intro={reserveer.intro} />
        <ol className="mt-12 grid gap-8 border-t border-lijn pt-8 md:mt-16 md:grid-cols-4 md:gap-8">
          {reserveer.stappen.map((s, i) => (
            <li key={s.kop}>
              <p className="text-[15px] text-grijs tabular-nums">{i + 1}</p>
              <h2 className="mt-2 text-[20px] font-semibold tracking-[-0.01em]">{s.kop}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-grijs">
                <Tekst>{s.tekst}</Tekst>
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[17px] font-medium">{reserveer.founding}</p>
      </Container>
      <Sectie id="formulier" className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-[44rem]">
            <ReserveerFormulier />
          </div>
        </Container>
      </Sectie>
    </>
  );
}
