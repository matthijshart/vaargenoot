import { inhoud } from "@/content";
import type { Taal } from "@/lib/taal";
import { Amsterdam, DuoSolo, Inbegrepen, LeasenOfDelen, Samen, Slot, Stappen, VoorWie, Waarom } from "./Home";
import { Hero } from "./Hero";
import { Beschikbaarheid, KostenPerVaart, Overeenkomst, Prijstabel } from "./Prijzen";
import { PrintKnop } from "./PrintKnop";
import { ProefvaarFormulier } from "./ProefvaarFormulier";
import { ReserveerFormulier } from "./ReserveerFormulier";
import { Accordion } from "./ui/Accordion";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, PijlLink } from "./ui/Knop";
import { Kop } from "./ui/Kop";
import { Lijst, Rijen } from "./ui/Rijen";
import { Sectie } from "./ui/Sectie";
import { Tekst } from "./ui/Tekst";

/** De voorpagina: hero, waarom, Amsterdam, Duo of Solo, delen, stappen, inbegrepen, vergelijking, slot. */
export function Voorpagina({ taal }: { taal: Taal }) {
  return (
    <>
      <Hero taal={taal} />
      <Waarom taal={taal} />
      <VoorWie taal={taal} />
      <Amsterdam taal={taal} />
      <DuoSolo taal={taal} />
      <Samen taal={taal} />
      <Stappen taal={taal} />
      <Inbegrepen taal={taal} />
      <LeasenOfDelen taal={taal} />
      <Slot taal={taal} />
    </>
  );
}

export function DuoOfSoloPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).prijzen;
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={t.kop} intro={t.intro} />
      </Container>
      <Prijstabel taal={taal} />
      <Beschikbaarheid taal={taal} />
      <LeasenOfDelen taal={taal} id="vergelijking" />
      <KostenPerVaart taal={taal} />
      <Overeenkomst taal={taal} />
      <Slot taal={taal} />
    </>
  );
}

export function ZoWerktHetPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).werkt;
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={t.kop} intro={t.intro} />
        <ol className="mt-12 divide-y divide-lijn border-y border-lijn md:mt-16">
          {t.stappen.map((s, i) => (
            <li key={s.kop} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8 md:py-6">
              <p className="text-[15px] text-grijs tabular-nums md:col-span-1">{i + 1}</p>
              <h2 className="text-[26px] md:col-span-4 md:text-[30px]">{s.kop}</h2>
              <p className="leading-relaxed text-grijs md:col-span-7">
                <Tekst>{s.tekst}</Tekst>
              </p>
            </li>
          ))}
        </ol>
      </Container>

      <Sectie id="spelregels" toon="room" className="mt-20 md:mt-32 lg:mt-40">
        <Container>
          <Kop boven={t.spelregels.boven} kop={t.spelregels.kop} />
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {t.spelregels.blokken.map((b) => (
              <div key={b.kop}>
                <h3 className="kop text-[30px]">{b.kop}</h3>
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
      <Slot taal={taal} />
    </>
  );
}

export function VragenPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).vragen;
  return (
    <>
      <Container className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Kop niveau={1} kop={t.kop} intro={t.intro} />
          </div>
          <Accordion items={t.lijst} niveau={2} className="md:col-span-8" />
        </div>
      </Container>
      <Slot taal={taal} />
    </>
  );
}

export function SloepenPagina({ taal }: { taal: Taal }) {
  const { sloepenPagina: t, foto } = inhoud(taal);
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
                <Tekst>{m.beeldNoot}</Tekst>
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
      <Slot taal={taal} />
    </>
  );
}

