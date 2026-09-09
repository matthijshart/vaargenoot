import { ervaring } from "@/content/ervaring";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { PuntKaarten } from "./ui/PuntKaarten";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Ervaring() {
  return (
    <Sectie id="ervaring" className="bg-wit">
      <Container>
        <SectieKop label={ervaring.label} kop={ervaring.kop} intro={ervaring.intro} />
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <PuntKaarten punten={ervaring.punten} kolommen={2} toon="schuim" />
          </div>
          <div className="grid grid-cols-2 gap-4 self-center lg:col-span-5 lg:gap-5">
            <Foto
              src={ervaring.beelden[0].src}
              alt={ervaring.beelden[0].alt}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="group rounded-2xl"
              fotoClassName="transition-transform duration-700 ease-zacht md:group-hover:scale-[1.04]"
            />
            <Foto
              src={ervaring.beelden[1].src}
              alt={ervaring.beelden[1].alt}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="group rounded-2xl sm:mt-10"
              fotoClassName="transition-transform duration-700 ease-zacht md:group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
