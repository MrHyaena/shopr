import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleArrowDown,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <>
      <div className="bg-slate-950 text-white ">
        <div className="flex flex-col items-center gap-10 sticky top-0">
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="text-[30px] my-10"
          />
          <button>Předplatné</button>
          <button>Předplatné</button>
          <button>Předplatné</button>
          <button>Předplatné</button>
        </div>
      </div>
    </>
  );
}
