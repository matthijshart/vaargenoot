import { site } from "@/content/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-nevel bg-schuim">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-kop text-[22px] font-light text-nacht">{site.naam}</p>
          <p className="text-[15px] text-zacht">{site.plaats}</p>
        </div>
        <p className="max-w-[42ch] text-[13px] leading-relaxed text-zacht">
          {site.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
