import { checks, fiscaal, inbegrepen, juridisch, looptijd, modellen, producten, reservering, samen, schade, seizoen } from "./config";
import { bedrag } from "@/lib/utils";

const solo = producten.solo.prijs.prinsen;
const duo = producten.duo.prijs.prinsen;

export const vragen = {
  meta: {
    title: "Vragen",
    description: "Twaalf vragen over Duo, Solo, deeleigendom, looptijd, huisstijl, schade, vaarbewijs en het seizoen.",
  },
  kop: "Vragen.",
  intro: "De vragen die bedrijven ons stellen, in de volgorde waarin ze komen.",
  lijst: [
    {
      vraag: "Wat als ik wil varen en mijn duo-partner ook?",
      antwoord: `${samen.regels[0]} ${samen.regels[1]} ${samen.regels[2]} Zo blijft het eerlijk, zonder punten en zonder vaste dagen.`,
    },
    {
      vraag: "Wat krijg ik voor dat bedrag?",
      antwoord: `Een sloep die van je bedrijf is, in je eigen huisstijl, klaar in de grachtengordel of op een plek naar keuze. Wij regelen ${inbegrepen.join(", ").toLowerCase()}. Jij vraagt een dagdeel aan in de app en vaart weg. Schipper en catering regel je erbij.`,
    },
    {
      vraag: "Wat kost het per jaar en wat zit erin?",
      antwoord: `Twaalf keer het maandbedrag. ${producten.duo.naam} ${modellen.prinsen.naam}: ${bedrag(duo * 12)} per bedrijf per jaar. ${producten.solo.naam} ${modellen.prinsen.naam}: ${bedrag(solo * 12)} per jaar. Exclusief btw, indicatief. Daar zit alles in, wij regelen het: ligplaats in de grachtengordel of op een plek naar keuze, vergunningen en vignet, verzekering, opladen en stroom, onderhoud, schoonmaak na elke vaart, winterklaar, vervangende sloep, app en servicelijn. Schipper en catering regel je erbij.`,
    },
    {
      vraag: "Wordt mijn bedrijf echt deeleigenaar?",
      antwoord: `Ja. ${juridisch} Hoe het precies zit, staat in de overeenkomst, in gewone taal.`,
    },
    {
      vraag: "Kan ik later van Duo naar Solo, of andersom?",
      antwoord: `Ja. Een ${producten.duo.naam}-eigenaar heeft het eerste recht op de andere helft en kan per ${looptijd.start} opschalen naar ${producten.solo.naam}. Een ${producten.solo.naam}-eigenaar kan een partner aandragen en terug naar ${producten.duo.naam}. Niemand hoeft nu voor altijd te kiezen.`,
    },
    {
      vraag: "Mag ik zelf kiezen met wie ik deel?",
      antwoord: `Ja. Neem je eigen duo-partner mee: een bevriend bedrijf, een klant, het kantoor naast je. ${reservering.duoPartnerActie} Kom je alleen, dan zoeken wij een partner die bij je past.`,
    },
    {
      vraag: "Hoe lang zit ik vast en hoe stap ik uit?",
      antwoord: `Twaalf maanden vanaf ${looptijd.start}. ${looptijd.uitstappen}`,
    },
    {
      vraag: "Kunnen we onze huisstijl op de boot?",
      antwoord: `${producten.solo.naam}: ${producten.solo.huisstijl} ${producten.duo.naam}: ${producten.duo.huisstijl}`,
    },
    {
      vraag: "Wat als er schade is?",
      antwoord: `Je belt de servicelijn, ook als je op het water bent. De verzekering is inbegrepen. Het eigen risico is ${schade.eigenRisico} per gebeurtenis. Wat er precies geldt, staat in de overeenkomst.`,
    },
    {
      vraag: "Heeft de bestuurder een vaarbewijs nodig?",
      antwoord: `Nee. Voor een elektrische sloep onder de 15 meter die niet harder kan dan 20 kilometer per uur is geen vaarbewijs nodig. ${checks.vaarbewijs} Voor je eerste vaart leggen we uit hoe de sloep werkt.`,
    },
    {
      vraag: "Hoe zit het fiscaal?",
      antwoord: `${fiscaal} ${checks.fiscaal}`,
    },
    {
      vraag: "Wat gebeurt er buiten het seizoen?",
      antwoord: `Het seizoen loopt van ${seizoen.van} tot en met ${seizoen.tot}. ${seizoen.buiten} Wij houden de sloep winterklaar en opgeladen.`,
    },
  ],
};
