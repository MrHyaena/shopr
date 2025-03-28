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
import background from "/public/background.jpg";
import { ErrorWindow } from "../Components/errorWindow";
import MessageWindow from "../Components/messageWindow";

export function SignupPage() {
  function SignupForm() {
    let [searchParams, setSearchParams] = useSearchParams("");
    const { signup, error, isLoading, message } = useSignup();

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
        {!message ? (
          <>
            {isLoading && (
              <div className="w-screen h-screen bg-black/80 flex flex-col gap-4 items-center justify-center fixed top-0 left-0 z-40">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="text-6xl text-white animate-rotate"
                />
                <p className="text-textLight text-2xl font-semibold">
                  Pracujeme na tom...
                </p>
              </div>
            )}
            <div className=" flex flex-col gap-5 animate-fall-down-faster xl:max-w-[50%]">
              {error && <ErrorWindow error={error} />}
              <div className="flex flex-col justify-center items-center text-center gap-3">
                <h1 className="text-2xl font-semibold">Zaregistrujte se</h1>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col text-textDark text-md font-semibold">
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
                <label className="flex flex-col text-textDark text-md font-semibold">
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
                <label className="flex flex-col text-textDark text-md font-semibold col-span-2">
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
                <label className="flex flex-col text-textDark text-md font-semibold col-span-2">
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
                <label className="flex flex-col text-textDark text-md font-semibold">
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
                <label className="flex flex-col text-textDark text-md font-semibold">
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

              <div className="flex gap-3 xl:flex-row flex-col">
                <label className="flex flex-row-reverse gap-3 text--textDark text-lg font-semibold col-span-6">
                  <p className="text-base">
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
              <button
                onClick={(e) => handleSubmit(e)}
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
            </div>
          </>
        ) : (
          <AfterSignup message={message} />
        )}
      </>
    );
  }

  function AfterSignup({ message }) {
    return (
      <>
        <div className="bg-white flex  flex-col-reverse gap-8 p-5 border rounded-xl border-slate-200 shadow-xl animate-fall-down-faster xl:max-w-[60%]">
          <div className="flex flex-col gap-5 items-center">
            <img src={logoBlack} alt="logo" className="w-20" />
            <MessageWindow message={message} />
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

  function SignupRightside() {
    return (
      <>
        <p className="font-semibold text-textDark">
          Děkujeme, že to s námi chcete vyzkoušet! Jakmile vyplníte formulář na
          levé straně, vytvoříme pro Vás v našem systému uživatelský účet. V něm
          si následně můžete vytvořit předplatné u jakéhokoliv e-shopu jen
          chcete.
        </p>
        <a href="https://www.shopr.cz/otazky" target="_blank">
          <button className="bg-quad p-3 text-md font-semibold text-textLight rounded-md transition-all ease-in-out hover:scale-105 cursor-pointer">
            Často kladené otázky
          </button>
        </a>
      </>
    );
  }

  return (
    <>
      <>
        <div className="xl:grid grid-cols-5 flex items-center justify-center min-h-screen ">
          <div className="col-span-2 flex flex-col items-center justify-center gap-6 p-3">
            <a href="https://www.shopr.cz">
              <img src={logoBlack} className="w-30 animate-fall-down" />
            </a>
            <SignupForm />
          </div>

          <div
            className="col-span-3 h-screen w-full bg-amber-200 xl:flex hidden items-center justify-center"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-[50%] bg-white rounded-md p-10 flex flex-col items-start justify-center gap-10 animate-fall-left">
              <SignupRightside />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
