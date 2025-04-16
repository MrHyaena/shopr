import React, { useState } from "react";
import SubHeader from "../Components/subHeader";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faGear,
  faGlobe,
  faMoneyBill,
  faShoppingBasket,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { subscriptions } = useSubscriptionContext();
  console.log(subscriptions);

  function SubscriptionTab({ item }) {
    const [errorImage, setErrorImage] = useState(false);

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
      <div className="bg-white xl:p-6 p-2 rounded-lg border border-slate-100 shadow-md shadow-slate-200 xl:grid xl:grid-cols-3 grid-cols-5 gap-4 animate-fall-left">
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
                className=" text-textDark cursor-pointer hover:text-textButton p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-emerald-500 hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-emerald-500"
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
                className=" text-textDark cursor-pointer hover:text-textButton p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
              >
                Deaktivovat předplatné
                <FontAwesomeIcon icon={faBan} className="hidden" />
              </button>
            </>
          )}
          <Link
            to={"/formular/" + item._id}
            className=" text-textDark hover:text-textButton p-2 text-md font-semibold rounded-md transition-all ease-in-out hover:bg-quad hover:shadow-md flex gap-3 items-center border border-slate-100 hover:border-quad"
          >
            Upravit
          </Link>
        </div>
      </div>
    );
  }

  function SubscriptionsWindow() {
    return (
      <>
        <div className="col-span-3 flex flex-col gap-5 max-h-[500px] overflow-visible ">
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

          <div className="grid grid-cols-1 gap-3 overflow-auto pr-3 pb-10">
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
            <h3 className="text-2xl font-bold text-textDark">0</h3>

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

  return (
    <>
      <div
        className="bg-slate-50 xl:p-10 p-3 flex flex-col xl:gap-10 gap-5 rounded-2xl min-h-screen xl:pt-10 py-18 overflow-hidden"
        key="subList"
      >
        <SubHeader
          header={"Hlavní panel"}
          buttonText={"Nové předplatné"}
          linkTo={"/formular"}
        />

        <div className="w-full grid gap-5 grid-rows-[1fr_4fr] grid-cols-4">
          <StatisticsWindow />

          <div className="col-span-1 row-span-2  bg-white shadow-md shadow-slate-200 rounded-md border border-slate-100 p-5">
            <h2 className="text-2xl font-bold text-textDark">Novinky</h2>
          </div>
          <SubscriptionsWindow />
        </div>
      </div>
    </>
  );
}
