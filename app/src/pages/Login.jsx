import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import logoBlack from "/public/shopr-logo.png";
import background from "/public/background.jpg";

import { useReset } from "../hooks/useReset";
import { ErrorWindow } from "../Components/errorWindow";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useExpiredContext } from "../hooks/useExpiredContext";
import { MessageWindow } from "../Components/messageWindow";

export function LoginPage() {
  const [reset, setReset] = useState(false);

  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { expired, setExpired } = useExpiredContext();
    const { login, error, setError, isLoading } = useLogin();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setExpired(null);
      let formData = new FormData(document.querySelector("#submitForm"));
      let remember = formData.get("rememberCheckbox");

      await login({ email, password, remember });
    };

    useEffect(() => {
      if (expired) {
        setError(expired);
      }
    }, []);
    return (
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
        <div className="flex flex-col items-center justify-center gap-6 w-full animate-fall-down-faster">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <h1 className="text-2xl font-semibold">Přihlašte se</h1>
            <p className="font-medium xl:max-w-[80%]">
              Pokud ještě nemáte účet, přejděte na{" "}
              <Link className="underline text-quad" to="/signup">
                registraci
              </Link>
              .
            </p>
          </div>
          <form
            className="flex flex-col gap-5 xl:w-[50%] w-full"
            onSubmit={(e) => handleSubmit(e)}
            id="submitForm"
          >
            <fieldset className=" gap-3 flex flex-col">
              <label className="flex flex-col text-textDark text-md font-semibold col-span-6">
                Email:
                <input
                  name="email"
                  type="email"
                  className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                ></input>
              </label>
              <label className="flex flex-col text-textDark text-md font-semibold col-span-6">
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
              <p
                className="font-semibold underline text-textDark text-sm cursor-pointer"
                onClick={() => {
                  setReset(!reset);
                }}
              >
                Zapomenuté heslo
              </p>
            </fieldset>
            <label className="flex gap-3 font-medium text-sm text-textDark mx-3 cursor-pointer justify-center">
              <input
                value="true"
                type="checkbox"
                name="rememberCheckbox"
                id="rememberCheckbox"
              />
              Zapamatovat na 90 dní
            </label>
            <button
              className="bg-quad disabled:bg-gray-500 disabled:hover:scale-100 disabled:cursor-default text-textButton py-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              type="submit"
            >
              Přihlásit se
            </button>
            <Link
              to="/signup"
              className="text-center font-semibold hover:scale-105 transition-all ease-in-out"
            >
              Zaregistrovat se
            </Link>
          </form>
          {error && <ErrorWindow error={error} />}
        </div>
      </>
    );
  }

  function Reset() {
    const [email, setEmail] = useState("");

    const { reset, error, isLoading, message, setError } = useReset();
    const { setExpired } = useExpiredContext();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setExpired(null);
      if (!email) {
        setError("Je potřeba vyplnit email.");
      } else {
        await reset(email);
      }
    };

    return (
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
        <div className="flex flex-col items-center justify-center gap-6 w-full animate-scale-up">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <h1 className="text-2xl font-semibold">Zapomněli jste heslo?</h1>
            <p className="font-medium xl:max-w-[80%]">
              Ničemu to nevadí. Jednoduše zadejte email a postupujte podle
              instrukcí.
            </p>
          </div>
          <form
            className="flex flex-col xl:gap-5 xl:w-[50%] w-full "
            onSubmit={handleSubmit}
          >
            {!message ? (
              <>
                <fieldset className="">
                  <label className="flex flex-col text-textDark text-md font-semibold col-span-6">
                    Uživatelský email:
                    <input
                      name="email"
                      type="email"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    ></input>
                  </label>
                </fieldset>
                <button
                  disabled={isLoading}
                  className="bg-quad text-textButton my-3 xl:my-0 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
                  type="submit"
                >
                  Odeslat
                </button>
                <button
                  onClick={() => {
                    setReset(!reset);
                  }}
                  to="/signup"
                  className="text-center font-semibold hover:scale-105 transition-all ease-in-out cursor-pointer"
                >
                  Vrátit se na přihlášení
                </button>

                {error && (
                  <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
                    {error}
                  </h2>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center justify-center mb-2">
                  <MessageWindow message={message} />
                </div>
                <button
                  onClick={() => {
                    setReset(!reset);
                  }}
                  to="/signup"
                  className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
                >
                  Vrátit se na přihlášení
                </button>
              </>
            )}
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="xl:grid grid-cols-5 items-center justify-center xl:min-h-screen">
        <div className="col-span-2 flex flex-col items-center justify-center gap-6 p-3">
          <a href="https://www.shopr.cz">
            <img src={logoBlack} className="w-30 animate-fall-down" />
          </a>
          {reset ? <Reset /> : <Login />}
        </div>

        <div
          className="col-span-3 h-screen w-full xl:flex hidden items-center justify-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          {reset ? (
            <>
              <div className="w-[50%] bg-white rounded-md p-10 flex flex-col items-start justify-center gap-5 animate-fall-left">
                <h2 className="text-xl font-semibold">
                  Jak obnova hesla funguje
                </h2>
                <p className="text-textDark font-semibold">
                  Na emailovou adresu, kterou zadáte do pole vlevo, Vám přijde
                  zpráva s odkazem. Budete mít 15 minut na to, abyste na odkaz
                  kliknuli a heslo změnili. Pokud to nestihnete, bude nutné
                  požadavek opakovat. Pokud byste měli jakýkoliv problém,
                  napište nám prosím na adresu{" "}
                  <a href="mailto:info@shopr.cz" className="text-quad">
                    info@shopr.cz
                  </a>
                  .
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-[50%] bg-white rounded-md p-10 flex flex-col items-start justify-center gap-5 animate-fall-left">
                <h2 className="text-xl font-semibold">
                  Vítáme Vás v naší aplikaci!
                </h2>
                <p className="text-textDark font-semibold">
                  Ať už jste tu úplně poprvé nebo se k nám (doufejme) spokojeně
                  vracíte, vítejte a děkujeme. Každý den na naší službe
                  pracujeme a zlepšujeme ji na všech frontách. Sice máme nápadů
                  hodně, ale jde nám především o vaše pohodlí. Pokud byste proto
                  měli jakýkoliv nápad, který by Vám zásadně zpříjemnil
                  používání, napište nám jej prosím na adresu{" "}
                  <a href="mailto:info@shopr.cz" className="text-quad">
                    info@shopr.cz
                  </a>
                  .
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
