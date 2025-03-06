import Image from "next/image";
import React from "react";
import heroImg from "./cosmetics.jpg";
import ReviewGrid from "@/app/components/Grids/ReviewGrid";
import { CTA } from "@/app/components/CTA/CTA";
import { ExamplesGrid } from "@/app/components/Grids/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { ImageTextCheckmarks } from "@/app/components/ImageTextSection/ImageTextCheckmarks";
import { BlockHeroSection } from "@/app/components/HeroSections/BlockHeroSection";
import { FourRowGrid } from "@/app/components/Grids/FourRowGrid";
import { HeadingCenter } from "@/app/components/Heading/HeadingCenter";
import ReviewOne from "@/app/components/ReviewOne";
import PriceDescription from "@/app/components/PriceDescription";

export default function Supplements() {
  function BlackDivider({ text }) {
    return (
      <>
        <div className="flex flex-col items-center justify-center py-15 mb-15 bg-primary gap-10">
          <div className="max-w-wrapper w-full">
            <div className="flex items-center justify-evenly gap-10">
              <p className="text-white text-2xl">Protein</p>
              <p className="text-white text-2xl">Vitamíny</p>
              <p className="text-white text-2xl">Minerály</p>
              <p className="text-white text-2xl">Tyčinky</p>
              <p className="text-white text-2xl">Přírodní doplňky stravy</p>
              <p className="text-white text-2xl">Nakopávače</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BlockHeroSection
        headingOne={"Mějte vaše"}
        headingRed={"doplňky stravy"}
        headingThree={"vždy po ruce"}
        text={`Doplňky stravy a fitness suplementy se musí brát s určitou pravidelností. To Vám potvrdí každý, kdo se touto problematikou zabýval.`}
        buttonText={"Vytvořit uživatelský účet ZDARMA"}
      >
        <Image
          src={heroImg}
          alt="hero"
          className=" col-span-2 object-cover object-left animate-fall-left-noBounce"
        />
      </BlockHeroSection>
      <BlackDivider />
      <HeadingCenter
        subheading={"Co pro Vás můžeme udělat?"}
        heading={"Pomůžeme Vám dát vašim miláčkům to nejlepší"}
        textHeading={`Že nevíte, s čím vším bychom Vám mohli pomoci? Pojďme se tedy společně podívat na několik příkladů, ve kterých určitě uvidíte nějaký potenciál.`}
      />
      <ImageTextCheckmarks
        subHeading={"Proč si to nezjednodušit?"}
        heading={"Jsou důležitější věci než pravidelné nákupy"}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Inventore necessitatibus repellat quos labore hic soluta vero
                            blanditiis, tempore earum quis atque perspiciatis deleniti eos
                            corrupti reiciendis id suscipit dicta adipisci?`}
        checkOne={"Už nikdy nezapomenete objednat"}
        checkTwo={"Budete mít vaše doplňky stravy vždy po ruce"}
        checkThree={"Zbavíme Vás starostí a stresu"}
        buttonText={"Zaregistrovat se"}
        image={heroImg}
      />
      <HeadingCenter
        subheading={"Co pro Vás můžeme udělat?"}
        heading={"Pomůžeme Vám dát vašim miláčkům to nejlepší"}
        textHeading={`Že nevíte, s čím vším bychom Vám mohli pomoci? Pojďme se tedy společně podívat na několik příkladů, ve kterých určitě uvidíte nějaký potenciál.`}
      />
      <FourRowGrid
        headingOne={"Krmení"}
        textOne={`Správná výživa je klíčem k dlouhému a zdravému životu vašeho mazlíčka. Ať už máte psa, kočku nebo jiné zvířátko, kvalitní granule, kapsičky nebo konzervy by měly být součástí jejich každodenní stravy. Naše pravidelné objednávky vám zajistí, že nikdy nezůstanete bez zásob oblíbeného krmiva. S našimi službami můžete mít jistotu, že vaše zvířátko dostává vše potřebné pro správný růst a zdraví.`}
        imageOne={heroImg}
        headingTwo={"Pravidelná péče"}
        textTwo={`Péče o zvířata zahrnuje nejen krmení a hračky, ale i pravidelnou údržbu jejich hygieny a pohodlí. Ať už jde o podestýlku pro hlodavce, kartáčování koček nebo hygienické potřeby pro psy, vše je součástí komplexní péče. Pravidelné objednávky vám umožní mít tyto produkty vždy po ruce, abyste mohli svému mazlíčkovi zajistit nejen pohodlí, ale i zdraví a pohodu.`}
        imageTwo={heroImg}
        headingThree={"Vitamíny"}
        textThree={`Stejně jako lidé, i naši mazlíčci potřebují doplňky stravy, které podporují jejich imunitní systém a zdraví. Vitamíny a minerály jsou důležité pro jejich vitalitu, krásnou srst a celkové zdraví. S pravidelnou objednávkou vitamínů a dalších doplňků můžete svému zvířeti poskytnout vše potřebné pro lepší pohodu a energii. Nezapomeňte na pravidelnou kontrolu, zda váš mazlíček dostává to správné množství.`}
        imageThree={heroImg}
        headingFour={"Hračky"}
        textFour={`Hračky nejsou jen pro zábavu, ale také pro rozvoj a stimulaci vašich mazlíčků. Pomáhají jim udržovat fyzickou i psychickou kondici, ať už jde o interaktivní hračky pro psy nebo škrabadla pro kočky. Pravidelná obměna hraček je důležitá pro udržení jejich zájmu a zdravého pohybu. Naše služba vám pomůže zajistit, že vždy budete mít po ruce nové a kvalitní hračky pro vašeho mazlíčka.`}
        imageFour={heroImg}
      />

      <ReviewGrid />
      <PriceDescription
        subHeading={"Pohodlí vašich mazlíčku za pár korun"}
        description={`Každý den nosíme v hlavě rodinu, práci, nákupy jídla, tankování do auta a mnoho dalšího. 
                  Dovolte nám, abychom jeden z těchto úkolů převzali za Vás a ulehčili Vám tak každodenní fungování.`}
      />
      <CTA
        subHeading={"Užíváte doplňky stravy pravidelně?"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Už žádné zapomenuté objednávky nebo zbytečné starosti. S naší pravidelnou objednávkou dostanete své oblíbené 
            doplňky stravy z jakéhokoliv e-shopu vždy včas a bez námahy.`}
      />
    </>
  );
}
