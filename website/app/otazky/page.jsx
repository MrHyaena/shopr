"use client";

import React from "react";
import QuestionToggle from "../components/QuestionToggle";

export default function Faq() {
  function ScrollToElement(id) {
    const element = document.querySelector("#" + id);
    const bodyPosition = window.scrollY;
    const elementPosition = element.getBoundingClientRect();
    const position = bodyPosition + elementPosition.top;
    console.log(position);
    window.scrollTo({ left: 0, top: position - 150, behavior: "smooth" });
  }

  return (
    <>
      <div className="bg-zinc-50 flex justify-center items-start py-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="flex flex-col items-center py-10">
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
      <div className="bg-zinc-50 flex justify-center items-start py-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="grid grid-cols-3 gap-20">
            <div className="col-span-1 min-w-[400px]">
              <div className="sticky top-40">
                <h3 className="mb-10">Seznam témat</h3>

                <ul className="flex flex-col gap-3 border-l-3 border-quad pl-4">
                  <li>
                    <h5
                      className="cursor-pointer transition-all ease-in-out hover:pl-3"
                      onClick={() => {
                        ScrollToElement("odpovednost");
                      }}
                    >
                      Odpovědnost za objednávku
                    </h5>
                  </li>
                  <li>
                    <h5
                      className="cursor-pointer transition-all ease-in-out hover:pl-3"
                      onClick={() => {
                        ScrollToElement("platby");
                      }}
                    >
                      Platby a platební údaje
                    </h5>
                  </li>
                  <li>
                    <h5
                      className="cursor-pointer transition-all ease-in-out hover:pl-3"
                      onClick={() => {
                        ScrollToElement("predplatne");
                      }}
                    >
                      Předplatné
                    </h5>
                  </li>
                  <li>
                    <h5
                      className="cursor-pointer transition-all ease-in-out hover:pl-3"
                      onClick={() => {
                        ScrollToElement("profil");
                      }}
                    >
                      Uživatelský profil
                    </h5>
                  </li>
                  <li>
                    <h5
                      className="cursor-pointer transition-all ease-in-out hover:pl-3"
                      onClick={() => {
                        ScrollToElement("osobniudaje");
                      }}
                    >
                      Osobní údaje
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 w-full">
              {/* ------------ Odpovědnost za objednávku ------------------- */}
              <div className="mb-20">
                <h3 className="text-center mb-10" id="odpovednost">
                  Odpovědnost za objednávku
                </h3>
                <div className="flex flex-col gap-8">
                  <QuestionToggle
                    question={"Kdo nese odpovědnost za převzetí objednávky?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Co když objednávku nepřevezmu?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Na koho je objednávka objednávána?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Kdo řeší případné problémy s objednávkou?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                </div>
              </div>
              {/* ------------ Platby a platební údaje ------------------- */}
              <div className="mb-20">
                <h3 className="text-center mb-10" id="platby">
                  Platby a platební údaje
                </h3>
                <div className="flex flex-col gap-8">
                  <QuestionToggle
                    question={"Za co se strhávají platby?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Jsou zde nějaké skryté poplatky?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Jsou platby automatické?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Kde jsou uložené moje platební údaje?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Lze platební metodu změnit?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Můžu platby kdykoliv zrušit?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Můžu zažádat o vrácení peněz?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={
                      "Přišlo mi něco jiného, než mám v předplatném. Mám nárok na vrácení peněz?"
                    }
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Jak často se platby strhávají?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                </div>
              </div>
              {/* ------------ Předplatné ------------------- */}
              <div className="mb-20">
                <h3 className="text-center mb-10" id="predplatne">
                  Předplatné
                </h3>
                <div className="flex flex-col gap-8">
                  <QuestionToggle
                    question={"Můžu udělat předplatné na jakémkoliv eshopu?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Je omezený počet položek v předplatném?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Je omezený počet předplatných?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Lze předplatné kdykoliv smazat??"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Lze předplatné kdykoliv deaktivovat?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Můžu změnit jak často se objednávka udělá?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                  <QuestionToggle
                    question={"Můžu objednávku vytvořit pro někoho jiného?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />
                </div>
              </div>
              {/* ------------ Uživatelský profil ------------------- */}
              <div className="mb-20">
                <h3 className="text-center mb-10" id="profil">
                  Uživatelský profil
                </h3>
                <div className="flex flex-col gap-8">
                  <QuestionToggle
                    question={"Můžu údaje kdykoliv změnit?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Můžu svůj profil smazat?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Kdo spravuje mé kontaktní a dodací informace?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                </div>
              </div>
              {/* ------------ Osobní údaje ------------------- */}
              <div className="mb-20">
                <h3 className="text-center mb-10" id="osobniudaje">
                  Osobní údaje
                </h3>
                <div className="flex flex-col gap-8">
                  <QuestionToggle
                    question={"K čemu ptořebujete mé osobní údaje?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Můžu své osobní údaje změnit?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                  <QuestionToggle
                    question={"Můžu požádat o smazání osobních údajů?"}
                    answer={
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                    }
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
