import { foto } from "@/content/foto";
import { inzicht } from "@/content/inzicht";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Inzicht() {
  return (
    <Sectie id="inzicht" className="bg-wit">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <SectieKop label={inzicht.label} kop={inzicht.kop} intro={inzicht.intro} />
            <div className="mt-10 max-w-[48ch] border-t border-nevel pt-8">
              <h3 className="text-[26px] text-nacht sm:text-[30px]">{inzicht.draai.kop}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-inkt">{inzicht.draai.tekst}</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Foto
              src={foto.grachtBrug.src}
              alt={foto.grachtBrug.alt}
              ratio="4 / 3"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
