import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faBars,
  faCircleArrowDown,
  faClipboardQuestion,
  faComment,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faComments } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

import logo from "/public/shopr-icon-white.png";
import logoBig from "/public/shopr-logo-white.png";

export function Sidebar() {
  const { logout } = useLogout();
  const [activeButton, setActiveButton] = useState(1);

  function handleLogout() {
    logout();
  }

  function DesktopSidebar() {
    return (
      <div className="min-h-screen hidden xl:block">
        <div className="bg-primary h-screen border-slate-200 shadow-xl shadow-slate-200 text-white sticky top-0">
          <div className=" flex flex-col justify-between items-center h-full py-10">
            <img src={logoBig} alt="logo" className="h-18" />
            <div className="flex flex-col items-center gap-2  p-4 row-span-5 self-center">
              {activeButton == 1 ? (
                <Link
                  onClick={() => {
                    setActiveButton(1);
                  }}
                  to="/app"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faArrowsSpin} className="text-2xl" />
                  Moje předplatné
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton(1);
                  }}
                  to="/app"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faArrowsSpin} className="text-2xl" />
                  Moje předplatné
                </Link>
              )}
              {activeButton == 2 ? (
                <Link
                  onClick={() => {
                    setActiveButton(2);
                  }}
                  to="/app/osobni-udaje"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                  Osobní údaje
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton(2);
                  }}
                  to="/app/osobni-udaje"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                  Osobní údaje
                </Link>
              )}
              {activeButton == 3 ? (
                <Link
                  onClick={() => {
                    setActiveButton(3);
                  }}
                  to="/app/kontakt"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  Kontakt
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton(3);
                  }}
                  to="/app/kontakt"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  Kontakt
                </Link>
              )}
              {activeButton == 4 ? (
                <Link
                  onClick={() => {
                    setActiveButton();
                  }}
                  to="/app/navody"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon
                    icon={faClipboardQuestion}
                    className="text-2xl"
                  />
                  Jak to funguje?
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton(4);
                  }}
                  to="/app/navody"
                  className="text-sm cursor-pointer font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon
                    icon={faClipboardQuestion}
                    className="text-2xl"
                  />
                  Jak to funguje?
                </Link>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="text-center font-semibold cursor-pointer transition-all ease-in-out hover:bg-white hover:text-textDark p-4 rounded-lg"
                onClick={handleLogout}
              >
                Odhlásit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function MobileSidebar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className="xl:hidden fixed top-0 w-full">
        <div className="bg-primary border-slate-200 shadow-slate-200 text-white sticky top-0">
          <div className="flex justify-between p-5">
            <img src={logo} alt="logo" className="h-10" />
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </button>
          </div>
          {toggleMenu && (
            <div className="flex flex-col justify-start items-center gap-2  p-4 row-span-5 self-center">
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/app"
                className="text-xl font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Moje předplatné
              </Link>

              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/app/osobni-udaje"
                className="text-xl font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Osobní údaje
              </Link>
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/app/kontakt"
                className="text-xl font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Kontakt
              </Link>
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/app/navody"
                className="text-xl font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Jak to funguje?
              </Link>
              <button
                className="text-xl font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 mt-20 w-full text-center"
                onClick={handleLogout}
              >
                Odhlásit
              </button>
            </div>
          )}
          <div className="flex justify-center"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <MobileSidebar />
      <DesktopSidebar />
    </>
  );
}
