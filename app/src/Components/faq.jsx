import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Faq() {
  const [problemToggle, setProblemToggle] = useState(0);

  function Question({ text, index, answer, answerTwo }) {
    return (
      <>
        <div
          onClick={() => {
            if (problemToggle == index) {
              setProblemToggle(0);
            } else {
              setProblemToggle(index);
            }
          }}
          className="p-5 bg-white rounded-lg border border-slate-200  xl:w-[45%] w-[100%]"
        >
          <div className="flex justify-between items-center gap-3">
            <p className="text-lg font-semibold ">{text}</p>
            <button className="w-10 h-10 bg-quad rounded-md cursor-pointer">
              {problemToggle == index ? (
                <FontAwesomeIcon icon={faChevronUp} className="text-textDark" />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-textDark"
                />
              )}
            </button>
          </div>
          {problemToggle == index ? (
            <>
              <p className="font-semibold text-textDarker mt-4 animate-scale-up-noBounce">
                {answer}
              </p>
              <p className="font-semibold text-textDarker mt-3 animate-scale-up-noBounce">
                {answerTwo}
              </p>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col xl:gap-10 gap-10 xl:pt-10 pt-30 text-textDark">
        <div className="flex xl:flex-row justify-between items-center flex-col-reverse gap-5">
          <h1 className="text-3xl font-bold xl:text-start text-center">
            Jak naše aplikace funguje a jiné otázky
          </h1>
          <Link
            to="/"
            className="bg-quad hidden xl:block text-center p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5 mb-30">
          <h1 className="text-xl font-bold ">Odpovědnost</h1>
          <Question
            text={"Kdo je odpovědný za objednávku?"}
            index={10}
            answer={
              "Když si u nás objednáte předplatné, dáváte souhlas k tomu, abychom objednávky vytvořili vaším jménem. Jste následně odpovědni za převzetí zásilky, stejně tak jako za komunikaci s e-shopem."
            }
          />
          <Question
            text={"Jak to funguje s platbou za objednávku?"}
            index={11}
            answer={
              "V tuto chvíli zprostředkováváme předplatné pouze na dobírkové objednávky. Za zboží proto budete platit vždy až ve chvíli, kdy si jej převezmete."
            }
          />
          <h1 className="text-xl font-bold ">Předplatné</h1>
          <Question
            text={"Jak konkrétně předplatné funguje?"}
            index={1}
            answer={
              "Nejprve je potřeba, abyste si předplatné vytvořili. To uděláte ze sekce Moje předplatné skrze tlačítko Nové předplatné. Následně vyplníte formulář, který Vás celým procesem provede. Jakmile předplatné odešlete, budete jej muset ještě platbou aktivovat."
            }
            answerTwo={
              "Předplatné je teď aktivní a my na něm začínáme pracovat. Pokud je to například předplatné jednou za měsíc, pak pro vás vytvoříme objednávku na ezvoleném eshopu jednou za měsíc a odešleme ji na zvolené místo či box."
            }
          />
          <Question
            text={"Lze předplatné kdykoliv zrušit?"}
            index={2}
            answer={
              "Předplatné můžete kdykoliv sami zrušit z karty Moje predplatné. Rozbalte předplatné a najděte tlačítko pro zrušení."
            }
          />
          <Question
            text={"Kolik předplatné stojí?"}
            index={3}
            answer={
              "Předplatné stojí 100 Kč za jednu objednávku. Pokud tedy máte nastevné objednávání na každý měsíc, budete jednou měsíčně platit 100 Kč."
            }
          />
          <Question
            text={"V jaký den mi předplatné pošlete?"}
            index={4}
            answer={
              "Při tvorbě předplatného lze zvolit preferovaný den objednání. Podle toho se vždy řídíme a plánujeme vše tak, abychom to stihnuli."
            }
          />
          <Question
            text={"Můžu mít neomezený počet předplatných?"}
            index={5}
            answer={
              "Samozřejmě! Můžete si vytvořit předplatných kolik jen chcete. Žádné omezení v tomto ohledu nemáme. Platíte pak pouze za aktivované předplatné."
            }
          />
          <h1 className="text-xl font-bold ">Uživatelský účet</h1>
          <Question
            text={"Je vedení uživatelského účtu zdarma?"}
            index={6}
            answer={
              "Uživatelský účet si u nás můžete založit plně zdarma. Platíte jen a pouze v případě aktivního předplatného."
            }
          />
          <Question
            text={"Můžu svůj účet zrušit?"}
            index={7}
            answer={
              "Uživatelský účet je možné kdykoliv zrušit. Společně s tím se zruší i všechna vaše předplatná. Zrušení účtu znamená i zrušení všech předplatných."
            }
            answerTwo={
              "Pokud byste potřebovali pomocí, napište nám zprávu, rádi to pro Vás zařídíme."
            }
          />
          <h1 className="text-xl font-bold ">Cena</h1>
          <Question
            text={"Kolik stojí předplatné?"}
            index={8}
            answer={
              "V tuto chvííli stojí jedno předplatné 100 Kč na objednávku. Pokud jde o předplatné jednou za měsíc, poté se Vám z karty vždy v pravidelném měsíčním intervalu strhne 100 Kč. Následně vyřídíme vaši objednávku."
            }
            answerTwo={
              "V budoucnu může nastat drobné zvýšení ceny. O tom Vás samozřejmě informujeme několik týdnů předem, abyste se mohli pohodlně a s rozmyslem rozhodnout, zda Vám naše služba vyhovuje."
            }
          />
          <Question
            text={"Můžete mi peníze vrátit?"}
            index={9}
            answer={
              "Jelikož je naším předmětem podnikání služba, která je buď splněná, nebo ne, tak v případě správně vyplněné objednávky peníze nevracíme. Jsme samozřejmě lidé a dokážeme vždy vyslechnout a domluvit se na postupu."
            }
            answerTwo={
              "Při jakémkoliv problému se nás proto nebojte kontaktovat."
            }
          />
        </div>
      </div>
    </>
  );
}
