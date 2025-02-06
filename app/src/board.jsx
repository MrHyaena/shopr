import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Board() {
  const arraySub = [1, 2, 3, 4];

  // FUNCTION FOR GENERATING SUBSCRIPTION TABS

  function SubscriptionTabs() {
    const [toggle, setToggle] = useState(false);

    return (
      <>
        <div className="bg-white p-10 rounded-lg border border-slate-200 shadow-lg shadow-slate-100 grid grid-cols-[1fr_80px] gap-4">
          <div>
            <p1 className="text-slate-600 text-sm">ID: 48494521894564</p1>

            <div className="flex gap-5 items-center">
              <h2 className="text-2xl text-slate-800 font-bold ">
                www.aktin.cz
              </h2>
              <button className="bg-slate-100 p-2 text-md font-semibold rounded-md">
                Upravit
              </button>
            </div>
          </div>
          {toggle ? (
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                className="text-3xl text-gray-600"
              />
            </button>
          ) : (
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-3xl text-gray-600"
              />
            </button>
          )}

          {toggle ? (
            <div className="col-span-2 grid grid-cols-[1fr_500px] gap-y-5 gap-x-10 border-t pt-10 mt-4 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Produkty
              </h3>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Informace o předplatném
              </h3>
              <div>
                <ul className="text-md font-semibold text-slate-700 flex flex-col">
                  {arraySub.map((item, index) => {
                    if (index % 2 == 0) {
                      return (
                        <li className="bg-slate-100 p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                      );
                    } else {
                      return (
                        <li className="p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className="pr-5 flex flex-col">
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-slate-800 font-bold">E-shop:</h4>
                  <p>www.aktin.cz</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-slate-800 font-bold">Způsob doručení:</h4>
                  <p>Kurýr</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-slate-800 font-bold">
                    Preferovaný den objednání:
                  </h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-slate-800 font-bold">Frekvence:</h4>
                  <p>Měsíc</p>
                </div>
                <div className="mt-5 flex justify-end">
                  <button className="font-semibold text-slate-600 bg-slate-100 text-lg p-3 rounded-md transition-all ease-in-out hover:bg-red-300 hover:text-slate-800 cursor-pointer">
                    Zrušit předplatné
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }

  // RETURN FUNCTION

  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-slate-800 pl-10">
            Vaše předplatné
          </h1>
          <button className="bg-emerald-300 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-emerald-400">
            Aktualizovat
          </button>
        </div>

        {arraySub.map(() => {
          return <SubscriptionTabs />;
        })}
      </div>
    </>
  );
}
