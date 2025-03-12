import {
  faCheckToSlot,
  faFileInvoice,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import ReviewOne from "../components/ReviewOne";
import { HowDoesItWork } from "../components/HowDoesItWork";
import { CTABlock } from "../components/CTA/CTABlock";
import { HeadingCenter } from "../components/Heading/HeadingCenter";

//Metadata
export const metadata = {
  title: "Shopr: Jak to funguje",
  description:
    "Jsme jednoduchá a efektivní služba. Od založení účtu po vyplnění předplatného to může trvat i méně než 10 minut.",
};

export default function Howto() {
  return (
    <>
      <div className="flex items-center justify-center pt-30 pb-20 p-3">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="mx-auto text-center flex flex-col items-center">
            <h4 className="headingSmall">Jak to funguje</h4>
            <h2 className="mt-2 my-5 break-words">
              Hlavně nehledejte nic složitého
            </h2>
            <p className="max-w-[600px] font-medium text-textDark text-lg">
              Naše předplatné má především usnadňovat životy. Dává tedy smysl,
              abychom udělali naši službu co možná nejjednodušší. Nemáte se
              proto čeho obávat, a už vůbec ne nějakého složitého nastavování.
              Celkem je potřeba splnit tři kroky - registraci, tvorbu
              předplatného a aktivaci. Potom už řešíte jen převzetí vašich
              pravidelných objednávek.
            </p>
          </div>
        </div>
      </div>
      <HowDoesItWork />
      <CTABlock />
    </>
  );
}
