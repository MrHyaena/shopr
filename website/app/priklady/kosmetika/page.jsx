import Image from "next/image";
import React from "react";
import heroImg from "./cosmetics.jpg";
import cosmeticsSet from "./cosmetics-set.jpg";
import clean from "./clean.jpg";
import hydro from "./hydro.jpg";
import refeed from "./refeed.jpg";
import protect from "./protect.jpg";

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
import { BlackDivider } from "@/app/components/BlackDivider";

export default function Supplements() {
  return (
    <>
      <BlockHeroSection
        headingOne={"Zdravá pleť"}
        headingRed={"začíná"}
        headingThree={"pravidelnou péčí"}
        text={`Skvělá pleť si žádá nejen kvalitní produkty, ale také pravidelnou péči. Správná rutina pomáhá udržet pleť hydratovanou, svěží a chráněnou před vnějšími vlivy. Dopřejte své pokožce péči, kterou si zaslouží – bez zbytečných výpadků!`}
        buttonText={"Zaregistrujte si u nás uživatelský účet"}
      >
        <Image
          src={heroImg}
          alt="hero"
          className="lg:aspect-auto aspect-[3/2] col-span-2 object-cover object-left animate-fall-left-noBounce lg:rounded-none lg:shadow-none lg:mb-0 rounded-md shadow-lg mb-5"
        />
      </BlockHeroSection>
      <BlackDivider>
        <>
          <div className="flex lg:flex-row flex-col items-center justify-evenly gap-10">
            <p className="text-white text-2xl">Hydratace</p>
            <p className="text-white text-2xl">Regenerace</p>
            <p className="text-white text-2xl">Péče</p>
            <p className="text-white text-2xl">Krása</p>
            <p className="text-white text-2xl">Výživa</p>
            <p className="text-white text-2xl">Zdraví</p>
          </div>
        </>
      </BlackDivider>

      <ImageTextCheckmarks
        subHeading={"Proč si to nezjednodušit?"}
        heading={"Nechte pravidelný nákup kosmetiky na nás!"}
        text={`Už se nikdy nemusíte starat o to, zda máte dostatek své oblíbené kosmetiky. Naše pravidelná objednávka Vám zajistí, že vaše pleť bude vždy dostávat tu nejlepší péči, kterou potřebuje.`}
        checkOne={"Konec prázdným krabičkám a překvapenému výrazu"}
        checkTwo={"Vaše pleť vždy dostane to nejlepší"}
        checkThree={"Bez starostí a zbytečného stresu"}
        buttonText={"Vytvořte si u nás účet"}
        image={cosmeticsSet}
      />
      <HeadingCenter
        subheading={"Kompletní péče o pleť s jedním předplatným"}
        heading={"Pravidelný přísun kosmetiky pro zdravou a krásnou pleť"}
        textHeading={`Od důkladného čištění až po ochranu před škodlivými vlivy. S našimi pravidelnými dodávkami můžete mít jistotu, že vaše pleť dostává pravidelnou péči, kterou si zaslouží, ať už jde o hydrataci, výživu nebo ochranu před slunečním zářením. Zjednodušte si každodenní rutinu a užívejte si krásnou pleť každý den.`}
      />
      <FourRowGrid
        headingOne={"Čištění "}
        textOne={`Základ zdravé a krásné pleti spočívá v důkladném čištění. Každý den je pokožka vystavena nečistotám, prachu a zbytkům make-upu, které mohou ucpávat póry a způsobovat nedokonalosti. Správné čištění pomáhá odstranit tyto nečistoty, osvěžit pleť a připravit ji na další kroky péče. Jemné čisticí gely, pěny nebo micelární vody jsou klíčem k čisté a zářivé pleti.`}
        imageOne={clean}
        headingTwo={"Hydratace "}
        textTwo={`Dostatečná hydratace je nezbytná pro udržení pružnosti a zdravého vzhledu pleti. Ať už máte suchou, mastnou nebo smíšenou pleť, hydratační krémy a séra pomáhají udržet správnou rovnováhu vlhkosti a chrání pleť před vysoušením. Pravidelná hydratace pomáhá zpomalit známky stárnutí, zklidnit podráždění a dodat pleti přirozený jas.`}
        imageTwo={hydro}
        headingThree={"Výživa "}
        textThree={`Pleť potřebuje nejen hydrataci, ale i hloubkovou výživu. Pleťová séra, oleje a masky dodávají pokožce cenné vitamíny, antioxidanty a aktivní látky, které podporují regeneraci a pevnost. Výživné složky, jako jsou kyselina hyaluronová, kolagen nebo rostlinné extrakty, pomáhají bojovat proti stárnutí a udržovat pleť zdravou a zářivou.`}
        imageThree={refeed}
        headingFour={"Ochrana"}
        textFour={`Každodenní ochrana pleti je klíčová pro její dlouhodobé zdraví. Sluneční záření, znečištění a modré světlo mohou způsobovat předčasné stárnutí a poškození pokožky. Používání krémů s SPF a antioxidanty pomáhá chránit pleť před škodlivými vlivy a udržovat ji svěží a mladistvou. Ochrana je posledním, ale neméně důležitým krokem v rutině péče o pleť.`}
        imageFour={protect}
      />

      <ReviewGrid />
      <PriceDescription
        subHeading={"Vaše pohodlí je naše starost"}
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
