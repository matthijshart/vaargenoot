import { prijzen } from "@/content/prijzen";
import { bedragRond, cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Kop } from "./ui/Kop";
import { Sectie } from "./ui/Sectie";
import { Tekst } from "./ui/Tekst";

/** Prijstabel: Duo en Solo als twee rustige kolommen, per model een prijs. */
export function Prijstabel() {
  const t = prijzen.tabel;
  return (
    <Sectie id="prijzen" className="pt-10 md:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
          {t.kolommen.map((k) => (
            <div key={k.id} id={k.id} className="scroll-mt-24 rounded-kaart border border-lijn p-6 md:p-8">
              <h2 className="text-[32px] md:text-[40px]">{k.naam}</h2>
              <p className="mt-2 text-grijs">{k.kort}</p>
              <ul className="mt-8 divide-y divide-lijn border-y border-lijn">
                {k.prijzen.map((p) => (
                  <li key={p.model} className="flex items-baseline justify-between gap-4 py-4">
                    <div>
                      <p className="text-[18px] font-medium">{p.model}</p>
                      <p className="text-[14px] text-grijs">{p.lengte}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[28px] font-semibold tracking-[-0.02em] tabular-nums md:text-[32px]">{p.bedrag}</p>
                      <p className="text-[13px] text-grijs">per maand{p.perBedrijf ? " per bedrijf" : ""}, excl. btw</p>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-4 text-[15px]">
                {t.rijen.map((r) => (
                  <div key={r.sleutel}>
                    <dt className="text-grijs">{r.label}</dt>
                    <dd className="mt-0.5 leading-snug">{k.waarden[r.sleutel]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[65ch] text-[15px] leading-relaxed text-grijs">{t.onder}</p>
      </Container>
    </Sectie>
  );
}

function Status({ waarde }: { waarde: string }) {
  const vrij = waarde === "vrij";
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden className={cn("h-2 w-2 rounded-full", vrij ? "bg-blauw" : "bg-lijn")} />
      {waarde}
    </span>
  );
}

/** Live beschikbaarheid per sloep, uit het configbestand. */
export function Beschikbaarheid() {
  const t = prijzen.beschikbaarheid;
  return (
    <Sectie id="beschikbaarheid" toon="room">
      <Container>
        <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
        <div className="mt-12 overflow-x-auto md:mt-16">
          <table className="w-full min-w-[36rem] border-collapse text-[15px]">
            <thead>
              <tr className="border-b border-lijn text-left text-grijs">
                {t.kolommen.map((k) => (
                  <th key={k} scope="col" className="py-3 pr-6 font-medium">
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.sloepen.map((s) => (
                <tr key={s.naam} className="border-b border-lijn">
                  <th scope="row" className="py-4 pr-6 text-left font-medium">
                    {s.naam} <span className="font-normal text-grijs">{s.model}</span>
                  </th>
                  <td className="py-4 pr-6">
                    <Status waarde={t.status[s.helften[0]]} />
                  </td>
                  <td className="py-4 pr-6">
                    <Status waarde={t.status[s.helften[1]]} />
                  </td>
                  <td className="py-4 pr-6">
                    <Status waarde={s.solo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-[65ch] text-[15px] text-grijs">{t.onder}</p>
      </Container>
    </Sectie>
  );
}

/** Kosten per vaart bij 4, 8 en 12 vaarten per maand, per model. */
export function KostenPerVaart() {
  const t = prijzen.perVaart;
  return (
    <Sectie id="per-vaart">
      <Container>
        <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-12">
          {t.modellen.map((m) => (
            <div key={m.naam}>
              <h3 className="text-[22px]">
                {m.naam} <span className="font-normal text-grijs">{m.lengte}</span>
              </h3>
              <table className="mt-4 w-full border-collapse text-[15px]">
                <thead>
                  <tr className="border-b border-lijn text-left text-grijs">
                    <th scope="col" className="py-3 pr-4 font-medium">
                      Vaarten per maand
                    </th>
                    {t.kolommen.map((k) => (
                      <th key={k} scope="col" className="py-3 pr-4 font-medium">
                        {k}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.vaarten.map((n) => (
                    <tr key={n} className="border-b border-lijn">
                      <th scope="row" className="py-3 pr-4 text-left font-medium tabular-nums">
                        {n}
                      </th>
                      {m.maand.map((bedrag, i) => (
                        <td key={i} className={cn("py-3 pr-4 tabular-nums", i > 0 && "font-medium")}>
                          {bedragRond(bedrag / n)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[65ch] text-[15px] leading-relaxed text-grijs">{t.onder}</p>
      </Container>
    </Sectie>
  );
}

/** Voorbeeldovereenkomst als download. */
export function Overeenkomst() {
  const t = prijzen.overeenkomst;
  return (
    <Sectie id="overeenkomst" toon="room">
      <Container className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-[28px] md:text-[36px]">{t.kop}</h2>
          <p className="mt-4 text-grijs">{t.tekst}</p>
          <p className="mt-6 text-[15px]">
            Download: <Tekst>{t.bestand}</Tekst>
          </p>
        </div>
      </Container>
    </Sectie>
  );
}
