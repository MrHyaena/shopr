import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function SubscriptionForm() {
  const [step, setStep] = useState(1);
  let [user] = useSearchParams();

  console.log(user);

  function StepOne() {
    return (
      <form className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg">
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Kontaktní údaje
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Jméno
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Příjmení
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Telefon
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Email
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </fieldset>
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Adresa dodání / Fakturační údaje
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Adresa
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Číslo popisné
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Město
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              PSČ
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </fieldset>
        <div className="mx-auto">
          <button
            className="bg-emerald-500 p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(2);
            }}
          >
            Pokračovat <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    );
  }

  function StepOneComment() {
    return (
      <>
        <div className="p-10">
          <h2 className="text-xl font-semibold mb-4">
            Proč potřebujeme tyto údaje?
          </h2>
          <p className="text-md font-semibold text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
        </div>
      </>
    );
  }

  function StepTwo() {
    return (
      <form className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg">
        <div className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Nastavení předplatného
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Jméno
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Příjmení
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Telefon
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Email
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </div>
        <div className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Adresa dodání
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Adresa
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Číslo popisné
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Město
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              PSČ
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </div>
        <div className="mx-auto flex gap-3">
          <button
            className="bg-emerald-500 p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(1);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Zpět
          </button>
          <button
            className="bg-emerald-500 p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(3);
            }}
          >
            Pokračovat <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    );
  }

  function StepTwoComment() {
    return (
      <>
        <div className="p-10">
          <h2 className="text-xl font-semibold mb-4">
            Nastavte si parametry vašeho předplatného
          </h2>
          <p className="text-md font-semibold text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
        </div>
      </>
    );
  }

  function StepThreeComment() {
    return (
      <>
        <div className="p-10">
          <h2 className="text-xl font-semibold mb-4">
            Vyberte produkty, které chcete objednávat
          </h2>
          <p className="text-md font-semibold text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
        </div>
      </>
    );
  }

  function StepThree() {
    return (
      <form className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg">
        <div className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Zboží, které chcete koupit
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Jméno
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Příjmení
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Telefon
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Email
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </div>
        <div className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Adresa dodání
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Adresa
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Číslo popisné
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              Město
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
            <label className="flex flex-col text-slate-800 text-lg font-semibold">
              PSČ
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-slate-700"
              ></input>
            </label>
          </div>
        </div>
        <div className="mx-auto flex gap-3">
          <button
            className="bg-emerald-500 p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(2);
            }}
          >
            Zpět <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="bg-emerald-500 p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Uložit <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </form>
    );
  }

  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-slate-800 pl-10">
            Nastavení předplatného
          </h1>
          <button className="bg-emerald-300 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-emerald-400">
            Uložit
          </button>
        </div>
        <div className="grid grid-cols-[2fr_3fr]">
          {step == 1 && <StepOne />}
          {step == 1 && <StepOneComment />}
          {step == 2 && <StepTwo />}
          {step == 2 && <StepTwoComment />}
          {step == 3 && <StepThree />}
          {step == 3 && <StepThreeComment />}
        </div>
      </div>
    </>
  );
}
