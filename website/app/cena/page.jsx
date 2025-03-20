import React from "react";
import Newsletter from "../components/Newsletter";
import PriceDescription from "../components/PriceDescription";
import QuestionShow from "../components/QuestionsShow";
import Link from "next/link";
import { CTA } from "../components/CTA/CTA";
import { BlackDivider } from "../components/BlackDivider";

export const metadata = {
  title: "Shopr: Cena",
  description:
    "Ceník naší aplikace Shopr. Platíte pouze za vyplněnou objednávku v aktivním předplatném. Vše ostatní je zdarma.",
};

export default function Price() {
  return (
    <>
      <div className="flex justify-center items-start xl:py-pad py-10">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className=" px-4">
            <div className="mx-auto text-center flex flex-col items-center">
              <p className="headingSmall">Ceník</p>
              <h2 className="mt-2 my-5">Platíte jen za aktivní předplatné!</h2>
              <p className="max-w-[600px]">
                Platbu si z karty strháváme pouze za vyřízení objednávky v
                aktivním předplatném. Do té doby je vše plně zdarma. Klidně
                proto otestujte uživatelský účet a založte předplatné, které
                bude čekat na aktivaci.
              </p>
            </div>

            <div className="mt-5 max-w-[1200px] mx-auto flex flex-col items-center">
              <p className="text-5xl font-bold text-textDark text-center">
                100 Kč
              </p>
              <p className="text-lg text-center font-bold text-textDark mb-6">
                za splněnou objednávku
              </p>
              <a
                href="https://app.shopr.cz/signup"
                className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-105 transition-all ease-in-out"
              >
                Založit účet ZDARMA
              </a>

              <p className="text-sm font-semibold text-textMedium my-3 text-center">
                Tlačítko vás přenese na formulář pro registraci uživatelského
                účtu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlackDivider>
        <div className="max-w-wrapper flex flex-col items-center justify-start px-5">
          <p className="text-center text-textLight">
            Jediná platba, kterou u nás zažijte, je za aktivní předplatné. Za
            každou vyřízenou objednávku, kterou v jakémkoliv předplatném
            uděláme, se z karty strhne cena výše. Za týdenní předplatné to bude
            čtyřikrát týdně, v čtvrtletním zase jednou za tři měsíce.
          </p>
        </div>
      </BlackDivider>

      <div className="flex flex-col justify-center items-center py-40">
        <div className="max-w-wrapper lg:grid flex flex-col grid-cols-2 items-start justify-start gap-20">
          <div className="flex flex-col justify-center lg:items-center gap-2 lg:text-center text-start col-span-2 px-5">
            <h4>Otázky</h4>
            <h3>Jak to s platbami funguje?</h3>
          </div>

          <QuestionShow
            question={"Můžu platbu kdykoliv zrušit?"}
            answer={
              "Samozřejmě! Předplatné lze kdykoliv deaktivovat, čímž se přeruší všechny následující pravidelné platby. Předplatné pak můžete kdykoliv znovu aktivovat a navázat na předchozí platby."
            }
          />
          <QuestionShow
            question={"Je omezený počet předplatných?"}
            answer={
              "Předplatných si můžete vytvořit kolik jenom potřebujete. To stejné pak platí i na ty aktivní, nicméně za ty si již z vložené karty strháváme částku ve stanoveném intervalu."
            }
          />
          <QuestionShow
            question={"Kdo spravuje mé platební údaje?"}
            answer={
              "Abychom zajistili co největší bezpečí Vašich platebních údajů, řešíme jejich správu a platby skrze platformu Stripe. Služba Stripe běží po celém světě a jedná se o jednu z největších služeb tohoto typu na trhu."
            }
          />
          <QuestionShow
            question={"Strhávají se platby automaticky?"}
            answer={
              "Ano, platby se strhávají automaticky v pravidelných intervalech, které se shodují s intervaly objednávek. Pokud si tedy nastavíte objednávky jednou za měsíc, pak se platba strhne vždy jednou za měsíc."
            }
          />
          <QuestionShow
            question={"Můžu kdykoliv požádat o smazání údajů?"}
            answer={
              "Máte na to plné právo. Stačí nám napsat na emailovou adresu info@shopr.cz a my to obratem zařídíme. V tu chvíli se nicméně deaktivují všechna vaše předplatná."
            }
          />
          <QuestionShow
            question={"Jak se počítá celková částka?"}
            answer={
              "Částka je vždy stejná, nicméně se liší prodleva mezi jednotlivými platbami. Ta je nastavená podle typu předplatného. Jestliže budete mít aktivované předplatné jednou za dva týdny, pak se platba z karty strhne jednou za dva týdny. Částky se nesčítají, jdou vždy samostatně. To Vám zajišťuje možnost kdykoliv předplatné zrušit a neřešit pak vrácení částky, která se nevyužila."
            }
          />
          <div className="flex flex-col justify-center items-center gap-10 text-center col-span-2 p-3">
            <h3>Pokud máte další otázky, můžete se podívat do našeho FAQ</h3>
            <Link
              href="/otazky"
              className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-105 transition-all ease-in-out"
            >
              Sekce otázek
            </Link>
          </div>
        </div>
      </div>
      <CTA
        subHeading={"Ušetřete čas a starosti"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Už žádné zapomenuté objednávky nebo zbytečné starosti. S naší pravidelnou objednávkou dostanete své oblíbené 
                  doplňky stravy z jakéhokoliv e-shopu vždy včas a bez jakéhokoliv stresu.`}
      />
    </>
  );
}
