import "./globals.css";

import Newsletter from "./components/Newsletter";

//Images
import Image from "next/image";

import suplement from "./_img/suplement.png";
import clock from "./_img/clock.png";
import money from "./_img/money.png";
import stress from "./_img/nostress.png";

import PriceDescription from "./components/PriceDescription";

import heroImgTwo from "./_img/homepage/hero.jpg";
import fruit from "./_img/homepage/fruit.jpg";
import meat from "./_img/homepage/meat.jpg";
import minerals from "./_img/homepage/minerals.jpg";
import peanut from "./_img/homepage/peanut.jpg";
import box from "./_img/homepage/goal.jpg";

import Link from "next/link";
import { BlackDivider } from "./components/BlackDivider";
import { CTA } from "./components/CTA/CTA";
import FAQSmall from "./components/FAQ/FAQSmall";
import { ImageTextCheckmarks } from "./components/ImageTextSection/ImageTextCheckmarks";
import { ExamplesGrid } from "./components/Grids/ExamplesGrid";

//Metadata
export const metadata = {
  title: "Shopr: Předplatné suplementů z jakéhokoliv eshopu",
  description:
    "Zařídíme pro Vás pravidelnou objednávku suplementů a doplňků stravy z jakéhokoliv eshopu chcete.",
};

