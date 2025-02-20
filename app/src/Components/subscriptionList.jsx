import {
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faGears,
  faHouseUser,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { handleDelete } from "../functions/deleteSubscriptionHandler";
import { SubscriptionMissing } from "./subscriptionMissing";
const apiURL = import.meta.env.VITE_API_URL;

export function Subscriptions() {
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user, setUser } = useAuthContext();

  //deactivate subscription - send user to stripe customer portal, where he can manage
  async function customerPortal(stripeCustomerId) {
    const session = await fetch(
      apiURL + "/api/stripe/portal/" + stripeCustomerId,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await session.json();

    if (session.ok) {
      window.location.href = json;
    }
  }

  //activate subscription - sends user to stripe checkout session
  async function activateSubscription(
    subId,
    subName,
    subWebsite,
    subFrequency,
    stripeCustomerId
  ) {
    const session = await fetch(
      apiURL +
        "/api/stripe/activate/" +
        user.id +
        "/" +
        subId +
        "/" +
        subName +
        "/" +
        subWebsite +
        "/" +
        subFrequency +
        "/" +
        stripeCustomerId,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (session.ok) {
      const json = await session.json();

      window.location.href = json;
    }
  }

  // FUNCTION FOR GENERATING SUBSCRIPTION TABS

  function SubscriptionTabs({
    subId,
    stripeSubId,
    stripeCustomerId,
    active,
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
    const [toggleDelete, setToggleDelete] = useState(false);
    const [checkDelete, setCheckDelete] = useState("");
    const [errorDelete, setErrorDelete] = useState(false);

    const editURL = "/app/form/" + subId;

    return (
      <>
        <div className="bg-white xl:p-7 p-2 rounded-lg border border-slate-200 shadow-md shadow-slate-200 xl:grid grid-cols-2 gap-4">
          <div className="mb-5 xl:mb-0">
            <div className="xl:flex gap-10 mb-5 xl:mb-2">
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                ID: <span className="text-textLighter">{subId}</span>
              </p>
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                Webová stránka:{" "}
                <span className="text-textLighter">{subWebsite}</span>
              </p>
            </div>

            <div className="flex gap-5 items-center justify-center xl:justify-start">
              <img
                src="https://google.cz/favicon.ico"
                alt="icon"
                className="xl:block hidden"
              />
              <h2 className="text-2xl text-textDark font-bold xl:mr-5 mt-[-8px]">
                {subName}
              </h2>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col gap-5 xl:items-center items-center justify-end">
            <Link
              to={editURL}
              className=" text-textDark p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad flex gap-2 items-center border border-slate-100 hover:border-white"
            >
              <FontAwesomeIcon icon={faPen} />
              Upravit
            </Link>
            {active ? (
              <h2 className="font-bold text-lg text-emerald-700 p-2">
                Aktivní
              </h2>
            ) : (
              <button
                onClick={() => {
                  activateSubscription(
                    subId,
                    subName,
                    subWebsite,
                    subFrequency,
                    stripeCustomerId
                  );
                }}
                className="text-textDark cursor-pointer p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad border border-slate-100 hover:border-white"
              >
                Aktivovat
              </button>
            )}
            <button
              onClick={() => {
                activateSubscription(
                  subId,
                  subName,
                  subWebsite,
                  subFrequency,
                  stripeCustomerId
                );
              }}
              className="text-textDark cursor-pointer p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad border border-slate-100 hover:border-white"
            >
              Aktivovat
            </button>
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
            <div className="col-span-2 grid xl:grid-cols-3 gap-y-5 gap-x-15 ">
              <div className="xl:col-span-2">
                <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Produkty
                </h3>
                <div className="xl:grid hidden grid-cols-4 py-2 px-4 text-md font-semibold text-textLight bg-zinc-800">
                  <p className="col-span-2">URL</p>
                  <p className="col-span-1 justify-self-center">Množství</p>
                  <p className="col-span-1 justify-self-center">Nahraditelné</p>
                </div>
                <ul className="text-md font-semibold text-textDark flex flex-col ">
                  {items.map((item, index) => {
                    if (index % 2 == 0) {
                      return (
                        <>
                          <li className="bg-slate-100 py-2 px-4 xl:hidden">
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">URL:</p>
                              <a
                                href={"https://" + item.url}
                                className="text-textA"
                                target="_blank"
                              >
                                {item.url}
                              </a>
                            </div>
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">Počet:</p>
                              <p className="">{item.amount}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">
                                Lze změnit:
                              </p>
                              <p className="">{item.changable}</p>
                            </div>
                          </li>
                          <li className="bg-slate-100 py-2 px-4 xl:grid hidden items-center grid-cols-4">
                            <a
                              className="col-span-2 text-textA"
                              href={"https://" + item.url}
                              target="_blank"
                            >
                              {item.url}
                            </a>
                            <p className="col-span-1 justify-self-center">
                              {item.amount}
                            </p>
                            <p className="col-span-1 justify-self-center">
                              {item.changable}
                            </p>
                          </li>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <li className="py-2 px-4 xl:hidden">
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">URL:</p>
                              <a
                                href={"https://" + item.url}
                                className="text-textA"
                                target="_blank"
                              >
                                {item.url}
                              </a>
                            </div>
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">Počet:</p>
                              <p className="">{item.amount}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="text-textDark font-bold">
                                Lze změnit:
                              </p>
                              <p className="">{item.changable}</p>
                            </div>
                          </li>
                          <li className="py-2 px-4 xl:grid grid-cols-4 items-center  hidden">
                            <a
                              href={"https://" + item.url}
                              className="col-span-2 text-textA"
                              target="_blank"
                            >
                              {item.url}
                            </a>
                            <p className="col-span-1 justify-self-center">
                              {item.amount}
                            </p>
                            <p className="col-span-1 justify-self-center">
                              {item.changable}
                            </p>
                          </li>
                        </>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className="col-span-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faGears} />
                    Nastavení předplatného
                  </h3>
                  <div className="flex flex-col font-semibold text-textDark">
                    <div className="grid-cols-2 py-2 px-4 text-md font-semibold text-textLight bg-zinc-700 hidden">
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
                        E-shop:
                      </h4>
                      <a
                        href={"https://" + subWebsite}
                        target="_blank"
                        className="text-textA"
                      >
                        {subWebsite}
                      </a>
                    </div>
                    <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Den objednání:
                      </h4>
                      <p>
                        {subDay == "monday" && "Pondělí"}
                        {subDay == "tuesday" && "Úterý"}
                        {subDay == "wednesday" && "Středa"}
                        {subDay == "thursday" && "Čtvrtek"}
                        {subDay == "friday" && "Pátek"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 py-2 px-4 ">
                      <h4 className="text-heading font-bold text-textDark">
                        Frekvence:
                      </h4>
                      <p>
                        {subFrequency == "weekly" && "Jednou za měsíc"}
                        {subFrequency == "biWeekly" && "Jednou za měsíc"}
                        {subFrequency == "monthly" && "Jednou za měsíc"}
                        {subFrequency == "biMonthly" && "Dvakrát za měsíc"}
                        {subFrequency == "quarterly" && "Třikrát za měsíc"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Způsob doručení:
                      </h4>
                      <p>
                        {subDeliveryMethod == "courier" && "Nejlevnější kurýr"}
                        {subDeliveryMethod == "dropbox" && "Box/výdejní místé"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 py-2 px-4">
                      <h4 className="text-heading font-bold text-textDark">
                        Zákaznické ID:
                      </h4>
                      <p className="break-all">{stripeCustomerId}</p>
                    </div>
                    <div className="grid grid-cols-2 py-2 px-4 bg-slate-100">
                      <h4 className="text-heading font-bold text-textDark">
                        Platební ID:
                      </h4>
                      <p className="break-all">
                        {stripeSubId ? (
                          stripeSubId
                        ) : (
                          <p>Předplatné je neaktivní</p>
                        )}
                      </p>
                    </div>
                    {subDeliveryMethod !== "courier" && (
                      <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                        <h4 className="text-heading font-bold text-textDark">
                          Výdejní místo:
                        </h4>
                        <a
                          href={subDeliveryAddress}
                          className="text-textA hover:text-yellow-700"
                        >
                          {subDeliveryAddress}
                        </a>
                      </div>
                    )}
                    <div className="p-5 flex xl:justify-center gap-5 justify-center ">
                      {active && (
                        <button
                          className="font-semibold text-textDark  border border-slate-200 text-lg p-3 rounded-md transition-all ease-in-out hover:bg-deleteButton hover:text-textDark hover:text--textDark cursor-pointer"
                          onClick={() => {
                            customerPortal(stripeCustomerId);
                          }}
                        >
                          Deaktivovat předplatné
                        </button>
                      )}

                      {!active && (
                        <button
                          className="font-semibold text-textDark  text-lg border border-slate-200 p-3 rounded-md transition-all ease-in-out hover:bg-deleteButton hover:text-textDark hover:text--textDark cursor-pointer"
                          onClick={() => {
                            setToggleDelete(true);
                          }}
                        >
                          Zrušit předplatné
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faHouseUser} />
                    Cílový zákazník
                  </h3>
                  <div className="grid-cols-2 py-2 px-4 text-md font-semibold text-textLight bg-zinc-700 hidden">
                    <p className="col-span-1">Údaj</p>
                    <p className="col-span-1">Hodnota</p>
                  </div>
                  <div className="text-textDark font-semibold ">
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
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {toggleDelete && (
          <div className="fixed top-0 right-0 w-full h-full bg-primary/15 m-auto flex justify-center items-center">
            <div className="m-auto gap-5 flex flex-col justify-center items-center bg-white p-10 rounded-xl">
              <p className="text-textDark font-semibold">
                Opravdu chcete zrušit předplatné s názvem:{" "}
                <span className="text-textHighlightYellow">{subName}</span>?
              </p>
              <label className="flex flex-col gap-2 font-semibold">
                Pro potvrzení smazání napište jméno vašeho předplatného
                <input
                  type="text"
                  className="bg-zinc-50 p-3 rounded-lg border border-slate-200"
                  value={checkDelete}
                  onChange={(e) => {
                    if (errorDelete) {
                      setErrorDelete(false);
                    }
                    setCheckDelete(e.target.value);
                  }}
                />
              </label>
              {errorDelete && (
                <p className="p-2 bg-red-100 rounded-md font-semibold text-medium">
                  Vložený text se neshoduje se jménem.
                </p>
              )}
              <div className="flex gap-3 justify-center">
                <button
                  className="p-3 rounded-md bg-red-400 hover:bg-red-500 transition-all ease-in-out cursor-pointer font-semibold text-textLight"
                  onClick={() => {
                    if (checkDelete == subName) {
                      setToggleDelete(false);
                      handleDelete(
                        subId,
                        user,
                        subscriptions,
                        setSubscriptions
                      );
                    }

                    if (checkDelete !== subName) {
                      setErrorDelete(true);
                    }
                  }}
                >
                  Zrušit předplatné
                </button>
                <button
                  className="p-3 rounded-md bg-zinc-200 font-semibold text-textDarker cursor-pointer transition-all ease-in-out hover:bg-zinc-300"
                  onClick={() => {
                    setToggleDelete(false);
                  }}
                >
                  Zpět
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // RETURN FUNCTION

  return (
    <>
      <div
        className="bg-slate-50 p-10 flex flex-col xl:gap-10 gap-5 rounded-2xl min-h-screen xl:pt-10 pt-30"
        key="subList"
      >
        <div className="xl:flex xl:flex-row flex-col-reverse items-center justify-between xl:gap-0 gap-5 hidden">
          <h1 className="text-3xl font-bold text-textDark">Vaše předplatné</h1>
          <Link
            to="/app/form"
            className="bg-quad text-center shadow-md shadow-slate-200 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
          >
            Nové předplatné
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {subscriptions !== 0 &&
            subscriptions.map((item, index) => {
              return (
                <>
                  <SubscriptionTabs
                    index={index}
                    subId={item._id}
                    stripeSubId={item.stripeSubId}
                    stripeCustomerId={item.stripeCustomerId}
                    active={item.active}
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
                    key={"subItem" + item._id}
                  />
                </>
              );
            })}
          {subscriptions == 0 && <SubscriptionMissing />}
        </div>
      </div>
    </>
  );
}
