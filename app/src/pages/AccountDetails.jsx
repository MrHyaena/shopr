import { useEffect, useState } from "react";
import { useUpdate } from "../hooks/useUpdate";
import { Link, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { deleteUserHandler } from "../functions/deleteUserHandler";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useExpiredContext } from "../hooks/useExpiredContext";
import { ErrorWindowApp } from "../Components/responseWindows/errorWindowApp";
import { MessageWindowApp } from "../Components/responseWindows/messageWindowApp";
import SubHeader from "../Components/subHeader";

export function AccountDetails() {
  const { user, setUser } = useAuthContext();
  const { deleteUser } = deleteUserHandler();
  const { setExpired } = useExpiredContext();
  let [searchParams] = useSearchParams();

  function PersonalForm() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [city, setCity] = useState("");
    const [cityNumber, setCityNumber] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
      setEmail(user.email);
      setFirstName(user.firstName);
      setSecondName(user.secondName);
      setPhone(user.phone);
      setAddress(user.address);
      setAddressNumber(user.addressNumber);
      setCity(user.city);
      setCityNumber(user.cityNumber);

      if (searchParams.get("result") == "true") {
        setMessage("Vaše údaje jsou úspěšně změněné.");
      }
    }, []);

    const { update, isLoading } = useUpdate();

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

      await update(data, setError, setMessage);
    }
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
        <form
          className="flex flex-col gap-5 xl:p-5 p-2 bg-white border-slate-200 shadow-md shadow-bg-slate-200 rounded-md self-stretch"
          onSubmit={handleSubmit}
        >
          <fieldset className="bg-white p-3 rounded-md border border-slate-100 flex flex-col gap-3">
            <legend className="text-lg font-semibold text-slate-900">
              Osobní údaje
            </legend>
            <div className="flex gap-3 xl:grid grid-cols-2 flex-col">
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Jméno (povinné):
                </label>
                <input
                  name="firstName"
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Příjmení (povinné):
                </label>
                <input
                  name="secondName"
                  type="text"
                  onChange={(e) => {
                    setSecondName(e.target.value);
                  }}
                  value={secondName}
                ></input>
              </div>
              <div>
                {" "}
                <label className="flex flex-col text-textDark font-semibold">
                  Telefon (povinné):
                </label>
                <input
                  name="phone"
                  type="number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Email (nelze měnit):
                </label>
                <input
                  disabled={true}
                  name="email"
                  type="email"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={email}
                ></input>
              </div>
            </div>
          </fieldset>

          <fieldset className="bg-white p-3 rounded-md border border-slate-100 flex flex-col gap-3">
            <legend className="text-lg font-semibold text-slate-900">
              Adresa dodání
            </legend>
            <div className="flex gap-3 xl:grid grid-cols-2 flex-col">
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Ulice:
                </label>
                <input
                  name="address"
                  type="text"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Číslo popisné:
                </label>
                <input
                  name="addressNumber"
                  type="text"
                  onChange={(e) => {
                    setAddressNumber(e.target.value);
                  }}
                  value={addressNumber}
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  Město:
                </label>
                <input
                  name="city"
                  type="text"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-textDark font-semibold">
                  PSČ:
                </label>
                <input
                  name="cityNumber"
                  type="text"
                  onChange={(e) => {
                    setCityNumber(e.target.value);
                  }}
                  value={cityNumber}
                ></input>
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col items-center justify-center w-full">
            <button
              disabled={isLoading}
              className="bg-quad cursor-pointer mb-2 text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              type="submit"
            >
              Aktualizovat
            </button>
            {error && <ErrorWindowApp error={error} />}
            {message && <MessageWindowApp message={message} />}
          </div>
        </form>
      </>
    );
  }

  function PersonalFormComment() {
    const [toggleDelete, setToggleDelete] = useState(false);
    const [checkDelete, setCheckDelete] = useState("");
    const [errorDelete, setErrorDelete] = useState(null);

    const [loader, setLoader] = useState();

    function deleteUserAccount() {
      if (checkDelete == "smazat účet") {
        setCheckDelete(null);
        deleteUser(user, setUser, setExpired, setLoader, setErrorDelete);
      }

      if (checkDelete !== "smazat účet") {
        setErrorDelete(true);
      }
    }

    return (
      <>
        {loader && (
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
        <div className="flex flex-col xl:items-start xl:text-start px-5 gap-5 max-w-[700px]">
          <h1 className="text-xl font-bold text-heading">
            K čemu tyto informace slouží?
          </h1>
          <p className="text-lg font-semibold ">
            Tyto informace používáme pro urychlení procesu tvorby předplatného.
            Vaše osobní údaje můžete kdykoliv změnit. Aktualizované údaje budou
            dostupné okamžitě.
          </p>
          <h1 className="text-xl font-bold text-heading">
            Zrušení uživatelského účtu
          </h1>
          <p className="text-lg font-semibold ">
            Svůj účet můžete kdykoliv zrušit kliknutím na tlačítko níže a
            potvrzením zrušení. Každé aktivní předplatné bude nenávratně
            deaktivováno a smazáno, stejně tak jako vaše data.
          </p>
          <button
            onClick={() => {
              setToggleDelete(true);
            }}
            className="font-semibold bg-white hover:bg-red-500 text-textDark w-full hover:text-white  text-lg border border-slate-200 p-3 rounded-md transition-all ease-in-out  cursor-pointer"
          >
            Zrušit účet
          </button>
        </div>
        {toggleDelete && (
          <div className="fixed top-0 right-0 w-full p-5 h-full bg-primary/50 m-auto flex justify-center items-center">
            <div className="gap-5 flex flex-col justify-center items-stretch bg-white p-10 rounded-md max-w-[700px]">
              <h3 className="text-2xl font-bold text-textDark">
                Potvrďte zrušení účtu
              </h3>
              <p className="text-textDark font-semibold">
                Jakmile účet zušíte, automaticky deaktivujeme a vymažeme každé
                vaše předplatné. To stejné s vašimi daty. Tato akce je nevratná.
              </p>
              <p className="text-textDark font-semibold">
                Pro potvrzení smazání napište tento text:{" "}
                <span className="text-quad">smazat účet</span>
              </p>
              <input
                type="text"
                className="bg-zinc-50 p-3 rounded-lg border border-slate-200 font-semibold"
                value={checkDelete}
                onChange={(e) => {
                  if (errorDelete) {
                    setErrorDelete(false);
                  }
                  setCheckDelete(e.target.value);
                }}
              />
              {errorDelete && (
                <ErrorWindowApp
                  error={"Vložený text se neshoduje s požadovaným textem."}
                />
              )}
              {errorDelete && <ErrorWindowApp error={errorDelete} />}
              <div className="grid grid-cols-2 w-full gap-5">
                <button
                  disabled={checkDelete !== "smazat účet"}
                  className="p-3 rounded-md bg-deleteButton hover:scale-105  hover:bg-red-500 transition-all ease-in-out cursor-pointer font-semibold text-textButton disabled:hover:scale-100 disabled:border disabled:bg-white disabled:border-slate-200 disabled:cursor-default disabled:text-textLighter"
                  onClick={() => {
                    deleteUserAccount();
                  }}
                >
                  Zrušit účet
                </button>

                <button
                  className="p-3 rounded-md bg-white border border-slate-200 font-semibold text-textDark cursor-pointer transition-all ease-in-out hover:scale-105"
                  onClick={() => {
                    setToggleDelete(false);
                  }}
                >
                  Zpět
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 lg:p-10 p-3 flex flex-col lg:gap-10 gap-10 lg:pt-10 pt-30 text-textDark">
        <SubHeader
          header={"Vaše osobní údaje"}
          buttonText={"Zpět"}
          linkTo={"/"}
        />
        <div className=" flex md:grid grid-cols-2 flex-col gap-10 xl:pb-0 pb-20">
          <div className="flex flex-col xl:items-start gap-5">
            <h1 className="text-xl font-bold text-heading xl:text-start text-center">
              Údaje můžete rovnou upravovat
            </h1>
            <PersonalForm />
          </div>
          <PersonalFormComment />
        </div>
      </div>
    </>
  );
}
