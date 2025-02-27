"use client";

import React from "react";

export default function FAQList() {
  function scrollToElement(id) {
    const element = document.querySelector("#" + id);
    const bodyPosition = window.scrollY;
    const elementPosition = element.getBoundingClientRect();
    const position = bodyPosition + elementPosition.top;
    console.log(position);
    window.scrollTo({ left: 0, top: position - 150, behavior: "smooth" });
  }
  return (
    <>
      <div className="col-span-1 min-w-[400px]">
        <div className="sticky top-40">
          <h3 className="mb-10">Seznam témat</h3>

          <ul className="flex flex-col gap-3 border-l-3 border-quad pl-4">
            <li>
              <h5
                className="cursor-pointer transition-all ease-in-out hover:pl-3"
                onClick={() => {
                  scrollToElement("odpovednost");
                }}
              >
                Odpovědnost za objednávku
              </h5>
            </li>
            <li>
              <h5
                className="cursor-pointer transition-all ease-in-out hover:pl-3"
                onClick={() => {
                  scrollToElement("platby");
                }}
              >
                Platby a platební údaje
              </h5>
            </li>
            <li>
              <h5
                className="cursor-pointer transition-all ease-in-out hover:pl-3"
                onClick={() => {
                  scrollToElement("predplatne");
                }}
              >
                Předplatné
              </h5>
            </li>
            <li>
              <h5
                className="cursor-pointer transition-all ease-in-out hover:pl-3"
                onClick={() => {
                  scrollToElement("profil");
                }}
              >
                Uživatelský profil
              </h5>
            </li>
            <li>
              <h5
                className="cursor-pointer transition-all ease-in-out hover:pl-3"
                onClick={() => {
                  scrollToElement("osobniudaje");
                }}
              >
                Osobní údaje
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
