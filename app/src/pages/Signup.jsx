import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import logoBlack from "/public/shopr-logo-black.png";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [cityNumber, setCityNumber] = useState("");

  const [question, setQuestion] = useState(0);

  const { signup, error, isLoading } = useSignup();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
      passwordCheck,
      firstName,
      secondName,
      phone,
      address,
      addressNumber,
      city,
      cityNumber,
    };

    await signup(data);
  }

  return (
    <>
      <div className="bg-slate-50 flex flex-col justify-center items-center min-h-screen p-5 xl:p-0">
        <div className="bg-white flex xl:flex-row flex-col-reverse gap-8 p-5 border rounded-xl border-slate-200 shadow-xl animate-fall-down-faster">
          <form className="flex flex-col gap-5 p-2" onSubmit={handleSubmit}>
            <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
              <legend className="text-xl font-semibold text-slate-900">
                Zaregistrovat se
              </legend>
              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Jméno:
                  <input
                    name="firstName"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    value={firstName}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Příjmení:
                  <input
                    name="secondName"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setSecondName(e.target.value);
                    }}
                    value={secondName}
                  ></input>
                </label>
              </div>
              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Telefon:
                  <input
                    name="phone"
                    type="number"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Email:
                  <input
                    name="email"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  ></input>
                </label>
              </div>
              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Heslo
                  <input
                    name="password"
                    type="password"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Heslo znovu
                  <input
                    name="passwordCheck"
                    type="password"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setPasswordCheck(e.target.value);
                    }}
                    value={passwordCheck}
                  ></input>
                </label>
              </div>
            </fieldset>

            <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
              <legend className="text-xl font-semibold text-slate-900">
                Adresa dodání
              </legend>
              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Ulice:
                  <input
                    name="address"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Číslo popisné:
                  <input
                    name="addressNumber"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setAddressNumber(e.target.value);
                    }}
                    value={addressNumber}
                  ></input>
                </label>
              </div>
              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Město:
                  <input
                    name="city"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    value={city}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  PSČ:
                  <input
                    name="cityNumber"
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setCityNumber(e.target.value);
                    }}
                    value={cityNumber}
                  ></input>
                </label>
              </div>
            </fieldset>
            <button
              disabled={isLoading}
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              type="submit"
            >
              Zaregistrovat se
            </button>
            <Link
              to="/login"
              className="text-center font-semibold hover:scale-105 transition-all ease-in-out"
            >
              Přihlásit se
            </Link>
            {error && (
              <h2 className="font-bold text-center p-2 bg-red-200 rounded-lg border-2 border-red-300">
                {error}
              </h2>
            )}
          </form>
          <div className="xl:w-[500px] max-w-full flex flex-col justify-start items-center gap-4 text-center bg-quad rounded-xl p-3 shadow-xl animate-fall-down">
            <img
              src={logoBlack}
              alt="logo"
              className="max-h-16 animate-scale-up justify-self-center"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-xl font-semibold">
                Děkujeme, že to s námi chcete vyzkoušet!
              </h2>
              <p className="text-lg font-semibold text-textDark">
                Jakmile vyplníte formulář na levé straně, vytvoříme pro Vás v
                našem systému uživatelský účet. V něm si následně můžete
                vytvořit předplatné v jakémkoliv e-shopu budete chtít.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <button
                className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  if (question == 1) {
                    setQuestion(0);
                  }
                  if (question == 0 || question == 2 || question == 3) {
                    setQuestion(1);
                  }
                }}
              >
                Je registrace a vedení účtu zdarma?
                {question == 1 ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                )}
              </button>
              {question == 1 && (
                <div className="animate-scale-up">
                  <p className="text-md font-semibold text-textDark mb-2">
                    Vedení i registrace účtu jsou zcela zdarma. Platíme malou
                    částku pouze v případě, že máte aktivní předplatné.
                  </p>
                </div>
              )}

              <button
                className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  if (question == 2) {
                    setQuestion(0);
                  }
                  if (question == 0 || question == 1 || question == 3) {
                    setQuestion(2);
                  }
                }}
              >
                Můžu účet kdykoliv zrušit? Můžu změnit údaje?{" "}
                {question == 2 ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                )}
              </button>
              {question == 2 && (
                <div className="animate-scale-up">
                  <p className="text-md font-semibold text-textDark mb-2">
                    Samozřejmě. Účet můžete zrušit z klientské sekce. Vaše údaje
                    okamžitě smažeme společně se všemi předplatnými.
                  </p>
                  <p className="text-md font-semibold text-textDark mb-2">
                    Údaje lze kdykoliv změnit, stačí se jen přihlásit a přejít
                    do sekce profilu.
                  </p>
                </div>
              )}

              <button
                className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  if (question == 3) {
                    setQuestion(0);
                  }
                  if (question == 1 || question == 2 || question == 0) {
                    setQuestion(3);
                  }
                }}
              >
                K čemu potřebujeme tyto údaje?
                {question == 3 ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-tertiary bg-white w-5 h-5 p-3 rounded-md text-xl"
                  />
                )}
              </button>
              {question == 3 && (
                <div className="animate-scale-up">
                  <p className="text-md font-semibold text-textDark mb-2">
                    Každé předplatné vyžaduje kontaktní a dodací údaje. Abychom
                    Vám usnadnili v budoucnu práci, přiřadíme je k vašemu
                    uživatelskému účtu. Budete je poté moci nastavit na jedno
                    kliknutí.
                  </p>
                  <p className="text-md font-semibold text-textDark">
                    Údaje lze samozřejmě kdykoliv změnit.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