export function OverPagina({ taal }: { taal: Taal }) {
  const { over: t, foto } = inhoud(taal);
  return (
    <>
      <Container className="pt-32 pb-20 md:pt-44 md:pb-32">
        <Kop niveau={1} kop={t.kop} intro={t.intro} />
        <Foto src={foto.grachtBrug.src} alt={foto.grachtBrug.alt} ratio="16 / 8" sizes="(min-width: 1200px) 1200px, 100vw" className="mt-14 rounded-kaart md:mt-20" positie="50% 60%" />
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          {t.blokken.map((b) => (
            <div key={b.kop} className="grid gap-3 md:col-span-12 md:grid-cols-12 md:gap-8">
              <h2 className="text-[30px] md:col-span-4 md:text-[36px]">{b.kop}</h2>
              <p className="maat leading-relaxed text-grijs md:col-span-7 md:col-start-6 md:text-[19px]">
                <Tekst>{b.alinea}</Tekst>
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Slot taal={taal} />
    </>
  );
}

export function PrivacyPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).privacy;
  return (
    <Container className="pt-32 pb-24 md:pt-44 md:pb-40">
      <Kop niveau={1} kop={t.kop} intro={t.intro} />
      <div className="mt-14 max-w-[44rem] divide-y divide-lijn border-y border-lijn md:mt-20">
        {t.blokken.map((b) => (
          <div key={b.kop} className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <h2 className="text-[24px]">{b.kop}</h2>
            <p className="leading-relaxed text-grijs">
              <Tekst>{b.tekst}</Tekst>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export function ProefvarenPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).proefvaren;
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Kop niveau={1} kop={t.kop} intro={t.intro} />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Lijst items={t.wat} />
          </div>
        </div>
      </Container>
      <Sectie id="formulier" className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-[44rem]">
            <ProefvaarFormulier taal={taal} />
          </div>
        </Container>
      </Sectie>
    </>
  );
}

export function ReserveerPagina({ taal }: { taal: Taal }) {
  const t = inhoud(taal).reserveer;
  return (
    <>
      <Container className="pt-32 md:pt-44">
        <Kop niveau={1} kop={t.kop} intro={t.intro} />
        <ol className="mt-12 grid gap-8 border-t border-lijn pt-8 md:mt-16 md:grid-cols-4 md:gap-8">
          {t.stappen.map((s, i) => (
            <li key={s.kop}>
              <p className="text-[15px] text-grijs tabular-nums">{i + 1}</p>
              <h2 className="mt-2 text-[26px]">{s.kop}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-grijs">
                <Tekst>{s.tekst}</Tekst>
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[17px] font-medium">{t.founding}</p>
      </Container>
      <Sectie id="formulier" className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-[44rem]">
            <ReserveerFormulier taal={taal} />
          </div>
        </Container>
      </Sectie>
    </>
  );
}

/** Printvriendelijk op één A4. Nav en footer worden bij printen verborgen. */
export function AanbodPagina({ taal }: { taal: Taal }) {
  const { aanbod: t, site } = inhoud(taal);
  return (
    <div className="mx-auto max-w-[720px] px-5 pt-28 pb-16 text-[15px] leading-snug print:max-w-none print:px-0 print:pt-0 print:pb-0 print:text-[10.5pt]">
      <div className="niet-printen mb-10 flex items-center justify-between gap-4">
        <p className="text-grijs">{t.noot}</p>
        <PrintKnop label={t.knop} />
      </div>

      <p className="label text-blauw">{site.naam}</p>
      <h1 className="mt-2 text-[36px] print:text-[24pt]">{t.kop}</h1>
      <p className="mt-2 text-grijs">{t.sub}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 print:mt-5 print:grid-cols-2 print:gap-5">
        {t.producten.map((p) => (
          <section key={p.naam} className="rounded-kaart border border-lijn p-4">
            <h2 className="text-[28px] print:text-[17pt]">{p.naam}</h2>
            <p className="text-grijs">{p.kort}</p>
            <ul className="mt-3 space-y-1 font-medium">
              {p.prijzen.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <ul className="mt-3 space-y-1 text-[14px] text-grijs print:text-[9.5pt]">
              {p.punten.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-2 text-[13px] text-grijs">{t.prijsnoot}</p>

      <section className="mt-6 print:mt-4">
        <h2 className="text-[24px] print:text-[14pt]">{t.inbegrepenKop}</h2>
        <p className="mt-1 text-grijs">{t.inbegrepen}</p>
      </section>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 print:mt-4 print:grid-cols-2 print:gap-5">
        <section>
          <h2 className="text-[24px] print:text-[14pt]">{t.samen.kop}</h2>
          <ul className="mt-1 space-y-1 text-grijs">
            {t.samen.regels.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-[24px] print:text-[14pt]">{t.verder.kop}</h2>
          <ul className="mt-1 space-y-1 text-grijs">
            {t.verder.regels.map((r) => (
              <li key={r}>
                <Tekst>{r}</Tekst>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 border-t border-lijn pt-4 print:mt-4">
        <h2 className="text-[24px] print:text-[14pt]">{t.contactKop}</h2>
        <p className="mt-1 text-grijs">
          {t.contact.map((c, i) => (
            <span key={c}>
              {i > 0 && ", "}
              <Tekst>{c}</Tekst>
            </span>
          ))}
        </p>
      </section>
    </div>
  );
}

export function NietGevondenPagina({ taal }: { taal: Taal }) {
  const { nietGevonden: t, cta } = inhoud(taal);
  return (
    <Container className="pt-36 pb-24 md:pt-48 md:pb-40">
      <Kop niveau={1} kop={t.kop} intro={t.intro} />
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <KnopLink href={taal === "nl" ? "/" : "/en"}>{t.knop}</KnopLink>
        <PijlLink href={cta.proefvaren.href}>{cta.proefvaren.label}</PijlLink>
      </div>
    </Container>
  );
}
