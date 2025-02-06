import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faDeleteLeft,
  faPlus,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function SubscriptionForm() {
  const [step, setStep] = useState(1);
  let [user] = useSearchParams();
  const [packeta, setPacketa] = useState(0);

  console.log(user);

  function StepOne() {
    return (
      <form className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg">
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-heading mb-5">
            Kontaktní údaje
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-heading text-lg font-semibold">
              Jméno
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Příjmení
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Telefon
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Email
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
          </div>
        </fieldset>
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Adresa dodání / Fakturační údaje
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col text-primary text-lg font-semibold">
              Adresa
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-primary text-lg font-semibold">
              Číslo popisné
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-primary text-lg font-semibold">
              Město
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-primary text-lg font-semibold">
              PSČ
              <input
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
          </div>
        </fieldset>
        <div className="mx-auto">
          <button
            className="bg-tertiary p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
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
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Proč potřebujeme tyto údaje?
          </h2>
          <p className="text-md font-semibold text-p">
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
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-heading mb-5">
            Parametry předplatného
          </legend>
          <div className="grid gap-5">
            <label className="flex flex-col text-heading text-lg font-semibold">
              Webová stránka eshopu
              <input
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                placeholder="www.eshop.cz"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Frekvence doručování
              <select
                name="frekvence"
                id="frekvence"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              >
                <option value="1">Jednou za měsíc</option>
                <option value="2">Jednou za dva měsíce</option>
                <option value="3">Jednou za tři měsíce</option>
              </select>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Preferovaný den objednání
              <select
                name="den"
                id="den"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              >
                <option value="monday">Pondělí</option>
                <option value="tuseday">Úterý</option>
                <option value="wednesday">Středa</option>
                <option value="thursday">Čtvrtek</option>
                <option value="friday">Pátek</option>
              </select>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Způsob doručení
              <select
                name="delivery"
                id="delivery"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                value={packeta}
                onChange={(e) => {
                  setPacketa(e.target.value);
                }}
              >
                <option value="0">Nejlevnější kurýr</option>
                <option value="1">Zásilkovna</option>
              </select>
            </label>
            {packeta == 1 && (
              <label className="flex flex-col text-heading text-lg font-semibold">
                Vložte odkaz na zásilkovnu
                <div className="flex gap-2 justify-evenly">
                  <a
                    className="w-[25%] p-2 bg-white border border-slate-300 rounded-md text-center"
                    href="https://www.zasilkovna.cz/pobocky"
                    target="_blank"
                  >
                    Najít zásilkovnu
                  </a>
                  <input
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded-md p-2 text-md font-semibold text-input w-[75%]"
                    placeholder="https://www.zasilkovna.cz/pobocky/z-box-golcuv-jenikov-5-kvetna-8
"
                  ></input>
                </div>
              </label>
            )}
          </div>
        </fieldset>

        <div className="mx-auto flex gap-3">
          <button
            className="bg-tertiary p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(1);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Zpět
          </button>
          <button
            className="bg-tertiary p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
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
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Nastavte si parametry vašeho předplatného
          </h2>
          <p className="text-md font-semibold text-p">
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
    const [inputs, setInputs] = useState([
      { url: "", amount: "", exchange: "" },
    ]);

    const handleAddInput = () => {
      setInputs([...inputs, { url: "", amount: "", exchange: "" }]);
    };

    const handleChange = (event, index) => {
      let { name, value } = event.target;
      let onChangeValue = [...inputs];
      onChangeValue[index][name] = value;
      setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
      const newArray = [...inputs];
      newArray.splice(index, 1);
      setInputs(newArray);
    };

    return (
      <form className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg">
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Zboží do objednávky
          </legend>
          <div className="flex flex-col gap-3">
            {inputs.map((item, index) => {
              return (
                <div className="grid grid-cols-12 gap-2 maw-w-full">
                  <label className="flex flex-col text-primary text-lg font-semibold col-span-6">
                    Odkaz na položku
                    <input
                      name="url"
                      type="text"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      placeholder="www.eshop.cz/hodinky/rolex300"
                      value={item.url}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    ></input>
                  </label>
                  <label className="flex flex-col text-primary text-lg font-semibold col-span-2">
                    Množství
                    <input
                      name="amount"
                      type="number"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      placeholder="5"
                      value={item.amount}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    ></input>
                  </label>
                  <label className="flex flex-col text-heading text-lg font-semibold col-span-3">
                    Nahraditelné?
                    <select
                      name="exchange"
                      id="exchange"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      value={item.exchange}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    >
                      <option value="true">Ano</option>
                      <option value="false">Ne</option>
                    </select>
                  </label>
                  <FontAwesomeIcon
                    icon={faDeleteLeft}
                    className="text-xl text-red-400 self-end mb-[14px] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteInput(index);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <button
            className="flex justify-center items-center rounded-sm my-4 text-3xl cursor-pointer hover:scale-105 ease-in-out transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleAddInput();
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} className="text-tertiary" />
          </button>
        </fieldset>

        <div className="mx-auto flex gap-3">
          <button
            className="bg-tertiary p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
            onClick={() => {
              setStep(2);
            }}
          >
            Zpět <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="bg-tertiary p-3 rounded-md text-lg font-semibold text-white min-w-[150px]"
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

  function StepThreeComment() {
    return (
      <>
        <div className="p-10">
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Vyberte produkty, které chcete objednávat
          </h2>
          <p className="text-md font-semibold text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-heading pl-10">
            Nastavení předplatného
          </h1>
          <button className="bg-emerald-300 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-emerald-500">
            Uložit
          </button>
        </div>
        <div className="grid grid-cols-[1fr_1fr]">
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
