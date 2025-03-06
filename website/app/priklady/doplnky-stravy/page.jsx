import Image from "next/image";
import React from "react";
import heroImg from "./suplements-lp.jpg";
import fruit from "./fruit.jpg";
import minerals from "./minerals.jpg";
import meat from "./meat.jpg";
import peanut from "./peanut.jpg";
import relax from "./relax.jpg";

import ReviewGrid from "@/app/components/ReviewGrid";
import { ExamplesGrid } from "@/app/components/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { BlockHeroSection } from "@/app/components/HeroSections/BlockHeroSection";
import { BlackDivider } from "@/app/components/BlackDivider";
import { HowDoesItWork } from "@/app/components/HowDoesItWork";
import { HeadingCenter } from "@/app/components/Heading/HeadingCenter";
import { CTA } from "@/app/components/CTA/CTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { ImageTextCheckmarks } from "@/app/components/ImageTextSection/ImageTextCheckmarks";

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
        headingOne={"Mějte vaše"}
        headingRed={"doplňky stravy"}
        headingThree={"vždy po ruce"}
        text={`Doplňky stravy a fitness suplementy se musí brát s určitou pravidelností. To Vám potvrdí každý, kdo se touto problematikou zabýval. My můžeme zařídit to, že je budete mít vždy při ruce!`}
        buttonText={"Vytvořit uživatelský účet ZDARMA"}
      >
        <Image
          src={heroImg}
          alt="doplnky-stravy-hero"
          className=" col-span-2 object-cover object-left animate-fall-left-noBounce"
        />
      </BlockHeroSection>
      <BlackDivider>
        <div className="flex items-center justify-evenly gap-10">
          <p className="text-white text-2xl mt-5">Protein</p>
          <p className="text-white text-2xl mb-5">Vitamíny</p>
          <p className="text-white text-2xl mt-5">Minerály</p>
          <p className="text-white text-2xl mb-5">Tyčinky</p>
          <p className="text-white text-2xl mt-5">Přírodní doplňky stravy</p>
          <p className="text-white text-2xl mb-5">Nakopávače</p>
        </div>
      </BlackDivider>
      <TextSection
        subHeading={"Pravidelnost je základ"}
        heading={"Aneb konec prázdným balením!"}
        text={`Dodržování zdravého životního stylu a správné výživy není jen o volbě kvalitních produktů, ale hlavně o jejich pravidelném užívání. Vitamíny a minerály prospívají tělu jen tehdy, když je doplňujeme soustavně, proteiny jsou nejúčinnější při dlouhodobé podpoře svalového růstu a regenerace, a i zdravé pochoutky mají smysl, pokud jsou součástí vyváženého jídelníčku. Kolikrát už se vám ale stalo, že jste sáhli do skříně pro oblíbený doplněk a zjistili, že je balení prázdné? S pravidelnou zásobou už se nemusíte starat, jestli vám došly vitamíny, chybí minerály nebo zda si můžete dopřát svůj oblíbený proteinový shake. Doplňování výživy by nemělo být náhodné – udělejte z něj automatickou součást svého zdravého režimu a dopřejte tělu přesně to, co potřebuje, bez zbytečných výpadků!`}
      />

      <ExamplesGrid
        headingOne={"Vitamíny"}
        textOne={`Vitamíny jsou základním pilířem zdraví – podporují imunitu, dodávají energii a pomáhají proti únavě. Ať už jde o vitamín C pro obranyschopnost, D pro silné kosti nebo B-komplex pro správné fungování metabolismu, jejich pravidelný přísun udržuje tělo i mysl v kondici.`}
        imageOne={fruit}
        headingTwo={"Minerály"}
        textTwo={`Minerály hrají klíčovou roli v mnoha tělesných funkcích – hořčík pomáhá proti únavě a svalovým křečím, železo podporuje tvorbu červených krvinek a vápník je nezbytný pro pevné kosti. Jejich rovnováha je důležitá pro celkové zdraví a vitalitu, proto by neměly ve stravě chybět.`}
        imageTwo={minerals}
        headingThree={"Proteiny"}
        textThree={`Proteiny jsou stavebním kamenem svalů a zásadní součástí zdravého jídelníčku. Podporují regeneraci po fyzické námaze, pomáhají budovat svalovou hmotu a zasytí na dlouhou dobu. Jsou ideální jak pro sportovce, tak pro ty, kteří chtějí mít vyváženou a plnohodnotnou stravu.`}
        imageThree={meat}
        headingFour={"Ostatní dobroty"}
        textFour={`I při zdravém životním stylu si můžete dopřát něco chutného! Proteinové sušenky, smoothie nebo nadýchané palačinky dodají tělu potřebné živiny a zároveň uspokojí chuť na sladké. Skvělá volba pro všechny, kteří chtějí spojit potěšení s vyváženou výživou.`}
        imageFour={peanut}
      />
      <HeadingCenter
        subheading={"Jak to funguje"}
        heading={"Tři kroky za 8 minut a máte hotovo"}
        textHeading={`Pravidelné objednávky mají v první řadě usnadňovat život. S naší
            službou si tak zvládnete vytvořit toto předplatné na jakémkoliv
            e-shopu jen chcete. Stačí splnit tři snadně kroky, které Vám nezaberou více než pár minut.`}
      />
      <HowDoesItWork />
      <ImageTextCheckmarks
        subHeading={"Proč si to zjednodušit?"}
        heading={"Vychutnejte si den bez starostí"}
        text={`V našich životech se pravidelné nákupy řadí spíše mezi starosti. Společně se zbytkem úkolů to dělá pěknou řádku povinností, se kterými si musíme zatěžkávat hlavu. Pro nás je ale důležité, aby lidé trávili čas smysluplně. S rodinou, koníčky, zálibami a relaxací. Proto tato služba také vznikla.`}
        checkOne={"Už nikdy nezapomenete objednat"}
        checkTwo={"Budete mít vaše doplňky stravy vždy po ruce"}
        checkThree={"Zbavíme Vás starostí a stresu"}
        buttonText={"Vytvořte si u nás uživatelský účet a všechno vyzkoušejte"}
        image={relax}
      />

      <ReviewGrid />
      <CTA
        subHeading={"Užíváte doplňky stravy pravidelně?"}
        heading={"Nechte pravidelné objednávky na nás!"}
        text={`Už žádné zapomenuté objednávky nebo zbytečné starosti. S naší pravidelnou objednávkou dostanete své oblíbené 
            doplňky stravy z jakéhokoliv e-shopu vždy včas a bez námahy.`}
      />
    </>
  );
}
