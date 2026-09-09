import { aandeelTekst, aandelen } from "@/content/aandeel";
import { euro } from "@/lib/utils";
import { Container } from "./ui/Container";
import { KnopLink } from "./ui/Knop";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { Vinkje } from "./ui/Vinkje";

export function Aandeel() {
  return (
    <Sectie id="aandeel" donker>
      <Container>
        <SectieKop
          donker
          label={aandeelTekst.label}
          kop={aandeelTekst.kop}
          intro={aandeelTekst.intro}
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6 lg:mt-20">
          {aandelen.map((a) => {
            const punten = [
              a.vaarten === null ? aandeelTekst.altijd : `${a.vaarten} ${aandeelTekst.vaarten}`,
              a.vaarten === null ? aandeelTekst.eigenSchipper : aandeelTekst.vaker,
              aandeelTekst.inbegrepen,
            ];
            return (
              <li key={a.id} className="flex flex-col rounded-2xl border border-wit/15 p-6 sm:p-8">
                <p className="font-kop text-[26px] font-light leading-tight text-wit">{a.naam}</p>
                <p className="mt-1 text-[14px] text-lucht">{a.onder}</p>
                {a.prijs === null ? (
                  <>
                    <p className="mt-6 font-kop text-[40px] font-light leading-none text-wit sm:text-[44px]">
                      {aandeelTekst.opAanvraag}
                    </p>
                    <p className="mt-2 text-[14px] text-lucht">{aandeelTekst.perMaand}</p>
                  </>
                ) : (
                  <>
                    <p className="mt-6 font-kop text-[52px] font-light leading-none text-wit tabular-nums sm:text-[56px]">
                      {euro(a.prijs)}
                    </p>
                    <p className="mt-2 text-[14px] text-lucht">
                      {aandeelTekst.perMaand}, {aandeelTekst.indicatief}
                    </p>
                  </>
                )}
                <ul className="mt-8 space-y-3 border-t border-wit/15 pt-6 text-[15px] text-wit">
                  {punten.map((punt) => (
                    <li key={punt} className="flex items-start gap-3">
                      <Vinkje className="mt-1 text-messing" />
                      <span>{punt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-[56ch] space-y-4 text-[15px] leading-relaxed text-lucht sm:text-[16px]">
            <p>{aandeelTekst.winter}</p>
            <p className="text-[14px] text-lucht/80">{aandeelTekst.vergelijking}</p>
          </div>
          <KnopLink href="#aanmelden" variant="licht" className="shrink-0">
            {aandeelTekst.cta}
          </KnopLink>
        </div>
      </Container>
    </Sectie>
  );
}
