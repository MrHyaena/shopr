"use client";

import React from "react";
import QuestionToggle from "./QuestionToggle";

export default function FAQQuestion() {
  return (
    <>
      <div className="col-span-2 w-full">
        {/* ------------ Odpovědnost za objednávku ------------------- */}
        <div className="mb-20">
          <h3 className="text-center mb-10" id="odpovednost">
            Odpovědnost za objednávku
          </h3>
          <div className="flex flex-col gap-8">
            <QuestionToggle
              question={"Kdo nese odpovědnost za převzetí objednávky?"}
              answer={
                "Naše služba funguje jako zprostředkovatel objednávek na jiných e-shopech Vaším jménem. Výsledný vztah je tedy mezi Vámi a e-shopem, respektive firmou provozující daný e-shop. Naše služba nese odpovědnost pouze za špatně vyplněnou objednávku."
              }
            />{" "}
            <QuestionToggle
              question={"Co když objednávku nepřevezmu?"}
              answer={
                "Vztah týkající se objednávky je mezi Vámi a e-shopem. Jakékoliv potenciální pokuty plynoucí z nepřevzetí objednávky jsou tím pádem Vaší odpovědností."
              }
            />{" "}
            <QuestionToggle
              question={"Na koho je objednávka objednávána?"}
              answer={
                "Objednávku můžete objednat na jakékoliv dodací údaje. Je to úplně stejné, jako když objednáváte z e-shopu přímo."
              }
            />{" "}
            <QuestionToggle
              question={"Kdo řeší případné problémy s objednávkou?"}
              answer={
                "Naší prací je zprostředkování objednávky, tedy i její správné nastavení. Veškeré ostatní problémy plynoucí z dopravy, vadných kusů a podobně řešíte se samotným e-shopem."
              }
            />
          </div>
        </div>
        {/* ------------ Platby a platební údaje ------------------- */}
        <div className="mb-20">
          <h3 className="text-center mb-10" id="platby">
            Platby a platební údaje
          </h3>
          <div className="flex flex-col gap-8">
            <QuestionToggle
              question={"Za co se strhávají platby?"}
              answer={
                "Platba z karty se strhává v případě, že máte aktivní předplatné. Frekvence plateb je následně závislá na frekvenci předplatného. Pokud tedy budete mít předplatné nastavené na interval jednou měsíčně, platba se trhne jednou za měsíc. Princip je stejný i u všech ostatních intervalů."
              }
            />
            <QuestionToggle
              question={"Jsou zde nějaké skryté poplatky?"}
              answer={
                "Jediná platba, kterou budeme z karty strhávat, je ta za správně zprostředkovanou objednávku v aktivním předplatném. Pokud nemáte ani jedno aktivní předplatné, nic neplatíte."
              }
            />
            <QuestionToggle
              question={"Jsou platby automatické?"}
              answer={
                "Ano, pokud máte aktivované nějaké předplatné, platby se budou z karty strhávat automaticky."
              }
            />{" "}
            <QuestionToggle
              question={"Kde jsou uložené moje platební údaje?"}
              answer={
                "Pro zprostředkování plateb využíváme službu Stripe, která také zabezpečuje vaše platební údaje. Jde o dnes asi nejznámější službu tohoto typu, která takto pomáhá statisícům firmám po celém světě. Ze Stripu tedy strach mít nemusíte, své místo na trhu si již zasloužil."
              }
            />{" "}
            <QuestionToggle
              question={"Můžu platby kdykoliv zrušit?"}
              answer={
                "Samozřejmě! Předplatné lze kdykoliv deaktivovat, čímž se přeruší všechny následující pravidelné platby. Předplatné pak můžete kdykoliv znovu aktivovat a navázat na předchozí platby."
              }
            />
            <QuestionToggle
              question={"Můžu zažádat o vrácení peněz?"}
              answer={
                "Jelikož jsme služba, je to s vrácením plateb složitější. Pokud již platba proběhla a my jsme objednávku vyřídili do 48 hodin od zaplacení, poté není možné peníze vrátit. Samozřejmě existují případy, ve kterých se společně dokážeme domluvit. Pokud nějaký takový problém máte, napište nám na adresu info@shopr.cz."
              }
            />
            <QuestionToggle
              question={
                "Přišlo mi něco jiného, než mám v předplatném. Mám nárok na vrácení peněz?"
              }
              answer={
                "Pokud jsme v objednávce něco pokazili, máte nárok na vrácení celé částky za danou objednávku. Jestliže jde o chybu e-shopu nebo dopravce, musíte to řešit s daným e-shopem."
              }
            />
            <QuestionToggle
              question={"Jak často se platby strhávají?"}
              answer={
                "Platby se strhávají podle intervalu nastaveném v předplatném. Nabízíme možnosti od jednoho týdne do tří měsíců a můžete to kdykoliv změnit."
              }
            />
          </div>
        </div>
        {/* ------------ Předplatné ------------------- */}
        <div className="mb-20">
          <h3 className="text-center mb-10" id="predplatne">
            Předplatné
          </h3>
          <div className="flex flex-col gap-8">
            <QuestionToggle
              question={"Můžu udělat předplatné na jakémkoliv eshopu?"}
              answer={
                "Předplatné můžete vytvořit na jakémkoliv e-shopu, na kterém je dostupná platba skrze dobírku nebo kartu při převzetí. Jiné omezení není."
              }
            />{" "}
            <QuestionToggle
              question={"Je omezený počet položek v předplatném?"}
              answer={"Položek v předplatném můžete mít kolik jenom chcete."}
            />{" "}
            <QuestionToggle
              question={"Je omezený počet předplatných?"}
              answer={
                "Předplatných si můžete vytvořit kolik jenom potřebujete. To stejné pak platí i na ty aktivní, nicméně za ty si již z Vložené karty strháváme částku ve stanoveném intervalu."
              }
            />{" "}
            <QuestionToggle
              question={"Lze předplatné kdykoliv smazat??"}
              answer={
                "Předplatné můžete kdykoliv smazat a znovu vytvořit. Před smazáním je akorát potřeba předplatné deaktivovat, což zabere zhruba 20 sekund."
              }
            />
            <QuestionToggle
              question={"Lze předplatné kdykoliv deaktivovat?"}
              answer={
                "Ano. Předplatné můžete deaktivovat přímo z aplikace. Zabere to asi 20 sekund. Po deaktivace se okamžitě vypínají všechny další platby. Jestliže byste chtěli předplatné znovu aktivovat, bude potřeba znovu vyplnit platební údaje."
              }
            />
            <QuestionToggle
              question={"Můžu změnit jak často se objednávka udělá?"}
              answer={
                "Samozřejmě. Interval lze kdykoliv změnit. Po jeho aktualizaci se upraví i interval strhávaných plateb."
              }
            />
            <QuestionToggle
              question={"Můžu objednávku vytvořit pro někoho jiného?"}
              answer={
                "Zde fungují stejná pravidla, jako když objednáváte z e-shopu přímo sami za sebe."
              }
            />
          </div>
        </div>
        {/* ------------ Uživatelský profil ------------------- */}
        <div className="mb-20">
          <h3 className="text-center mb-10" id="profil">
            Uživatelský profil
          </h3>
          <div className="flex flex-col gap-8">
            <QuestionToggle
              question={"Můžu svůj profil smazat?"}
              answer={
                "Profil můžete kdykoliv smazat. Smažou se tím a deaktivují také předplatná a odstraníme všechny vaše údaje do míry, v jaké nám to umožňuje zákon."
              }
            />
            <QuestionToggle
              question={"Kdo spravuje mé kontaktní a dodací informace?"}
              answer={
                "Kontaktní a dodací informace držíme v naší databázi. Správcem jsme proto my. Můžete kdykoliv zažádat o jejich smazání, nicméně poté budeme nuceni smazat i Váš profil a předplatná."
              }
            />
          </div>
        </div>
        {/* ------------ Osobní údaje ------------------- */}
        <div className="mb-20">
          <h3 className="text-center mb-10" id="osobniudaje">
            Osobní údaje
          </h3>
          <div className="flex flex-col gap-8">
            <QuestionToggle
              question={"K čemu ptořebujete mé osobní údaje?"}
              answer={
                "osobní slouží pro zjednodušení celého systému. Údaje můžete na jedno kliknutí nahrát do formuláře při nastavování předplatného, což šetří spoustu času."
              }
            />{" "}
            <QuestionToggle
              question={"Můžu své osobní údaje změnit?"}
              answer={
                "Kromě emailu, který slouží jako indentifikátor vašeho účtu, můžete změnit jakýkoliv údaj chcete."
              }
            />{" "}
            <QuestionToggle
              question={"Můžu požádat o smazání osobních údajů?"}
              answer={
                "Máte na to plné právo. Abychom ale dokázali fungovat a předplatné vyplňovat, údaje potřebujeme. Proto budeme nucení v případě žádosti o smazání údaje zrušit i uživatelský účet a předplatná."
              }
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
