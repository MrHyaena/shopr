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
            <h2 className="mt-2 my-5">Aplikace z našich vlastních potřeb</h2>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <p className="font-medium text-textDark text-lg col-span-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              dolores cumque maxime hic cum repellendus omnis esse nam
              laudantium minima soluta ex tempora debitis, harum deleniti
              dolorum incidunt delectus quos?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Pariatur dolores cumque maxime hic
              cum repellendus omnis esse nam laudantium minima soluta ex tempora
              debitis, harum deleniti dolorum incidunt delectus quos?
            </p>
            <Image
              src={img}
              style={{ objectFit: "cover" }}
              alt="story"
              className="rounded-lg shadow-lg max-h-[400px] w-auto self-center"
              width="auto"
              height="auto"
            />
            <div className="flex flex-col gap-5">
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur dolores cumque maxime hic cum repellendus omnis esse
                nam laudantium minima soluta ex tempora debitis, harum deleniti
                dolorum incidunt delectus quos? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique provident error facilis
                odit consequatur aut dolorum explicabo maxime, ipsam ad
                molestiae voluptatem excepturi quidem totam eaque, reiciendis
                quia placeat vero?
              </p>
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur dolores cumque maxime hic cum repellendus omnis esse
                nam laudantium minima soluta ex tempora debitis, harum deleniti
                dolorum incidunt delectus quos? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique provident error facilis
                odit consequatur aut dolorum explicabo maxime, ipsam ad
                molestiae voluptatem excepturi quidem totam eaque, reiciendis
                quia placeat vero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
