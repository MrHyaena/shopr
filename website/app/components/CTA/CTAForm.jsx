"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export function CTAForm() {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    redirect("https://app.shopr.cz/signup?email=" + email);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <form
          className="bg-white rounded-md shadow-md border border-slate-200 p-20 flex flex-col items-stretch justify-center gap-5 text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h3 className="">
            Vytvořte si u nás <br />
            <span className="text-quad">účet zdarma</span> a všechno si nejprve
            vyzkoušejte!
          </h3>
          <p className="">
            Vytvoření uživatelského účtu, jeho správa a tvorba předplatných je
            plně zdarma. Platby se spouštějí až ve chvíli, kdy nějaké předplatné
            aktivujete.
          </p>
          <label className="text-lg font-semibold text-textDark w-full">
            <input
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Vložte Váš email"
              type="email"
              className="bg-white border border-slate-200 p-3 text-xl text-textDark rounded-md placeholder:text-xl w-full"
            />
          </label>

          <button
            className="bg-quad text-textButton p-4 rounded-md shadow-md text-2xl font-semibold hover:scale-105 transition-all ease-in-out cursor-pointer"
            type="submit"
          >
            Zaregistrovat se
          </button>
          <p className="mt-[-10px] text-sm">
            Tlačítko Vás přenese na registrační formulář
          </p>
        </form>
      </div>
    </>
  );
}
