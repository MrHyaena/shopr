"use client";

import React, { useState } from "react";
import logo from "./shopr-logo.png";
import logoIcon from "../_img/shopr-icon-white.png";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Navbar() {
  function DesktopNavbar() {
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
          className="fixed z-20 lg:flex justify-center w-full hidden animate-fall-down-noBounce h-[80px] mt-[-80px]"
        >
          <div
            className="bg-white border border-slate-50  py-2 px-10  shadow-lg grid grid-cols-5 items-center w-[100%] z-20"
            onMouseLeave={toggleExampleHide}
          >
            <div className="col-span-1 justify-self-start">
              <Link href="https://www.shopr.cz">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-25"
                />
              </Link>
            </div>
            <div className="col-span-3 justify-self-center">
              <ul className="flex gap-10 text-lg font-bold items-center">
                <li>
                  <Link href="/">
                    <p className="font-bold text-textDark text-base hover:text-quad transition-all ease-in-out">
                      Domů
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/jak-to-funguje">
                    <p className="font-bold text-textDark  text-base hover:text-quad transition-all ease-in-out">
                      Jak to funguje
                    </p>
                  </Link>
                </li>
                <li>
                  <p
                    className=" flex gap-1 font-bold items-center text-textDark break-keep  text-base hover:text-quad transition-all ease-in-out"
                    id="togglePriklady"
                    onMouseOver={toggleExampleShow}
                  >
                    Příklady <FontAwesomeIcon icon={faChevronDown} />
                  </p>
                  {toggleExample && (
                    <>
                      <div
                        id="priklady"
                        className="absolute border border-slate-200 p-5 shadow-md mt-5 z-10 bg-white rounded-md"
                      >
                        <ul className="flex flex-col gap-5">
                          <li>
                            <Link
                              href="/priklady/doplnky-stravy"
                              className=" text-base hover:text-quad transition-all ease-in-out"
                            >
                              Doplňky stravy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/priklady/mazlicci"
                              className=" text-base hover:text-quad transition-all ease-in-out"
                            >
                              Mazlíčci
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/priklady/kava-caj-vino"
                              className=" text-base hover:text-quad transition-all ease-in-out"
                            >
                              Káva, čaj a víno
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/priklady/kosmetika"
                              className=" text-base hover:text-quad transition-all ease-in-out"
                            >
                              Kosmetika
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </li>
                <li>
                  <Link href="/cena">
                    <p className="font-bold text-textDark  text-base hover:text-quad transition-all ease-in-out">
                      Cena
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas">
                    <p className="font-bold text-textDark  text-base hover:text-quad transition-all ease-in-out">
                      O nás
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/otazky">
                    <p className="font-bold text-textDark  text-base hover:text-quad transition-all ease-in-out">
                      Otázky
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex gap-8 items-center text-base font-bold text-zinc-800 justify-self-end">
              <Link
                href="https://app.shopr.cz"
                className="text-lg hover:text-quad transition-all ease-in-out"
              >
                Přihlásit se
              </Link>

              <Link href="https://app.shopr.cz/signup" className="buttonSmall">
                Vytvořit účet
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }

  function MobileNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <>
        <nav className="mt-[-56px] fixed z-20 justify-center w-full lg:animate-fall-down-noBounce lg:hidden">
          <div className="bg-zinc-950 py-2 px-5  shadow-lg  z-20">
            <div className="flex justify-between items-center w-[100%]">
              <Link href="https://www.shopr.cz">
                <Image
                  src={logoIcon}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-10"
                />
              </Link>
              <FontAwesomeIcon
                className="text-3xl text-textLight"
                icon={faBars}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </div>
            {toggleMenu && (
              <>
                <ul className="flex flex-col gap-5 py-10 text-lg font-bold items-start">
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        Domů
                      </p>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/jak-to-funguje">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        Jak to funguje
                      </p>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link
                      href="/priklady/doplnky-stravy"
                      className=" text-base text-textLight hover:text-quad transition-all ease-in-out"
                    >
                      Příklady
                    </Link>
                  </li>
                  <li>
                    <ul className="flex flex-col gap-5 ml-5">
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        <Link
                          href="/priklady/doplnky-stravy"
                          className=" text-base text-textLight hover:text-quad transition-all ease-in-out"
                        >
                          Doplňky stravy
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        <Link
                          href="/priklady/mazlicci"
                          className=" text-base text-textLight hover:text-quad transition-all ease-in-out"
                        >
                          Mazlíčci
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        <Link
                          href="/priklady/kava-caj-vino"
                          className=" text-base text-textLight hover:text-quad transition-all ease-in-out"
                        >
                          Káva, čaj a víno
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        <Link
                          href="/priklady/kosmetika"
                          className=" text-base text-textLight hover:text-quad transition-all ease-in-out"
                        >
                          Kosmetika
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/cena">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        Cena
                      </p>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/o-nas">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        O nás
                      </p>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/otazky">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        Otázky
                      </p>
                    </Link>
                  </li>

                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link
                      href="https://app.shopr.cz/signup"
                      className="bg-quad text-textButton cursor-pointer text-base font-bold py-2 px-3 text-md rounded-md transition-all ease-in-out hover:scale-105  self-stretch"
                    >
                      Vytvořit účet
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link
                      href="https://app.shopr.cz"
                      className="text-base hover:text-quad transition-all ease-in-out"
                    >
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out">
                        Přihlásit se
                      </p>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
