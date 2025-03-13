import React from "react";

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
            <h4>GDPR</h4>
            <h2 className="mt-2 my-5">Jak nakládáme s vašimi údaji?</h2>
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

            <p className="font-medium text-textDark text-lg col-span-2">
              Doufáme, že se Vám s námi bude spolupracovat dobře. Snažíme se
              službu neustále zlepšovat a posouvat kupředu, avšak ne vždy to jde
              tak rychle, jak bychom si jen přáli. To už je ale život a určitě
              to všichni známe. Už teď asi nezbývá nic jiného, než si navzájem
              popřát hodně štěstí a dát Vám poděkování za to, že nám věříte.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
