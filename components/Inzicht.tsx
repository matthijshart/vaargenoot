import { foto } from "@/content/foto";
import { inzicht } from "@/content/inzicht";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Inzicht() {
  return (
    <Sectie id="inzicht">
      <Container>
        <SectieKop label={inzicht.label} kop={inzicht.kop} intro={inzicht.intro} />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Foto
              src={foto.zijgracht.src}
              alt={foto.zijgracht.alt}
              ratio="4 / 3"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-2xl"
            />
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-nevel border-y border-nevel">
              {inzicht.feiten.map((feit) => (
                <div key={feit.datum} className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <dt className="font-kop text-[24px] font-light leading-tight text-nacht">
                    {feit.datum}
                  </dt>
                  <dd className="max-w-[48ch] text-[16px] leading-relaxed text-zacht">
                    {feit.tekst}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 max-w-[52ch]">
              <h3 className="text-[26px] text-nacht sm:text-[30px]">{inzicht.draai.kop}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-inkt">{inzicht.draai.tekst}</p>
            </div>
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
