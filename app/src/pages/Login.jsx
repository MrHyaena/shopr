import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({ email, password });
  };

  return (
    <>
      <div className="bg-slate-50 flex justify-center items-center min-h-screen">
        <div className="bg-white flex gap-5 p-10 border rounded-xl border-slate-200">
          <form className="flex flex-col gap-5 p-2" onSubmit={handleSubmit}>
            <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
              <legend className="text-xl font-semibold text-slate-900 mb-5">
                Přihlaste se
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
            </fieldset>
            <button
              disabled={isLoading}
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
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
              <h2 className="font-bold text-center p-2 bg-red-200 rounded-lg border-2 border-red-300">
                {error}
              </h2>
            )}
          </form>
          <div className="min-w-[300px]"></div>
        </div>
      </div>
    </>
  );
}
