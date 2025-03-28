import Image from "next/image";
import React from "react";
import heroImg from "./cat-dog.jpg";
import relax from "./pet-relax.jpg";

import dogToy from "./dog-toy.jpg";
import dogCare from "./dog-care.jpg";
import catVit from "./cat-vitamins.jpg";
import dogTreats from "./dog-treats.jpg";

import ReviewGrid from "@/app/components/Grids/ReviewGrid";
import { CTA } from "@/app/components/CTA/CTA";
import { ExamplesGrid } from "@/app/components/Grids/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { ImageTextCheckmarks } from "@/app/components/ImageTextSection/ImageTextCheckmarks";
import { BlockHeroSection } from "@/app/components/HeroSections/BlockHeroSection";
import { BlackDivider } from "@/app/components/BlackDivider";
import { FourRowGrid } from "@/app/components/Grids/FourRowGrid";
import { HeadingCenter } from "@/app/components/Heading/HeadingCenter";
import { CTABlock } from "@/app/components/CTA/CTABlock";
import PriceDescription from "@/app/components/PriceDescription";

//Metadata
export const metadata = {
  title: "Shopr: Péče o mazlíčky",
  description:
    "Naši zvířecí přátelé potřebují pravidelné opečovávání a krmení. Dejte jim to nejlepší s pravidelnou objednávkou.",
};

export default function Supplements() {
  return (
    <>
      <BlockHeroSection
        headingOne={"Dejte svým"}
        headingRed={"zvířecím kamarádům"}
        headingThree={"pravidelnou péči"}
        text={`Pokud máte doma nějaké zvířátko, pak ho pravděpodobně berete jako člena domácnosti. Takový kamarád ale potřebuje pravidelné opečovávání a krmení. Dejte jim to nejlepší s pravidelnou objednávkou.`}
        buttonText={"Vytvořte si bezplatný uživatelský účet"}
      >
        <Image
          src={heroImg}
          alt="hero"
          className="lg:aspect-auto aspect-[3/2] col-span-2 object-cover object-center animate-fall-left-noBounce lg:rounded-none lg:shadow-none lg:mb-0 rounded-md shadow-lg mb-5"
        />
      </BlockHeroSection>
      <BlackDivider>
        <div className="flex lg:flex-row flex-col items-center justify-evenly gap-10">
          <p className="text-white text-2xl">Masové kapsičky</p>
          <p className="text-white text-2xl">Hračky</p>
          <p className="text-white text-2xl">Pamlsky</p>
          <p className="text-white text-2xl">Granule</p>
          <p className="text-white text-2xl">Podestýlka</p>
          <p className="text-white text-2xl">Hygiena</p>
        </div>
      </BlackDivider>
      <HeadingCenter
        subheading={"Co pro Vás můžeme udělat?"}
        heading={"Pomůžeme Vám dát vašim miláčkům to nejlepší"}
        textHeading={`Že nevíte, s čím vším bychom Vám mohli pomoci? Pojďme se tedy společně podívat na několik příkladů, ve kterých určitě uvidíte nějaký potenciál.`}
      />
      <FourRowGrid
        headingOne={"Krmení"}
        textOne={`Správná výživa je klíčem k dlouhému a zdravému životu vašeho mazlíčka. Ať už máte psa, kočku nebo jiné zvířátko, kvalitní granule, kapsičky nebo konzervy by měly být součástí jejich každodenní stravy. Naše pravidelné objednávky vám zajistí, že nikdy nezůstanete bez zásob oblíbeného krmiva. S našimi službami můžete mít jistotu, že vaše zvířátko dostává vše potřebné pro správný růst a zdraví.`}
        imageOne={dogTreats}
        headingTwo={"Pravidelná péče"}
        textTwo={`Péče o zvířata zahrnuje nejen krmení a hračky, ale i pravidelnou údržbu jejich hygieny a pohodlí. Ať už jde o podestýlku pro hlodavce, kartáčování koček nebo hygienické potřeby pro psy, vše je součástí komplexní péče. Pravidelné objednávky vám umožní mít tyto produkty vždy po ruce, abyste mohli svému mazlíčkovi zajistit nejen pohodlí, ale i zdraví a pohodu.`}
        imageTwo={dogCare}
        headingThree={"Vitamíny"}
        textThree={`Stejně jako lidé, i naši mazlíčci potřebují doplňky stravy, které podporují jejich imunitní systém a zdraví. Vitamíny a minerály jsou důležité pro jejich vitalitu, krásnou srst a celkové zdraví. S pravidelnou objednávkou vitamínů a dalších doplňků můžete svému zvířeti poskytnout vše potřebné pro lepší pohodu a energii. Nezapomeňte na pravidelnou kontrolu, zda váš mazlíček dostává to správné množství.`}
        imageThree={catVit}
        headingFour={"Hračky"}
        textFour={`Hračky nejsou jen pro zábavu, ale také pro rozvoj a stimulaci vašich mazlíčků. Pomáhají jim udržovat fyzickou i psychickou kondici, ať už jde o interaktivní hračky pro psy nebo škrabadla pro kočky. Pravidelná obměna hraček je důležitá pro udržení jejich zájmu a zdravého pohybu. Naše služba vám pomůže zajistit, že vždy budete mít po ruce nové a kvalitní hračky pro vašeho mazlíčka.`}
        imageFour={dogToy}
      />
      <PriceDescription
        subHeading={"Pohodlí vašich mazlíčku za pár korun"}
        description={`Každý den nosíme v hlavě rodinu, práci, nákupy jídla, tankování do auta a mnoho dalšího. 
            Dovolte nám, abychom jeden z těchto úkolů převzali za Vás a ulehčili Vám tak každodenní fungování.`}
      />
      <ReviewGrid />

      <TextSection
        subHeading={"Jsme na tom stejně"}
        heading={"Zvíře je člen rodiny"}
        text={`Od našeho útlého věku jsme se pohybovali v domácnosti, kde bylo vždy přítomné nějaké zvíře. Nejprve pes,
             poté přibyla kočka, pak další raťafák a ještě jedna čičina. Společně jsme s nimi vyrůstali, obědvali, ale také jsme řešili nepříjemné a velice smutné situace.
              V průběhu dospívání jsme také přebrali nějaké povinnosti a postupně jsme zjistili, že péče o čtyřnohého kamaráda není jen o drbání a mazlení,
               ale je potřeba také pravidelně krmit, vyčesávat, chodit na procházky, věnovat jim pozornost a dělat spoustu dalších úkolů. Když je pak člověk dospělý,
                přibudou k tomu starosti běžného života. Je to prostě spousta stresu a my chceme ukázat, že se dá i tato činnost a mozková kapacita delegovat na někoho jiného.
            `}
      />
      <ImageTextCheckmarks
        subHeading={"Proč si to nezjednodušit?"}
        heading={"Vychutnejte si den bez starostí"}
        text={`V našich životech se pravidelné nákupy řadí spíše mezi starosti. Společně se zbytkem úkolů to dělá pěknou řádku povinností, se kterými si musíme zatěžkávat hlavu. Pro nás je ale důležité, aby lidé trávili čas smysluplně. S rodinou, koníčky, zálibami a relaxací. Proto tato služba také vznikla.`}
        checkOne={"Už nikdy nezapomenete objednat"}
        checkTwo={"Budete mít vaše doplňky stravy vždy po ruce"}
        checkThree={"Zbavíme Vás starostí a stresu"}
        buttonText={"Vytvořte si u nás uživatelský účet a všechno vyzkoušejte"}
        image={relax}
      />
      <CTABlock />
    </>
  );
}
