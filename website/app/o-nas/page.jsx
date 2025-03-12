import React from "react";
import Image from "next/image";
import img from "./image.jpg";

//Metadata
export const metadata = {
  title: "Shopr: O nás",
  description:
    "Příběhy jsou vždy důležité. My jsme se rozhodli, že Vám odprezentujeme i ten náš.",
};

export default function About() {
  return (
    <>
      <div className="bg-linear-175 from-0% to-40% from-violet-100 to-white flex justify-center items-start py-30 px-5 text-center lg:text-start">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className="flex flex-col items-center py-10">
            <h4>O nás</h4>
            <h2 className="mt-2 my-5">
              Aplikace vycházející z našich vlastních potřeb
            </h2>
          </div>

          <div className="lg:grid grid-cols-2 gap-10">
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
              className="rounded-md shadow-lg max-h-[400px] w-auto self-center object-cover my-10"
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
