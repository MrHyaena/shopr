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
          <FontAwesomeIcon
            icon={toggle ? faChevronDown : faChevronUp}
            className="text-2xl p-3 bg-quad rounded-lg shadow-md text-white cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        {toggle && (
          <p className="font-medium text-textDark text-lg text-center  col-span-2 px-10 pb-5">
            {answer}
          </p>
        )}
      </div>
    </>
  );
}
