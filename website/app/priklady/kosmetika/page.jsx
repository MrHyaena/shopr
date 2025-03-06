import Image from "next/image";
import React from "react";
import heroImg from "./cosmetics.jpg";
import ReviewGrid from "@/app/components/Grids/ReviewGrid";
import { CTA } from "@/app/components/CTA/CTA";
import { ExamplesGrid } from "@/app/components/Grids/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { ImageTextCheckmarks } from "@/app/components/ImageTextSection/ImageTextCheckmarks";
import { BlockHeroSection } from "@/app/components/HeroSections/BlockHeroSection";

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
      <ExamplesGrid
        headingOne={"Vitamíny"}
        textOne={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam facilis sequi recusandae laborum quidem. Sequi earum
                  reiciendis provident quaerat soluta veritatis.`}
        imageOne={heroImg}
        headingTwo={"Vitamíny"}
        textTwo={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam facilis sequi recusandae laborum quidem. Sequi earum
                  reiciendis provident quaerat soluta veritatis.`}
        imageTwo={heroImg}
        headingThree={"Vitamíny"}
        textThree={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam facilis sequi recusandae laborum quidem. Sequi earum
                  reiciendis provident quaerat soluta veritatis.`}
        imageThree={heroImg}
        headingFour={"Vitamíny"}
        textFour={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam facilis sequi recusandae laborum quidem. Sequi earum
                  reiciendis provident quaerat soluta veritatis.`}
        imageFour={heroImg}
      />
      <TextSection
        subHeading={"Příklady"}
        heading={"Nechte se inspirovat!"}
        text={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              ipsum, similique, suscipit, at perspiciatis deleniti id impedit
              placeat magni dicta eaque alias quibusdam facilis non? Quia quam
              laudantium adipisci minima.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Vitae ipsum, similique, suscipit, at
              perspiciatis deleniti id impedit placeat magni dicta eaque alias
              quibusdam facilis non? Quia quam laudantium adipisci minima.Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsum,
              similique, suscipit, at perspiciatis deleniti id impedit placeat
              magni dicta eaque alias quibusdam facilis non? Quia quam
              laudantium adipisci minima.`}
      />
      <ImageTextCheckmarks
        subHeading={"Proč si to zjendodušit?"}
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
