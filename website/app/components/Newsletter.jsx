import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="bg-white py-30 flex justify-center">
        <div className="max-w-wrapper flex">
          <div className="bg-quad rounded-xl shadow-lg p-15 gap-10 grid grid-cols-5">
            <div className="col-span-2">
              <h4 className="text-white">Odebírejte nás na naší cestě</h4>
              <p className="text-white">Technické novinky k vám do emailu</p>
            </div>
            <div className="bg-white col-span-3 shadow-lg flex gap-4 border-rose-800 p-2 rounded-lg justify-self-stretch">
              <input placeholder="Vložte váš email" className="w-full p-2" />
              <button className="bg-quad shadow-lg cursor-pointer hover:scale-105 transition-all ease-in-out font-bold text-textButton p-3 rounded-lg">
                Odeslat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
