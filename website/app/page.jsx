import "./globals.css";

import Newsletter from "./components/Newsletter";

//Images
import Image from "next/image";

import heroImg from "../public/hero-image.png";

import catFood from "./_img/examples/cat-food.png";
import suplementy from "./_img/examples/suplementy.png";
import leky from "./_img/examples/leky.png";
import tea from "./_img/examples/tea.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxesStacked,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import PriceDescription from "./components/PriceDescription";
import ReviewOne from "./components/ReviewOne";
import ReviewGrid from "./components/Grids/ReviewGrid";
import heroImgTwo from "./_img/hero.jpg";
import Link from "next/link";
import { BlackDivider } from "./components/BlackDivider";
import { CTA } from "./components/CTA/CTA";

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
        <div className="xl:min-h-[900px] pt-10 grid grid-cols-5 min-h-screen items-stretch justify-center overflow-x-hidden">
          <div className="flex flex-col items-start justify-center h-full gap-5 p-24 col-span-3 max-w-[900px] justify-self-center animate-scale-up-noBounce-delay">
            <h1 className="z-2">
              Předplatné
              <span className="text-quad">
                {" "}
                <br />
                na jakémkoliv e-shopu <br />
              </span>{" "}
              jen chcete
            </h1>

            <p className="text-xl font-semibold text-textDark z-2">
              Vytvoříme pro Vás předplatné na jakémkoliv e-shopu jen chcete. Už
              nikdy se tak nebudete muset dívat na prázdné balení od doplňků
              stravy, kosmetiky, drogerie nebo čehokoliv jiného.
            </p>
            <div className="flex gap-5">
              <a
                href="https://app.shopr.cz/signup"
                className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out"
              >
                Založit uživatelský účet ZDARMA
              </a>
              <Link
                href="/jak-to-funguje"
                className="bg-white cursor-pointer shadow-md shadow-slate-100 rounded-md px-4 py-3 text-textDark font-bold text-xl hover:scale-102 transition-all ease-in-out border border-slate-200"
              >
                Jak to funguje?
              </Link>
            </div>
          </div>

          <Image
            src={heroImgTwo}
            alt="hero"
            className=" col-span-2 object-cover object-left animate-fall-left-noBounce [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,15%_50%)]"
          />
        </div>
      </>
    );
  }

  function Benefits() {
    return (
      <>
        <div className="flex items-center justify-center py-40 pb-50">
          <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
            <div className="mx-auto text-center flex flex-col items-center">
              <p className="headingSmall">Proč si založit předplatné?</p>
              <h2 className="mt-2 my-5">
                Méně starostí, více času, žádný nedostatek
              </h2>
              <p className="max-w-[600px] font-medium text-textDark text-lg mb-5">
                Známe to všichni. Víme, že potřebujeme něco nakoupit, ale
                odložíme to na večer. Následně na to zapomeneme, jen aby se
                tento cyklus opakoval dalších několik dní. Například u některých
                cvičebních suplementů to může znamenat ztrátů účinku, a to jen
                kvůli tomu, že jsme prostě neměli kapacitu. Co kdybychom to
                vyřešili za Vás?
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
              <div className="bg-primary shadow-[5px_5px_0px_0px] shadow-quad p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Ušetříe vám spoustu času</h4>
                  <p className="text-white">
                    Nemusíte trávit hodiny výběrem zboží po e-shopech, ani v
                    panice běhat do fyzických prodejen
                  </p>
                </div>
              </div>
              <div className="bg-primary shadow-[5px_5px_0px_0px] shadow-quad relative top-10 p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faMoneyBill1}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">
                    Zachráníme peníze, držíme budget
                  </h4>
                  <p className="text-white">
                    Když nakupujeme, často do našich košíků přihazujeme i
                    zbytečnosti. S námi budete mít budget pod kontrolou.
                  </p>
                </div>
              </div>
              <div className="bg-primary p-10 shadow-[5px_5px_0px_0px] shadow-quad rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Přestanete se stresovat</h4>
                  <p className="text-white">
                    Dnes nosíme v hlavě spoustu věcí. Nastavením pravidelných
                    objednávek se části z nich zbavíte bez toho, abyste se
                    museli omezovat.
                  </p>
                </div>
              </div>
              <div className="bg-primary shadow-[5px_5px_0px_0px] shadow-quad relative top-10 p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Už Vám nebude nic chybět</h4>
                  <p className="text-white">
                    Chybí suplementy, pes nemá co jíst a káva nám došla. Něco je
                    kritické, ostatní ne zas tolik. Všemu ale dokážeme předejít.
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
          <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
            <p className="headingSmall">Příklady</p>
            <h2 className="mt-2 my-5">Nechte se inspirovat!</h2>
            <p className="max-w-[600px] font-medium text-textDark text-lg">
              Máme v našich životech spoustu věcí, u kterých si někdy ani
              neuvědomujeme, že je potřebujeme na pravidelné bázi.
            </p>
            <p className="max-w-[600px] font-medium text-textDark text-lg mt-5">
              Nevíte, s čím bychom Vám mohli pomoct? Nechte se inspirovat!
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-white self-stretch flex justify-center py-10">
            <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
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
            <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
              <div className="flex flex-col gap-5 justify-center items-start">
                <div>
                  <p className="text-lg font-bold text-quad">Mazlíčci</p>
                  <h3>Zvířecí žrádlo a pamlsky</h3>
                </div>
                <p>
                  Zvířata jsou součastí našich domovů od nepaměti. Když si
                  nějaké pořídíme, máme také za nového člena domácnosti
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
            <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
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
            <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
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
        <p className="text-textLight text-4xl text-center">
          Odstresujte hlavu a nechte starosti s pravidelnými nákupy na nás!
        </p>
      </BlackDivider>
      <Benefits /> <ReviewGrid />
      <WhyToTry />
      <PriceDescription
        subHeading={"Jedna cena, žádné komplikace"}
        description={
          "Celý uživatelský účet, jeho nastavení a tvorba předplatných je zdarma. Platba probíhá pouze ve chvíli, kdy máte u nějakého e-shopu předplatné aktivované a my pro Vás zajišťujeme pravidelné objednávky."
        }
      />
      <CTA
        subHeading={"Využijte svůj čas smysluplně"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Věříme, že máte v živote lepší věci na práci než se neustále zabývat tím, že jste na něco zapomněli nebo že Vám někde něco chybí. Od toho jsme tu my. Devadesát korun je rozdíl mezi stresem a klidem.`}
      />
    </>
  );
}
