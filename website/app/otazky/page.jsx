import React from "react";
import FAQList from "../components/FAQ/FAQList";
import FAQQuestion from "../components/FAQ/FAQQuestion";

//Metadata
export const metadata = {
  title: "Shopr: FAQ",
  description:
    "Jestliže máte nějaké otázky, neváhejte se podívat do našeho FAQ. Pokud budete mít stále nějaký dotaz, nebojte se nám napsat.",
};

export default function Faq() {
  return (
    <>
      <div className="bg-zinc-50 flex justify-center items-start xl:pt-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="flex flex-col items-center py-10 text-center p-5">
            <h4>FAQ</h4>
            <h2 className="mt-2 my-5">Nejčastější otázky na jednom místě</h2>
            <p className="font-medium text-textDark text-lg col-span-2 text-center max-w-[600px]">
              Pravidelné objednávky, jejich založení, platby a vše kolem toho
              může vyvolávat velkou spoustu otázek. Rádi bychom Vám proto co
              nejvíce z nich zodpověděli. Pokud byste snad váš dotaz nenašli v
              záložkách níže, klidně nám napište na email{" "}
              <span className="text-quad">info@shopr.cz</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 flex justify-center items-start pb-30 p-5">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="lg:grid grid-cols-3 gap-20">
            <FAQList />
            <FAQQuestion />
          </div>
        </div>
      </div>
    </>
  );
}
