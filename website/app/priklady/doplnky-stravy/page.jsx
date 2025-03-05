import Image from "next/image";
import React from "react";
import heroImg from "./suplements-lp.jpg";
import ReviewGrid from "@/app/components/ReviewGrid";
import { CTA } from "@/app/components/CTA";
import { ExamplesGrid } from "@/app/components/ExamplesGrid";
import { TextSection } from "@/app/components/TextSection";
import { ImageTextLeftWhite } from "@/app/components/ImageTextSection/ImageTextLeftWhite";

export default function Supplements() {
  function HeroSection() {
    return (
      <>
        <div className="xl:min-h-[800px] pt-10 grid grid-cols-5 min-h-screen items-stretch justify-center overflow-x-hidden">
          <div className="flex flex-col items-start justify-center h-full gap-5 p-24 col-span-3 max-w-[900px] justify-self-center animate-scale-up-noBounce-delay">
            <h1 className="z-2">
              Mějte vaše
              <span className="text-quad">
                {" "}
                <br />
                doplňky stravy <br />
              </span>{" "}
              vždy po ruce
            </h1>

            <p className="text-xl font-semibold text-textDark z-2">
              Doplňky stravy a fitness suplementy se musí brát s určitou
              pravidelností. To Vám potvrdí každý, kdo se touto problematikou
              zabýval.
            </p>
            <div className="flex gap-5">
              <a
                href="https://app.shopr.cz/signup"
                className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out"
              >
                Založit uživatelský účet ZDARMA
              </a>
            </div>
          </div>

          <Image
            src={heroImg}
            alt="hero"
            className=" col-span-2 object-cover object-left animate-fall-left-noBounce"
          />
        </div>
      </>
    );
  }

  function BlackDivider({ text }) {
    return (
      <>
        <div className="flex flex-col items-center justify-center py-15 mb-15 bg-primary gap-10">
          <div className="max-w-wrapper w-full flex items-center justify-evenly gap-10">
            <p className="text-white text-2xl">Protein</p>
            <p className="text-white text-2xl">Vitamíny</p>
            <p className="text-white text-2xl">Minerály</p>
            <p className="text-white text-2xl">Tyčinky</p>
            <p className="text-white text-2xl">Přírodní doplňky stravy</p>
            <p className="text-white text-2xl">Nakopávače</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
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
      <ImageTextLeftWhite
        subHeading={"Doplňky stravy"}
        heading={"Fitness suplementy"}
        textOne={`Pokud se člověk začne zabývat cvičením a stravou, standardně
                  se dostane k suplementům, které pomáhají například s
                  regenerací, imunitou a dalšími věcmi. Vitamíny a jiné látky se
                  ale musí brát pravidelně.`}
        textTwo={`Každému z nás se již určitě stalo, že suplement došel. Co
                  potom? Model předplatného je zde ideální řešení!`}
        textButton={"Založit uživatelský účet"}
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
