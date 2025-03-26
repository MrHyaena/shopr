import React from "react";
import { HeadingCenter } from "../components/Heading/HeadingCenter";

//Metadata
export const metadata = {
  title: "Shopr: Obchodní podmínky",
  description: "Obchodní podmínky služby Shopr.",
};

export default function page() {
  return (
    <>
      <div className=" flex justify-center items-start xl:py-30 xl:px-5 px-3 text-center lg:text-start">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className=" flex flex-col items-center justify-center py-20">
            <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
              <p className="headingSmall">Základ používání aplikace</p>
              <h2 className="mt-2 my-5">Obchodní podmínky</h2>
              <p className="max-w-[700px]">
                Registrací, ale i dalším využíváním služeb vyjadřuje uživatel
                svůj souhlas s níže uvedenými Obchodními podmínkami aplikace
                Shopr. Obchodní podmínky jsou pro uživatele i poskytovatele
                závazné okamžikem potvrzení registrace.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            {/* Vymezení základních pojmů */}
            <div className="flex flex-col gap-10">
              <h3>1. Vymezení základních pojmů</h3>

              <p>
                <span className="font-bold text-2xl">1.1.</span> Poskytovatelem
                těchto stránek je fyzická osoba Martin Doležal, IČO 10796509, se
                sídlem Víta Nejedlého 666/18, Praha 3, dále jen jako
                poskytovatel. Poskytovatele lze kontaktovat na emailové adrese
                info@shopr.cz. Na tomto kontaktu můžete uplatnit Vaše dále
                popsaná práva.
              </p>
              <p>
                <span className="font-bold text-2xl">1.2.</span> Uživatelem je
                spotřebitel identifikovaný přihlašovacím emailem a heslem
                zadaným při registraci (dále jen uživatel).
              </p>
              <p>
                <span className="font-bold text-2xl">1.3.</span> Licenční
                smlouvou se rozumí smlouva uzavřená mezi Poskytovatelem a
                Uživatelem, jejímž předmětem je poskytnutí Licence k užívání
                webové nebo mobilní aplikace Shopr, dostupné z adresy{" "}
                <a
                  href="https://app.shopr.cz"
                  className="text-quad"
                  target="_blank"
                >
                  app.shopr.cz
                </a>
                .
              </p>
              <p>
                <span className="font-bold text-2xl">1.4.</span> Licence je
                nevýhradní licencí k užívání Aplikace za podmínek uvedených v
                těchto obchodních podmínkách.
              </p>
              <p>
                <span className="font-bold text-2xl">1.5.</span> Smlouvou o
                předplatném se rozumí smlouva uzavřená mezi Poskytovatelem a
                Uživatelem, jejímž předmětem je vyplňování předplatného v daných
                intervalech poskytovatelem dle zadání, které Uživatel k
                předplatnému přiřadí. Smlouva o předplatném je uzavřená na dobu
                neurčitou.
              </p>
              <p>
                <span className="font-bold text-2xl">1.6.</span> Předplatným se
                rozumí pravidelná objednávka podle uživatelem stanovených
                parametrů (např. koncový e-shop, dodací údaje, položky atd.).
              </p>
              <p>
                <span className="font-bold text-2xl">1.7.</span> Vyplněním
                předplatného se rozumí vytvoření a dokončení objednávky podle
                uživatelem zadaných parametrů v zadaném online obchodu.
              </p>
              <p>
                <span className="font-bold text-2xl">1.8.</span> Aplikací se
                rozumí webová nebo mobilní aplikace Shopr pro tvorbu
                předplatných.
              </p>
              <p>
                <span className="font-bold text-2xl">1.9.</span> Nabídkou k
                uzavření Licenční smlouvy je registrace Uživatele, která se
                realizuje založením účtu (vyplněním a odesláním registračního
                formuláře).
              </p>
              <p>
                <span className="font-bold text-2xl">1.10.</span> Přijetím
                nabídky k uzavření Licenční smlouvy je zobrazení potvrzovací
                obrazovky po registraci nebo emailové potvrzení registrace
                poskytovatelem. Toto přijetí nabídky je okamžikem uzavření
                Licenční smlouvy. Licenční smlouva je uzavřena na dobu
                neurčitou.
              </p>
              <p>
                <span className="font-bold text-2xl">1.11.</span> Nabídkou k
                uzavření Smlouvy o předplatném je přechod na odkaz platební
                brány při aktivaci konkrétního předplatného. Ke každému
                předplatnému může náležet jedna Smlouva o předplatném.
              </p>
              <p>
                <span className="font-bold text-2xl">1.12.</span> Přijetím
                nabídky k uzavření Smlouvy o předplatné je první odeslaná platba
                za předplatné, která v ten moment předplatné převádí do
                aktivního stavu. Toto přijetí nabídky je okamžikem uzavření
                Smlouvy o předplatném. Smlouva o předplatném je uzavřena na dobu
                neurčitou.
              </p>
              <p>
                <span className="font-bold text-2xl">1.13.</span> Aktivací
                předplatného se rozumí založení pravidelných plateb za dané
                předplatné ze strany uživatele, které má následně za úkol
                poskytovatel vyplňovat podle daných parametrů.
              </p>
              <p>
                <span className="font-bold text-2xl">1.14.</span> Deaktivací
                předplatného se rozumí ukončení pravidelných plateb za dané
                předplatné ze strany uživatele.
              </p>
              <p>
                <span className="font-bold text-2xl">1.15.</span> Účet -
                uživatelský účet pro službu identifikovaný unikátním
                identifikátorem (email uživatele). Účet představuje neveřejnou
                část aplikace.
              </p>
              <p>
                <span className="font-bold text-2xl">1.16.</span> Zrušení účtu
                je nenávratné smazání dat spojených s účtem uživatele a nese s
                sebou zároveň okamžité zrušení všech Smluv o předplatném, a s
                nimi i pravidelných plateb.
              </p>
              <p>
                <span className="font-bold text-2xl">1.17.</span> Internetovým
                obchodem se rozumí obchod fungující v prostředí internetu.
              </p>
              <p>
                <span className="font-bold text-2xl">1.18.</span> Záznamem o
                vyplnění předplatného se rozumí záznam údajů ke konkrétnímu času
                a datu, který je neměnný. Využívá se pro případné budoucí spory
                týkající se správnosti vyplnění předplatného.
              </p>
            </div>
            {/* Práva a povinnosti uživatele */}
            <div className="flex flex-col gap-10">
              <h3>2. Práva a povinnosti uživatele</h3>
              <p>
                <span className="font-bold text-2xl">2.1.</span> Uživatel je
                povinen úvést při registraci své kontaktní údaje pro účel
                pozdějšího usnadnění práce s aplikací. Emailová adresa je
                zároveň unikátním identifikátorem uživatelského účtu a bude
                skrze ní poskytovatel komunikovat s uživatelem.
              </p>
              <p>
                <span className="font-bold text-2xl">2.2.</span> Uživatel
                souhlasí, aby mu byla ze strany poskytovatele zasílána obchodní
                sdělení. Tento souhlas je kdykoli odvolatelný, ať pro jednotlivý
                druh sdělení či všechna obchodní sdělení.
              </p>
              <p>
                <span className="font-bold text-2xl">2.3.</span> Uživatel je
                povinen chránit poskytnutá přístupová jména a hesla ke zřízeným
                službám a programovým prostředkům serveru před zneužitím třetí
                stranou. Za případné zneužití nenese poskytovatel odpovědnost.
              </p>
              <p>
                <span className="font-bold text-2xl">2.4.</span> Aplikace Shopr,
                včetně její mobilní verze, je dle zákona č. 121/2000 Sb. o právu
                autorském, o právech souvisejících s právem autorským a o změně
                některých zákonů ve znění jeho pozdějších novelizací (dále jen
                „Autorský zákon“), autorským dílem. Majetková práva k aplikaci
                podle Autorského zákona i podle mezinárodních dohod o autorském
                právu, uzavřených Českou republikou, náleží poskytovateli. Tato
                Licenční smlouva neuděluje uživateli žádná oprávnění ve spojení
                s ochrannými známkami poskytovatele.
              </p>
              <p>
                <span className="font-bold text-2xl">2.5.</span> Poskytovatel
                nenese odpovědnost za správnost údajů přiřazených k předplatnému
                (podle kterých se následně předplatné vyplňuje) a je pouze na
                uživateli, aby se ujistil o jejich úplnosti a bezchybnosti.
                Poskytovatel tyto údaje neověřuje.
              </p>
              <p>
                <span className="font-bold text-2xl">2.6.</span> Uživatel se
                zavazuje neprodávat ani jinak neposkytovat Aplikaci jakýmkoliv
                způsobem třetím osobám bez souhlasu poskytovatele.
              </p>
              <p>
                <span className="font-bold text-2xl">2.7.</span> Uživatel nese
                plnou zodpovědnost za data a obsah, který do Aplikace vkládá a
                zavazuje se užívat poskytovanou Aplikaci v souladu s právním
                řádem České republiky.
              </p>
              <p>
                <span className="font-bold text-2xl">2.8.</span> Uživatel se
                zavazuje platit řádně a včas dohodnutou cenu za poskytované
                plnění dle platného ceníku.
              </p>
              <p>
                <span className="font-bold text-2xl">2.9.</span> Uživatel má
                právo kdykoli zrušit Smlouvu o předplatné deaktivací aktivního
                předplatného, nebo zrušením uživatelského účtu. Všechna data
                uživatele budou po zrušení účtu smazána.
              </p>
              <p>
                <span className="font-bold text-2xl">2.10.</span> Uživatel má
                právo kdykoli zrušit Licenční smlouvu zrušením účtu. Všechna
                data uživatele budou po zrušení účtu smazána. Zrušením účtu se
                zároveň ruší všechny Smlouvy o předplatném mezi uživatelem a
                poskytovatelem.
              </p>
              <p>
                <span className="font-bold text-2xl">2.11.</span> Uživatel má
                právo kdykoli změnit parametry předplatného. Změna je okamžitě
                platná.
              </p>
              <p>
                <span className="font-bold text-2xl">2.12.</span> Povinností
                poskytovatele je vyplnění předplatného. Po vyplnění předplatného
                odpovědnost poskytovatele za objednávku na internetovém obchodu
                končí. Právní vztah týkající se objednávky je mezi internetovým
                obchodem a uživatelem, z čehož vyplývají i práva a povinnosti
                uživatele vůči internetovému obchodu. Ty se může uživatel
                dozvědět vždy u konkrétního e-shopu.
              </p>
              <p>
                <span className="font-bold text-2xl">2.13.</span> Uživatel má
                povinnost seznámit se s obchodními podmínkami internetového
                obchodu, který uvadí jako cílový internetový obchod při
                nastavení předplatného v Aplikaci.
              </p>
              <p>
                <span className="font-bold text-2xl">2.14.</span> Uživatel řeší
                případné reklamace, stížnosti na produkty, vrácení zboží apod. s
                internetovým obchodem.
              </p>
              <p>
                <span className="font-bold text-2xl">2.15.</span> Uživatel má
                právo vznést námitku kvůli špatně vyplněnému předplatnému
                poskytovatelem. Případ se bude posuzovat podle Záznamu o
                vyplnění předplatného souvisejícím s konkrétní objednávkou,
                jejíž podklady (např. faktura vydaná internetovým obchodem) musí
                předložit uživatel. Pokud se ukáže, že poskytovatel udělal chybu
                a záznam o vyplněném předplatém se nebude shodovat s podklady,
                má uživatel nárok na vrácení související platby v plné výši.
                Uživatel může podat námitku do 14 dní od provedení platby za
                konkrétní vyplnění předplatného. Uživatel podíví námitku na
                email info@shopr.cz.
              </p>
              <p>
                <span className="font-bold text-2xl">2.16.</span> Poskytovatel
                má povinnost vyplnit předplatné dle zadaných parametrů
                uživatelem. Poskytovatel musí předplatné vyplnit do 48 hodin od
                platby za předplatné, v opačném případě může uživatel požádat o
                vrácení poslední zaplacené částky. Lhůta pro požádání o vrácení
                je 14 dnů od platby.
              </p>
            </div>
            {/* Práva a povinnosti poskytovatele */}
            <div className="flex flex-col gap-10">
              <h3>3. Práva a povinnosti poskytovatele</h3>
              <p>
                <span className="font-bold text-2xl">3.1.</span> Poskytovatel je
                povinen zajistit nepřetržitý provoz Aplikace.
              </p>
              <p>
                <span className="font-bold text-2xl">3.2.</span> Porušením
                povinnosti poskytovatele zajistit nepřetržitý provoz Aplikace
                není přerušení provozu Aplikace vzniklé z neodvratitelných
                objektivních důvodů (např. odstávka elektrické energie, výpadek
                přípojného bodu k internetu apod.) nebo přerušení provozu z
                důvodu systémových zásahů poskytovatele do provozu serveru, o
                kterých však bude uživatel informován v předstihu přímo v
                Aplikaci.
              </p>
              <p>
                <span className="font-bold text-2xl">3.3.</span> Poskytovatel má
                právo zrušit účet uživateli, který porušuje Smluvní podmínky,
                záměrně poškozuje aplikaci, zneužije loga, ochranné známky
                poskytovatele, dopustí se jiného nelegálního šíření obsahu webu
                a webové či mobilní aplikace nebo se snaží obejít tarifní
                omezení.
              </p>
              <p>
                <span className="font-bold text-2xl">3.4.</span> Poskytovatel má
                právo zrušit účet uživateli, který se do tohoto účtu nepřihlásil
                déle než 12 měsíců. Před případným zrušením upozorní
                poskytovatel uživatele na email majitele účtu.
              </p>
              <p>
                <span className="font-bold text-2xl">3.5.</span> Poskytovatel
                nenese odpovědnost za jakoukoli škodu způsobenou užíváním
                aplikace.
              </p>
              <p>
                <span className="font-bold text-2xl">3.6.</span> Poskytovatel má
                dle ustanovení §1752 zákona č. 89/2012, občanského zákoníku
                právo měnit tyto obchodní podmínky, například z důvodu jejich
                uvedení do souladu s právními předpisy či zvýšení právní jistoty
                stran smluv. Smluvní strany souhlasí, že z povahy závazku
                vyplývá rozumná potřeba Obchodní podmínky v budoucnosti změnit,
                a to po předchozím upozornění uživatele na webu{" "}
                <a
                  href="https://www.shopr.cz"
                  target="_blank"
                  className="text-quad"
                >
                  www.shopr.cz
                </a>{" "}
                ve lhůtě minimálně 14 dní před účinností změn.
              </p>
              <p>
                <span className="font-bold text-2xl">3.7.</span> Pokud uživatel
                se změnou obchodních podmínek nesouhlasí, má právo zrušit účet.
                Smluvní strany prohlašují, že doba 14 dnů je dostatečná k
                obstarání alternativní služby.
              </p>
              <p>
                <span className="font-bold text-2xl">3.8.</span> Poskytovatel má
                právo zasílat uživateli informace a obchodní sdělení formou
                emailu a zároveň povinnost obchodní sdělení nezasílat, pokud s
                jejich zasíláním uživatel nesouhlasí.
              </p>

              <p>
                <span className="font-bold text-2xl">3.9.</span> Poskytovatel má
                povinnost vyplnit předplatné dle zadaných parametrů uživatelem.
                Poskytovatel musí předplatné vyplnit do 48 hodin od platby za
                předplatné, v opačném případě může uživatel požádat o vrácení
                poslední zaplacené částky. Lhůta pro požádání o vrácení je 14
                dnů od platby.
              </p>
              <p>
                <span className="font-bold text-2xl">3.10.</span> Poskytovatel
                je odpovědný za shodu údajů v předplatném a v konečné objednávce
                v internetovém obchodu. Při vyplnění objednávky je pořízen
                záznam o vyplněném předplatném s časovou značkou, podle kterého
                se budou případné budoucí spory posuzovat.
              </p>
              <p>
                <span className="font-bold text-2xl">3.11.</span> Poskytovatel
                nemá odpovědnost za jednání uživatele vůči objednávce z
                internetového obchodu a internetovému obchodu jako takovému. Do
                tohoto vztahu poskytovatel nijak nevstupuje. Případné postihy
                (např. za nepřevzetí objednávky) jsou odpovědností uživatele.
              </p>
              <p>
                <span className="font-bold text-2xl">3.12.</span> Poskytovatel
                nemá odpovědnost za jednání internetového obchodu a za jakékoliv
                problémy, které by z toho mohly pro uživatele plynout.
              </p>
            </div>
            {/* Poplatky a úhrady */}
            <div className="flex flex-col gap-10">
              <h3>4. Poplatky a úhrady</h3>
              <p>
                <span className="font-bold text-2xl">4.1.</span> Cena za
                vyplněnou objednávku je stanovena dle aktuálního ceníku
                publikovaného na adrese{" "}
                <a
                  href="https://www.shopr.cz/cena"
                  target="_blank"
                  className="text-quad"
                >
                  www.shopr.cz/cena
                </a>
                .
              </p>
              <p>
                <span className="font-bold text-2xl">4.2.</span> Úhrada za
                aktivované předplatné se provádí v intervalu zvoleném
                uživatelem, který je uvedený v nastavení předplatného.
              </p>
              <p>
                <span className="font-bold text-2xl">4.3.</span> Úhrady za
                aktivované předplatné jsou nevratné, kromě případu uvedeného v
                části 3.9. těchto obchodních podmínek a chyb technických na
                straně poskytovatele.
              </p>
              <p>
                <span className="font-bold text-2xl">4.4.</span> Poskytovatel je
                oprávněn, po předchozím upozornění uživatele, měnit podmínky a
                ceny nabízených služeb z důvodů uvedení nových funkcí nebo
                inflace.
              </p>
              <p>
                <span className="font-bold text-2xl">4.5.</span> Poskytovatel
                vystavuje fakturu za vyplnění předplatného v daném intervalu.
                Uživatel může interval plateb (a v souvislosti s tím interval
                vyplnění předplatného) kdykoliv změnit v Aplikaci v nastavení
                konkrétního předplatného.
              </p>
              <p>
                <span className="font-bold text-2xl">4.6.</span> Poskytovatel má
                právo deaktivovat předplatné, které je v prodlení s platbou za
                vyplnění předplatného déle než 5 pracovních dnů, a to do doby
                její úhrady.
              </p>
              <p>
                <span className="font-bold text-2xl">4.7.</span> Poskytovatel má
                právo zrušit účet uživateli, který je v prodlení s platbou za
                vyplnění předplatného déle než 2 měsíce. 7 dnů před případným
                zrušením upozorní poskytovatel uživatele na email majitele účtu.
              </p>
            </div>
            {/* Podpora, záruka, reklamace */}
            <div className="flex flex-col gap-10">
              <h3>5. Podpora, záruka, reklamace</h3>
              <p>
                <span className="font-bold text-2xl">5.1.</span> Všechny služby
                jsou poskytovány pouze elektronickým způsobem.
              </p>
              <p>
                <span className="font-bold text-2xl">5.2.</span> Podpora k
                používání poskytované služby je poskytována pouze v elektronické
                podobě (emailová komunikace, informace na webových stránkách
                apod.).
              </p>
              <p>
                <span className="font-bold text-2xl">5.3.</span> Odesílání i
                příjem všech písemností souvisejících s poskytovanou službou,
                včetně fakturace, probíhá pouze elektronickým způsobem.
              </p>
              <p>
                <span className="font-bold text-2xl">5.4.</span> Případné
                reklamace je možné uplatňovat zasláním emailu, nebo vyplněním
                kontaktního formuláře v Aplikaci. Kontaktní email a formulář
                jsou součástí služby.
              </p>
            </div>
            {/* Ochrana osobních údajů */}
            <div className="flex flex-col gap-10">
              <h3>6. Ochrana osobních údajů</h3>
              <p>
                <span className="font-bold text-2xl">6.1.</span> Ochranu
                osobních dat Uživatele upravují{" "}
                <a
                  href="https://www.shopr.cz/gdpr"
                  target="_blank"
                  className="text-quad"
                >
                  Podmínky ochrany osobních údajů
                </a>
              </p>
            </div>
            {/* Rozhodné právo*/}
            <div className="flex flex-col gap-10">
              <h3>7. Rozhodné právo</h3>
              <p>
                Pro případ sporů vzniklých ze smluv, jakož i pro případ sporů
                týkajících se platnosti, či existence uzavřených smluv o
                poskytování služby a těchto obchodních podmínek si strany:
              </p>
              <p>
                <span className="font-bold text-2xl">7.1.</span> Volí jako
                rozhodné právo právo České republiky.
              </p>
              <p>
                <span className="font-bold text-2xl">7.2.</span> Určují, že k
                rozhodování jsou příslušné české soudy.
              </p>
              <p>
                <span className="font-bold text-2xl">7.3.</span> V souladu s
                §89a zákona č. 99/1963 Sb. určují jako místně příslušný soud v
                Praze.
              </p>
            </div>
            {/* Závěrečná ustanovení */}
            <div className="flex flex-col gap-10">
              <h3>8. Závěrečná ustanovení</h3>

              <p>
                <span className="font-bold text-2xl">8.1.</span> Tyto obchodní
                podmínky jsou účinné k 1. 3. 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
