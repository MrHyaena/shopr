import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Subscriptions() {
  const arraySub = [1, 2, 3, 4];

  // FUNCTION FOR GENERATING SUBSCRIPTION TABS

  function SubscriptionTabs({ index }) {
    const [toggle, setToggle] = useState(false);

    let user = "peter";
    let subID = "54594516";

    let editURL = "/form/?user=" + user + "&subID=" + subID;

    return (
      <>
        <div
          className="bg-white p-10 rounded-lg border border-slate-200 shadow-lg shadow-slate-100 grid grid-cols-[1fr_80px] gap-4"
          key={"sub" + index}
        >
          <div>
            <p className="text-p text-sm mb-2">ID: 48494521894564</p>

            <div className="flex gap-5 items-center">
              <img src="https://google.cz/favicon.ico" alt="icon"></img>
              <h2 className="text-2xl text-heading font-bold mr-5 mt-[-8px]">
                www.aktin.cz
              </h2>
              <Link to={editURL}>
                <button className="bg-slate-100 text-slate-00 p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-slate-200">
                  Upravit
                </button>
              </Link>
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
                className="text-3xl text-subIcon hover:rounded-full hover:bg-slate-200 p-2 transition-all ease-in-out"
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
                className="text-3xl text-subIcon hover:rounded-full hover:bg-slate-200 p-2  transition-all ease-in-out"
              />
            </button>
          )}

          {toggle ? (
            <div className="col-span-2 grid grid-cols-[1fr_500px] gap-y-5 gap-x-15 border-t border-slate-200">
              <div>
                <h3 className="text-xl font-bold mb-3 text-heading py-5 mt-10">
                  Produkty
                </h3>
                <ul className="text-md font-semibold text-subItem flex flex-col">
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
                <h3 className="text-xl font-bold mb-3 text-heading py-5 mt-10">
                  Cílový zákazník
                </h3>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">E-shop:</h4>
                  <p>www.aktin.cz</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">Způsob doručení:</h4>
                  <p>Kurýr</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">
                    Preferovaný den objednání:
                  </h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">Frekvence:</h4>
                  <p>Měsíc</p>
                </div>
                <h3 className="text-xl font-bold mb-3 text-heading py-5 mt-10">
                  Cílový zákazník
                </h3>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">Jméno:</h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">Příjmení:</h4>
                  <p>Měsíc</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">Telefon:</h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">Email:</h4>
                  <p>Měsíc</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">Adresa:</h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">ČP:</h4>
                  <p>Měsíc</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 bg-slate-100">
                  <h4 className="text-heading font-bold">Město:</h4>
                  <p>Pondělí</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 p-2 ">
                  <h4 className="text-heading font-bold">PSČ:</h4>
                  <p>Měsíc</p>
                </div>
                <div className="mt-5 flex justify-end">
                  <button className="font-semibold text-slate-600 bg-slate-100 text-lg p-3 rounded-md transition-all ease-in-out hover:bg-deleteButton hover:text-primary cursor-pointer">
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
          <h1 className="text-3xl font-bold text-primary pl-10">
            Vaše předplatné
          </h1>
          <button className="bg-tertiary p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-emerald-500">
            Aktualizovat
          </button>
        </div>

        {arraySub.map((item, index) => {
          return <SubscriptionTabs index={index} />;
        })}
      </div>
    </>
  );
}
