import React from "react";
import Image from "next/image";
import img from "./image.jpg";

export default function About() {
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
                  src={img}
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
                  src={img}
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
                  src={img}
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
                  src={img}
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

  return (
    <>
      <div className="bg-linear-175 from-0% to-40% from-violet-100 to-white flex justify-center items-start py-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className="flex flex-col items-center py-10">
            <h4>O nás</h4>
            <h2 className="mt-2 my-5">
              Aplikace vycházející z našich vlastních potřeb
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <p className="font-medium text-textDark text-lg col-span-2">
              Rádi bychom se Vám také trochu představili. Koneckonců není špatně
              vědět o základech, na kterých služba stojí. Takže kde jsou naše
              kořeny? Můžete je hledat přímo v posilovně. Zvedání těžkých věcí
              stále dokola je jeden z našich koníčků, který nás udržuje v
              provozu a kondici. Společně s tím se lae také zabýváme stravou a
              jejími doplňky, které mohou podporovat celkovou vitalitu a výkon.
              Když berete takový suplement, především ty z různých bylinek
              apod., je potřeba vydržet poměrně dlouhou dobu, než začnou něco
              dělat. A zde přichází problém.
            </p>
            <Image
              src={img}
              style={{ objectFit: "cover" }}
              alt="story"
              className="rounded-md shadow-lg max-h-[400px] w-auto self-center object-cover"
              width="auto"
              height="auto"
            />
            <div className="flex flex-col gap-5">
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                Kromě nějakých svalů máme totiž také problém s pravidelnými
                nákupy. Snažíme se být plně investovaní v naší práci a tak nějak
                už nezbývala mentální kapacita a pamět na dokupování potřebných
                věcí. Vždy jsme se k tomu dostali i týden a více poté, co nám
                daná látka došla. A to je, jak si jistě umíte předtsavit, dost
                pozdě.
              </p>
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                Na trhu jsme nenašli žádnou službu, která by tohle řešila.
                E-shopy zaměřené na suplementy standardně nákupy skrze
                předplatné nenabízejí. Rozhodli jsme se, že to zkusíme změnit a
                vytvoříme službu, která by s tím pomáhala nejen nám, ale i
                ostatním lidem se stejnými problému. V průběhu jsme si pak už
                domysleli, že by to šlo rozšířit na všechno možné - léky, krmení
                pro zvířata, materiál pro různé výtvarné koníčky, kávu a mnoho
                dalšího.
              </p>
            </div>
            <p className="font-medium text-textDark text-lg col-span-2">
              Doufáme, že se Vám s námi bude spolupracovat dobře. Snažíme se
              službu neustále zlepšovat a posouvat kupředu, avšak ne vždy to jde
              tak rychle, jak bychom si jen přáli. To už je ale život a určitě
              to všichni známe. Už teď asi nezbývá nic jiného, než si navzájem
              popřát hodně štěstí a dát Vám poděkování za to, že nám věříte.
            </p>
            <p className="font-medium text-textDark text-lg col-span-2">
              Takže...
            </p>
            <h3 className="mt-2 my-5 col-span-2 text-center mb-20">
              Děkujeme, budeme se na Vás těšit!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
