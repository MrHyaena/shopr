"use client";

import React, { useState } from "react";
import logo from "./shopr-logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Navbar() {
  const [toggleExample, setToggleExample] = useState(false);

  function toggleExampleShow() {
    setToggleExample(true);
  }

  function toggleExampleHide() {
    setToggleExample(false);
  }

  //<div className="h-[150px] text-3xl bg-quad absolute flex items-end justify-center shadow-lg p-2 px-4 ease-in-out hover:mt-5 right-10 transition-all font-bold text-white z-10 rounded-b-md">
  //  Založit účet ZDARMA
  //</div>;

  return (
    <>
      <nav
        id="nav-bar"
        className="fixed z-20 lg:flex justify-center w-full hidden animate-fall-down-noBounce"
      >
        <div
          className="bg-white border border-slate-50  py-3 px-5  shadow-lg grid grid-cols-5 items-center w-[100%] z-20"
          onMouseLeave={toggleExampleHide}
        >
          <div className="col-span-1 justify-self-start">
            <Link href="https://www.shopr.cz">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-30"
              />
            </Link>
          </div>
          <div className="col-span-3 justify-self-center">
            <ul className="flex gap-10 text-lg font-bold items-center">
              <li>
                <Link href="/">
                  <p className="font-bold text-textDark text-xl hover:text-quad transition-all ease-in-out">
                    Domů
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/jak-to-funguje">
                  <p className="font-bold text-textDark  text-xl hover:text-quad transition-all ease-in-out">
                    Jak to funguje
                  </p>
                </Link>
              </li>
              <li>
                <p
                  className=" flex gap-1 font-bold items-center text-textDark break-keep  text-xl hover:text-quad transition-all ease-in-out"
                  id="togglePriklady"
                  onMouseOver={toggleExampleShow}
                >
                  Příklady <FontAwesomeIcon icon={faChevronDown} />
                </p>
                {toggleExample && (
                  <>
                    <div
                      id="priklady"
                      className="absolute border border-slate-200 p-5 shadow-lg mt-5 z-10 bg-white rounded-lg"
                    >
                      <ul className="flex flex-col gap-5">
                        <li>
                          <Link
                            href="/priklady/suplementy"
                            className=" text-xl hover:text-quad transition-all ease-in-out"
                          >
                            Výživové doplňky
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/priklady/mazlicci"
                            className=" text-xl hover:text-quad transition-all ease-in-out"
                          >
                            Mazlíčci
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/priklady/jidlo"
                            className=" text-xl hover:text-quad transition-all ease-in-out"
                          >
                            Káva, čaj a víno
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/priklady/drogerie"
                            className=" text-xl hover:text-quad transition-all ease-in-out"
                          >
                            Drogerie
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li>
                <Link href="/cena">
                  <p className="font-bold text-textDark  text-xl hover:text-quad transition-all ease-in-out">
                    Cena
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/o-nas">
                  <p className="font-bold text-textDark  text-xl hover:text-quad transition-all ease-in-out">
                    O nás
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/otazky">
                  <p className="font-bold text-textDark  text-xl hover:text-quad transition-all ease-in-out">
                    Otázky
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex gap-8 items-center text-lg font-bold text-zinc-800 justify-self-end">
            <Link
              href="https://app.shopr.cz"
              className="text-xl hover:text-quad transition-all ease-in-out"
            >
              Přihlásit se
            </Link>

            <Link
              href="https://app.shopr.cz/signup"
              className="bg-quad text-textButton cursor-pointer text-xl font-bold py-2 px-3 text-md rounded-md transition-all ease-in-out hover:scale-105 shadow-md shadow-slate-200 self-stretch"
            >
              Vytvořit účet
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
