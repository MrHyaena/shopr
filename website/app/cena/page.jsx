import React from "react";
import Newsletter from "../components/Newsletter";
import Question from "../components/Questions";
import PriceDescription from "../components/Price";

export const metadata = {
  title: "Shopr - Cena",
  description: "Nice Description",
};

export default function Price() {
  return (
    <>
      <div className="pt-30 bg-linear-150 from-0% to-40% from-violet-100 to-white">
        <PriceDescription
          subHeading={"Platba jen když používáte!"}
          description={
            "Platbu si z karty strháváme pouze za vyřízení objednávky v aktivním předplatném. Do té doby je vše plně zdarma."
          }
        />
      </div>

      <div className="flex flex-col justify-center items-center py-10 bg-primary">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <p className="text-center text-textLight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            neque? Maxime ea totam voluptas amet fuga minima velit, saepe
            architecto a nostrum nobis nemo sapiente hic harum odit molestias
            blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta et numquam repellendus totam explicabo error quidem ipsa quo,
            quaerat, accusantium, quae voluptates suscipit ex similique. Harum
            eius tempora optio officiis.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-30">
        <div className="max-w-wrapper grid grid-cols-2 items-center justify-start gap-20">
          <div className="flex flex-col justify-center items-center gap-2 text-center col-span-2">
            <h4>Otázky</h4>
            <h3>Jak to s platbami funguje?</h3>
          </div>

          <Question
            heading={"Můžu platbu kdykoliv zrušit?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
          <Question
            heading={"Je omezený počet předplatných?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
          <Question
            heading={"Kdo spravuje mé platební údaje?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
          <Question
            heading={"Strhávají se platby automaticky?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
          <Question
            heading={"Můžu kdykoliv požádat o smazání údajů?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
          <Question
            heading={"Jak se počítá celková částka?"}
            answer={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere magnam quam voluptatem nesciunt autem fugiat debitis aliquam soluta nobis asperiores commodi adipisci illum sint reiciendis, voluptates sequi dignissimos voluptatibus?"
            }
          />
        </div>
      </div>
      <Newsletter />
    </>
  );
}
