import React from "react";
import { HeadingCenter } from "../components/Heading/HeadingCenter";

//Metadata
export const metadata = {
  title: "Shopr: O nás",
  description:
    "Příběhy jsou vždy důležité. My jsme se rozhodli, že Vám odprezentujeme i ten náš.",
};

export default function About() {
  return (
    <>
      <div className=" flex justify-center items-start py-30 px-5 text-center lg:text-start">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <HeadingCenter
            subheading={"GDPR"}
            textHeading={
              "Bezpečnost Vašich údajů je pro nás velice důležitá. Dáváme si pozor, co se s Vašimi údaji děje. Níže popisujeme způsob zpracování osobních údajů v naší službě."
            }
            heading={"Ochrana osobních údajů"}
          />
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
              <h3>1. Kdo jsme a jak nás kontaktovat</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Provozovatelem těchto stránek je fyzická osoba Martin Doležal,
                IČO 10796509, se sídlem Víta Nejedlého 666/18, Praha 3, dále jen
                jako správce. Správce lze kontaktovat na emailové adrese
                info@shopr.cz, případně poslat dopis na adresu Svatá Maří 131,
                Svatá Maří 38501. Na těchto kontaktech můžete uplatnit Vaše dále
                popsaná práva.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>2. Jaké osobní údaje zpracováváme a proč?</h3>

              <h4 className="text-primary">
                1. Jako správce osobních údajů o Vás zpracováváme osobní údaje v
                následujících případech:
              </h4>
              <h5 className="text-primary">1.1 Jste zákazník naší služby</h5>
              <div className="flex flex-col gap-3">
                <p>
                  V případě našich zákazníků zpracováváme následující osobní
                  údaje:
                </p>
                <p className="font-bold">
                  - Jméno a příjmení, email, telefonní číslo, adresa
                </p>
                <p>
                  a zpracováváme je pro následující účely, po níže uvedené doby
                  a z níže uvedneých právních důvodů
                </p>
              </div>
              <h5 className="text-primary">a) Plnění služby</h5>
              <p>
                Shopr funguje jako zprostředkovatelská služba, která za
                zákazníká vyřizuje objednávky v internetových obchodech. Abychom
                tak mohli činit, potřebujeme osobní a kontaktní údaje, se
                kterými vyplňujeme objednávkové formuláře. K tomu sbíráme
                souhlas před každou aktivací pravidelného předplatného v naší
                službě. Údaje zákazníka, který má vytvořené toto předplatné,
                uchováváme pouze v průběhu existence předplatného. Pokud
                zákazník předplatné smaže nebo zruší uživatelský účet,
                související údaje jsou okamžitě mazány z našich databází.
                Uživatel může také samostatně upravit jakékoliv údaje (kromě
                emailu), které se v jeho účtu nachází. Zákonným důvodem
                zpracování osobních údajů je plnění smlouvy mezi Zákazníkem a
                správcem.
              </p>
              <h5 className="text-primary">
                1.2 Jste návštěvník našich webových stránek
              </h5>
              <p>
                V případě, že jste návštěvník našich webových stránek, můžeme
                shromažďovat informace pro statistické účely, zejména informace
                o typu zařízení, z kterého naše webové stránky navštěvujete, o
                rozlišení obrazovky, o používaném internetovém prohlížeči a
                operačním systému, jaký máte nastaven jazyk, v jaký čas si naše
                webové stránky prohlížíte, kolik času na nich trávíte, jak se na
                nich chováte, jaké sekce Vás zajímají, apod. Tyto informace
                zpracováváme z důvodu zlepšování kvality a úrovně našich
                webových stránek, ale zároveň ctíme Vaše soukromí, proto je
                zpracováváme jako anonymizované bez možnosti přiřadit je ke
                konkrétní osobě.
              </p>
              <h5 className="text-primary">1.3 Kontaktujete nás</h5>
              <div className="flex flex-col gap-3">
                <p>
                  V případě, že nás sami kontaktujete e‑mailem nebo
                  prostřednictvím našich webových stránek, zpracováváme většinou
                  Vaše:
                </p>
                <p className="font-bold">
                  - Jméno a příjmení, telefon a e‑mail
                </p>
                <p>
                  V případě, že se nás na cokoliv dotážete, v rámci zákaznické
                  servisu Vám na dotaz odpovíme a výše uvedené údaje
                  zpracováváme po nezbytně nutnou dobu, nejdéle po dobu 1 roku,
                  přičemž po uplynutí doby zpracování budou osobní údaje vždy
                  smazány. Právním důvodem je provedení opatření přijatých před
                  uzavřením smlouvy na Vaši žádost.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h3>3. Kdo má k Vašim osobním údajům přístup?</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Vaše osobní údaje pro nás v rámci zvyšování kvality našich
                služeb a zajišťování některých činností budou zpracovávat níže
                uvedení zpracovatelé, kteří nám poskytují níže uvedené služby:
              </p>
              <h5 className="text-primary">a) Správa a marketing</h5>
              <p>PIPEDRIVE IRELAND LIMITED, reg. č. 651858</p>
              <h5 className="text-primary">b) Databáze</h5>
              <p>MongoDB, Inc.</p>

              <p>
                Berte ovšem prosím na vědomí, že s ohledem na měnící se osoby
                poskytovatelů některých služeb není možné uvést všechny současné
                a budoucí zpracovatele osobních údajů jmenovitě. Výše uvedený
                seznam zpracovatelů se proto může v čase měnit.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>4. Jaká máte práva ve vztahu ke svým osobním údajům?</h3>
              <h4 className="text-primary">
                1. Právo požadovat přístup k Vašim osobním údajům
              </h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Kdykoliv můžete požádat o naše potvrzení, zda Vaše osobní údaje
                jsou či nejsou zpracovávány, a pokud jsou, pak za jakými účely,
                v jakém rozsahu, komu jsou zpřístupněny, jak dlouho je budeme
                zpracovávat, zda máte právo na opravu, výmaz, omezení zpracování
                či vznést námitku, odkud jsme osobní údaje získali a zda dochází
                na základě zpracování Vašich osobních údajů k automatizovanému
                rozhodování, včetně případného profilování. Také máte právo
                získat kopii Vašich osobních údajů, přičemž první poskytnutí je
                bezplatné, za další poskytnutí pak můžeme požadovat přiměřenou
                úhradu administrativních nákladů, a sice ve výši 100 Kč.
              </p>
              <h4 className="text-primary">2. Právo na opravu</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Kdykoliv nás můžete požádat o opravu či doplnění Vašich osobních
                údajů, pokud by byly nepřesné či neúplné.
              </p>
              <h4 className="text-primary">3. Právo na výmaz</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Vaše osobní údaje musíme vymazat pokud již nejsou potřebné pro
                účely, pro které byly shromážděny nebo jinak zpracovány,
                zpracování je protiprávní, vznesete námitky proti zpracování a
                neexistují žádné převažující oprávněné důvody pro zpracování,
                ukládá nám to zákonná povinnost nebo odvoláte udělený souhlas se
                zpracováním.
              </p>
              <h4 className="text-primary">4. Právo na omezení zpracování</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Dokud nevyřešíme jakékoliv sporné otázky ohledně zpracování
                Vašich osobních údajů, nesmíme Vaše osobní údaje zpracovávat
                jinak než tak, že je budeme mít pouze uloženy a případně je
                můžeme použít pouze s Vaším souhlasem nebo z důvodu určení,
                výkonu nebo obhajoby právních nároků.
              </p>
              <h4 className="text-primary">5. Právo vznést námitku</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Můžete vznést námitku proti zpracování Vašich osobních údajů v
                případě, že se domníváte, že zpracováváme Vaše údaje nad zákonný
                rámec pro účely přímého marketingu nebo z důvodu oprávněného
                zájmu. Pokud vznesete námitku proti zpracování pro účely přímého
                marketingu, nebudou již Vaše osobní údaje pro tyto účely
                zpracovávány. V případě námitky proti zpracování z důvodu
                oprávněného zájmu bude tato námitka vyhodnocena a následně Vám
                sdělíme, zda jsme jí vyhověli a Vaše údaje nebudeme nadále
                zpracovávat, nebo že námitka nebyla důvodná a zpracování bude
                pokračovat. Každopádně po dobu, než bude námitka vyřešena, bude
                zpracování omezeno.
              </p>
              <h4 className="text-primary">6. Právo na přenositelnost</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Máte právo získat osobní údaje, které se Vás týkají, a které
                jsou zpracovávány automatizovaně a na základě souhlasu nebo
                smlouvy, ve strukturovaném, běžně používaném a strojově čitelném
                formátu, a právo na to, aby byly tyto osobní údaje předány přímo
                jinému správci.
              </p>
              <h4 className="text-primary">7. Právo podat stížnost</h4>
              <p className="font-medium text-textDark text-lg col-span-2">
                Pokud se domníváte, že nějakým způsobem porušujeme pravidla
                zpracovávání osobních údajů, máte právo podat stížnost k Úřadu
                pro ochranu osobních údajů.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>5. Jsou Vaše osobní údaje u nás v bezpečí?</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Pro zabezpečení Vašich údajů děláme maximum tak, aby byly
                zabezpečeny proti zneužití. V rámci naší činnosti budeme i
                nadále činit vše, co je v našich silách, aby k takovému
                bezpečnostnímu incidentu nedošlo, zejména zajistíme proškolení
                našich zaměstnanců a budeme vždy využívat pouze spolehlivá
                technická řešení. Vždy však existuje určité riziko, že by mohlo
                dojít k uniku Vašich osobních údajů či k jejich zneužití nebo
                ztrátě. Pokud by i přes naši nejlepší snahu došlo k
                bezpečnostnímu incidentu a tento incident by mohl znamenat
                vysoké riziko pro Vaše práva a svobody, neprodleně Vás o takové
                skutečnosti informujeme prostřednictvím poskytnuté e‑mailové
                adresy a zveřejněním takové informace na našich webových
                stránkách včetně veškerých nutných podrobností.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>6. Dozorový úřad</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Na naši činnost taktéž dohlíží Úřad pro ochranu osobních údajů,
                u kterého můžete v případě Vaší nespokojenosti podat stížnost.
                Více se dozvíte na internetových stránkách úřadu (www.uoou.cz).
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>7. Kontakt</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Pokud máte připomínky nebo stížnost týkající se ochrany osobních
                údajů nebo dotaz na osobu zodpovědnou za ochranu dat v naší
                službě či uplatňujete některé ze svých práv, kontaktujte nás na
                e‑mail info@shopr.cz - na Vaše dotazy či připomínky odpovíme co
                nejdříve, nejpozději však do 30 dnů.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>8. Změny zásad</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Naše zásady ochrany osobních údajů mohou být čas od času
                změněny. Vaše práva vyplývající z těchto zásad ochrany osobních
                údajů bez Vašeho výslovného souhlasu neomezíme. Všechny změny
                zásad ochrany osobních údajů zveřejníme na našich webových
                stránkách. Pokud se bude jednat o významné změny, budeme Vás
                informovat e‑mailem. Verze těchto zásad ochrany osobních údajů
                pro Vás archivujeme, abyste k nim měli i v budoucnu přístup.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h3>9. Účinnost</h3>
              <p className="font-medium text-textDark text-lg col-span-2">
                Tyto zásady ochrany osobních údajů vstupují v účinnost dne 1.
                ledna 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
