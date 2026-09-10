import { aandeelTekst, aandelen } from "@/content/aandeel";
import { bedrijven } from "@/content/bedrijven";
import { euro } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, TekstLink } from "./ui/Knop";
import { PuntKaarten } from "./ui/PuntKaarten";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { VraagLijst } from "./ui/VraagLijst";
import { Vergelijk } from "./Vergelijk";

/**
 * De bedrijvenpagina: wat het is, wat het oplevert, de vergelijking met
 * kopen en leasen, het aanbod met de prijs, en de vragen voor je tekent.
 */
export function Bedrijven() {
  return (
    <>
      <Sectie id="bedrijven" className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="min-w-0 lg:col-span-7">
              <SectieKop label={bedrijven.label} kop={bedrijven.kop} intro={bedrijven.intro} />
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                <KnopLink href="#aanmelden">{bedrijven.cta}</KnopLink>
                <KnopLink href={bedrijven.kennismakingHref} variant="omlijnd">
                  {bedrijven.kennismaking}
                </KnopLink>
              </div>
              <p className="mt-4 text-[14px] text-zacht">{bedrijven.onderKnop}</p>
            </div>
            <div className="lg:col-span-5">
              <Foto
                src={bedrijven.beeld.src}
                alt={bedrijven.beeld.alt}
                ratio="1 / 1"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="group rounded-2xl"
                fotoClassName="transition-transform duration-700 ease-zacht md:group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Container>
      </Sectie>

      <Sectie id="bedrijven-voordelen" className="bg-wit">
        <Container>
          <SectieKop label={bedrijven.voordelenLabel} kop={bedrijven.voordelenKop} />
          <PuntKaarten punten={bedrijven.punten} kolommen={3} toon="schuim" className="mt-10 lg:mt-14" />
        </Container>
      </Sectie>

      <Vergelijk />

      <Sectie id="bedrijven-aanbod" donker>
        <Container>
          <SectieKop
            donker
            label={bedrijven.aanbodLabel}
            kop={bedrijven.aanbodKop}
            intro={bedrijven.aanbodIntro}
          />

          <dl className="mt-12 divide-y divide-wit/15 border-y border-wit/15 md:grid md:grid-cols-4 md:gap-8 md:divide-y-0 md:py-8 lg:mt-16">
            {bedrijven.feiten.map((feit) => (
              <div key={feit.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5 md:block md:py-0">
                <dt className="text-[14px] font-medium text-lucht md:text-[13px]">{feit.label}</dt>
                <dd className="text-[15px] leading-snug text-wit md:mt-2">{feit.waarde}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16">
            {aandelen.map((a) => (
              <li
                key={a.id}
                className="rounded-2xl border border-wit/15 p-6 transition-[transform,border-color,background-color] duration-300 ease-zacht md:hover:-translate-y-1 md:hover:border-lucht/60 md:hover:bg-wit/[0.04]"
              >
                <p className="font-kop text-[24px] font-light leading-tight text-wit">{a.naam}</p>
                <p className="mt-1 text-[14px] text-lucht">{a.onder}</p>
                <p className="mt-5 font-kop text-[36px] font-light leading-none text-wit tabular-nums sm:text-[40px]">
                  {a.prijs === null ? bedrijven.opAanvraag : euro(a.prijs)}
                </p>
                <p className="mt-2 text-[14px] text-lucht">
                  {a.prijs === null ? aandeelTekst.perMaand : bedrijven.perMaand}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-[56ch] space-y-4 text-[15px] leading-relaxed text-lucht sm:text-[16px]">
              <p className="text-wit">{bedrijven.ctaTekst}</p>
              <p className="text-[14px] text-lucht/80">{aandeelTekst.vergelijking}</p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-3">
              <KnopLink href="#aanmelden" variant="licht">
                {bedrijven.cta}
              </KnopLink>
              <TekstLink
                href={bedrijven.kennismakingHref}
                className="text-lucht decoration-lucht/50 hover:text-wit hover:decoration-wit"
              >
                {bedrijven.kennismaking}
              </TekstLink>
            </div>
          </div>
        </Container>
      </Sectie>

      <Sectie id="bedrijven-vragen" className="bg-wit">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectieKop label={bedrijven.vragenLabel} kop={bedrijven.vragenKop} />
            </div>
            <VraagLijst lijst={bedrijven.vragen} className="lg:col-span-8" />
          </div>
        </Container>
      </Sectie>
    </>
  );
}
