import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faCircleArrowDown,
  faClipboardQuestion,
  faComment,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faComments } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export function Sidebar() {
  const { logout } = useLogout();

  function handleClick() {
    logout();
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="bg-primary h-screen border-slate-200 shadow-xl shadow-slate-200 text-white sticky top-0">
          <div className=" flex flex-col justify-between items-center h-full py-10">
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              className="text-[30px] p-4"
            />
            <div className="flex flex-col items-center gap-2  p-4 row-span-5 self-center">
              <Link
                to="/app"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faArrowsSpin} className="text-2xl" />
                Moje předplatné
              </Link>

              <Link
                to="/app/osobni-udaje"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
                Osobní údaje
              </Link>
              <Link
                to="/app/kontakt"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faComment} className="text-2xl" />
                Kontakt
              </Link>
              <Link
                to="/app/jak-to-funguje"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon
                  icon={faClipboardQuestion}
                  className="text-2xl"
                />
                Jak to funguje?
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                className="text-center font-semibold cursor-pointer transition-all ease-in-out hover:bg-white hover:text-textDark p-4 rounded-lg"
                onClick={handleClick}
              >
                Odhlásit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
