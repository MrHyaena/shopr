import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/shopr-logo.png";

function App() {
  const [count, setCount] = useState(0);

  function Navbar() {
    return (
      <>
        <div className="bg-primary min-h-15 text-textLight flex items-center p-2 justify-between">
          <p className="font-semibold">Účet: 5dew84f98re4f</p>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
      </>
    );
  }

  function HomePage() {
    return (
      <>
        <div className="flex items-center justify-center text-slate-800 flex-col gap-5 p-10">
          <img src={logo} alt="logo" className="h-10" />
          <button className="p-2 rounded-md bg-quad text-xl text-textButton font-semibold hover:scale-105 transition-all ease-in-out cursor-pointer">
            Přihlásit se
          </button>
          <button className="p-2 rounded-md bg-quad text-xl text-textButton font-semibold hover:scale-105 transition-all ease-in-out cursor-pointer">
            Registrovat se
          </button>
          <p className="font-semibold text-textDarker text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            sunt quasi debitis eveniet qui exercitationem fugit, nobis minus
            quaerat dolorem a veniam nostrum pariatur vitae. Omnis nesciunt
            dolorem facilis vero.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-[600px] w-[600px] grid grid-rows-[60px_1fr]">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
