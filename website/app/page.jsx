import "./globals.css";

import Newsletter from "./components/Newsletter";

//Images
import Image from "next/image";

import suplement from "./_img/suplement.png";
import clock from "./_img/clock.png";
import money from "./_img/money.png";
import stress from "./_img/nostress.png";

import catFood from "./_img/examples/cat-food.png";
import suplementy from "./_img/examples/suplementy.png";
import leky from "./_img/examples/leky.png";
import tea from "./_img/examples/tea.png";
import PriceDescription from "./components/PriceDescription";

import heroImgTwo from "./_img/homepage/hero.jpg";
import fruit from "./_img/homepage/fruit.jpg";
import meat from "./_img/homepage/meat.jpg";
import minerals from "./_img/homepage/minerals.jpg";
import peanut from "./_img/homepage/peanut.jpg";
import box from "./_img/homepage/box.jpg";

import Link from "next/link";
import { BlackDivider } from "./components/BlackDivider";
import { CTA } from "./components/CTA/CTA";
import FAQSmall from "./components/FAQ/FAQSmall";
import { ImageTextCheckmarks } from "./components/ImageTextSection/ImageTextCheckmarks";
import { ExamplesGrid } from "./components/Grids/ExamplesGrid";

//Metadata
export const metadata = {
  title: "Shopr: Předplatné na každém e-shopu",
  description:
    "Objednáváte doplňky stravy, pečujete o zvířata, nebo třeba milujete čaj? Založte si pravidelné objednávky na jakémkoliv e-shopu jen chcete.",
};

