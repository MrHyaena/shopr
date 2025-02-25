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

  return (
    <>
      <nav
        id="nav-bar"
        className="fixed z-20 lg:flex justify-center w-full hidden animate-fall-down-noBounce"
      >
        <div
          className="bg-white border border-slate-50 rounded-b-xl py-3 px-5 mx-15 shadow-lg grid grid-cols-5 items-center w-[100%]"
          onMouseLeave={toggleExampleHide}
        >
          <div className="col-span-1 justify-self-start">
            <Link href="https://www.shopr.cz">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className="col-span-3 justify-self-center">
            <ul className="flex gap-10 text-lg font-bold items-center">
              <li>
                <Link href="/">
                  <p className="font-bold text-textDark">Domů</p>
                </Link>
              </li>
              <li>
                <Link href="/jak-to-funguje">
                  <p className="font-bold text-textDark">Jak to funguje</p>
                </Link>
              </li>
              <li>
                <p
                  className=" flex gap-1 font-bold items-center text-textDark break-keep"
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
                          <Link href="/priklady/suplementy">
                            Výživové doplňky
                          </Link>
                        </li>
                        <li>
                          <Link href="/priklady/mazlicci">Mazlíčci</Link>
                        </li>
                        <li>
                          <Link href="/priklady/jidlo">Káva, čaj a víno</Link>
                        </li>
                        <li>
                          <Link href="/priklady/drogerie">Drogerie</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li>
                <Link href="/cena">
                  <p className="font-bold text-textDark">Cena</p>
                </Link>
              </li>
              <li>
                <Link href="/o-nas">
                  <p className="font-bold text-textDark">O nás</p>
                </Link>
              </li>
              <li>
                <Link href="/otazky">
                  <p className="font-bold text-textDark">Otázky</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex gap-8 items-center text-lg font-bold text-zinc-800 justify-self-end">
            <Link href="https://app.shopr.cz">Přihlásit se</Link>

            <Link
              href="https://app.shopr.cz/signup"
              className="bg-quad text-textButton cursor-pointer font-bold py-2 px-3 text-md rounded-md transition-all ease-in-out hover:scale-105 shadow-md shadow-slate-200 self-stretch"
            >
              Vytvořit účet
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
