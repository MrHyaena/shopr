import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { tokenExpired } from "../functions/tokenExpired";
const apiURL = import.meta.env.VITE_API_URL;

export function Contact() {
  function Formular() {
    const { subscriptions } = useSubscriptionContext();
    const [email, setEmail] = useState("");
    const [problem, setProblem] = useState("");
    const [message, setMessage] = useState("");
    const [problemToggle, setProblemToggle] = useState(false);
    const { user, setUser } = useAuthContext();
    const [subject, setSubject] = useState("");
    const [loader, setLoader] = useState(false);

    const [error, setError] = useState(null);
    const [responseOk, setResponseOk] = useState(null);

    async function handleSend() {
      setLoader(true);
      const messageObject = {
        email: email,
        subject: subject,
        isSub: problemToggle,
        subscription: problem,
        message: message,
      };

      if (!email || !message || !subject) {
        setError("Prosím, vyplňte předmět, emailovou adresu a zprávu.");
      }

      if (email && message && subject) {
        const response = await fetch(apiURL + "/api/email/usercontact", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(messageObject),
        });

        const json = await response.json();

        if (response.ok) {
          setLoader(false);
          setError(null);
          setResponseOk(json);
        }

        if (!response.ok) {
          setLoader(false);
          setError(json);
          tokenExpired(json, setUser);
        }
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
        <form
          className="flex flex-col gap-5 xl:p-10 px-5 pt-5 bg-white border border-slate-200 rounded-lg w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <div className="grid gap-5">
            <label className="flex flex-col text-heading text-lg font-semibold">
              Email, na který budeme odpovídat
              <input
                value={email}
                onChange={(e) => {
                  setError(null);
                  setEmail(e.target.value);
                }}
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input "
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Předmět emailu
              <input
                value={subject}
                onChange={(e) => {
                  setError(null);
                  setSubject(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input "
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Máte problém s nějakým předplatným?
              <select
                value={problemToggle}
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                onChange={(e) => {
                  setError(null);
                  setProblemToggle(!problemToggle);
                }}
              >
                <option value="false">Ne</option>
                <option value="true">Ano</option>
              </select>
            </label>
            {problemToggle && (
              <label className="flex flex-col text-heading text-lg font-semibold">
                Vyberte předplatné
                <select
                  value={problem}
                  name="subProblem"
                  className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                  onChange={(e) => {
                    setError(null);
                    setProblem(e.target.value);
                  }}
                >
                  <option value="">Vyberte předplatné</option>
                  {subscriptions.map((sub, index) => {
                    return (
                      <option key={"subSelect" + sub._id} value={sub.subName}>
                        {sub.subName}
                      </option>
                    );
                  })}
                </select>
              </label>
            )}
          </div>
          <label className="flex flex-col text-heading text-lg font-semibold">
            Vaše zpráva
            <textarea
              value={message}
              onChange={(e) => {
                setError(null);
                setMessage(e.target.value);
              }}
              className="bg-slate-50 min-h-[150px] border border-slate-300 rounded p-2 text-md font-semibold text-input resize-none"
            ></textarea>
          </label>

          <div className="mx-auto">
            {responseOk == null && (
              <button className="bg-quad cursor-pointer text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200">
                Odeslat
              </button>
            )}
          </div>
          <div className="flex justify-center">
            {error && (
              <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
                {error}
              </h2>
            )}
            {responseOk && (
              <h2 className="font-bold text-center p-2 bg-messageBg rounded-lg border-2 border-messageBorder max-w-[250px]">
                {responseOk}
              </h2>
            )}
          </div>
        </form>
      </>
    );
  }
  return (
    <>
      <div className="bg-slate-50 xl:p-10 p-3 flex flex-col xl:gap-10 gap-10 xl:pt-10 pt-30 text-textDark">
        <div className="flex xl:flex-row justify-between xl:items-start flex-col-reverse gap-5">
          <h1 className="text-3xl font-bold text-heading xl:text-start text-center">
            Trápí Vás nějaký problém? Napište nám!
          </h1>
          <Link
            to="/"
            className="bg-quad text-textButton xl:block self-center text-center p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className=" flex xl:grid grid-cols-2 flex-col gap-10 xl:pb-0 pb-20">
          <div className="flex flex-col xl:items-start gap-5">
            <h1 className="text-xl font-bold text-heading xl:text-start text-center">
              Kontaktní formulář
            </h1>
            <Formular />
          </div>
          <div className="flex flex-col items-start gap-5 max-w-[700px] px-5">
            <h1 className="text-xl font-bold text-heading">Kontaktní údaje</h1>
            <p className="text-lg font-semibold ">
              Pokud nás chcete kontaktovat přímo na emailovou adresu, můžete to
              udělat skrze <span className="text-textA">info@shopr.cz</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
