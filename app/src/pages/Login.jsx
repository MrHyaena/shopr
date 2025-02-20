import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import logoBlack from "/public/shopr-logo-black.png";
import { useReset } from "../hooks/useReset";

export function LoginPage() {
  const [reset, setReset] = useState(false);

  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
      e.preventDefault();

      await login({ email, password });
    };
    return (
      <div className="bg-white flex xl:flex-row flex-col-reverse border rounded-xl border-slate-200 shadow-lg animate-fall-right-faster">
        <form
          className="flex flex-col gap-5 xl:py-10 py-5 px-5 xl:px-0 xl:pl-10"
          onSubmit={handleSubmit}
        >
          <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
            <legend className="text-xl font-semibold text-slate-900 mb-5">
              Přihlašte se
            </legend>
            <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
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
            <button
              className="font-semibold underline text-textDark text-sm cursor-pointer"
              onClick={() => {
                setReset(!reset);
              }}
            >
              Zapomenuté heslo
            </button>
          </fieldset>
          <button
            disabled={isLoading}
            className="bg-quad xl:m-3 m-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
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
          {error && (
            <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
              {error}
            </h2>
          )}
        </form>

        <div className="xl:w-[300px] xl:flex hidden flex-col items-center gap-3 justify-center bg-yellow-200 m-6 shadow-xl  rounded-xl text-textDark p-10 overflow-clip animate-fall-up-delay">
          <h2 className="text-2xl font-semibold">Vítejte!</h2>
          <p className="text-center font-semibold">
            Pokud ještě nemáte účet, klepněte na tlačítko Zaregistrovat se.
          </p>
        </div>
      </div>
    );
  }

  function Reset() {
    const [email, setEmail] = useState("");

    const { reset, error, isLoading, message, setError } = useReset();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email) {
        setError("Je potřeba vyplnit email.");
      } else {
        await reset(email);
      }
    };

    return (
      <div className="bg-white flex xl:flex-row flex-col-reverse border rounded-xl border-slate-200 shadow-lg animate-fall-right-faster">
        <form
          className="flex flex-col items-center gap-2 xl:py-10 py-5 px-5 xl:px-0 xl:pl-10"
          onSubmit={handleSubmit}
        >
          {!message ? (
            <>
              <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-5">
                <legend className="text-xl font-semibold text-slate-900">
                  Změna hesla
                </legend>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
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
                className="bg-quad xl:m-3 m-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
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
              <h2 className="font-bold text-center p-2 bg-messageBg rounded-lg border-2 border-messageBorder max-w-[250px]">
                {message}
              </h2>
              <button
                onClick={() => {
                  setReset(!reset);
                }}
                to="/signup"
                className="bg-quad xl:m-3 m-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
              >
                Vrátit se na přihlášení
              </button>
            </>
          )}
        </form>

        <div className="w-[300px] flex flex-col items-center gap-3 justify-center bg-yellow-200 m-6 shadow-xl  rounded-xl text-textDark p-10 overflow-clip animate-fall-up-delay">
          <h2 className="text-2xl font-semibold"></h2>
          <p className="text-center font-semibold">
            Po klepnutí na tlačítko Odeslat Vám přijde email s odkazem pro změnu
            hesla.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-50 flex flex-col xl:grid xl:grid-rows-[1fr_2fr_1fr] xl:justify-center xl:pt-0 justify-center items-center h-screen">
        <img
          src={logoBlack}
          alt="logo"
          className="xl:max-h-24 xl:mb-0 mb-5 max-h-16 animate-scale-up-delay justify-self-center"
        />

        {reset ? <Reset /> : <Login />}
      </div>
    </>
  );
}