export default function Home() {
  function HeroSection() {
    return (
      <>
        <div className=" flex flex-col lg:grid grid-cols-5  items-center xl:justify-center justify-start overflow-x-hidden lg:p-0 p-5 py-10 lg:py-0">
          <div className="flex flex-col lg:items-start items-center justify-center h-full gap-5 lg:p-15  col-span-3 max-w-[800px] justify-self-center animate-scale-up-noBounce-delay">
            <h1 className="z-2 xl:hidden text-center">
              Předplatné
              <span className="text-quad">
                {" "}
                <br className="hidden lg:block" />
                oblíbených <br className="hidden lg:block" />
                suplementů <br className="hidden lg:block" />
              </span>{" "}
              odkudkoliv
            </h1>
            <h1 className="z-2 hidden xl:block">
              Pravidelná objednávka
              <span className="text-quad">
                {" "}
                <br />
                oblíbených suplementů <br />
              </span>{" "}
              z jakéhokoliv e-shopu chcete
            </h1>

            <p className="font-semibold text-textDark z-2 text-center lg:text-start">
              Vytvoříme pro Vás pravidelnou objednávku na jakémkoliv e-shopu s
              fitness zbožím jen chcete. Jestli Vás už nebaví škrabat zbytky
              proteinu z prázných obalů nebo doufat, že ještě najdete poslední
              kreatin někde pod postelí, pojďte to s námi zkusit.
            </p>
            <div className="flex gap-5 md:flex-row flex-col">
              <a href="https://app.shopr.cz/signup" className="buttonMiddle">
                Vyzkoušet aplikaci
              </a>
              <Link
                href="/jak-to-funguje"
                className="buttonMiddleWhite text-center"
              >
                Jak to funguje?
              </Link>
            </div>
            <p className="font-semibold text-textDark z-2 text-sm text-center lg:text-start">
              Celý uživatelský účet můžete vyzkoušet zdarma. Platby začínají až
              při aktivaci předplatného.
            </p>
          </div>

          <Image
            src={heroImgTwo}
            loading="eager"
            alt="hero"
            className="lg:block xl:max-h-[700px] h-full hidden col-span-2 object-cover object-left animate-fall-left-noBounce [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,10%_50%)]"
          />
        </div>
      </>
    );
  }

  function Benefits() {
    return (
      <>
        <div className="flex items-center justify-center lg:py-pad py-20 p-5">
          <div className="max-w-wrapper flex flex-col items-center justify-center gap-10">
            <div className="mx-auto text-center flex flex-col items-center xl:p-5">
              <p className="headingSmall">Co pro Vás můžeme udělat?</p>
              <h2 className="mt-2 my-5">
                Méně starostí, více času, konec prázdných balení
              </h2>
              <p className="max-w-[700px] font-medium text-textDark mb-5">
                My sami trávíme ve fitku velkou část celého týdne. Víme proto,
                jaké to je, když člověk odmaká tvrdý trénink, pak přijde unavený
                z práce, a na spoustu z nás čeká ještě druhá šichta doma s
                dětmi. Stresu je všude hromada a není se tak čemu divit, že
                často na nějaké nákupy zapomeneme. U suplementů to ale může
                znamenat ztrátu účinku, u jiných dobrot zase zkažený večer. Co
                kdybyste to nechali na nás?
              </p>
            </div>
            <div className="md:grid flex flex-col lg:grid-cols-4 md:grid-cols-2 gap-10 md:px-10">
              <div className="flex flex-col items-center justify-start max-w-[400px] gap-5 ">
                <Image src={clock} alt="Ušetříme Vám čas" className="xl:w-50" />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Ušetříme vám spoustu času
                  </h4>
                  <p className="text-textDark font-semibold">
                    Nemusíte trávit hodiny výběrem zboží po e-shopech, ani v
                    panice běhat do fyzických prodejen. U nás stačí, že
                    objednávku převezmete.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[400px] gap-5 ">
                <Image
                  src={money}
                  alt="Ušetříte s námi peníze"
                  className="xl:w-50"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Slevové kódy a ušetřené peníze
                  </h4>
                  <p className="text-textDark font-semibold">
                    Umíme využít vaše slevové kódy a zákaznické účty, takže
                    nepřijdete o žádnou akci.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[400px] gap-5  ">
                <Image
                  src={stress}
                  alt="Zbavíme Vás stresu"
                  className="xl:w-50"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Odstraníme nepotřebný stres
                  </h4>
                  <p className="text-textDark font-semibold">
                    Dnes nosíme v hlavě spoustu věcí. Nastavením pravidelných
                    objednávek se části z nich zbavíte bez toho, abyste se
                    museli omezovat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[400px] gap-5 ">
                <Image
                  src={suplement}
                  alt="Už nikdy nebudete řešit prázdné balení"
                  className="xl:w-50"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Zatočíme s prázdnými baleními
                  </h4>
                  <p className="text-textDark font-semibold">
                    Chybí suplementy, burákové máslo došlo a oheň je na střeše.
                    Něco je kritické, ostatní ne zas tolik. Všemu ale dokážeme
                    předejít.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <BlackDivider>
        <p className="text-textLight lg:text-3xl text-xl text-center">
          Regenerovat musí nejen tělo, ale i hlava. My Vám můžeme pomoci s
          obojím.
        </p>
      </BlackDivider>
      <Benefits />
      <ExamplesGrid
        subheading={"Umíme objednat všechno"}
        heading={"Od suplementů až po dobroty"}
        text={
          "Zvládneme opravdu všechno – od vitamínů a minerálů, které podporují imunitu, energii a celkové zdraví, přes proteiny pro regeneraci a svaly, až po zdravé dobroty, jako jsou sušenky, smoothie nebo palačinky. Stačí jen vybrat e-shop a produkty, které chcete pravidelně odebírat."
        }
        headingOne={"Vitamíny"}
        textOne={`Vitamíny jsou základním pilířem zdraví – podporují imunitu, dodávají energii a pomáhají proti únavě. Ať už jde o vitamín C pro obranyschopnost, D pro silné kosti nebo B-komplex pro správné fungování metabolismu, jejich pravidelný přísun udržuje tělo i mysl v kondici.`}
        imageOne={fruit}
        headingTwo={"Minerály"}
        textTwo={`Minerály hrají klíčovou roli v mnoha tělesných funkcích – hořčík pomáhá proti únavě a svalovým křečím, železo podporuje tvorbu červených krvinek a vápník je nezbytný pro pevné kosti. Jejich rovnováha je důležitá pro celkové zdraví a vitalitu, proto by neměly ve stravě chybět.`}
        imageTwo={minerals}
        headingThree={"Proteiny"}
        textThree={`Proteiny jsou stavebním kamenem svalů a zásadní součástí zdravého jídelníčku. Podporují regeneraci po fyzické námaze, pomáhají budovat svalovou hmotu a zasytí na dlouhou dobu. Jsou ideální jak pro sportovce, tak pro ty, kteří chtějí mít vyváženou a plnohodnotnou stravu.`}
        imageThree={meat}
        headingFour={"Něco dobrého"}
        textFour={`I při zdravém životním stylu si můžete dopřát něco chutného! Proteinové sušenky, smoothie nebo nadýchané palačinky dodají tělu potřebné živiny a zároveň uspokojí chuť na sladké. Skvělá volba pro všechny, kteří chtějí spojit potěšení s vyváženou výživou.`}
        imageFour={peanut}
      />
      <PriceDescription
        subHeading={"Jedna cena, žádné komplikace"}
        description={
          "Celý uživatelský účet, jeho nastavení a tvorba předplatných je zdarma. Platba probíhá pouze ve chvíli, kdy máte u nějakého e-shopu předplatné aktivované a my pro Vás zajišťujeme pravidelné objednávky."
        }
      />
      <ImageTextCheckmarks
        subHeading={"Proč si to nezjednodušit?"}
        heading={"Soustřeďte se na to podstatné"}
        text={`My vyznáváme dělání smysluplných věcí, do kterých se podle nás nepočítá stresování s objednáváním věcí, které potřebujeme na pravidelné bázi. Internetové obchody bohužel tuto možnost většinou nemají. My jsme se rozhodli, že na to půjdeme jinak a pomůžeme s tím každému, kdo by to jen potřeboval.`}
        checkOne={"Už nebudete muset myslet na to, že Vám něco dochází"}
        checkTwo={"Nikdy nebudete koukat na prázdné balení"}
        checkThree={"Více času na oblíbené aktivity a relax"}
        buttonText={"Vytvořte si u nás uživatelský účet a všechno vyzkoušejte"}
        image={box}
      />

      <FAQSmall />
      <CTA
        subHeading={"Využijte svůj čas smysluplně"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Věříme, že máte v živote lepší věci na práci než se neustále zabývat tím, že jste na něco zapomněli nebo že Vám někde něco chybí. Od toho jsme tu my. Sto korun je rozdíl mezi stresem a klidem.`}
      />
    </>
  );
}
