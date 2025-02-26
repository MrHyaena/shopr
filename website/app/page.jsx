import "./globals.css";

import Newsletter from "./components/Newsletter";
import BlackDivider from "./components/BlackDivider";

//Images
import Image from "next/image";
import heroImg from "../public/hero-image.png";
import dogFood from "../public/dog-food.webp";
import supplements from "../public/image.jpg";
import drugs from "../public/leky.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxesStacked,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import PriceDescription from "./components/Price";
import ReviewOne from "./components/ReviewOne";
import ReviewGrid from "./components/ReviewGrid";
import heroImgTwo from "./_img/hero.jpg";

//Metadata
export const metadata = {
  title: "Shopr: Předplatné na každém e-shopu",
  description:
    "Objednáváte doplňky stravy, pečujete o zvířata, nebo třeba milujete čaj? Založte si pravidelné objednávky na jakémkoliv e-shopu jen chcete. Objednávky vyřídíme za Vás, vy si zboží jen převezmete.",
};

export default function Home() {
  function HeroSection() {
    return (
      <>
        <div className="pt-40 py-50 bg-linear-150 from-0% to-40% from-violet-100 to-white xl:min-h-[700px] min-h-screen flex items-center justify-center">
          <div className="max-w-wrapper">
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5">
                <h1 className="z-2">
                  Pravidelné objednávky
                  <span className="text-quad">
                    {" "}
                    <br />
                    na jakémkoliv <br />
                    e-shopu
                  </span>{" "}
                  jen chcete
                </h1>

                <p className="text-xl font-semibold text-textDark z-2">
                  Pravidelná objednávka ze všech e-shopů na internetu. Už nikdy
                  se nebudete muset dívat na prázdné balení od fitness
                  suplementů, kosmetiky, drogerie nebo čehokoliv jiného.
                </p>
                <button className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out">
                  Založit uživatelský účet
                </button>
              </div>

              <div className="justify-self-center">
                <Image
                  src={heroImg}
                  alt="hero-image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function HeroSectionTwo() {
    return (
      <>
        <div className="xl:min-h-[900px] grid grid-cols-5 min-h-screen items-stretch justify-center overflow-x-hidden">
          <div className="flex flex-col items-start justify-center h-full gap-5 p-24 col-span-3 max-w-[900px] justify-self-center animate-scale-up-noBounce-delay">
            <h1 className="z-2">
              Pravidelné objednávky
              <span className="text-quad">
                {" "}
                <br />
                na jakémkoliv e-shopu <br />
              </span>{" "}
              jen chcete
            </h1>

            <p className="text-xl font-semibold text-textDark z-2">
              Pravidelná objednávka ze všech e-shopů na internetu. Už nikdy se
              nebudete muset dívat na prázdné balení od fitness suplementů,
              kosmetiky, drogerie nebo čehokoliv jiného.
            </p>
            <button className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out">
              Založit uživatelský účet
            </button>
          </div>

          <Image
            src={heroImgTwo}
            alt="hero"
            className=" col-span-2 object-cover object-left animate-fall-left-noBounce [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%,20%_50%)]"
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
              <h4 className="headingSmall">Co z toho budete mít Vy</h4>
              <h2 className="mt-2 my-5">
                Méně starostí, více času, žádný nedostatek
              </h2>
              <p className="max-w-[600px] font-medium text-textDark text-lg mb-5">
                Známe to všichni. Víme, že potřebujeme něco nakoupit, ale
                odložíme to na večer. Následně na to zapomeneme, jen aby se
                tento cyklus opakoval dalších několik dní.
              </p>
            </div>
            <div className="flex justify-center gap-10">
              <div className="bg-primary shadow-[5px_5px_0px_0px] shadow-quad p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Ušetříe vám čas</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
                  </p>
                </div>
              </div>
              <div className="bg-primary shadow-[5px_5px_0px_0px] shadow-quad relative top-10 p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faMoneyBill1}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Ušetříme Vám peníze</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
                  </p>
                </div>
              </div>
              <div className="bg-primary p-10 shadow-[5px_5px_0px_0px] shadow-quad rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  className="text-white text-5xl"
                />

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Přestaňte se stresovat</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
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
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
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
        <div className=" py-30">
          <div className=" flex flex-col items-center justify-center">
            <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
              <h4>Proč to zkusit</h4>
              <h2 className="mt-2 my-5">
                Vyřešíme Vaše starosti s pravidelnou objednávkou
              </h2>
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                Často máme v našich životech věci, které potřebujeme na
                pravidelné bázi. To ale znamená, že musíme neustále přemýšlet
                nád tím, zda máme dané věci dost, kdy nám dojde a že jí
                potřebujeme objednat.
              </p>
              <p className="max-w-[600px] font-medium text-textDark text-lg mt-5">
                I když se představivosti meze nekladou, pojďme si teď ukázat
                příklady, u kterých můžete tyto starosti svěřit nám.
              </p>
            </div>
            <div className="bg-white self-stretch flex justify-center py-10">
              <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
                <div className="self-center justify-self-center">
                  <Image
                    src={supplements}
                    alt="supplements"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center items-start">
                  <div>
                    <h5>Doplňky stravy</h5>
                    <h3>Fitness suplementy</h3>
                  </div>

                  <p>
                    Pokud se člověk začne zabývat cvičením a stravou, standardně
                    se dostane k suplementům, které pomáhají například s
                    regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky
                    se ale musí brát pravidelně.
                  </p>
                  <p>
                    Každému z nás se již určitě stalo, že suplement došel. Co
                    potom?
                  </p>
                  <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer">
                    Založit účet
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 self-stretch flex justify-center py-10">
              <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
                <div className="flex flex-col gap-5 justify-center items-start">
                  <div>
                    <h5>Mazlíčci</h5>
                    <h3>Zvířecí žrádlo a pamlsky</h3>
                  </div>
                  <p>
                    Zvířata jsou součastí našich domovů od nepaměti. Když si
                    nějaké pořídíme, máme ale za nového člena domácnosti
                    odpovědnost v podobě krmení, venčení, změny podestýlky apod.
                  </p>
                  <p>
                    My můžeme zajistit, že pro vašeho miláčka budete mít vždy
                    plnou skříň dobrot.
                  </p>
                  <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer">
                    Založit účet
                  </button>
                </div>
                <div className="self-center justify-self-center">
                  <Image
                    src={dogFood}
                    alt="pets"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white self-stretch flex justify-center py-10">
              <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
                <div className="self-center justify-self-center">
                  <Image
                    src={supplements}
                    alt="supplements"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center items-start">
                  <div>
                    <h5>Doplňky stravy</h5>
                    <h3>Fitness suplementy</h3>
                  </div>

                  <p>
                    Pokud se člověk začne zabývat cvičením a stravou, standardně
                    se dostane k suplementům, které pomáhají například s
                    regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky
                    se ale musí brát pravidelně.
                  </p>
                  <p>
                    Každému z nás se již určitě stalo, že suplement došel. Co
                    potom?
                  </p>
                  <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer">
                    Založit účet
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 self-stretch flex justify-center py-10">
              <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
                <div className="flex flex-col gap-5 justify-center items-start">
                  <div>
                    <h5>Domácnost</h5>
                    <h3>Čistící prostředky</h3>
                  </div>
                  <p>
                    Pokud se člověk začne zabývat cvičením a stravou, standardně
                    se dostane k suplementům, které pomáhají například s
                    regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky
                    se ale musí brát pravidelně.
                  </p>
                  <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer">
                    Založit účet
                  </button>
                </div>
                <div className="self-center justify-self-center">
                  <Image
                    src={drugs}
                    alt="drugs"
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={500}
                  />
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
      <HeroSectionTwo />
      <BlackDivider
        text={"Odstresujte hlavu a nechte pravidelné nákupy na nás"}
      />
      <Benefits /> <ReviewGrid />
      <WhyToTry />
      <PriceDescription
        subHeading={"Jedna cena, žádné komplikace"}
        description={
          "Celý uživatelsý účet, jeho nastavení a tvorba předplatných je zdarma. Platba probíhá pouze ve chvíli, kdy máte u nějakého e-shopu předplatné aktivované a my pro Vás zajišťujeme pravidelné objednávky."
        }
      />
      <Newsletter />
    </>
  );
}
