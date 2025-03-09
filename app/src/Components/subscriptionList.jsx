import {
  faCartShopping,
  faCashRegister,
  faChevronDown,
  faChevronUp,
  faGears,
  faHouseUser,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { deleteSubscriptionHandler } from "../functions/deleteSubscriptionHandler";
import { SubscriptionMissing } from "./subscriptionMissing";
import shopLogo from "/public/shop-solid.png";
import { deactivateSubscriptionHandler } from "../functions/deactivateSubscriptionHandler";
import { activateSubscriptionHandler } from "../functions/activateSubscriptionHandler";
const apiURL = import.meta.env.VITE_API_URL;

export function Subscriptions() {
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user, setUser } = useAuthContext();

  // FUNCTION FOR GENERATING SUBSCRIPTION TABS

  function SubscriptionTabs({ subscriptionData }) {
    const {
      _id,
      stripeSubId,
      stripeCustomerId,
      pipedrivePersonId,
      pipedriveDealId,
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
      itemsType,
      items,
      mysteryItem,
    } = subscriptionData;

    const [toggle, setToggle] = useState(false);

    const [toggleDelete, setToggleDelete] = useState(false);
    const [checkDelete, setCheckDelete] = useState("");
    const [errorDelete, setErrorDelete] = useState(false);

    const [toggleDeactivate, setToggleDeactivate] = useState(false);
    const [checkDeactivate, setCheckDeactivate] = useState("");
    const [errorDeactivate, setErrorDeactivate] = useState(false);

    const editURL = "/app/form/" + _id;

    function SubDetails() {
      return (
        <div
          className="col-span-2 grid xl:grid-cols-3 gap-y-5 gap-x-15"
          key={"subDetails" + _id}
        >
          <div className="xl:col-span-2">
            <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                key={"faCartShopping" + _id}
              />
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
                    <Fragment key={"subItemToBuy" + item.amount + item.url}>
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
                          <p className="text-textDark font-bold">Lze změnit:</p>
                          <p className="">
                            {item.changable == "true" ? "Ano" : "Ne"}
                          </p>
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
                          {item.changable == "true" ? "Ano" : "Ne"}
                        </p>
                      </li>
                    </Fragment>
                  );
                } else {
                  return (
                    <>
                      <Fragment key={"subItemToBuy" + item.amount + item.url}>
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
                            {item.changable == "true" ? "Ano" : "Ne"}
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
                            {item.changable == "true" ? "Ano" : "Ne"}
                          </p>
                        </li>
                      </Fragment>
                    </>
                  );
                }
              })}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col">
            <div>
              <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
                <FontAwesomeIcon icon={faGears} key={"fagears" + _id} />
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
                    {subFrequency == "weekly" && "Jednou za týden"}
                    {subFrequency == "biWeekly" && "Jednou za dva týdny"}
                    {subFrequency == "monthly" && "Jednou za měsíc"}
                    {subFrequency == "biMonthly" && "Jednou za dva měsíce"}
                    {subFrequency == "quarterly" && "Jednou za tři měsíce"}
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
                    {stripeSubId !== "empty" ? (
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
                <div className="py-5 grid grid-cols-2 gap-5">
                  {!active ? (
                    <>
                      <button
                        className="font-semibold text-textDark w-full hover:border-quad hover:text-textButton text-lg border border-slate-200 p-3 rounded-md transition-all ease-in-out hover:bg-quad  cursor-pointer"
                        onClick={() => {
                          activateSubscriptionHandler(
                            _id,
                            subName,
                            subWebsite,
                            subFrequency,
                            stripeCustomerId,
                            user,
                            itemsType
                          );
                        }}
                      >
                        Aktivovat předplatné
                      </button>
                      <button
                        className="font-semibold bg-white hover:bg-red-500 text-textDark w-full hover:text-white  text-lg border border-slate-200 p-3 rounded-md transition-all ease-in-out  cursor-pointer"
                        onClick={() => {
                          setToggleDelete(true);
                        }}
                      >
                        Smazat předplatné
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="font-semibold text-textDark w-full hover:text-white hover:border-deleteButton text-lg border border-slate-200 p-3 rounded-md transition-all ease-in-out hover:bg-red-500  cursor-pointer"
                        onClick={() => {
                          setToggleDeactivate(true);
                        }}
                      >
                        Deaktivovat předplatné
                      </button>
                      <p>
                        Pokud chcete předplatné smazat, musíte jej nejprve
                        deaktivovat
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-textLight py-5 mt-10 bg-secondary rounded-t-md px-5 flex gap-3 items-center">
                <FontAwesomeIcon icon={faHouseUser} key={"faHouseUser" + _id} />
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
                  <p className="break-all">{email}</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                  <h4 className="text-heading font-bold text-textDark">
                    Adresa:
                  </h4>
                  <p>{address}</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                  <h4 className="text-heading font-bold text-textDark">ČP:</h4>
                  <p>{addressNumber}</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 py-2 px-4 bg-slate-100">
                  <h4 className="text-heading font-bold  text-textDark">
                    Město:
                  </h4>
                  <p>{city}</p>
                </div>
                <div className="grid grid-cols-2 border-slate-300 py-2 px-4 ">
                  <h4 className="text-heading font-bold text-textDark">PSČ:</h4>
                  <p>{cityNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="bg-white xl:p-7 p-2 rounded-lg border border-slate-200 shadow-md shadow-slate-200 xl:grid grid-cols-2 gap-4 animate-fall-left">
          <div className="mb-5 xl:mb-0">
            <div className="xl:flex gap-10 mb-5 xl:mb-2">
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                ID: <span className="text-textLighter">{_id}</span>
              </p>
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                Webová stránka:{" "}
                <span className="text-textLighter">{subWebsite}</span>
              </p>
            </div>

            <div className="flex gap-5 items-center justify-center xl:justify-start">
              <a
                href={"https://" + subWebsite}
                target="_blank"
                className="xl:w-10 flex justify-center"
              >
                <img
                  src={"https://" + subWebsite + "/favicon.ico"}
                  alt="icon"
                  className="xl:block hidden max-h-8 max-w-8"
                  onError={(e) => {
                    e.target.src = shopLogo;
                  }}
                />
              </a>

              <h2 className="text-2xl text-textDark font-bold xl:mr-5 mt-[-8px]">
                {subName}
              </h2>
              {active && (
                <div className="bg-emerald-500 rounded-md flex items-center justify-center gap-2 px-3 py-1 font-semibold text-white shadow-sm">
                  <FontAwesomeIcon icon={faCashRegister} />
                  Aktivní
                </div>
              )}
            </div>
          </div>
          <div className="flex xl:flex-row flex-col gap-6 xl:items-center items-center justify-end">
            {!active && (
              <>
                <button
                  onClick={() => {
                    activateSubscriptionHandler(
                      _id,
                      subName,
                      subWebsite,
                      subFrequency,
                      stripeCustomerId,
                      user,
                      itemsType
                    );
                  }}
                  className=" text-textDark cursor-pointer hover:text-textButton p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
                >
                  Aktivovat předplatné
                </button>
              </>
            )}
            <Link
              to={editURL}
              className=" text-textDark hover:text-textButton p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
            >
              Upravit
              <FontAwesomeIcon icon={faPen} />
            </Link>
            {toggle ? (
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="text-md font-semibold flex gap-3 items-center border hover:text-textButton hover:shadow-md hover:border-quad border-slate-100 text-textDark rounded-md hover:bg-quad p-2 transition-all ease-in-out cursor-pointer"
              >
                Detail
                <FontAwesomeIcon icon={faChevronUp} className="text-lg" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="text-md font-semibold flex gap-3 items-center border hover:text-textButton hover:shadow-md hover:border-quad border-slate-100 text-textDark rounded-md hover:bg-quad p-2 transition-all ease-in-out cursor-pointer"
              >
                Detail
                <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
              </button>
            )}
          </div>

          {toggle ? <SubDetails /> : <></>}
        </div>
        {toggleDelete && (
          <div className="fixed top-0 right-0 w-full p-5 h-full bg-primary/50 m-auto flex justify-center items-center">
            <div className="gap-5 flex flex-col justify-center items-stretch bg-white p-10 rounded-md max-w-[700px]">
              <h3 className="text-2xl font-bold text-textDark">
                Smazání předplatného
              </h3>
              <p className="text-textDark font-semibold">
                Jakmile předplatné smažete, automaticky vymažeme data o
                předplatném z našich systémů. Předplatné již nelze obnovit a je
                potřeba založit úplně nové.
              </p>
              <p className="text-textDark font-semibold">
                Pro potvrzení smazání napište jméno předplatného:{" "}
                <span className="text-quad">{subName}</span>
              </p>
              <input
                type="text"
                className="bg-zinc-50 p-3 rounded-lg border border-slate-200 font-semibold"
                value={checkDelete}
                onChange={(e) => {
                  if (errorDelete) {
                    setErrorDelete(false);
                  }
                  setCheckDelete(e.target.value);
                }}
              />
              {errorDelete && (
                <p className="p-2 bg-errorBg border-2 border-errorBorder rounded-md font-semibold text-medium">
                  Vložený text se neshoduje se jménem.
                </p>
              )}
              <div className="grid grid-cols-2 w-full gap-5">
                <button
                  disabled={checkDelete !== subName}
                  className="p-3 rounded-md bg-deleteButton hover:scale-105  hover:bg-red-500 transition-all ease-in-out cursor-pointer font-semibold text-textButton disabled:hover:scale-100 disabled:border disabled:bg-white disabled:border-slate-200 disabled:cursor-default disabled:text-textLighter"
                  onClick={() => {
                    if (checkDelete == subName) {
                      console.log(_id, user, subscriptions, setSubscriptions);
                      setToggleDelete(false);
                      setCheckDelete(null);
                      deleteSubscriptionHandler(
                        _id,
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
                  Smazat předplatné
                </button>

                <button
                  className="p-3 rounded-md bg-white border border-slate-200 font-semibold text-textDark cursor-pointer transition-all ease-in-out hover:scale-105"
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
        {toggleDeactivate && (
          <div className="fixed top-0 right-0 w-full p-5 h-full bg-primary/50 m-auto flex justify-center items-center">
            <div className="gap-5 flex flex-col justify-center items-stretch bg-white p-10 rounded-md max-w-[700px]">
              <h3 className="text-2xl font-bold text-textDark">
                Deaktivace předplatného
              </h3>
              <p className="text-textDark font-semibold">
                Jakmile předplatné deaktivujete, okamžitě se přeruší všechny
                následující platby a objednávky. Pokud budete chtít předplatné v
                budoucnu znovu aktivovat, bude potřeba znovu zadat platební
                údaje z důvodu bezpečnosti v interních systémech neukládáme.
              </p>
              <p className="text-textDark font-semibold">
                Pro potvrzení deaktivace napište jméno předplatného:{" "}
                <span className="text-quad">{subName}</span>
              </p>
              <input
                type="text"
                className="bg-zinc-50 p-3 rounded-lg border border-slate-200 font-semibold"
                value={checkDeactivate}
                onChange={(e) => {
                  if (errorDeactivate) {
                    setErrorDeactivate(false);
                  }
                  setCheckDeactivate(e.target.value);
                }}
              />
              {errorDeactivate && (
                <p className="p-2 bg-errorBg border-2 border-errorBorder rounded-md font-semibold text-medium">
                  Vložený text se neshoduje se jménem.
                </p>
              )}
              <div className="grid grid-cols-2 w-full gap-5">
                <button
                  disabled={checkDeactivate !== subName}
                  className="p-3 rounded-md bg-deleteButton hover:scale-105  hover:bg-red-500 transition-all ease-in-out cursor-pointer font-semibold text-textButton disabled:hover:scale-100 disabled:border disabled:bg-white disabled:border-slate-200 disabled:cursor-default disabled:text-textLighter"
                  onClick={(e) => {
                    e.preventDefault();
                    if (checkDeactivate == subName) {
                      setToggleDeactivate(false);
                      setCheckDeactivate(null);
                      deactivateSubscriptionHandler(
                        _id,
                        stripeSubId,
                        user,
                        setSubscriptions
                      );
                    }

                    if (checkDeactivate !== subName) {
                      setErrorDeactivate(true);
                    }
                  }}
                >
                  Deaktivovat předplatné
                </button>

                <button
                  className="p-3 rounded-md bg-white border border-slate-200 font-semibold text-textDark cursor-pointer transition-all ease-in-out hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleDeactivate(false);
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
        className="bg-slate-50 p-10 flex flex-col xl:gap-10 gap-5 rounded-2xl min-h-screen xl:pt-10 pt-30 overflow-hidden"
        key="subList"
      >
        <div className="xl:flex xl:flex-row flex-col-reverse items-center justify-between xl:gap-0 gap-5 hidden">
          <h1 className="text-3xl font-bold text-textDark">Vaše předplatné</h1>
          <Link
            to="/app/form"
            className="bg-quad text-center shadow-md text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
          >
            Nové předplatné
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {subscriptions !== 0 &&
            subscriptions.map((item, index) => {
              return (
                <Fragment key={"subItem" + item._id}>
                  <SubscriptionTabs subscriptionData={item} />
                </Fragment>
              );
            })}
          {subscriptions == 0 && <SubscriptionMissing />}
        </div>
      </div>
    </>
  );
}
