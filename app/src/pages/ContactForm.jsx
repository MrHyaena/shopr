import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { tokenExpired } from "../functions/tokenExpired";
import { useExpiredContext } from "../hooks/useExpiredContext";
import { ErrorWindowApp } from "../Components/responseWindows/errorWindowApp";
import { MessageWindowApp } from "../Components/responseWindows/messageWindowApp";
import SubHeader from "../Components/subHeader";
const apiURL = import.meta.env.VITE_API_URL;

export function ContactForm() {
  function Formular() {
    const { subscriptions } = useSubscriptionContext();
    const { setExpired } = useExpiredContext();
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
        setLoader(false);
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
          tokenExpired(json, setUser, setExpired);
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
          className="flex flex-col gap-5 xl:p-5 p-2 bg-white border-slate-200 shadow-md shadow-bg-slate-200 rounded-md self-stretch"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <fieldset className="bg-white p-3 rounded-md border border-slate-100 flex flex-col gap-3">
            <div className="grid gap-3">
              <div>
                <label className="flex flex-col text-heading  font-semibold">
                  Email, na který budeme odpovídat
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setError(null);
                    setEmail(e.target.value);
                  }}
                  type="email"
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-heading  font-semibold">
                  Předmět emailu
                </label>{" "}
                <input
                  value={subject}
                  onChange={(e) => {
                    setError(null);
                    setSubject(e.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div>
                <label className="flex flex-col text-heading  font-semibold">
                  Máte problém s nějakým předplatným?
                </label>
                <select
                  value={problemToggle}
                  onChange={(e) => {
                    setError(null);
                    setProblemToggle(!problemToggle);
                  }}
                >
                  <option value="false">Ne</option>
                  <option value="true">Ano</option>
                </select>
              </div>
              {problemToggle && (
                <div>
                  <label className="flex flex-col text-heading  font-semibold">
                    Vyberte předplatné
                    <select
                      value={problem}
                      name="subProblem"
                      onChange={(e) => {
                        setError(null);
                        setProblem(e.target.value);
                      }}
                    >
                      <option value="">Vyberte předplatné</option>
                      {subscriptions.map((sub, index) => {
                        return (
                          <option
                            key={"subSelect" + sub._id}
                            value={sub.subName}
                          >
                            {sub.subName}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </div>
              )}
              <div>
                <label className="flex flex-col text-heading font-semibold">
                  Vaše zpráva
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setError(null);
                    setMessage(e.target.value);
                  }}
                  className=" min-h-[150px] resize-none w-full"
                ></textarea>
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col items-center justify-center">
            {responseOk == null && (
              <button className="bg-quad cursor-pointer text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200">
                Odeslat
              </button>
            )}
            {error && <ErrorWindowApp error={error} />}
            {responseOk && <MessageWindowApp message={responseOk} />}
          </div>
        </form>
      </>
    );
  }
  return (
    <>
      <div className="bg-slate-50 lg:p-10 p-3 flex flex-col lg:gap-10 gap-10 lg:pt-10 pt-30 text-textDark">
        <SubHeader
          header={"Trápí Vás nějaký problém? Napište nám"}
          buttonText={"Zpět"}
          linkTo={"/"}
        />
        <div className=" flex lg:grid grid-cols-2 flex-col gap-10 lg:pb-0 pb-20">
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
