import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faExclamation,
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import logoBlack from "/public/shopr-logo.png";

export function SignupPage() {
  function QuestionToggle({ question, answer }) {
    const [toggle, setToggle] = useState(false);

    return (
      <>
        <div className=" bg-white w-full py-2">
          <div className="flex justify-between items-center gap-5">
            <h5 className="text-lg font-semibold text-textDark text-start">
              {question}
            </h5>
            <FontAwesomeIcon
              icon={toggle ? faChevronDown : faChevronUp}
              className="text-xl p-2 bg-quad rounded-lg shadow-md text-white cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          {toggle && (
            <p className="font-medium text-textDark text-lg text-start  col-span-2">
              {answer}
            </p>
          )}
        </div>
      </>
    );
  }

  function SignupForm() {
    let [searchParams] = useSearchParams();

    const [email, setEmail] = useState(searchParams.get("email"));
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [city, setCity] = useState("");
    const [cityNumber, setCityNumber] = useState("");

    const { signup, error, isLoading, message } = useSignup();

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
        {!isLoading ? (
          <>
            {!message ? (
              <>
                <form
                  className="flex flex-col gap-5 p-2"
                  onSubmit={handleSubmit}
                >
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
                        Heslo:
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
                        Heslo znovu:
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
                    className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
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
                    <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
                      {error}
                    </h2>
                  )}
                </form>
                <SignupRightside />
              </>
            ) : (
              <AfterSignup message={message} />
            )}{" "}
          </>
        ) : (
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-rotate text-4xl"
          />
        )}
      </>
    );
  }

  function SignupRightside() {
    return (
      <>
        <div className="xl:w-[500px] max-w-full flex flex-col justify-start items-center gap-4 text-center bg-white rounded-lg p-3 shadow-xl border border-slate-100 animate-fall-down">
          <img
            src={logoBlack}
            alt="logo"
            className="max-h-16 animate-scale-up justify-self-center"
          />
          <div className="flex flex-col gap-3 p-4">
            <p className="text-lg font-semibold text-textDark">
              Děkujeme, že to s námi chcete vyzkoušet! Jakmile vyplníte formulář
              na levé straně, vytvoříme pro Vás v našem systému uživatelský
              účet. V něm si následně můžete vytvořit předplatné u jakéhokoliv
              e-shopu jen chcete.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 w-full">
            <QuestionToggle
              question={"Je registrace a vedení účtu zdarma?"}
              answer="Vedení i registrace účtu jsou zcela zdarma. Platíte malou částku pouze v případě, že máte aktivní předplatné."
            />
            <QuestionToggle
              question={"Můžu účet kdykoliv zrušit nebo změnit?"}
              answer="Samozřejmě. Účet můžete zrušit z klientské sekce. Vaše údaje
                okamžitě smažeme společně se všemi předplatnými. Údaje lze kdykoliv změnit, stačí se jen přihlásit a přejít do
                sekce profilu."
            />
            <QuestionToggle
              question={"K čemu potřebujeme tyto údaje?"}
              answer="Každé předplatné vyžaduje kontaktní a dodací údaje. Abychom
                Vám usnadnili v budoucnu práci, přidáme tyto údaje k
                uživatelskému účtu. Budete je poté moci nastavit na jedno
                kliknutí."
            />
          </div>
        </div>
      </>
    );
  }

  function AfterSignup({ message }) {
    return (
      <>
        <div className="flex flex-col gap-5 items-center">
          <img src={logoBlack} alt="logo" className="w-20" />
          <h2 className="font-bold text-center p-2 bg-messageBg rounded-lg border-2 border-messageBorder max-w-[250px]">
            {message}
          </h2>
          <Link
            to="/login"
            className="bg-quad text-center text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
          >
            Zpět na přihlášení
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 flex flex-col justify-center items-center min-h-screen p-5 xl:p-0">
        <div className="bg-white flex xl:flex-row flex-col-reverse gap-8 p-5 border rounded-xl border-slate-200 shadow-xl animate-fall-down-faster">
          <>
            <SignupForm />
          </>
        </div>
      </div>
    </>
  );
}
