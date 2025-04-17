import React, { useState } from "react";
import SubHeader from "../Components/subHeader";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCashRegister,
  faCircleUp,
  faGear,
  faGlobe,
  faMoneyBill,
  faShoppingBasket,
  faTriangleExclamation,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { activateSubscriptionHandler } from "../functions/activateSubscriptionHandler";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpiredContext } from "../hooks/useExpiredContext";
import { deactivateSubscriptionHandler } from "../functions/deactivateSubscriptionHandler";

export default function Homepage({ setLoader }) {
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user, setUser } = useAuthContext();
  const { setExpired } = useExpiredContext();

  //Subscription tabs
  function SubscriptionTab({ item }) {
    const [toggleDeactivate, setToggleDeactivate] = useState(false);
    const [checkDeactivate, setCheckDeactivate] = useState("");
    const [errorDeactivate, setErrorDeactivate] = useState(false);

    const [toggleActivate, setToggleActivate] = useState(false);
    const [checkActivate, setCheckActivate] = useState("");
    const [errorActivate, setErrorActivate] = useState(false);

    const [errorImage, setErrorImage] = useState(false);

    const {
      _id,
      stripeSubId,
      stripeCustomerId,
      subName,
      subWebsite,
      subFrequency,
      itemsType,
    } = item;

    let frequency;
    if (item.subFrequency == "weekly") {
      frequency = "Týdenní";
    }
    if (item.subFrequency == "biWeekly") {
      frequency = "Dvoutýdenní";
    }
    if (item.subFrequency == "monthly") {
      frequency = "Měsíční";
    }
    if (item.subFrequency == "biMonthly") {
      frequency = "Dvouměsíční";
    }
    if (item.subFrequency == "quarterly") {
      frequency = "Čtvrtletní";
    }

    return (
      <>
        <div className="bg-white xl:p-6 p-2 rounded-lg border border-slate-100 shadow-md shadow-slate-200 xl:grid xl:grid-cols-3 grid-cols-5 gap-4 animate-fall-left z-20">
          <div className="mb-3 xl:mb-0 xl:block flex flex-col-reverse xl:col-span-2 col-span-3">
            <div className="xl:flex gap-7 mt-5 xl:mt-0 xl:mb-2">
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                Webová stránka:{" "}
                <a
                  target="_blank"
                  href={"https://" + item.subWebsite}
                  className="text-textLighter"
                >
                  {item.subWebsite}
                </a>
              </p>
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                Typ:{" "}
                <span className="text-textLighter">
                  {item.itemsType == "standard"
                    ? "Standardní"
                    : "Mystery balíček"}
                </span>
              </p>
              <p className="text-textDarker text-[12px] mb-2 font-medium">
                Datum další platby:{" "}
                <span className="text-textLighter">
                  {item.nextPaymentDate == "empty"
                    ? "Předplatné je neaktivní"
                    : item.nextPaymentDate}
                </span>
              </p>
            </div>

            <div className="flex xl:flex-row flex-col-reverse xl:gap-5 gap-2 xl:items-center items-start justify-center xl:justify-start">
              <div className="flex gap-3 items-center flex-row-reverse xl:flex-row">
                <a
                  href={"https://" + item.subWebsite}
                  target="_blank"
                  className="xl:w-10 justify-center xl:block"
                >
                  {!errorImage ? (
                    <img
                      src={"https://" + item.subWebsite + "/favicon.ico"}
                      alt="icon"
                      className=" h-6 rounded-md"
                      onError={() => {
                        setErrorImage(true);
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className=" text-xl rounded-md"
                    />
                  )}
                </a>
                <h2 className="text-xl text-textDark font-bold xl:mr-5">
                  {item.subName}
                </h2>
              </div>

              {item.active ? (
                <div className="bg-emerald-500 rounded-md flex text-base lg:text-ml items-center justify-center gap-2 px-3 py-1 font-semibold text-white shadow-sm">
                  <FontAwesomeIcon icon={faCashRegister} />
                  Aktivní
                </div>
              ) : (
                <div className="bg-slate-600 rounded-md flex text-base lg:text-ml items-center justify-center gap-2 px-3 py-1 font-semibold text-white shadow-sm">
                  <FontAwesomeIcon icon={faCashRegister} />
                  Neaktivní
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 xl:items-center xl:justify-end justify-center col-span-2 xl:col-span-1">
            {!item.active ? (
              <>
                <button
                  onClick={() => {
                    setToggleActivate(true);
                  }}
                  className=" text-textDark cursor-pointer hover:text-textButton p-2  font-semibold rounded-md transition-all ease-in-out hover:bg-emerald-500 hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-emerald-500"
                >
                  Aktivovat předplatné
                  <FontAwesomeIcon icon={faCashRegister} className="hidden" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setToggleDeactivate(true);
                  }}
                  className=" text-textDark cursor-pointer hover:text-textButton p-2  font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
                >
                  Deaktivovat předplatné
                  <FontAwesomeIcon icon={faBan} className="hidden" />
                </button>
              </>
            )}
            <Link
              to={"/formular/" + item._id}
              className=" text-textDark hover:text-textButton p-2  font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
            >
              Upravit
            </Link>
          </div>
        </div>
        {toggleDeactivate && (
          <div className="fixed top-0 right-0 w-full p-5 h-full bg-primary/50 m-auto flex justify-center items-center z-100">
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
                <ErrorWindowApp
                  error={"Vložený text se neshoduje se jménem."}
                />
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
                        setUser,
                        setExpired,
                        setSubscriptions,
                        setLoader
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
        {toggleActivate && (
          <div className="fixed top-0 right-0 w-full p-5 h-full bg-primary/50 m-auto flex justify-center items-center z-30">
            <div className="gap-5 flex flex-col justify-center items-stretch bg-white p-10 rounded-md max-w-[700px]">
              <h3 className="text-2xl font-bold text-textDark">
                Aktivace předplatného
              </h3>
              <p className="text-textDark font-semibold">
                Předplatné se aktivuje zaplacením první platby. Abyste tak mohli
                učinit, potvrďte nám obchodní podmínky níže a klikněte na
                tlačítko "Aktivovat předplaatné", které Vás přenese k platebnímu
                terminálu.
              </p>

              <label className="flex flex-row gap-3 text--textDark  font-semibold col-span-6">
                <input
                  type="checkbox"
                  className="bg-zinc-50 p-3 rounded-lg border border-slate-200 font-semibold"
                  value="true"
                  onChange={(e) => {
                    if (errorDeactivate) {
                      setErrorActivate(false);
                    }
                    setCheckActivate(!checkActivate);
                  }}
                />{" "}
                <p>
                  Seznamil/a jsem se a souhlasím s{" "}
                  <a
                    href="https://shopr.cz/obchodni-podminky"
                    target="_blank"
                    className="text-quad"
                  >
                    Obchodními podmínkami
                  </a>{" "}
                  a{" "}
                  <a
                    href="https://shopr.cz/gdpr"
                    target="_blank"
                    className="text-quad"
                  >
                    Zásadami pro ochranu osobních údajů (GDPR)
                  </a>{" "}
                  služby Shopr.
                </p>
              </label>
              {errorActivate && (
                <ErrorWindowApp
                  error={"Vložený text se neshoduje se jménem."}
                />
              )}
              <div className="grid grid-cols-2 w-full gap-5">
                <button
                  disabled={!checkActivate}
                  className="p-3 rounded-md bg-emerald-500 hover:scale-105  hover:bg-emerald-600 transition-all ease-in-out cursor-pointer font-semibold text-textButton disabled:hover:scale-100 disabled:border disabled:bg-white disabled:border-slate-200 disabled:cursor-default disabled:text-textLighter"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleDeactivate(false);
                    setCheckDeactivate(null);
                    activateSubscriptionHandler(
                      setUser,
                      setExpired,
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
                  Přejít k platbě
                </button>

                <button
                  className="p-3 rounded-md bg-white border border-slate-200 font-semibold text-textDark cursor-pointer transition-all ease-in-out hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleActivate(false);
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

  //Window for subscriptions
  function SubscriptionsWindow() {
    return (
      <>
        <div className="col-span-3 row-start-2 row-span-3 flex flex-col gap-5 max-h-[500px] overflow-visible ">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-textDark">
              Seznam předplatných
            </h2>
            <Link
              to={"/predplatne"}
              className="bg-quad text-textButton xl:block self-center text-center p-2 text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
            >
              Detail předplatných
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 pb-10">
            {subscriptions.map((item) => {
              return (
                <>
                  <SubscriptionTab item={item} />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  //Window with statistics
  function StatisticsWindow() {
    return (
      <>
        <div className="bg-white shadow-md shadow-slate-200 rounded-md border-[1px] border-slate-100 p-5 px-7 flex items-center justify-between self-start">
          <FontAwesomeIcon icon={faShoppingBasket} className="text-3xl" />
          <div className="flex flex-col items-end justify-center">
            <h3 className="text-2xl font-bold text-textDark">
              {subscriptions.length}
            </h3>

            <h3 className="text-lg font-bold text-textDark">
              Počet předplatných
            </h3>
          </div>
        </div>
        <div className="bg-white shadow-md shadow-slate-200 rounded-md border-[1px] border-slate-100 p-5 px-7 flex items-center justify-between self-start">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="text-3xl text-emerald-600"
          />
          <div className="flex flex-col items-end justify-center">
            <h3 className="text-2xl font-bold text-textDark">0 Kč</h3>

            <h3 className="text-lg font-bold text-textDark">Cena za měsíc</h3>
          </div>
        </div>
        <div className="bg-white shadow-md shadow-slate-200 rounded-md border-[1px] border-slate-100 p-5 px-7 flex items-center justify-between self-start opacity-50">
          <FontAwesomeIcon
            icon={faTrophy}
            className="text-3xl text-amber-500"
          />
          <div className="flex flex-col items-end justify-center">
            <h3 className="text-2xl font-bold text-textDark">0</h3>

            <h3 className="text-lg font-bold text-textDark">Body</h3>
          </div>
        </div>
      </>
    );
  }

  function NewsWindow() {
    return (
      <>
        <div className="col-span-1 row-span-2  bg-white shadow-md shadow-slate-200 rounded-md border border-slate-100 p-5">
          <h2 className="text-2xl font-bold text-textDark mb-5">Novinky</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCircleUp}
                  className="text-emerald-700"
                />
                <h2 className="font-semibold font-primary">
                  Update: Dobírka i online platba
                </h2>
              </div>
              <p className="font-semibold text-textDarker">
                Doposud bylo možné tvořit předplatné jen na eshopy s dobírkou
                kvůli platbě. Nově máme i systém na zpracování předplatných s
                online platbou.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-amber-700"
                />
                <h2 className="font-semibold">
                  Upozornění: Dobírka i online platba
                </h2>
              </div>
              <p className="font-semibold text-textDarker">
                Doposud bylo možné tvořit předplatné jen na eshopy s dobírkou
                kvůli platbě. Nově máme i systém na zpracování předplatných s
                online platbou.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="bg-slate-50 xl:p-10 p-3 flex flex-col xl:gap-10 gap-5 rounded-2xl min-h-screen xl:pt-10 py-18 overflow-y-auto"
        key="subList"
      >
        <SubHeader
          header={"Hlavní panel"}
          buttonText={"Nové předplatné"}
          linkTo={"/formular"}
        />

        <div className="w-full grid gap-5 grid-rows-[1fr_4fr_1fr] grid-cols-4">
          <StatisticsWindow />
          <NewsWindow />
          <SubscriptionsWindow />
        </div>
      </div>
    </>
  );
}
