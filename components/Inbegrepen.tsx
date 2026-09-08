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
        <ul className="mt-14 grid border-t border-nevel sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {inbegrepen.punten.map((punt) => (
            <li
              key={punt.kop}
              className="flex gap-4 border-b border-nevel py-6 sm:pr-8 lg:[&:nth-child(3n+2)]:px-8 lg:[&:nth-child(3n)]:pl-8 lg:[&:nth-child(3n)]:pr-0"
            >
              <Vinkje className="mt-1 text-messing" />
              <div>
                <h3 className="font-sans text-[16px] font-medium text-nacht">{punt.kop}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-zacht">{punt.tekst}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Sectie>
  );
}
