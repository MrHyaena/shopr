import React from "react";
import QuestionToggle from "./QuestionToggle";
import Link from "next/link";
import QuestionShow from "./QuestionsShow";
import { HeadingCenter } from "../Heading/HeadingCenter";

export default function FAQSmall() {
  return (
    <>
      <div className="flex justify-center items-start py-pad">
        <div className="max-w-wrapper flex flex-col items-stretch justify-start xl:w-[50%] w-full gap-10 p-3">
          <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
            <p className="headingSmall">FAQ</p>
            <h2 className="mt-2 my-5">Co by Vás mohlo zajímat</h2>
          </div>
          <QuestionToggle
            question={"Jak často probíhá platba za pravidelnou objednávku?"}
            answer={
              "V každém předplatném lze nastavit interval pravidelných plateb, který se shoduje s intervalem objednávek. Pokud by se poté do budoucna stalo, že Vám daný interval přestane vyhovovat, můžete jej kdykoliv změnit."
            }
          />
          <QuestionToggle
            question={"Je počet předplatných nějak omezený?"}
            answer={
              "Počet předplatných není nijak omezený. Můžete si jich vytvořit kolik jenom chcete, a stejně tak není omezený ani počet aktivních předplatných."
            }
          />
          <QuestionToggle
            question={"Lze předplatné kdykoliv změnit?"}
            answer={
              "Samozřejmě. Na předplatném můžete změnit každý údaj a objednávanou položku. Můžete si proto předplatné průběžně přizpůsobit podle svých představ."
            }
          />
          <QuestionToggle
            question={"Dají se pravidelné objednávky kdykoliv pozastavit?"}
            answer={
              "Objednávku můžete kdykoliv pozastavit z administrace uživatelského účtu. Tato akce není nijak zpoplatněna a nepotřebujete k ní žádné svolení či potvrzení z naší strany."
            }
          />
          <QuestionToggle
            question={"Můžu svůj uživatelský účet kdykoliv zrušit?"}
            answer={
              "Stejně jako předplatné je i uživatelský účet plně ve vašich rukách. Zrušit jej můžete na pár kliknutí sami bez potřeby nás kontaktovat. Počítejte ovšem s tím, že zrušením účtu se zároveň smažou všechny vaše údaje, pozastaví se platby a zruší se všechna předplatná."
            }
          />

          <p className="text-center">
            S každou službou předplatného se nutně pojí i velké množství otázek.
            Abychom Vám s tím co nejvíce pomohli, připravili jsme pro Vás
            rozsáhlou FAQ sekci, do které se můžete přesunout kliknutím na
            tlačítko níže.
          </p>
          <Link
            href={"/otazky"}
            className="bg-quad text-textLight font-semibold text-xl p-3 rounded-lg self-center transition-all ease-in-out hover:scale-105"
          >
            Podívejte se do našeho FAQ
          </Link>
        </div>
      </div>
    </>
  );
}
