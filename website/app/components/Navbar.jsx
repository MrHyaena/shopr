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
            className="bg-white border border-slate-50  py-2 px-10  shadow-lg grid xl:grid-cols-5 lg:grid-cols-4 items-center w-[100%] z-20"
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
            <div className="xl:col-span-3 col-span-2 justify-self-center">
              <ul className="flex gap-10 text-lg font-bold items-center">
                <li>
                  <Link href="/">
                    <p className="font-bold text-textDark text-lg hover:text-quad transition-all ease-in-out font-primary">
                      Domů
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/jak-to-funguje">
                    <p className="font-bold text-textDark text-lg hover:text-quad transition-all ease-in-out font-primary">
                      Jak to funguje
                    </p>
                  </Link>
                </li>

                <li>
                  <Link href="/cena">
                    <p className="font-bold text-textDark text-lg hover:text-quad transition-all ease-in-out font-primary">
                      Cena
                    </p>
                  </Link>
                </li>

                <li>
                  <Link href="/otazky">
                    <p className="font-bold text-textDark text-lg hover:text-quad transition-all ease-in-out font-primary">
                      Otázky
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex gap-8 items-center text-base font-bold text-zinc-800 justify-self-end">
              <Link
                href="https://app.shopr.cz"
                className="text-lg hover:text-quad transition-all ease-in-out font-primary"
              >
                Přihlásit se
              </Link>

              <Link
                href="https://app.shopr.cz/signup"
                className="buttonSmall font-primary"
              >
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
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out font-primary">
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
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out font-primary">
                        Jak to funguje
                      </p>
                    </Link>
                  </li>

                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/cena">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out font-primary">
                        Cena
                      </p>
                    </Link>
                  </li>

                  <li
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    <Link href="/otazky">
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out font-primary">
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
                      className="bg-quad text-textButton cursor-pointer text-base font-bold py-2 px-3 text-md rounded-md transition-all ease-in-out hover:scale-105  self-stretch font-primary"
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
                      <p className="font-bold text-textLight  text-base hover:text-quad transition-all ease-in-out font-primary">
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
