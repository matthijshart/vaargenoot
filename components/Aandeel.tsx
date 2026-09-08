import { aandeelRijen, aandeelTekst, aandelen } from "@/content/aandeel";
import { cn, euro } from "@/lib/utils";
import { Rekenblok } from "./Rekenblok";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

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

        <div className="mt-12 grid gap-4 sm:hidden">
          {aandelen.map((a, i) => (
            <div key={a.id} className="rounded-2xl border border-wit/15 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-kop text-[28px] font-light leading-tight text-wit">{a.naam}</span>
                <span className="text-right text-wit tabular-nums">
                  <span className="text-[19px]">{euro(a.prijs)}</span>
                  <span className="block text-[12px] text-lucht">per maand, {aandeelTekst.indicatief}</span>
                </span>
              </div>
              <dl className="mt-4 divide-y divide-wit/15 border-t border-wit/15 text-[14px]">
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-lucht">Vaste vaarten per maand</dt>
                  <dd className="text-wit tabular-nums">{a.vaarten}</dd>
                </div>
                {aandeelRijen.map((rij) => (
                  <div key={rij.label} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-lucht">{rij.label}</dt>
                    <dd className={cn("text-right", rij.waarden[i] === "volgt" ? "text-lucht/60" : "text-wit")}>
                      {rij.waarden[i]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-14 hidden overflow-x-auto sm:block lg:mt-20">
          <table className="w-full min-w-[40rem] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-wit/15">
                <th scope="col" className="w-[26%] pb-5 font-medium text-lucht">
                  Aandeel
                </th>
                {aandelen.map((a) => (
                  <th key={a.id} scope="col" className="pb-5 pr-6 align-bottom">
                    <span className="block font-kop text-[28px] font-light leading-tight text-wit sm:text-[32px]">
                      {a.naam}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-wit/15">
              <tr>
                <th scope="row" className="py-4 pr-6 font-normal text-lucht">
                  Vaste vaarten per maand
                </th>
                {aandelen.map((a) => (
                  <td key={a.id} className="py-4 pr-6 text-wit tabular-nums">
                    {a.vaarten}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="py-4 pr-6 font-normal text-lucht">
                  Per maand
                </th>
                {aandelen.map((a) => (
                  <td key={a.id} className="py-4 pr-6 text-wit tabular-nums">
                    <span className="text-[19px]">{euro(a.prijs)}</span>
                    <span className="ml-2 text-[13px] text-lucht">{aandeelTekst.indicatief}</span>
                  </td>
                ))}
              </tr>
              {aandeelRijen.map((rij) => (
                <tr key={rij.label}>
                  <th scope="row" className="py-4 pr-6 font-normal text-lucht">
                    {rij.label}
                  </th>
                  {rij.waarden.map((w, i) => (
                    <td
                      key={aandelen[i].id}
                      className={cn("py-4 pr-6", w === "volgt" ? "text-lucht/60" : "text-wit")}
                    >
                      {w}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 lg:mt-24">
          <Rekenblok />
        </div>
      </Container>
    </Sectie>
  );
}
