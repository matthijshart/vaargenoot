import { vragen } from "@/content/vragen";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { VraagLijst } from "./ui/VraagLijst";

export function Vragen() {
  return (
    <Sectie id="vragen" className="bg-wit">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectieKop label={vragen.label} kop={vragen.kop} intro={vragen.intro} />
          </div>
          <VraagLijst lijst={vragen.lijst} className="lg:col-span-8" />
        </div>
      </Container>
    </Sectie>
  );
}
