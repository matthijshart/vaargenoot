import type { Metadata } from "next";
import { Slot } from "@/components/Home";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { Sectie } from "@/components/ui/Sectie";
import { Tekst } from "@/components/ui/Tekst";
import { werkt } from "@/content/werkt";

export const metadata: Metadata = {
  title: "Zo werkt het",
  description: "Van kiezen tot wegvaren in zeven stappen, en alle spelregels voluit: dagdelen, seizoen, Duo, Solo, voorkeursrecht en looptijd.",
};

export default function ZoWerktHet() {
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={werkt.kop} intro={werkt.intro} />
        <ol className="mt-12 divide-y divide-lijn border-y border-lijn md:mt-16">
          {werkt.stappen.map((s, i) => (
            <li key={s.kop} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8 md:py-6">
              <p className="text-[15px] text-grijs tabular-nums md:col-span-1">{i + 1}</p>
              <h2 className="text-[20px] font-semibold tracking-[-0.01em] md:col-span-4 md:text-[22px]">{s.kop}</h2>
              <p className="leading-relaxed text-grijs md:col-span-7">
                <Tekst>{s.tekst}</Tekst>
              </p>
            </li>
          ))}
        </ol>
      </Container>

      <Sectie id="spelregels" toon="room" className="mt-20 md:mt-32 lg:mt-40">
        <Container>
          <Kop boven={werkt.spelregels.boven} kop={werkt.spelregels.kop} />
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {werkt.spelregels.blokken.map((b) => (
              <div key={b.kop}>
                <h3 className="text-[22px]">{b.kop}</h3>
                <ul className="mt-4 space-y-3 leading-relaxed">
                  {b.regels.map((r) => (
                    <li key={r}>
                      <Tekst>{r}</Tekst>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Sectie>
      <Slot />
    </>
  );
}
