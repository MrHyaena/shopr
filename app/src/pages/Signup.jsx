import { useEffect, useState } from "react";
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
          <div className="flex justify-between items-center gap-5 mb-4">
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
            <p className="font-semibold text-textDarker text-lg text-start  col-span-2">
              {answer}
            </p>
          )}
        </div>
      </>
    );
  }

  function SignupForm() {
    let [searchParams, setSearchParams] = useSearchParams("");

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

    const [terms, setTerms] = useState(false);

    const { signup, error, isLoading, message } = useSignup();

    useEffect(() => {
      let emailParam = searchParams.get("email");
      if (emailParam) {
        setEmail(emailParam);
      }
    }, []);

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
        terms,
      };

      await signup(data);
    }
    return (
      <>
        {!isLoading ? (
          <>
            {!message ? (
              <div className="bg-white flex xl:grid grid-cols-2 flex-col-reverse gap-8 p-5 border rounded-xl border-slate-200 shadow-xl animate-fall-down-faster xl:max-w-[50%]">
                <form
                  className="flex flex-col gap-5 p-2"
                  onSubmit={handleSubmit}
                >
                  <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
                    <legend className="text-xl font-semibold text-slate-900">
                      Zaregistrovat se
                    </legend>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                      <label className="flex flex-col text--textDark text-lg font-semibold">
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
                    <div className="flex gap-3 xl:flex-row flex-col"></div>
                    <div className="flex gap-3 xl:flex-row flex-col"></div>
                    <div className="flex gap-3 xl:flex-row flex-col"></div>
                  </fieldset>

                  <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
                    <div className="flex gap-3 xl:flex-row flex-col">
                      <label className="flex flex-row-reverse gap-3 text--textDark text-lg font-semibold col-span-6">
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
                          služby Shopr
                        </p>
                        <input
                          checked={terms}
                          value="trie"
                          name="city"
                          type="checkbox"
                          className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                          onChange={(e) => {
                            setTerms(!terms);
                          }}
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
              </div>
            ) : (
              <AfterSignup message={message} />
            )}{" "}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="font-bold animate-scale-up">
              Vydržte, připravujeme Váš účet
            </p>
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-rotate text-4xl"
            />
          </div>
        )}
      </>
    );
  }

  function SignupRightside() {
    return (
      <>
        <div className="max-w-full flex flex-col justify-start items-center gap-4 text-center bg-white rounded-lg p-3 shadow-md border border-slate-100 animate-fall-down">
          <a href="https://shopr.cz">
            <img
              src={logoBlack}
              alt="logo"
              className="max-h-16 animate-scale-up justify-self-center"
            />
          </a>
          <div className="flex flex-col gap-3 p-4">
            <p className="text-lg font-semibold text-textDark">
              Děkujeme, že to s námi chcete vyzkoušet! Jakmile vyplníte formulář
              na levé straně, vytvoříme pro Vás v našem systému uživatelský
              účet. V něm si následně můžete vytvořit předplatné u jakéhokoliv
              e-shopu jen chcete.
            </p>
          </div>
          <a href="https://www.shopr.cz/otazky" target="_blank">
            <button className="bg-quad p-3 text-xl font-semibold text-textLight rounded-md transition-all ease-in-out hover:scale-105 cursor-pointer">
              Často kladené otázky
            </button>
          </a>
        </div>
      </>
    );
  }
  function AfterSignup({ message }) {
    return (
      <>
        <div className="bg-white flex  flex-col-reverse gap-8 p-5 border rounded-xl border-slate-200 shadow-xl animate-fall-down-faster xl:max-w-[60%]">
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
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 flex flex-col justify-center items-center min-h-screen p-5 xl:p-0">
        <SignupForm />
      </div>
    </>
  );
}
