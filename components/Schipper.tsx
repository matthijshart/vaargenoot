import { foto } from "@/content/foto";
import { schipper } from "@/content/schipper";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { Vinkje } from "./ui/Vinkje";

export function Schipper() {
  return (
    <Sectie id="schipper" className="bg-wit">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Foto
              src={foto.schipper.src}
              alt={foto.schipper.alt}
              ratio="5 / 6"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-2xl"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectieKop label={schipper.label} kop={schipper.kop} />
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-inkt sm:text-[18px]">
              {schipper.tekst}
            </p>
            <ul className="mt-8 divide-y divide-nevel border-y border-nevel">
              {schipper.punten.map((punt) => (
                <li key={punt} className="flex items-center gap-3 py-3 text-[15px] text-inkt">
                  <Vinkje />
                  {punt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
