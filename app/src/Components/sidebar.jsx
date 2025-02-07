import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faCircleArrowDown,
  faClipboardQuestion,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import { faComments } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div>
        <div className="bg-primary min-h-full border-slate-200 shadow-lg shadow-slate-200 text-white">
          <div className="sticky top-0 grid grid-rows-7">
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              className="text-[30px] my-10 row-span-1 self-start justify-self-center"
            />
            <div className="flex flex-col items-center gap-10  p-5 row-span-5 self-center">
              <Link
                to="/"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faArrowsSpin} className="text-3xl" />
                Předplatné
              </Link>
              <Link
                to="/form"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faNewspaper} className="text-3xl" />
                Nové předplatné
              </Link>
              <Link
                to="/jak-to-funguje"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon
                  icon={faClipboardQuestion}
                  className="text-3xl"
                />
                Jak to funguje?
              </Link>
              <Link
                to="/kontakt"
                className="text-sm font-semibold flex flex-col gap-3 hover:bg-white hover:text-zinc-900 transition-all ease-in-out rounded-xl p-5 w-full text-center"
              >
                <FontAwesomeIcon icon={faComments} className="text-3xl" />
                Kontakt
              </Link>
            </div>
            <div className="flex justify-center row-span-1 self-end">
              <button className="text-center font-semibold">Odhlásit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
