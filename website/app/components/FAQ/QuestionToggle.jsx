"use client";

import React, { useEffect } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function QuestionToggle({ question, answer }) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <>
      <div className="rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center p-5 gap-5">
          <h5 className="text-xl text-textDark">{question}</h5>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-2xl flex items-center justify-center bg-quad rounded-lg shadow-md text-white cursor-pointer p-3 w-13 h-13"
          >
            {toggle ? (
              <FontAwesomeIcon
                className="animate-chevron-rotate "
                icon={faChevronDown}
              />
            ) : (
              <FontAwesomeIcon
                className="animate-chevron-rotate-reverse"
                icon={faChevronUp}
              />
            )}
          </div>
        </div>
        {toggle && (
          <p className="font-medium text-textDark text-lg text-start px-5  col-span-2 pb-5 animate-scale-up-noBounce">
            {answer}
          </p>
        )}
      </div>
    </>
  );
}
