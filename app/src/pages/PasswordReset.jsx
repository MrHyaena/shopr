import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import logoBlack from "/public/shopr-logo.png";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const apiURL = import.meta.env.VITE_API_URL;
import background from "/public/background.jpg";
import { ErrorWindow } from "../Components/errorWindow";
import { MessageWindow } from "../Components/messageWindow";

export function PasswordReset() {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [utm, setUtm] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      apiURL + "/api/user/reset/authorized?hash=" + utm.get("hash"),
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: password,
          passwordCheck: passwordCheck,
        }),
      }
    );

    const json = response.json();

    if (!response.ok) {
      setIsLoading(false);

      setError(json);
    }

    if (response.ok) {
      setIsLoading(false);

      setMessage(json);
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

      <>
        <div className="xl:grid grid-cols-5 items-center justify-center xl:min-h-screen">
          <div className="col-span-2 flex flex-col items-center justify-center gap-6 p-3 animate-fall-down">
            <a href="https://www.shopr.cz">
              <img src={logoBlack} className="w-30" />
            </a>
            {!message ? (
              <>
                <div className="flex flex-col justify-center items-center text-center gap-3">
                  <h1 className="text-2xl font-semibold">Obnovte své heslo</h1>
                  <p className="font-medium xl:max-w-[80%]">
                    Nové heslo musí obsahovat alespoň 6 znaků a minimálně jedno
                    číslo
                  </p>
                </div>
                <form className="flex flex-col xl:gap-5 xl:w-[50%] w-full ">
                  <fieldset className="">
                    <label className="flex flex-col text-textDark text-md font-semibold col-span-6">
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
                    <label className="flex flex-col text-textDark text-md font-semibold col-span-6">
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
                    className="bg-quad text-textButton my-3 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 self-stretch"
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
                  {error && <ErrorWindow error={error} />}
                </form>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center gap-5 p-5">
                  <MessageWindow message={message} />
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

          <div
            className="col-span-3 h-screen w-full xl:flex hidden items-center justify-center"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-[50%] bg-white rounded-md p-10 flex flex-col items-start justify-center gap-5 animate-fall-left">
              <h2 className="text-xl font-semibold">Obnova hesla</h2>
              <p className="text-textDark font-semibold">
                Pokud byste měli s obnovou hesla jakýkoliv problém, neváhejte se
                na nás obrátit na emailové adrese{" "}
                <a href="mailto:info@shopr.cz" className="text-quad">
                  info@shopr.cz
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
