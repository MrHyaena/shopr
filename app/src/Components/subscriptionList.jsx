import {
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faGears,
  faHouseUser,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";

export function Subscriptions() {
  const arraySub = [1, 2, 3, 4, 5, 6, 7];
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user, setUser } = useAuthContext();

  // FUNCTION FOR DELETING SUBSCRIPTIONS
  async function handleDelete(subId) {
    const response = await fetch(
      "http://localhost:4000/api/subscriptions/" + subId,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      console.log("deleted");
      const subArray = subscriptions;
      const newSubscriptions = subArray.filter(
        (element) => element._id != subId
      );
      setSubscriptions(newSubscriptions);
    }

    if (!response.ok) {
      console.log(response);
    }
  }

  // FUNCTION FOR GENERATING SUBSCRIPTION TABS

  function SubscriptionTabs({
    index,
    subId,
    firstName,
    secondName,
    phone,
    email,
    address,
    addressNumber,
    city,
    cityNumber,
    subName,
    subWebsite,
    subFrequency,
    subDay,
    subDeliveryMethod,
    subDeliveryAddress,
    items,
  }) {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(true);

    const editURL = "/app/form/" + subId;

    return (
      <>
        <div
          className="bg-white p-7 rounded-lg border border-slate-200 shadow-md shadow-slate-200 grid grid-cols-2 gap-4"
          key={"sub" + index}
        >
          <div>
            <div className="flex gap-10">
              <p className="text-textLighter text-sm mb-2 font-semibold">
                ID: {subId}
              </p>
              <p className="text-textLighter text-sm mb-2 font-semibold">
                {subWebsite}
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <img src="https://google.cz/favicon.ico" alt="icon"></img>
              <h2 className="text-2xl text-textMedium font-bold mr-5 mt-[-8px]">
                {subName}
              </h2>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-end">
            <Link
              to={editURL}
              className=" text-textDark p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad flex gap-2 items-center border border-slate-100 hover:border-white"
            >
              <FontAwesomeIcon icon={faPen} />
              Upravit
            </Link>
            <h2 className="font-bold text-lg text-emerald-700 p-2">Aktivní</h2>
            {toggle ? (
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="text-3xl text-textDark hover:rounded-full hover:bg-quad p-2 transition-all ease-in-out cursor-pointer"
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
                  className="text-3xl text-textDark hover:rounded-full hover:bg-quad p-2  transition-all ease-in-out cursor-pointer"
                />
              </button>
            )}
          </div>

          {toggle ? (
            <div className="col-span-2 grid grid-cols-[1fr_500px] gap-y-5 gap-x-15 ">
              <div>
                <h3 className="text-xl font-bold text-quad py-5 mt-10 bg-secondary rounded-t-xl px-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Produkty
                </h3>
                <div className="grid grid-cols-7 py-2 px-4 text-md font-semibold text-textLight bg-zinc-700">
                  <p className="col-span-5">URL</p>
                  <p className="col-span-1 justify-self-center">Množství</p>
                  <p className="col-span-1 justify-self-center">Nahraditelné</p>
                </div>
                <ul className="text-md font-semibold text-textMedium flex flex-col">
                  {items.map((item, index) => {
                    if (index % 2 == 0) {
                      return (
                        <li className="bg-slate-100 py-2 px-4 grid grid-cols-7">
                          <p className="col-span-5">{item.url}</p>
                          <p className="col-span-1 justify-self-center">
                            {item.amount}
                          </p>
                          <p className="col-span-1 justify-self-center">
                            {item.changable}
                          </p>
                        </li>
                      );
                    } else {
                      return (
                        <li className="py-2 px-4 grid grid-cols-7">
                          <p className="col-span-5">{item.url}</p>
                          <p className="col-span-1 justify-self-center">
                            {item.amount}
                          </p>
                          <p className="col-span-1 justify-self-center">
                            {item.changable}
                          </p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className=" flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-quad py-5 mt-10 bg-secondary rounded-t-xl px-5 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faGears} />
                    Nastavení předplatného
                  </h3>
                  <div className="flex flex-col font-semibold text-textMedium">
                    <div className="grid grid-cols-2 py-2 px-4 text-md font-semibold text-textLight bg-zinc-700">
                      <p className="col-span-1">Údaj</p>
                      <p className="col-span-1">Hodnota</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Název předplatného:
                      </h4>
                      <p>{subName}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        E-shopr:
                      </h4>
                      <p>{subWebsite}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Den objednání:
                      </h4>
                      <p>{subDay}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        Frekvence:
                      </h4>
                      <p>{subFrequency}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Způsob doručení:
                      </h4>
                      <p>{subDeliveryMethod}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-quad py-5 mt-10 bg-secondary rounded-t-xl px-5 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faHouseUser} />
                    Cílový zákazník
                  </h3>
                  <div className="grid grid-cols-2 py-2 px-4 text-md font-semibold text-textLight bg-zinc-700">
                    <p className="col-span-1">Údaj</p>
                    <p className="col-span-1">Hodnota</p>
                  </div>
                  <div className="text-textMedium font-semibold">
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Jméno:
                      </h4>
                      <p>{firstName}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        Příjmení:
                      </h4>
                      <p>{secondName}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Telefon:
                      </h4>
                      <p>{phone}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        Email:
                      </h4>
                      <p>{email}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Adresa:
                      </h4>
                      <p>{address}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        ČP:
                      </h4>
                      <p>{addressNumber}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold  text-textDark">
                        Město:
                      </h4>
                      <p>{city}</p>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        PSČ:
                      </h4>
                      <p>{cityNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    className="font-semibold text-slate-600 bg-slate-100 text-lg p-3 rounded-md transition-all ease-in-out hover:bg-deleteButton hover:text--textDark cursor-textMediumointer"
                    onClick={() => {
                      handleDelete(subId);
                    }}
                  >
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
      <div className="bg-slate-50 p-10 flex flex-col gap-5 rounded-2xl min-h-full">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-textDark pl-10">
            Vaše předplatné
          </h1>

          <button className="bg-quad shadow-md shadow-slate-200 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary">
            Aktualizovat
          </button>
        </div>

        {subscriptions ? (
          subscriptions.map((item, index) => {
            return (
              <SubscriptionTabs
                index={index}
                subId={item._id}
                firstName={item.firstName}
                secondName={item.secondName}
                phone={item.phone}
                email={item.email}
                address={item.address}
                addressNumber={item.addressNumber}
                city={item.city}
                cityNumber={item.cityNumber}
                subName={item.subName}
                subWebsite={item.subWebsite}
                subFrequency={item.subFrequency}
                subDay={item.subDay}
                subDeliveryMethod={item.subDeliveryMethod}
                subDeliveryAddress={item.subDeliveryAddress}
                items={item.items}
              />
            );
          })
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    </>
  );
}
