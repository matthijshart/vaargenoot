import type { Metadata } from "next";
import { Slot } from "@/components/Home";
import { Container } from "@/components/ui/Container";
import { Foto } from "@/components/ui/Foto";
import { Kop } from "@/components/ui/Kop";
import { Rijen } from "@/components/ui/Rijen";
import { Sectie } from "@/components/ui/Sectie";
import { Tekst } from "@/components/ui/Tekst";
import { foto } from "@/content/foto";
import { sloepenPagina as t } from "@/content/sloepen";

export const metadata: Metadata = {
  title: "De sloepen",
  description: "Prinsen: 10 m, lange tafel, koelkast, Green Egg, bimini. Amstel: 8 m, tot 25 aan boord. Allebei elektrisch en stil, net zo fijn met vier. Altijd schoon klaar in de grachtengordel.",
};

export default function Sloepen() {
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={t.kop} intro={t.intro} />
      </Container>
      {t.modellen.map((m, i) => (
        <Sectie key={m.id} id={m.id} className={i === 0 ? "pb-0 md:pb-0 lg:pb-0" : undefined}>
          <Container className="grid gap-10 md:grid-cols-12 md:items-start md:gap-8">
            <div className="md:col-span-7">
              <Foto src={foto[m.beeld].src} alt={foto[m.beeld].alt} ratio="4 / 3" sizes="(min-width: 768px) 58vw, 100vw" className="rounded-kaart" />
              <p className="mt-3 text-[13px] text-grijs">
                <Tekst>{`[INVULLEN: beeld, ${m.beeldNoot}]`}</Tekst>
              </p>
            </div>
            <div className="md:col-span-5">
              <h2 className="text-[44px] md:text-[56px]">{m.naam}</h2>
              <Rijen rijen={m.specificaties} className="mt-6" labelBreedte="7rem" />
              <p className="mt-4 text-[15px] text-grijs">{t.ligplaats}</p>
            </div>
          </Container>
        </Sectie>
      ))}
      <Sectie id="welke" toon="room">
        <Container>
          <Kop boven={t.past.boven} kop={t.past.kop} />
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
            {t.past.kolommen.map((k) => (
              <div key={k.naam} className="border-t border-lijn pt-6">
                <h3 className="kop text-[34px]">{k.naam}</h3>
                <p className="mt-3 text-[18px] font-medium">{k.tekst}</p>
                <p className="mt-2 leading-relaxed text-grijs">{k.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Sectie>
      <Slot />
    </>
  );
}
