import { ervaring } from "@/content/ervaring";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Ervaring() {
  return (
    <Sectie id="ervaring" className="bg-wit">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectieKop label={ervaring.label} kop={ervaring.kop} intro={ervaring.intro} />
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {ervaring.punten.map((punt) => (
                <li key={punt.kop} className="border-t border-nevel pt-4">
                  <h3 className="font-sans text-[16px] font-medium text-nacht">{punt.kop}</h3>
                  <p className="mt-1 max-w-[30ch] text-[15px] leading-relaxed text-zacht">{punt.tekst}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center lg:col-span-6 lg:gap-6">
            <Foto
              src={ervaring.beelden[0].src}
              alt={ervaring.beelden[0].alt}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="rounded-2xl"
            />
            <Foto
              src={ervaring.beelden[1].src}
              alt={ervaring.beelden[1].alt}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="mt-10 rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
