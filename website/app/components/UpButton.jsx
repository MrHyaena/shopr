"use client";

import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function UpButton() {
  function pageScrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="fixed bottom-5 right-5  z-30 bg-quad xl:w-15 xl:h-15 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg animate-scale-up-delay cursor-pointer hover:scale-110 transition-all ease-in-out"
      onClick={pageScrollUp}
    >
      <FontAwesomeIcon icon={faCircleUp} className="text-3xl text-white" />
    </div>
  );
}
