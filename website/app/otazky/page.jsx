"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Faq() {
  function Question({ question, answer }) {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
      setToggle(false);
    }, []);

    return (
      <>
        <div className="rounded-lg shadow-lg border border-slate-100 bg-white">
          <div className="flex justify-between items-center p-10">
            <h5 className="text-xl text-textDark">{question}</h5>
            <FontAwesomeIcon
              icon={toggle ? faChevronDown : faChevronUp}
              className="text-2xl p-3 bg-quad rounded-lg shadow-md text-white"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          {toggle && (
            <p className="font-medium text-textDark text-lg text-center max-w-[600px] col-span-2 px-10 pb-10">
              {answer}
            </p>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-zinc-50 flex justify-center items-start py-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="flex flex-col items-center py-10">
            <h4>O nás</h4>
            <h2 className="mt-2 my-5">Aplikace z našich vlastních potřeb</h2>
            <p className="font-medium text-textDark text-lg col-span-2 text-center max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              dolores cumque maxime hic cum repellendus omnis esse nam
              laudantium minima soluta ex tempora debitis, harum deleniti
              dolorum incidunt delectus quos?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Pariatur dolores cumque maxime hic
              cum repellendus omnis esse nam laudantium minima soluta ex tempora
              debitis, harum deleniti dolorum incidunt delectus quos?
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-center my-10">Platby a platební údaje</h3>
            <div className="grid grid-cols-2 gap-10 w-full">
              <div className="flex flex-col gap-8">
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
              </div>
              <div className="flex flex-col gap-8">
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center my-10">Platby a platební údaje</h3>
            <div className="grid grid-cols-2 gap-10 w-wrapper">
              <div className="flex flex-col gap-8">
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />{" "}
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
              </div>
              <div className="flex flex-col gap-8">
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
                <Question
                  question={"Lze platby zrušit?"}
                  answer={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores cumque maxime hic cum repellendus omnis esse nam laudantium minima soluta ex tempora debitis, harum deleniti dolorum incidunt delectus quos?"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
