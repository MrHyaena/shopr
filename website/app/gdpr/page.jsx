import React from "react";
import { HeadingCenter } from "../components/Heading/HeadingCenter";
import { TextSection } from "../components/TextSection";

//Metadata
export const metadata = {
  title: "Shopr: GDPR",
  description:
    "Bezpečnost Vašich údajů je pro nás velice důležitá. Dáváme si pozor, co se s Vašimi údaji děje.",
};

export default function About() {
  return (
    <>
      <div className=" flex justify-center items-start xl:py-30 xl:px-5 px-3 text-center lg:text-start">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className=" flex flex-col items-center justify-center py-20">
            <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
              <p className="headingSmall">GDPR</p>
              <h2 className="mt-2 my-5">Podmínky ochrany osobních údajů</h2>
              <p className="max-w-[700px]">
                Bezpečnost Vašich údajů je pro nás velice důležitá. Dáváme si
                pozor, co se s Vašimi údaji děje. Níže popisujeme způsob
                zpracování osobních údajů v naší službě.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            {/* Vymezení základních pojmů */}
            <div className="flex flex-col gap-10">
              <h3>1. Vymezení základních pojmů</h3>

              <p>
                <span className="font-bold text-2xl">1.1.</span> Pojmy
                "Poskytovatel", "Uživatel", "Licenční smlouva", "Smlouva o
                předplatném" "Aplikace" mají stejný význam, který definují{" "}
                <a
                  target="_blank"
                  className="text-quad"
                  href="https://www.shopr.cz/obchodni-podminky"
                >
                  Obchodní podmínky
                </a>
                .
              </p>
              <p>
                <span className="font-bold text-2xl">1.2.</span> Poskytovatel a
                Uživatel spolu uzavřeli Licenční smlouvu tím, že Uživatel
                odsouhlasil všeobecné obchodní podmínky zveřejněné na{" "}
                <a
                  target="_blank"
                  className="text-quad"
                  href="https://www.shopr.cz/obchodni-podminky"
                >
                  www.shopr.cz/obchodni-podminky
                </a>{" "}
                při zřízení uživatelského účtu.
              </p>
              <p>
                <span className="font-bold text-2xl">1.3.</span> Poskytovatel a
                Uživatel spolu uzavírají Smlouvu o předplatném tak, jak je
                definováno v{" "}
                <a
                  target="_blank"
                  className="text-quad"
                  href="https://www.shopr.cz/obchodni-podminky"
                >
                  obchodních podmínkách
                </a>
                .
              </p>
              <p>
                <span className="font-bold text-2xl">1.4.</span> V rámci těchto
                právních vztahů bude Poskytovatel správcem osobních údajů
                Uživatele za účelem realizace smluvního vztahu a pro
                marketingové účely podle čl. 4 bod 7) nařízení Evropského
                parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
                souvislosti se zpracováním osobních údajů a o volném pohybu
                těchto údajů a o zrušení směrnice 95/46/ES (obecné nařízení o
                ochraně osobních údajů) (dále jen: “GDPR”).
              </p>
              <p>
                <span className="font-bold text-2xl">1.5.</span> Termíny
                "správce dat", "zpracovatel dat", "osobní údaje", "zpracování",
                "odpovídající technická a organizační opatření" použitá v tomto
                textu je třeba vykládat v kontextu GDPR.
              </p>
            </div>
            {/* Jaké osobní údaje Poskytovatel o Uživateli spravuje */}
            <div className="flex flex-col gap-10">
              <h3>2. Jaké osobní údaje Poskytovatel o Uživateli spravuje</h3>
              <p>
                <span className="font-bold text-2xl">2.1.</span> Pro poskytování
                Aplikace a její podporu jde o údaje:
              </p>
              <ul className="text-md font-semibold text-textDark list-disc ml-10">
                <li>Email - přihlašovací jméno Uživatele</li>
                <li>Heslo - pro ověření Uživatele</li>
                <li>Telefon - povinný údaj pro kontakt</li>
                <li>Jméno a příjmení - povinný údaj pro tvorbu předplatného</li>
                <li>Adresa bydliště - povinný údaj pro tvorbu předplatného</li>
                <li>
                  Technické údaje - odkud uživatel přišel na web Shopr, pro
                  statistické účely
                </li>
                <li>
                  Veškerou korespondenci (např. přes email, chat, v aplikaci) s
                  uživatelskou podporou Aplikace{" "}
                </li>
                <li>
                  Na marketingovém webu pro statistické účely návštěvy a akce
                  Uživatele (například založení nového účtu, testování změn
                  designu)
                </li>
                <li>Dobrovolné odpovědi Uživatele na ankety Poskytovatele</li>
                <li>
                  Záznamy o činnosti Aplikace (logy), ve kterých mohou být i
                  záznamy činnosti Uživatele v jeho účtu
                </li>
              </ul>
            </div>
            {/* Co s daty Poskytovatel dělá, jak je zpracovává */}
            <div className="flex flex-col gap-10">
              <h3>3. Co s daty Poskytovatel dělá, jak je zpracovává</h3>
              <p>
                <span className="font-bold text-2xl">3.1.</span> Zpracováním
                osobních údajů za účelem realizace smluvních vztahu se rozumí
                zpracování údajů v rozsahu nezbytném pro plnění Licenční smlouvy
                a Smluv o předplatném. Za tímto účelem budou v nezbytném rozsahu
                zpracovávány Uživatelovy identifikační a kontaktní údaje a dále
                informace vztahující se k zajištění chodu Aplikace. V případě,
                že Uživatel s poskytnutím svých údajů za tímto účelem
                nesouhlasí, nelze smlouvy uzavřít. Důvodem zpracování je
                nezbytnost pro splnění smlouvy.
              </p>
              <p>
                <span className="font-bold text-2xl">3.2.</span> Marketingovým
                využitím údajů se rozumí pouze využití kontaktních údajů
                Uživatele za účelem šíření obchodních sdělení týkajících se
                vlastních produktů Poskytovatele (např. oznamování rozšiřování
                funkcí Aplikace), které již Uživateli poskytl. K tomu uděluje
                uživatel souhlas zaškrtnutím políčka při registraci účtu.
                Souhlas se uděluje na dobu trvání smluvních závazku a lze jej
                kdykoliv odvolat..
              </p>
              <p>
                <span className="font-bold text-2xl">3.3.</span> Souhlas platí
                rovněž pro správcem pověřené zpracovatele, jejichž služby
                Poskytovatel využívá pro zajištění chodu Aplikace – např.
                poskytovatelé serverové infrastruktury, zálohování dat, externí
                spolupracovníci a zaměstnanci. S každým takovým subdodavatelem
                má Poskytovatel uzavřenou smlouvu zavazující subdodavatele k
                dodržování podmínek v této zpracovatelské smlouvě. Poskytovatel
                může do zpracování zapojit subdodavatele, pokud ten splňuje
                nároky shodné s ustanoveními této zpracovatelské smlouvy.
                omezení. Důvodem zpracování je oprávněný zájem.
              </p>
              <p>
                <span className="font-bold text-2xl">3.4.</span> Seznam
                subdodavatelů:
              </p>
              <ul className="text-md font-semibold text-textDark list-disc ml-10">
                <li>Pipedrive OU | EU | Provoz</li>
                <li>MongoDB Limited | EU | Infrastruktura</li>
                <li>
                  Google Inc. | USA | Zpracování příchozích emailů, ankety
                </li>
                <li>SMTP2GO, Inc | EU | Odesílání transakčních emailů</li>
                <li>Vercel Inc. | EU | Infrastruktura</li>
                <li>Koyeb | EU | Infrastruktura</li>
              </ul>
              <p>
                <span className="font-bold text-2xl">3.5.</span> Poskytovatelé
                se sídlem mimo EU spadají pod EU-U.S. Data Privacy Framework.
              </p>
              <p>
                <span className="font-bold text-2xl">3.6.</span> Poskytovatel se
                zavazuje neposkytovat bez zvláštního, přímého souhlasu Uživatele
                jeho data třetím stranám ke komerčním účelům (např. zvlášť
                udělený souhlas pro předání údajů pro účely zpracování DPFO
                účetní firmou). Tento souhlas může Uživatel dát například
                zaškrtnutím formulářového prvku v aplikaci, v emailu, nebo jiné
                komunikaci s Poskytovatelem.
              </p>
              <p>
                <span className="font-bold text-2xl">3.7.</span> Ze strany
                Poskytovatele nedochází k automatickému individuálnímu
                rozhodování ve smyslu č. 22 GDPR.
              </p>
            </div>
            {/* Práva a povinnosti Uživatele */}
            <div className="flex flex-col gap-10">
              <h3>4. Práva a povinnosti Uživatele</h3>
              <p>
                <span className="font-bold text-2xl">4.1.</span> Uživatel má
                právo na přístup ke svým osobním údajům, právo na informaci o
                zpracování svých osobních údajů ke všem výše uvedeným účelům,
                právo na jejich opravu, právo na jejich likvidaci. Uživatel,
                pokud se domnívá, že jsou jeho osobní data zpracovávána
                protiprávně, má také právo požadovat na Poskytovateli vysvětlení
                a odstranění závadného stavu.
              </p>
              <p>
                <span className="font-bold text-2xl">4.2.</span> Požádá-li
                Uživatel o informaci o rozsahu či způsobu zpracování svých
                Osobních údajů, je mu Poskytovatel povinen tuto informaci předat
                neprodleně, nejpozději však do jednoho měsíce od obdržení
                žádosti Poskytovatelem na adrese info@shopr.cz.
              </p>
              <p>
                <span className="font-bold text-2xl">4.3.</span> Poskytovatel je
                oprávněn v případě opakované a nedůvodné žádosti o poskytnutí
                fyzické kopie zpracovávaných Osobních údajů účtovat přiměřený
                poplatek za administrativní náklady s tím spojené.
              </p>
            </div>
            {/* Práva a povinnosti Poskytovatele */}
            <div className="flex flex-col gap-10">
              <h3>5. Práva a povinnosti Poskytovatele</h3>
              <p>
                <span className="font-bold text-2xl">5.1.</span> Poskytovatel
                musí zajistit dostatečnou ochranu uživatelských dat, zejména
                skrze silná hesla, bezpečnostní postupy, šifrování apod.
              </p>
              <p>
                <span className="font-bold text-2xl">5.2.</span> V případě
                podezření z úniku uživatelských dat je poskytovatel povinnen
                uživatele neprodleně informovat o této skutečnosti na emailové
                adrese spojené s účtem uživatele.
              </p>
              <p>
                <span className="font-bold text-2xl">5.3.</span> Poskytovatel má
                právo zpracovávat údaje uživatele tak, jak je uvedeno v těchto
                podmínkách.
              </p>
            </div>
            {/* Smazání dat */}
            <div className="flex flex-col gap-10">
              <h3>6. Smazání dat</h3>
              <p>
                <span className="font-bold text-2xl">6.1.</span> Po ukončení
                poskytování plnění na základě Licenční smlouvy mezi
                Poskytovatelem a Uživatelem — typicky tím, že Uživatel zruší
                svůj účet — je Poskytovatel povinen vymazat data účtu Uživatele,
                pokud nemá povinnost uložit osobní údaje na základě zvláštního
                zákona.
              </p>

              <p>
                <span className="font-bold text-2xl">6.2.</span> Do čtyřiceti
                pěti (45) dnů od smazání účtu Poskytovatel vymaže data účtu
                Uživatele, a to i ze záloh aplikace.
              </p>
              <p>
                <span className="font-bold text-2xl">6.3.</span> Záznamy o
                činnosti Aplikace (logy), ve kterých mohou být i záznamy
                činnosti Uživatele v jeho účtu Poskytovatel maže do 180 dnů od
                zrušení účtu.
              </p>
              <p>
                <span className="font-bold text-2xl">6.4.</span> Poskytovatel po
                ukončení plnění na základy Licenční smlouvy uchovává následující
                data::
              </p>
              <ul className="text-md font-semibold text-textDark list-disc ml-10">
                <li>
                  Emailová adresa majitele účtu (pouze pro případný nutný
                  kontakt, nebude použita pro žádné marketingové účely).
                </li>
                <li>
                  Korespondence a online rozhovory, které Uživatel měl při
                  řešení jeho dotazů na podporu a to pomocí emailu, nebo online
                  nástroje pro online chat (např. Olark, Facebook Messanger).
                </li>
                <li>
                  Pokud Uživatel dobrovolně odpoví na anketu Poskytovatele,
                  zůstanou takové odpovědi uchovány i po smazání účtu.
                </li>
              </ul>
            </div>
            {/* Ostatní */}
            <div className="flex flex-col gap-10">
              <h3>7. Ostatní</h3>
              <p>
                <span className="font-bold text-2xl">7.1.</span> Uživatel se
                zavazuje neprodleně ohlašovat všechny jemu známé skutečnosti,
                které by mohly nepříznivě ovlivnit řádné a včasné plnění závazků
                vyplývajících z těchto podmínek a poskytnout Poskytovateli
                součinnost nezbytnou pro plnění těchto podmínek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
