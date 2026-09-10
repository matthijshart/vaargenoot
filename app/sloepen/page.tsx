import type { Metadata } from "next";
import { Slot } from "@/components/Home";
import { Container } from "@/components/ui/Container";
import { Foto } from "@/components/ui/Foto";
import { Kop } from "@/components/ui/Kop";
import { Rijen } from "@/components/ui/Rijen";
import { Sectie } from "@/components/ui/Sectie";
import { Tekst } from "@/components/ui/Tekst";
import { Vlak } from "@/components/ui/Vlak";
import { foto } from "@/content/foto";
import { sloepenPagina as t } from "@/content/sloepen";

export const metadata: Metadata = {
  title: "De sloepen",
  description: "Prinsen: 10 m, tot 12 personen, lange tafel, koelkast, barbecue, bimini. Amstel: 8 m, tot 10 personen. Allebei elektrisch en stil.",
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
              {m.beeld ? (
                <Foto src={foto.prinsen.src} alt={foto.prinsen.alt} ratio="4 / 3" sizes="(min-width: 768px) 58vw, 100vw" className="rounded-kaart" />
              ) : (
                <Vlak wat={m.beeldNoot} />
              )}
              {m.beeld && (
                <p className="mt-3 text-[13px] text-grijs">
                  <Tekst>{`[INVULLEN: beeld, ${m.beeldNoot}]`}</Tekst>
                </p>
              )}
            </div>
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px]">{m.naam}</h2>
              <Rijen rijen={m.specificaties} className="mt-6" labelBreedte="7rem" />
              {m.id === "prinsen" && (
                <p className="mt-4 text-[14px] text-grijs">
                  <Tekst>{t.check}</Tekst>
                </p>
              )}
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
                <h3 className="text-[26px]">{k.naam}</h3>
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
