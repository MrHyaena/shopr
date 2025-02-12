import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export function SignupPage() {
  const [step, setStep] = useState(1);

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
      <div className="bg-slate-50 flex justify-center items-center min-h-screen">
        <div className="bg-white flex gap-5 p-5 border rounded-xl border-slate-200">
          <form className="flex flex-col gap-5 p-2" onSubmit={handleSubmit}>
            <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
              <legend className="text-xl font-semibold text-slate-900 mb-5">
                Zaregistrovat se
              </legend>
              <div className="flex gap-3">
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
              <div className="flex gap-3">
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
              <div className="flex gap-3">
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
              <legend className="text-xl font-semibold text-slate-900 mb-5">
                Adresa dodání (lze po registraci změnit)
              </legend>
              <div className="flex gap-3">
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
              <div className="flex gap-3">
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
          <div className="xl:w-[500px] flex flex-col justify-center items-center gap-4 text-start">
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-xl font-semibold">
                Děkujeme, že to s námi chcete vyzkoušet!
              </h2>
              <p className="text-md font-semibold text-textDarker">
                Jakmile vyplníte formulář na levé straně, vytvoříme pro Vás v
                našem systému uživatelský účet. V něm si následně můžete
                vytvořit předplatné v jakémkoliv eshopu budete chtít.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-semibold">
                Proč potřebujeme tyto údaje?
              </h2>
              <p className="text-md font-semibold text-textDarker">
                Každé předplatné vyžaduje kontaktní a dodací údaje. Abychom Vám
                usnadnili v budoucnu práci, přiřadíme je k vašemu uživatelskému
                účtu. Budete je poté moci nastavit na jedno kliknutí.
              </p>
              <p className="text-md font-semibold text-textDarker">
                Údaje lze samozřejmě kdykoliv změnit.
              </p>
            </div>
            <div className="text-sm font-semibold text-textDark flex items-center gap-3 bg-quad m-4 p-4 rounded-lg">
              <p className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-xl"
                />
                Tento formulář slouží pouze pro registraci účtu. Nejde o
                založení předplatného. Registrace účtu a jeho vedení je celé
                zdarma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
