import Image from "next/image";
import React from "react";
import heroImg from "./kava-caj.jpg";
import tea from "./tea.jpg";
import coffee from "./coffee.jpg";
import wine from "./wine.jpg";
import chocolate from "./coco.jpg";
import teaDrink from "./tea-drink.jpg";

import ReviewGrid from "@/app/components/Grids/ReviewGrid";
import { CTA } from "@/app/components/CTA/CTA";
import { ExamplesGrid } from "@/app/components/Grids/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { ImageTextCheckmarks } from "@/app/components/ImageTextSection/ImageTextCheckmarks";
import { BlockHeroSection } from "@/app/components/HeroSections/BlockHeroSection";
import { HeadingCenter } from "@/app/components/Heading/HeadingCenter";
import { HowDoesItWork } from "@/app/components/HowDoesItWork";
import { BlackDivider } from "@/app/components/BlackDivider";

//Metadata
export const metadata = {
  title: "Shopr: Doplňky stravy a suplementy",
  description:
    "Doplňky stravy a fitness suplementy se musí brát s určitou pravidelností. Zařiďte si skrze nás pravidelné objednávky a mějte je vždy při ruce!",
};

export default function Supplements() {
  return (
    <>
      <BlockHeroSection
        headingOne={"Zařiďte si"}
        headingRed={"pravidelné objednávky"}
        headingThree={"čaje, kávy a jiných potěšení"}
        text={`Už nikdy nezapomeňte na svou oblíbenou kávu, čaj nebo pochoutky! S naším chytrým systémem pravidelných objednávek si zajistíte, že vám zásoby nikdy nedojdou. Objednávejte pohodlně a bez starostí na vybraných e-shopech a my se postaráme o vše ostatní. `}
        buttonText={"Vytvořit bezplatný uživatelský účet"}
      >
        <Image
          src={heroImg}
          alt="hero"
          className="lg:aspect-auto aspect-[3/2] col-span-2 object-cover object-center animate-fall-left-noBounce lg:rounded-none lg:shadow-none lg:mb-0 rounded-md shadow-lg mb-5"
        />
      </BlockHeroSection>
      <BlackDivider>
        <>
          <div className="max-w-wrapper lg:flex-row flex-col gap-10 lg:gap-0 w-full flex items-center justify-evenly">
            <p className="text-white text-2xl">Čaj</p>
            <p className="text-white text-2xl">Káva</p>
            <p className="text-white text-2xl">Víno</p>
            <p className="text-white text-2xl">Koření</p>
            <p className="text-white text-2xl">Čokoláda</p>
            <p className="text-white text-2xl">Sladkosti</p>
          </div>
        </>
      </BlackDivider>
      <TextSection
        subHeading={"Pravidelné objednávky"}
        heading={"Zásoba kvalitních surovin bez starost"}
        text={`Užijte si pohodlí pravidelných objednávek a mějte vždy po ruce svou oblíbenou kávu, čaj nebo zdravé pochoutky. S automatickou zásobou se nemusíte obávat, že vám dojde ranní dávka kofeinu nebo oblíbený bylinný čaj na večerní relaxaci. Pravidelný přísun kvalitních surovin vám pomůže udržet vyvážený životní styl a zajistí, že si kdykoli dopřejete to, co máte rádi. Vyhněte se zbytečnému stresu z prázdných zásob a nechte si své oblíbené produkty doručovat pohodlně až k vám domů – bez starostí, vždy včas a přesně podle vašich potřeb.`}
      />

      <ExamplesGrid
        headingOne={"Čaj"}
        textOne={`Objevte svět prémiových čajů s pravidelnou dodávkou přímo k vám domů. Ať už preferujete zelený čaj pro jeho antioxidační účinky, bylinkové směsi pro relaxaci, nebo černý čaj pro povzbuzení, zajistěte si vždy čerstvou zásobu. S pravidelným doručováním už nikdy nezůstanete bez svého oblíbeného šálku.`}
        imageOne={tea}
        headingTwo={"Káva"}
        textTwo={`Nechte si doručovat čerstvě praženou kávu bez starostí. Od aromatické zrnkové kávy po kvalitní mletou směs – zajistěte si pravidelný přísun energie a chuti. Díky automatickým objednávkám už nikdy nezůstanete bez dokonalého espressa nebo krémového cappuccina.`}
        imageTwo={coffee}
        headingThree={"Víno"}
        textThree={`Dopřejte si sklenku kvalitního vína, kdykoli budete chtít. Ať už preferujete červené, bílé nebo šumivé, pravidelná objednávka vám zajistí vždy zásobu pro každou příležitost. Užijte si pohodlí automatického doručování a objevujte nové chutě bez starostí.`}
        imageThree={wine}
        headingFour={"Sladkosti"}
        textFour={`Potěšte své chuťové pohárky pravidelnou dávkou sladkého potěšení. Proteinové tyčinky, zdravé sušenky či lahodné čokolády – doplňte svou zásobu a užijte si sladké momenty bez přerušení. S naší službou si zajistíte oblíbené dobroty vždy po ruce.`}
        imageFour={chocolate}
      />

      <ImageTextCheckmarks
        subHeading={"Proč si to nezjednodušit?"}
        heading={"Nákupy nechte na nás"}
        text={`Zapomeňte na starosti s pravidelnými objednávkami – my se o ně postaráme za vás. Díky automatickému zásobování už nikdy nebudete muset řešit, zda vám dochází oblíbená káva, čaj nebo doplňky stravy. Užijte si pohodlí a věnujte svůj čas tomu, co je pro vás opravdu důležité.`}
        checkOne={"Už nikdy nezapomenete objednat"}
        checkTwo={"Vždy po ruce to, co potřebujete"}
        checkThree={"Méně starostí, více pohody "}
        buttonText={"Zaregistrovat se"}
        image={teaDrink}
      />
      <ReviewGrid />
      <HeadingCenter
        subheading={"Jak to funguje"}
        heading={"Tři kroky za 8 minut a máte hotovo"}
        textHeading={`Pravidelné objednávky mají v první řadě usnadňovat život. S naší
                  službou si tak zvládnete vytvořit toto předplatné na jakémkoliv
                  e-shopu jen chcete. Stačí splnit tři snadně kroky, které Vám nezaberou více než pár minut.`}
      />
      <HowDoesItWork />
      <CTA
        subHeading={"Užíváte doplňky stravy pravidelně?"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Už žádné zapomenuté objednávky nebo zbytečné starosti. S naší pravidelnou objednávkou dostanete své oblíbené 
            doplňky stravy z jakéhokoliv e-shopu vždy včas a bez námahy.`}
      />
    </>
  );
}
