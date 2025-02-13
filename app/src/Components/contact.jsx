import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { Link } from "react-router-dom";

export function Contact() {
  const { subscriptions } = useSubscriptionContext();
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [message, setMessage] = useState("");
  const [problemToggle, setProblemToggle] = useState(false);

  function handleSend() {
    const messageObject = {
      email: email,
      problem: problem,
      message: message,
    };

    console.log(messageObject);
  }

  function StepOne() {
    return (
      <form
        className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-lg w-full"
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
                setEmail(e.target.value);
              }}
              type="email"
              className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input "
            ></input>
          </label>
          <label className="flex flex-col text-heading text-lg font-semibold">
            Máte problém s nějakým předplatným?
            <select
              value={problemToggle}
              className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              onChange={(e) => {
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
              setMessage(e.target.value);
            }}
            className="bg-slate-50 min-h-[150px] border border-slate-300 rounded p-2 text-md font-semibold text-input resize-none"
          ></textarea>
        </label>

        <div className="mx-auto">
          <button className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200">
            Odeslat
          </button>
        </div>
      </form>
    );
  }
  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col xl:gap-10 gap-10 xl:pt-10 pt-30 text-textDark">
        <div className="flex xl:flex-row justify-between items-center flex-col-reverse gap-5">
          <h1 className="text-3xl font-bold text-heading0">
            Trápí Vás nějaký problém? Napište nám!
          </h1>
          <Link
            to="/"
            className="bg-quad hidden xl:block text-center p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col gap-10 xl:pb-0 pb-20">
          <div className="flex flex-col items-start gap-5 xl:w-[40%]">
            <h1 className="text-xl font-bold text-heading">
              Kontaktní formulář
            </h1>
            <StepOne />
          </div>
          <div className="flex flex-col items-start gap-5 max-w-[700px]">
            <h1 className="text-xl font-bold text-heading">Kontaktní údaje</h1>
            <p className="text-lg font-semibold ">
              Pokud nás chcete kontaktovat přímo na emailovou adresu, můžete to
              udělat skrze <span className="text-textA">info@shopr.cz</span>.
            </p>
            <h1 className="text-xl font-bold text-heading">Podnikové údaje</h1>
            <p className="text-lg font-semibold ">IČO: 10796509</p>
          </div>
        </div>
      </div>
    </>
  );
}
