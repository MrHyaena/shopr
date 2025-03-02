import { useEffect, useState } from "react";
import { useUpdate } from "../hooks/useUpdate";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export function Personal() {
  function PersonalForm() {
    const { user } = useAuthContext();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [city, setCity] = useState("");
    const [cityNumber, setCityNumber] = useState("");

    useEffect(() => {
      setEmail(user.email);
      setFirstName(user.firstName);
      setSecondName(user.secondName);
      setPhone(user.phone);
      setAddress(user.address);
      setAddressNumber(user.addressNumber);
      setCity(user.city);
      setCityNumber(user.cityNumber);
    }, []);

    const { update, isLoading, error } = useUpdate();

    async function handleSubmit(e) {
      console.log("starting submit");
      e.preventDefault();
      const data = {
        email,
        firstName,
        secondName,
        phone,
        address,
        addressNumber,
        city,
        cityNumber,
      };

      await update(data);
    }
    return (
      <>
        <form
          className="flex flex-col gap-5 xl:p-10 p-2 bg-white border border-slate-200 rounded-md"
          onSubmit={handleSubmit}
        >
          <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-5">
            <legend className="text-xl font-semibold text-slate-900">
              Osobní údaje
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
          <div className="flex justify-center">
            <button
              disabled={isLoading}
              className="bg-quad cursor-pointer text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              type="submit"
            >
              Aktualizovat
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
              {error}
            </h2>
          )}
        </form>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col xl:gap-10 gap-10 xl:pt-10 pt-30 text-textDark">
        <div className="flex xl:flex-row justify-between items-start xl:items-center flex-col-reverse gap-5">
          <h1 className="text-3xl font-bold text-heading">Vaše osobní údaje</h1>
          <Link
            to="/"
            className="bg-quad text-textButton hidden xl:block text-center p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className=" flex xl:flex-row flex-col gap-10 xl:pb-0 pb-20">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-xl font-bold text-heading">
              Údaje můžete rovnou upravovat
            </h1>
            <PersonalForm />
          </div>
          <div className="flex flex-col items-start gap-5 max-w-[700px]">
            <h1 className="text-xl font-bold text-heading">
              K čemu tyto informace slouží?
            </h1>
            <p className="text-lg font-semibold ">
              Tyto informace používáme pro urychlení procesu tvorby
              předplatného. Vaše osobní údaje můžete kdykoliv změnit.
              Aktualizované údaje budou dostupné okamžitě.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
