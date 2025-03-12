import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/shopr-icon-white.png";

const apiURL = "https://quick-ninon-martin-dolezal-b45ae6c1.koyeb.app";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    chrome.storage.local.get("user", async (result) => {
      console.log(result);
      if (result.user) {
        setUser({ ...result.user });
      }
    });
  }, []);

  function Logout() {
    setUser(null);
    chrome.storage.local.remove("user");
  }

  function Navbar() {
    return (
      <>
        <div className="bg-primary min-h-15 text-textLight flex items-center p-2 justify-between">
          <div className="flex gap-3 items-center">
            <p className="font-semibold">{user && "Účet: " + user.email}</p>
            {user && (
              <button
                className="font-semibold cursor-pointer"
                onClick={() => {
                  Logout();
                }}
              >
                Odhlásit se
              </button>
            )}
          </div>
          <a href="https://www.shopr.cz" target="_blank">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </a>
        </div>
      </>
    );
  }

  function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function login() {
      const response = await fetch(apiURL + "/api/admin/login", {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      const userData = await response.json();
      console.log(userData);

      if (response.ok) {
        chrome.storage.local.set({
          user: { ...userData },
        });
        setUser({ ...userData });
      }

      if (!response.ok) {
        console.log(response);
        setError("Něco se pokazilo");
      }
    }

    //async function signup() {
    //  const response = await fetch(apiURL + "/api/admin/signup", {
    //    mode: "cors",
    //    method: "POST",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify({ email: email, password: password }),
    //  });
    //
    //  const userData = await response.json();
    //  console.log(userData);
    //
    //  if (response.ok) {
    //    chrome.storage.local.set({
    //      user: { ...userData },
    //    });
    //    setUser({ ...userData });
    //  }
    //
    //  if (!response.ok) {
    //    console.log(response);
    //    setError("Něco se pokazilo");
    //  }
    //}

    return (
      <>
        <div className="flex flex-col items-center justify-start text-slate-800 w-full gap-5 p-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-5 w-full">
              <label className="flex flex-col font-semibold">
                E-mail
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="p-2 border border-slate-300 bg-slate-50 rounded-md text-lg font-semibold"
                />
              </label>

              <label className="flex flex-col font-semibold">
                Heslo
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="text"
                  className="p-2 border border-slate-300 bg-slate-50 rounded-md text-lg font-semibold"
                />
              </label>
              <button
                className="p-2 bg-rose-600 rounded-md text-white font-semibold text-lg cursor-pointer"
                onClick={() => {
                  login();
                }}
              >
                Přihlásit se
              </button>

              <p className="font-semibold text-lg text-rose-700">{error}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ItemTab({ url, amount }) {
    const [stage, setStage] = useState(1);

    return (
      <>
        <div
          className="grid grid-cols-[2fr_5fr_1fr] w-full gap-5 px-5 py-2"
          key={url}
        >
          {stage == 1 && (
            <button
              className="p-1 bg-zinc-300 rounded-sm cursor-pointer font-semibold"
              onClick={() => {
                setStage(2);
              }}
            >
              Vložit
            </button>
          )}{" "}
          {stage == 2 && (
            <button
              className="p-1 bg-orange-300 rounded-sm cursor-pointer font-semibold"
              onClick={() => {
                setStage(3);
              }}
            >
              Kontrola
            </button>
          )}{" "}
          {stage == 3 && (
            <button
              className="p-1 bg-green-400 rounded-sm cursor-pointer font-semibold"
              onClick={() => {
                setStage(1);
              }}
            >
              Splněno
            </button>
          )}
          <a
            href={"https://" + url}
            target="_blank"
            className="flex items-center gap-2 w-full text-rose-700 font-semibold hover:bg-rose-100 rounded-md px-3"
          >
            Odkaz
          </a>
          <p className=" font-semibold">{amount}</p>
        </div>
      </>
    );
  }

  function HomePage() {
    const [search, setSearch] = useState("");
    const [subscription, setSubscription] = useState("");

    async function findSubscription() {
      const response = await fetch(
        apiURL + "/api/admin/subscription/" + search,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            UserID: user.id,
          },
        }
      );
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setSubscription(json);
      }
    }

    return (
      <>
        <div className="flex flex-col items-center justify-start text-slate-900 w-full gap-3">
          <div className="grid grid-cols-[1fr_100px] gap-5 w-full p-5">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="p-2 border border-slate-300 bg-slate-50 rounded-sm text-lg font-semibold"
            />
            <button
              className="p-2 bg-rose-600 rounded-sm text-white font-semibold text-lg cursor-pointer"
              onClick={() => {
                findSubscription(search);
              }}
            >
              Vyhledat
            </button>
          </div>
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <div className="grid grid-cols-[5fr_1fr] w-full gap-5 font-bold bg-zinc-200 px-5 text-lg">
              <p>Údaje o předplatném</p>
            </div>

            {subscription.subDeliveryMethod == "dropbox" && (
              <>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
                  <p className="font-semibold">Metoda doručení:</p>
                  <p>Výdejní místo/box</p>
                </div>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
                  <p className="font-semibold">Frekvence:</p>
                  <p>{subscription.subDeliveryAddress}</p>
                </div>
              </>
            )}
            {subscription.subDeliveryMethod == "courier" && (
              <>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
                  <p className="font-semibold">Metoda doručení:</p>
                  <p>Kurýr</p>
                </div>
              </>
            )}
            {!subscription && (
              <>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
                  <p className="font-semibold">Metoda doručení:</p>
                </div>
              </>
            )}
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Jméno:</p>
              <p>{subscription.firstName}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Příjmení:</p>
              <p>{subscription.secondName}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Telefon:</p>
              <p>{subscription.phone}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Email:</p>
              <p>{subscription.email}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Adresa:</p>
              <p>{subscription.address}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Číslo pop:</p>
              <p>{subscription.addressNumber}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Město:</p>
              <p>{subscription.city}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">PSČ:</p>
              <p>{subscription.cityNumber}</p>
            </div>
            <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5">
              <p className="font-semibold">Webová stránka:</p>
              {subscription && (
                <a
                  className="text-rose-700"
                  target="_blank"
                  href={"https://" + subscription.subWebsite}
                >
                  Odkaz na web
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            {subscription && subscription.itemsType == "standard" && (
              <>
                <div className="grid grid-cols-[5fr_1fr] w-full gap-5 font-bold bg-zinc-200 px-5 text-lg px-5">
                  <p>Položka</p>

                  <p>Počet</p>
                </div>

                {subscription.items.map((item) => {
                  return (
                    <>
                      <ItemTab url={item.url} amount={item.amount} />
                    </>
                  );
                })}
              </>
            )}

            {subscription && subscription.itemsType == "mystery" && (
              <>
                <div className="grid grid-cols-[5fr_1fr] w-full gap-5 font-bold bg-zinc-200 px-5 text-lg px-5">
                  <p>Údaje o balíčku</p>
                </div>

                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5  font-semibold p-5">
                  <p>Maximální hodnota</p>
                  <div className="flex items-center gap-2">
                    <p>{subscription.mysteryItem.amount} Kč</p>
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="text-amber-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5 font-semibold  bg-zinc-50 p-5">
                  <p>Kategorie</p>
                  <p>{subscription.mysteryItem.categories.join(" - ")}</p>
                </div>
                <div className="grid grid-cols-[1fr_1fr] w-full gap-5 px-5  font-semibold p-5">
                  <p>Zpráva</p>
                  <p>{subscription.mysteryItem.message}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-rows-[60px_1fr]">
        <Navbar />
        {user ? <HomePage /> : <LoginPage />}
      </div>
    </>
  );
}

export default App;
