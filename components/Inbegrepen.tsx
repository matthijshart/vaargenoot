import { inbegrepen } from "@/content/inbegrepen";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { Vinkje } from "./ui/Vinkje";

export function Inbegrepen() {
  return (
    <Sectie id="inbegrepen">
      <Container>
        <SectieKop label={inbegrepen.label} kop={inbegrepen.kop} />
        <ul className="mt-12 grid grid-cols-2 gap-x-6 border-t border-nevel sm:gap-x-0 lg:mt-20 lg:grid-cols-3">
          {inbegrepen.punten.map((punt) => (
            <li
              key={punt.kop}
              className="flex gap-3 border-b border-nevel py-4 sm:gap-4 sm:py-6 sm:pr-8 lg:[&:nth-child(3n+2)]:px-8 lg:[&:nth-child(3n)]:pl-8 lg:[&:nth-child(3n)]:pr-0"
            >
              <Vinkje className="mt-0.5 text-messing sm:mt-1" />
              <div>
                <h3 className="font-sans text-[15px] font-medium text-nacht sm:text-[16px]">{punt.kop}</h3>
                <p className="mt-1 hidden text-[15px] leading-relaxed text-zacht sm:block">{punt.tekst}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Sectie>
  );
}
