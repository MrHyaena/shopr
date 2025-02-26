import React from "react";
import Image from "next/image";
import person from "./dog-food.webp";

export default function ReviewOne() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="bg-slate-50 self-stretch flex justify-center py-30">
          <div className="flex max-w-[1300px] min-h-[600px] gap-10 items-center">
            <Image
              src={person}
              alt="person"
              className="rounded-lg shadow-lg w-auto h-[300px] "
            />

            <div className="flex flex-col gap-5 justify-center">
              <div>
                <h5>Petr Vomáčka - Zákazník</h5>
                <h4 className="text-textDark">Zvířecí žrádlo a pamlsky</h4>
              </div>
              <p className="italic">
                "Zvířata jsou součastí našich domovů od nepaměti. Když si nějaké
                pořídíme, máme ale za nového člena domácnosti odpovědnost v
                podobě krmení, venčení, změny podestýlky apod. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptatibus illo sint
                nihil, iste autem eius magni molestiae cumque, quo assumenda
                adipisci tenetur culpa laudantium magnam odio odit obcaecati
                asperiores pariatur."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
