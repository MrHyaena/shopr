import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import logoBlack from "/public/shopr-logo.png";
const apiURL = import.meta.env.VITE_API_URL;

export function PasswordReset() {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [utm, setUtm] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password && !passwordCheck) {
      setError("Musíte vyplnit obě pole");
    } else if (password !== passwordCheck) {
      setError("Hesla se musí shodovat.");
    } else if (password.length < 6) {
      setError("Heslo musí mít délku alespoň 6 znaků");
    } else {
      const response = await fetch(
        apiURL + "/api/user/reset/authorized?hash=" + utm.get("hash"),
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: password }),
        }
      );

      const json = response.json();

      if (!response.ok) {
        setError(json);
      }

      if (response.ok) {
        setMessage(json);
      }
    }
  };

  return (
    <>
      <div className="bg-slate-50 flex flex-col xl:grid xl:grid-rows-[1fr_2fr_1fr] xl:justify-center xl:pt-0 justify-center items-center h-screen">
        <img
          src={logoBlack}
          alt="logo"
          className="xl:max-h-24 xl:mb-0 mb-5 max-h-16 animate-scale-up-delay justify-self-center"
        />

        <div className="bg-white flex xl:flex-row flex-col-reverse border rounded-xl border-slate-200 shadow-lg animate-fall-right-faster">
          {!message ? (
            <form className="flex flex-col items-center gap-5 xl:py-10 p-5">
              <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
                <legend className="text-xl font-semibold text-slate-900 mb-5">
                  Zadejte nové heslo
                </legend>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Nové heslo:
                  <input
                    type="password"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setError(null);
                      setPassword(e.target.value);
                    }}
                    value={password}
                  ></input>
                </label>
                <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                  Heslo znovu:
                  <input
                    type="password"
                    className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                    onChange={(e) => {
                      setError(null);
                      setPasswordCheck(e.target.value);
                    }}
                    value={passwordCheck}
                  ></input>
                </label>
              </fieldset>
              <button
                className="bg-quad text-textButton xl:m-3 m-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Změnit heslo
              </button>
              <Link
                to="/login"
                className="text-center font-semibold hover:scale-105 transition-all ease-in-out"
              >
                Zpět na přihlášení
              </Link>
              {error && (
                <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder max-w-[250px]">
                  {error}
                </h2>
              )}
            </form>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-5 p-5">
                <h2 className="font-bold text-center p-2 bg-messageBg rounded-lg border-2 border-messageBorder max-w-[250px]">
                  {message}
                </h2>
                <Link
                  to="/login"
                  className="bg-quad text-textButton xl:m-3 m-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
                >
                  Zpět na přihlášení
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