export default function Home() {
  function HeroSection() {
    return (
      <>
        <div className=" flex flex-col lg:grid grid-cols-5  items-stretch xl:justify-center justify-start overflow-x-hidden lg:p-0 p-5 py-10 lg:py-0">
          <div className="flex flex-col items-start justify-center h-full gap-5 lg:p-15  col-span-3 max-w-[1000px] justify-self-center animate-scale-up-noBounce-delay">
            <h1 className="z-2 xl:hidden">
              Předplatné
              <span className="text-quad">
                {" "}
                <br />
                oblíbených <br />
                suplementů <br />
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

            <p className="font-semibold text-textDark z-2">
              Vytvoříme pro Vás pravidelnou objednávku na jakémkoliv e-shopu s
              fitness zbožím jen chcete. Jestli Vás už nebaví škrabat zbytky
              proteinu z prázných obalů nebo doufat, že ještě najdete poslední
              kreatin někde pod postelí, pojďte to s námi zkusit.
            </p>
            <div className="flex gap-5 lg:flex-row flex-col">
              <a href="https://app.shopr.cz/signup" className="buttonMiddle">
                Vyzkoušet aplikaci
              </a>
              <Link href="/jak-to-funguje" className="buttonMiddleWhite">
                Jak to funguje?
              </Link>
            </div>
            <p className="font-semibold text-textDark z-2 text-sm">
              Celý uživatelský účet můžete vyzkoušet zdarma. Platby začínají až
              při aktivaci předplatného.
            </p>
          </div>

          <Image
            src={heroImgTwo}
            alt="hero"
            className="lg:block max-h-[700px] hidden col-span-2 object-cover object-left animate-fall-left-noBounce [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,15%_50%)]"
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
            <div className="mx-auto text-center flex flex-col items-center p-5">
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
            <div className="lg:grid flex flex-col lg:grid-cols-4 md:grid-cols-2 gap-10">
              <div className="flex flex-col items-center justify-start max-w-[300px] gap-5">
                <Image src={clock} alt="Ušetříme Vám čas" />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Ušetříme vám spoustu času
                  </h4>
                  <p className="text-textDark font-semibold">
                    Nemusíte trávit hodiny výběrem zboží po e-shopech, ani v
                    panice běhat do fyzických prodejen. S námi stačí, že si
                    objednávku převezmete.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[300px] gap-5">
                <Image src={money} alt="Ušetříte s námi peníze" />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Zachráníme peníze, podržíme budget
                  </h4>
                  <p className="text-textDark font-semibold">
                    Když nakupujeme, standardně do našich košíků přihazujeme i
                    zbytečnosti. S naší službou budete mít budget pod kontrolou.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[300px] gap-5">
                <Image src={stress} alt="Zbavíme Vás stresu" />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-textDark text-3xl">
                    Odstraníme nepotřebný stresu
                  </h4>
                  <p className="text-textDark font-semibold">
                    Dnes nosíme v hlavě spoustu věcí. Nastavením pravidelných
                    objednávek se části z nich zbavíte bez toho, abyste se
                    museli omezovat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[300px] gap-5">
                <Image
                  src={suplement}
                  alt="Už nikdy nebudete řešit prázdné balení"
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

  function WhyToTry() {
    return (
      <>
        <div className=" flex flex-col items-center justify-center pt-30">
          <div className="max-w-wrapper mx-auto text-center flex flex-col items-center p-5 lg:p-0">
            <p className="headingSmall">Příklady</p>
            <h2 className="mt-2 my-5">Nechte se inspirovat!</h2>
            <p className="max-w-[600px]">
              Máme v našich životech spoustu věcí, u kterých si někdy ani
              neuvědomujeme, že je potřebujeme na pravidelné bázi.
            </p>
            <p className="max-w-[600px] mt-5">
              Nevíte, s čím bychom Vám mohli pomoct? Nechte se inspirovat!
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-10 ">
          <div className="bg-white self-stretch flex justify-center py-10">
            <div className="lg:grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10 p-10">
              <div className="self-center justify-self-center">
                <Image
                  src={suplementy}
                  alt="Suplementy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col gap-5 justify-center items-start">
                <div>
                  <p className="text-lg font-bold text-quad">Doplňky stravy</p>
                  <h3>Fitness suplementy</h3>
                </div>

                <p>
                  Pokud se člověk začne zabývat cvičením a stravou, standardně
                  se dostane k suplementům, které pomáhají například s
                  regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky se
                  ale musí brát pravidelně.
                </p>
                <p>
                  Každému z nás se již určitě stalo, že suplement došel. Co
                  potom? Model předplatného je zde ideální řešení!
                </p>
                <a
                  href="https://app.shopr.cz/signup"
                  className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold p-3 text-textButton cursor-pointer"
                >
                  Založit uživatelský účet
                </a>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 self-stretch flex justify-center py-10">
            <div className="lg:grid flex flex-col-reverse  grid-cols-2 max-w-[1300px] min-h-[600px] gap-10 p-10">
              <div className="flex flex-col  gap-5 justify-center items-start">
                <div>
                  <p className="text-lg font-bold text-quad">Mazlíčci</p>
                  <h3>Zvířecí žrádlo a pamlsky</h3>
                </div>
                <p>
                  Zvířata jsou součástí našich domovů od nepaměti. Když si
                  nějaké pořídíme, získáme za nového člena domácnosti
                  odpovědnost v podobě krmení, venčení, změny podestýlky apod.
                </p>
                <p>
                  My můžeme zajistit, že pro vašeho miláčka budete mít vždy
                  plnou skříň dobrot a potřeb.
                </p>
                <a
                  href="https://app.shopr.cz/signup"
                  className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold p-3 text-textButton cursor-pointer"
                >
                  Založit uživatelský účet
                </a>
              </div>
              <div className="self-center justify-self-center">
                <Image src={catFood} alt="Mazlíčci" width={500} height={400} />
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch flex justify-center py-10">
            <div className="lg:grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10 p-10">
              <div className="self-center justify-self-center">
                <Image src={tea} alt="Káva a čaj" width={500} height={500} />
              </div>
              <div className="flex flex-col gap-5 justify-center items-start">
                <div>
                  <p className="text-lg font-bold text-quad">Dobroty</p>
                  <h3>Káva, čaj a jiné pochutiny</h3>
                </div>

                <p>
                  Káva je životabudič před cestou do kanceláře, čaj nás zase
                  naladí do klidu. Spousta lidí bez nich nevyleze z domu, takže
                  stabilní zásoba oblíbeného typu je naprostý základ fungování.
                </p>
                <p>
                  My pro vás zařídíme dávku tohoto potěšení na pravidelné bázi.
                </p>
                <a
                  href="https://app.shopr.cz/signup"
                  className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold p-3 text-textButton cursor-pointer"
                >
                  Založit uživatelský účet
                </a>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 self-stretch flex justify-center py-10">
            <div className="lg:grid flex flex-col-reverse grid-cols-2 max-w-[1300px] min-h-[600px] gap-10 p-10">
              <div className="flex flex-col gap-5 justify-center items-start">
                <div>
                  <p className="text-lg font-bold text-quad">Léky a zdraví</p>
                  <h3>Pravidelná objednávka léků</h3>
                </div>
                <p>
                  Stejně jako u suplementů, i u léků je často nutná
                  pravidelnost. Velká část z nich je dostupná v online
                  lékárnách, na kterých Vám můžeme zařídit předplatné a
                  zajistit, že je budete mít vždy po ruce.
                </p>
                <a
                  href="https://app.shopr.cz/signup"
                  className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer"
                >
                  Založit uživatelský účet
                </a>
              </div>
              <div className="self-center justify-self-center">
                <Image src={leky} alt="drugs" width={500} height={500} />
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
        headingFour={"Dobroty"}
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
