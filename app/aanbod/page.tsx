import type { Metadata } from "next";
import { PrintKnop } from "@/components/PrintKnop";
import { Tekst } from "@/components/ui/Tekst";
import { aanbod } from "@/content/aanbod";

export const metadata: Metadata = {
  title: "Aanbod op één A4",
  description: "Sloepmaten in het kort: Duo en Solo met prijzen, de altijd-varen-garantie, zo kopen we de sloepen, contact.",
  robots: { index: false, follow: false },
};

/** Printvriendelijk op één A4. Nav en footer worden bij printen verborgen. */
export default function Aanbod() {
  return (
    <div className="mx-auto max-w-[720px] px-5 pt-28 pb-16 text-[15px] leading-snug print:max-w-none print:px-0 print:pt-0 print:pb-0 print:text-[10.5pt]">
      <div className="niet-printen mb-10 flex items-center justify-between gap-4">
        <p className="text-grijs">Deze pagina past op één A4.</p>
        <PrintKnop label={aanbod.knop} />
      </div>

      <p className="text-[13px] font-medium text-blauw">Sloepmaten</p>
      <h1 className="mt-2 text-[30px] print:text-[22pt]">{aanbod.kop}</h1>
      <p className="mt-2 text-grijs">{aanbod.sub}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 print:mt-5 print:grid-cols-2 print:gap-5">
        {aanbod.producten.map((p) => (
          <section key={p.naam} className="rounded-kaart border border-lijn p-4">
            <h2 className="text-[20px] print:text-[14pt]">{p.naam}</h2>
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
      <p className="mt-2 text-[13px] text-grijs">{aanbod.prijsnoot}</p>

      <section className="mt-6 print:mt-4">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] print:text-[12pt]">Alles inbegrepen</h2>
        <p className="mt-1 text-grijs">{aanbod.inbegrepen}</p>
      </section>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 print:mt-4 print:grid-cols-2 print:gap-5">
        <section>
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] print:text-[12pt]">{aanbod.garantie.kop}</h2>
          <ul className="mt-1 space-y-1 text-grijs">
            {aanbod.garantie.regels.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] print:text-[12pt]">{aanbod.kopen.kop}</h2>
          <ul className="mt-1 space-y-1 text-grijs">
            {aanbod.kopen.regels.map((r) => (
              <li key={r}>
                <Tekst>{r}</Tekst>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 border-t border-lijn pt-4 print:mt-4">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] print:text-[12pt]">Contact</h2>
        <p className="mt-1 text-grijs">
          {aanbod.contact.map((c, i) => (
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
