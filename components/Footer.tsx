import Link from "next/link";
import { footer, site } from "@/content/site";
import { Container } from "./ui/Container";
import { Tekst } from "./ui/Tekst";

export function Footer() {
  return (
    <footer className="niet-printen border-t border-lijn">
      <Container className="grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="text-[19px] font-semibold tracking-[-0.02em]">{site.naam}</p>
          <p className="mt-1 text-[15px] text-grijs">{site.plaats}</p>
          <ul className="mt-4 space-y-1 text-[15px] text-grijs">
            <li>
              <Tekst>{site.email}</Tekst>
            </li>
            <li>
              <Tekst>{site.telefoon}</Tekst>
            </li>
            <li>
              KvK <Tekst>{site.kvk}</Tekst>
            </li>
          </ul>
        </div>
        <div className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-[15px] sm:grid-cols-3">
            {footer.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-grijs transition-colors duration-200 hover:text-antraciet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[52ch] text-[14px] leading-relaxed text-grijs">{footer.regel}</p>
        </div>
      </Container>
    </footer>
  );
}
