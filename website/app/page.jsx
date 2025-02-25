import "./globals.css";

import Newsletter from "./components/Newsletter";
import BlackDivider from "./components/BlackDivider";

//Images
import Image from "next/image";
import heroImg from "../public/hero-image.png";
import dogFood from "../public/dog-food.webp";
import supplements from "../public/image.jpg";
import drugs from "../public/leky.jpg";

export default function Home() {
  function HeroSection() {
    return (
      <>
        <div className="pt-40 py-40 bg-linear-150 from-0% to-40% from-violet-100 to-white xl:min-h-[600px] min-h-screen flex items-center justify-center">
          <div className="max-w-wrapper">
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5">
                <h1 className="z-2">
                  Založte si předplatné
                  <span className="text-quad">
                    {" "}
                    <br />
                    na jakémkoliv <br />
                    e-shopu
                  </span>
                  jen chcete
                </h1>

                <p className="text-xl font-semibold text-textDark z-2">
                  Pravidelná objednávka ze všech e-shopů na internetu. Už nikdy
                  se nebudete muset dívat na prázdné balení od fitness
                  suplementů, kosmetiky, drogerie nebo čehokoliv jiného.
                </p>
                <div className="flex z-2 bg-white gap-5 justify-start border border-slate-200 rounded-lg p-2">
                  <input
                    type="email"
                    placeholder="Zadejte email"
                    className="border-slate-300 p-3"
                  />
                  <button className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out">
                    Založit uživatelský účet
                  </button>
                </div>
              </div>

              <div className="">
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

  function Benefits() {
    return (
      <>
        <div className="flex items-center justify-center py-30">
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
              <div className="bg-primary shadow-lg p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <svg
                  className="w-15 h-15 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Ušetříe vám čas</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
                  </p>
                </div>
              </div>
              <div className="bg-primary shadow-lg relative top-10 p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <svg
                  className="w-15 h-15 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                    clip-rule="evenodd"
                  />
                  <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Ušetříme Vám peníze</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
                  </p>
                </div>
              </div>
              <div className="bg-primary p-10 shadow-lg rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <svg
                  className="w-15 h-15 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.972 11.517a.527.527 0 0 0-1.034-.105 1.377 1.377 0 0 1-1.324 1.01 1.467 1.467 0 0 1-1.4-1.009.526.526 0 0 0-1.015 0 1.467 1.467 0 0 1-2.737.143l-.049-.204.021-.146V9.369h2.304a2.632 2.632 0 0 0 2.631-2.632 2.678 2.678 0 0 0-2.654-2.632l-.526.022-.13-.369A2.632 2.632 0 0 0 13.579 2c-.461 0-.915.124-1.313.358L12 2.513l-.266-.155A2.603 2.603 0 0 0 10.422 2a2.632 2.632 0 0 0-2.483 1.759l-.13.37-.518-.024a2.681 2.681 0 0 0-2.66 2.632A2.632 2.632 0 0 0 7.264 9.37H9.61v1.887l-.007.09-.028.08a1.328 1.328 0 0 1-1.301.996 1.632 1.632 0 0 1-1.502-1.024.526.526 0 0 0-1.01.013 1.474 1.474 0 0 1-1.404 1.01 1.381 1.381 0 0 1-1.325-1.01.547.547 0 0 0-.569-.382h-.008a.526.526 0 0 0-.456.526v.446a10.012 10.012 0 0 0 10 10 9.904 9.904 0 0 0 7.067-2.94A10.019 10.019 0 0 0 22 11.966l-.028-.449ZM8.316 15.685a1.053 1.053 0 1 1 2.105 0 1.053 1.053 0 0 1-2.105 0Zm1.58 3.684a2.105 2.105 0 0 1 4.21 0h-4.21Zm4.736-2.631a1.052 1.052 0 1 1 0-2.105 1.052 1.052 0 0 1 0 2.105Z" />
                </svg>

                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <h4 className="text-white">Přestaňte se stresovat</h4>
                  <p className="text-white">
                    Ušetřete čas tím, že vaše pravidelné nákupy přehodíte na
                    nás.
                  </p>
                </div>
              </div>
              <div className="bg-primary shadow-lg relative top-10 p-10 rounded-lg flex flex-col items-center justify-center max-w-[300px] gap-5">
                <svg
                  className="w-15 h-15 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>

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
        <div className="flex items-center justify-center py-30">
          <div className="max-w-wrapper flex flex-col items-center justify-start gap-20">
            <div className="mx-auto text-center flex flex-col items-center">
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
            <div className="grid grid-cols-2 max-w-[1000px] gap-10">
              <div>
                <Image
                  src={supplements}
                  alt="supplements"
                  width={600}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div>
                  <h5>Doplňky stravy</h5>
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
                  potom?
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 max-w-[1000px] gap-10">
              <div className="flex flex-col gap-5 justify-center">
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
              </div>
              <div>
                <Image
                  src={dogFood}
                  alt="pets"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 max-w-[1000px] gap-10">
              <div>
                <Image
                  src={drugs}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div>
                  <h5>Zábava</h5>
                  <h3>Káva, čaj a víno</h3>
                </div>
                <p>
                  Zde asi není moc co vysvětlovat. Samozřejmě nedokážeme
                  objednat léky na předpis, nicméně i tak existuje spousta
                  přípravků, které jsou volně dostupné a je potřeba, abychom je
                  brali pravidelně.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 max-w-[1000px] gap-10">
              <div className="flex flex-col gap-5 justify-center">
                <div>
                  <h5>Domácnost</h5>
                  <h3>Čistící prostředky</h3>
                </div>
                <p>
                  Pokud se člověk začne zabývat cvičením a stravou, standardně
                  se dostane k suplementům, které pomáhají například s
                  regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky se
                  ale musí brát pravidelně.
                </p>
              </div>
              <div>
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
      </>
    );
  }

  function Price() {
    return (
      <>
        <div className="bg-white flex justify-center items-start py-30">
          <div className="max-w-wrapper flex flex-col items-center justify-start">
            <div className="bg-white px-4">
              <div className="mx-auto text-center flex flex-col items-center">
                <h4>Ceník</h4>
                <h2 className="mt-2 my-5">Jedna cena, žádné komplikace</h2>
                <p className="max-w-[600px] font-medium text-textDark text-lg">
                  Celý uživatelsý účet, jeho nastavení a tvorba předplatných je
                  zdarma. Platba probíhá pouze ve chvíli, kdy máte u nějakého
                  e-shopu předplatné aktivované a my pro Vás zajišťujeme
                  pravidelné objednávky.
                </p>
              </div>

              <div className="mt-5 max-w-[1200px] mx-auto flex flex-col items-center">
                <h2 className="text-5xl font-bold text-textDark text-center">
                  90 Kč
                </h2>
                <p className="text-lg text-center font-bold text-textDark mb-6">
                  za splněnou objednávku
                </p>
                <a href="https://buy.stripe.com/3cs01Z60caNUcEg288">
                  <button className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-105 transition-all ease-in-out">
                    Založit účet
                  </button>
                </a>

                <p className="text-sm font-semibold text-textMedium my-3">
                  Tlačítko vás přenese na formulář pro registraci uživatelského
                  účtu.
                </p>
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
      <BlackDivider
        text={"Odstresujte hlavu a nechte pravidelné nákupy na nás"}
      />
      <Benefits />
      <WhyToTry />
      <Price />
      <Newsletter />
    </>
  );
}
