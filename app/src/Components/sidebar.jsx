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
import { useEffect, useState } from "react";

import logo from "/public/shopr-icon-white.png";
import logoBig from "/public/shopr-logo-white.png";

export function Sidebar() {
  const { logout } = useLogout();
  const [activeButton, setActiveButton] = useState("/");

  function setPath() {
    const pathname = window.location.pathname;
    setActiveButton(pathname);
  }

  useEffect(() => {
    setPath();
  }, []);

  function handleLogout() {
    logout();
  }

  function DesktopSidebar() {
    return (
      <div className="min-h-screen hidden xl:block">
        <div className="bg-primary h-screen border-slate-200 shadow-xl shadow-slate-200 text-white sticky top-0">
          <div className=" flex flex-col justify-between items-center h-full py-10">
            <a href="https://www.shopr.cz">
              <img src={logo} alt="logo" className="h-12" />
            </a>
            <div className="flex flex-col items-center gap-2  p-4 row-span-5 self-center">
              {activeButton == "/" ? (
                <Link
                  onClick={() => {
                    setActiveButton("/");
                  }}
                  to="/"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faArrowsSpin} className="text-2xl" />
                  Moje předplatné
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton("/");
                  }}
                  to="/"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faArrowsSpin} className="text-2xl" />
                  Moje předplatné
                </Link>
              )}
              {activeButton == "/osobni-udaje" ? (
                <Link
                  onClick={() => {
                    setActiveButton("/osobni-udaje");
                  }}
                  to="/osobni-udaje"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                  Osobní údaje
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton("/osobni-udaje");
                  }}
                  to="/osobni-udaje"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                  Osobní údaje
                </Link>
              )}
              {activeButton == "/kontakt" ? (
                <Link
                  onClick={() => {
                    setActiveButton("/kontakt");
                  }}
                  to="/kontakt"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 bg-white text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  Kontakt
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setActiveButton("/kontakt");
                  }}
                  to="/kontakt"
                  className="cursor-pointer text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
                >
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  Kontakt
                </Link>
              )}

              <Link
                to="https://shopr.cz/otazky"
                target="_blank"
                className="text-sm cursor-pointer font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon
                  icon={faClipboardQuestion}
                  className="text-2xl"
                />
                Otázky
              </Link>
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
      <div className="xl:hidden fixed top-0 w-full z-50">
        <div className="bg-primary border-slate-200 shadow-slate-200 text-white sticky top-0">
          <div className="flex justify-between p-3">
            <img src={logo} alt="logo" className="h-8" />
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </button>
          </div>
          {toggleMenu && (
            <div className="flex flex-col justify-start items-center gap-2  p-4 pb-8 row-span-5 self-center">
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/form"
                className="bg-quad text-textButton cursor-pointer text-base font-bold py-2 px-3 text-md rounded-md transition-all ease-in-out hover:scale-105 self-start"
              >
                Nové předplatné
              </Link>
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/"
                className="text-base font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Moje předplatné
              </Link>

              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/osobni-udaje"
                className="text-base font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Osobní údaje
              </Link>
              <Link
                onClick={() => {
                  setToggleMenu(false);
                }}
                to="/kontakt"
                className="text-base font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                Kontakt
              </Link>
              <Link
                target="_blank"
                to="https://shopr.cz/otazky"
                className="text-base font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center"
              >
                FAQ
              </Link>
              <button
                className="text-base font-semibold flex items-center justify-start gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-3 w-full text-center mt-10"
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
