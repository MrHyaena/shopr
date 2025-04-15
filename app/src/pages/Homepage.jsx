import React from "react";
import SubHeader from "../Components/subHeader";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
  const { subscriptions } = useSubscriptionContext();
  console.log(subscriptions);

  function SubscriptionTab({ item }) {
    return (
      <div className="h-15 shrink-0  grid grid-cols-13 items-center bg-white p-3 rounded-md shadow-md">
        <p className="col-span-5">{item.subName}</p>
        <p className="col-span-3">{item.subWebsite}</p>
        <p className="col-span-2">{item.subFrequency}</p>
        <p className="col-span-2">{item.active ? "Aktivní" : "Neaktivní"}</p>
        <FontAwesomeIcon
          icon={faGear}
          className="text-secondary hover:text-quad text-xl transition-all ease-in-out cursor-pointer"
        />
      </div>
    );
  }

  return (
    <>
      <div
        className="bg-slate-50 xl:p-10 p-3 flex flex-col xl:gap-10 gap-5 rounded-2xl min-h-screen xl:pt-10 pt-18 xl:pb-30 pb-30 overflow-hidden"
        key="subList"
      >
        <SubHeader
          header={"Hlavní panel"}
          buttonText={"Nové předplatné"}
          linkTo={"/formular"}
        />
        <div className="h-[600px]  w-full grid grid-cols-5 gap-10 grid-rows-[200px_500px]">
          <div className="bg-white shadow-md rounded-md border border-slate-100 p-5">
            <h2 className="text-2xl font-bold text-textDark">
              Počet předplatných
            </h2>
            <h3 className="text-2xl font-bold text-textDark">0</h3>
          </div>

          <div className="bg-white shadow-md rounded-md border border-slate-100 p-5">
            <h2 className="text-2xl font-bold text-textDark">
              Celková platba/měsíc
            </h2>
            <h3 className="text-2xl font-bold text-textDark">0</h3>
          </div>
          <div className="bg-white shadow-md rounded-md border border-slate-100 p-5">
            <h2 className="text-2xl font-bold text-textDark">Novinky</h2>
          </div>
          <div className="bg-white shadow-md rounded-md border border-slate-100 p-5 row-span-2 col-span-2">
            <h2 className="text-2xl font-bold text-textDark">Novinky</h2>
          </div>
          <div className=" col-span-3 flex flex-col gap-5 max-h-[500px]">
            <h2 className="text-2xl font-bold text-textDark">
              Seznam předplatných
            </h2>
            <div className="flex flex-col gap-3 overflow-y-scroll pr-3">
              {subscriptions.map((item) => {
                return (
                  <>
                    <SubscriptionTab item={item} />
                  </>
                );
              })}
              <div className="h-15 shrink-0 border-b border-slate-200"></div>
              <div className="h-15 shrink-0 border-b border-slate-200"></div>
              <div className="h-15 shrink-0 border-b border-slate-200"></div>
              <div className="h-15 shrink-0 border-b border-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
