import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faDeleteLeft,
  faPlus,
  faPlusSquare,
  faSquareXmark,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createSubscriptionHandler } from "../functions/createSubscriptionHandler";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { patchSubscriptionHandler } from "../functions/patchSubscriptionHandler";

export function SubscriptionForm() {
  //step state is for changing steps in form
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user } = useAuthContext();

  //data from form
  const [formData, setFormData] = useState({
    userId: "",
    stripeSubId: "",
    active: "",
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    address: "",
    addressNumber: "",
    city: "",
    cityNumber: "",
    subName: "",
    subWebsite: "",
    subFrequency: "weekly",
    subDay: "monday",
    subDeliveryMethod: "courier",
    subDeliveryAddress: "",
    items: [{ url: "", amount: "", changable: "true" }],
  });
  const [originFrequency, setOriginFreqency] = useState("");

  useEffect(() => {
    if (id) {
      const sub = subscriptions.find((element) => element._id == id);
      const newData = {
        stripeSubId: sub.stripeSubId,
        active: sub.active,
        firstName: sub.firstName,
        secondName: sub.secondName,
        phone: sub.phone,
        email: sub.email,
        address: sub.address,
        addressNumber: sub.addressNumber,
        city: sub.city,
        cityNumber: sub.cityNumber,
        subName: sub.subName,
        subWebsite: sub.subWebsite,
        subFrequency: sub.subFrequency,
        subDay: sub.subDay,
        subDeliveryMethod: sub.subDeliveryMethod,
        subDeliveryAddress: sub.subDeliveryAddress,
        items: sub.items,
      };

      const newOriginFrequency = sub.subFrequency;
      setOriginFreqency(newOriginFrequency);
      setFormData({ ...newData });
    }
  }, []);

  //step one of form
  function StepOne() {
    const [firstName, setFirstName] = useState(formData.firstName);
    const [secondName, setSecondName] = useState(formData.secondName);
    const [phone, setPhone] = useState(formData.phone);
    const [email, setEmail] = useState(formData.email);
    const [address, setAddress] = useState(formData.address);
    const [addressNumber, setAddressNumber] = useState(formData.addressNumber);
    const [city, setCity] = useState(formData.city);
    const [cityNumber, setCityNumber] = useState(formData.cityNumber);

    const [error, setError] = useState(null);

    function handleNext(e) {
      e.preventDefault();
      if (
        !firstName ||
        !secondName ||
        !phone ||
        !email ||
        !address ||
        !addressNumber ||
        !city ||
        !cityNumber
      ) {
        setError("Nejsou vyplněná všechna pole");
      } else {
        const object = {
          ...formData,
          firstName,
          secondName,
          phone,
          email,
          address,
          addressNumber,
          city,
          cityNumber,
        };

        setFormData(object);
        setError(null);
        setStep(2);
      }
    }

    function inputUserInfo(e) {
      e.preventDefault();
      setFirstName(user.firstName);
      setSecondName(user.secondName);
      setPhone(user.phone);
      setEmail(user.email);
      setAddress(user.address);
      setAddressNumber(user.addressNumber);
      setCity(user.city);
      setCityNumber(user.cityNumber);
    }

    return (
      <form className="flex flex-col gap-5 xl:p-10 p-4 bg-white border border-slate-200 rounded-lg">
        <button
          className="bg-quad text-textButton self-start p-3 text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
          onClick={(e) => {
            inputUserInfo(e);
          }}
        >
          Vložit osobní údaje <FontAwesomeIcon icon={faUser} />
        </button>
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-heading mb-5">
            Kontaktní údaje
          </legend>
          <div className="xl:grid grid-cols-2 gap-5 flex flex-col">
            <label className="flex flex-col text-heading text-lg font-semibold">
              Jméno
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Příjmení
              <input
                value={secondName}
                onChange={(e) => {
                  setSecondName(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Telefon
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Email
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
          </div>
        </fieldset>
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Adresa dodání / Fakturační údaje
          </legend>
          <div className="xl:grid grid-cols-2 gap-5 flex flex-col">
            <label className="flex flex-col text--textDark text-lg font-semibold">
              Adresa
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text--textDark text-lg font-semibold">
              Číslo popisné
              <input
                value={addressNumber}
                onChange={(e) => {
                  setAddressNumber(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text--textDark text-lg font-semibold">
              Město
              <input
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
            <label className="flex flex-col text--textDark text-lg font-semibold">
              PSČ
              <input
                value={cityNumber}
                onChange={(e) => {
                  setCityNumber(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              ></input>
            </label>
          </div>
        </fieldset>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-3">
            <Link
              to="/"
              className="bg-quad text-textButton mb-5 xl:mb-0 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
            >
              Zrušit
            </Link>
            <button
              className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              onClick={(e) => {
                handleNext(e);
              }}
            >
              Pokračovat <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
              {error}
            </h2>
          )}
        </div>
      </form>
    );
  }

  function StepOneComment() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Proč tyto údaje potřebujeme?
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Jelikož pro Vás budeme pravidelně vytvářet objednávku na některém
              z e-shopů, potřebujeme znát kontaktní údaje a cílovou adresu
              člověka, který si zásilku převezme. Můžete to být Vy, nebo klidně
              někdo jiný, s kým jste se takto dohodli.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Lze údaje v budoucnu změnit?
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Samozřejmě. Jakmile si předplatné vytvoříte, můžete to i hned
              vyzkoušet. Stačí v hlavním menu kliknout na tlačítko Upravit u
              daného předplatného a změnit vámi zvolené údaje.
            </p>
          </div>
        </div>
      </>
    );
  }

  //step two of form
  function StepTwo() {
    const [subName, setSubName] = useState(formData.subName);
    const [subWebsite, setSubWebsite] = useState(formData.subWebsite);
    const [subFrequency, setSubFrequency] = useState(formData.subFrequency);
    const [subDay, setSubDay] = useState(formData.subDay);
    const [subDeliveryMethod, setSubDeliveryMethod] = useState(
      formData.subDeliveryMethod
    );
    const [subDeliveryAddress, setSubDeliveryAddress] = useState(
      formData.subDeliveryAddress
    );

    const [error, setError] = useState(null);

    function handleNext(e) {
      let newURL = subWebsite;
      let oldURL = subWebsite.split("");
      if (
        oldURL[0] == "h" &&
        oldURL[1] == "t" &&
        oldURL[2] == "t" &&
        oldURL[3] == "p" &&
        oldURL[4] == "s" &&
        oldURL[5] == ":" &&
        oldURL[6] == "/" &&
        oldURL[7] == "/"
      ) {
        oldURL.splice(0, 8);
        newURL = oldURL.join("");
      } else if (
        oldURL[0] == "h" &&
        oldURL[1] == "t" &&
        oldURL[2] == "t" &&
        oldURL[3] == "p" &&
        oldURL[4] == ":" &&
        oldURL[5] == "/" &&
        oldURL[6] == "/"
      ) {
        oldURL.splice(0, 7);
        newURL = oldURL.join("");
      }

      e.preventDefault();
      if (
        !subName ||
        !subWebsite ||
        !subFrequency ||
        !subDay ||
        !subDeliveryMethod
      ) {
        setError("Nejsou vyplněná všechna pole");
      } else if (subDeliveryMethod == "dropbox" && !subDeliveryAddress) {
        setError("Není vyplněná adresa zásilkovny");
      } else {
        const object = {
          ...formData,
          subName,
          subWebsite: newURL,
          subFrequency,
          subDay,
          subDeliveryMethod,
          subDeliveryAddress,
        };

        setFormData(object);
        setError(null);
        setStep(3);
      }
    }

    return (
      <form className="flex flex-col gap-5 xl:p-10 p-4 bg-white border border-slate-200 rounded-lg">
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-heading mb-5">
            Parametry předplatného
          </legend>
          <div className="grid gap-5">
            <label className="flex flex-col text-heading text-lg font-semibold">
              Název předplatného
              <input
                value={subName}
                onChange={(e) => {
                  setSubName(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                placeholder="Moje první předplatné"
              ></input>
            </label>

            <label className="flex flex-col text-heading text-lg font-semibold">
              Webová stránka e-shopu
              <input
                value={subWebsite}
                onChange={(e) => {
                  setSubWebsite(e.target.value);
                }}
                type="text"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                placeholder="www.eshop.cz"
              ></input>
            </label>
            <div className="text-md font-semibold text-textButton shadow-lg flex items-center gap-3 bg-quad xl:p-2 p-4 rounded-lg">
              <div className="hidden xl:block">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-2xl"
                />
              </div>
              <div>
                <p>
                  Je nutné, aby měl e-shop platbu dobírkou. Pokud e-shop tuto
                  možnost nenabízí, pak nedokážeme vytvořit předplatné.
                </p>
              </div>
            </div>

            <label className="flex flex-col text-heading text-lg font-semibold">
              Frekvence doručování
              <select
                value={subFrequency}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSubFrequency(e.target.value);
                }}
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              >
                <option value="weekly">Jednou za týden</option>
                <option value="biWeekly">Jednou za dva týdny</option>
                <option value="monthly">Jednou za měsíc</option>
                <option value="biMonthly">Jednou za dva měsíce</option>
                <option value="quarterly">Jednou za tři měsíce</option>
              </select>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Preferovaný den objednání
              <select
                value={subDay}
                onChange={(e) => {
                  setSubDay(e.target.value);
                }}
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              >
                <option value="monday">Pondělí</option>
                <option value="tuseday">Úterý</option>
                <option value="wednesday">Středa</option>
                <option value="thursday">Čtvrtek</option>
                <option value="friday">Pátek</option>
              </select>
            </label>
            <label className="flex flex-col text-heading text-lg font-semibold">
              Způsob doručení
              <select
                value={subDeliveryMethod}
                onChange={(e) => {
                  setSubDeliveryMethod(e.target.value);
                }}
                name="delivery"
                id="delivery"
                className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
              >
                <option value="courier">Nejlevnější kurýr</option>
                <option value="dropbox">Zásilkovna</option>
              </select>
            </label>
            {subDeliveryMethod == "dropbox" && (
              <label className="flex flex-col text-heading text-lg font-semibold">
                Vložte odkaz na zásilkovnu
                <div className="flex gap-2 justify-evenly">
                  <a
                    className="w-[25%] p-2 bg-white border border-slate-300 rounded-md text-center"
                    href="https://www.zasilkovna.cz/pobocky"
                    target="_blank"
                  >
                    Najít zásilkovnu
                  </a>
                  <input
                    value={subDeliveryAddress}
                    onChange={(e) => {
                      setSubDeliveryAddress(e.target.value);
                    }}
                    type="text"
                    className="bg-slate-50 border border-slate-300 rounded-md p-2 text-md font-semibold text-input w-[75%]"
                    placeholder="https://www.zasilkovna.cz/pobocky/z-box-golcuv-jenikov-5-kvetna-8
"
                  ></input>
                </div>
              </label>
            )}
          </div>
        </fieldset>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-3">
            <button
              className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const object = {
                  ...formData,
                  subName,
                  subWebsite,
                  subFrequency,
                  subDay,
                  subDeliveryMethod,
                  subDeliveryAddress,
                };

                setFormData(object);
                setError(null);
                setStep(1);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Zpět
            </button>
            <button
              className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              onClick={(e) => {
                handleNext(e);
              }}
            >
              Pokračovat <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
              {error}
            </h2>
          )}
        </div>
      </form>
    );
  }

  function StepTwoComment() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Nastavte si parametry vašeho předplatného
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Zde je potřeba nastavit fungování vašeho předplatného. Zadejte
              název, podle kterého se budete oriantovat. Webová stránka e-shopu
              je cílový obchod, na kterém pro Vás zařídíme pravidelné
              objednávky.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Frekvence doručování
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Frekvence doručování je stejná jako frekvence plateb. které se Vám
              budou strhávat z karty za naše služby.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Preferovaný den objednání
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Jde o den, ve kterém budeme vaši objednávka tvořit. Budeme se vždy
              snažit, abychom tento den dodrželi, nicméně při velkém objemu
              objednávek v jeden den se může stát, že vaše předplatné vyřídíme
              až následující den.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Způsob doručení
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Na výběr máte buď kurýrní službu nebo nějaké odběrné místé. V
              každém případě se však bude jednat o dobírku.
            </p>
          </div>
        </div>
      </>
    );
  }

  //step three of form
  function StepThree() {
    const [items, setItems] = useState([...formData.items]);
    const { createSubscription, error, setError, isLoading } =
      createSubscriptionHandler();
    const { patchSubscription } = patchSubscriptionHandler();

    //handler update
    function handleSend(subscription, id) {
      const missingArray = items.filter(
        (item) => !item.url || !item.amount || !item.changable
      );
      if (missingArray.length > 0) {
        setError("Nejsou vyplněná všechna pole");
      } else {
        setError(null);
        if (id) {
          let frequencyChange = 0;
          if (subscription.subFrequency !== originFrequency) {
            frequencyChange = 1;
          }
          console.log(frequencyChange);
          patchSubscription(subscription, id, frequencyChange);
        }

        if (!id) {
          createSubscription(subscription);
        }
      }
    }

    const handleAddInput = () => {
      setItems([...items, { url: "", amount: "", changable: "true" }]);
    };

    const handleChange = (event, index) => {
      let { name, value } = event.target;
      let onChangeValue = [...items];
      onChangeValue[index][name] = value;
      setItems(onChangeValue);
    };

    const handleDeleteInput = (index) => {
      const newArray = [...items];
      newArray.splice(index, 1);
      setItems(newArray);
    };

    function handleBack() {
      setError(null);
      const object = { ...formData };
      object.items = items;
      console.log(object);
      setFormData(object);
    }

    return (
      <form className="flex flex-col gap-5 xl:p-10 p-4 bg-white border border-slate-200 rounded-lg">
        <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900 mb-5">
            Zboží do objednávky
          </legend>
          <div className="flex flex-col gap-3">
            {items.map((item, index) => {
              return (
                <div
                  className="xl:grid grid-cols-12 flex flex-col gap-2 maw-w-full"
                  key={"item" + index}
                >
                  <label className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                    Odkaz na položku
                    <input
                      name="url"
                      type="text"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      placeholder="www.eshop.cz/hodinky/rolex300"
                      value={item.url}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    ></input>
                  </label>
                  <label className="flex flex-col text--textDark text-lg font-semibold col-span-2">
                    Množství
                    <input
                      name="amount"
                      type="number"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      placeholder="5"
                      value={item.amount}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    ></input>
                  </label>
                  <label className="flex flex-col text-heading text-lg font-semibold col-span-3">
                    Nahraditelné?
                    <select
                      name="changable"
                      id="changable"
                      className="bg-slate-50 border border-slate-300 rounded p-2 text-md font-semibold text-input"
                      value={item.changable}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    >
                      <option value="true">Ano</option>
                      <option value="false">Ne</option>
                    </select>
                  </label>
                  <FontAwesomeIcon
                    icon={faSquareXmark}
                    className="xl:text-xl text-3xl text-red-400 self-end mb-[14px] cursor-textMediumointer cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteInput(index);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="flex justify-center items-center rounded-sm my-4 text-lg font-bold gap-3 hover:scale-105 ease-in-out transition-all cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleAddInput();
              }}
            >
              <FontAwesomeIcon
                icon={faPlusSquare}
                className=" text-textDark text-3xl"
              />
              <p className="xl:hidden">Přidejte položku</p>
            </button>
          </div>
        </fieldset>

        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-3">
            <button
              className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              onClick={() => {
                setStep(2);
                handleBack();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Zpět
            </button>
            <button
              disabled={isLoading}
              className="bg-quad text-textButton p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();

                const itemsArray = [];
                items.map((item) => {
                  let newURL = item.url;
                  let oldURL = item.url.split("");
                  if (
                    oldURL[0] == "h" &&
                    oldURL[1] == "t" &&
                    oldURL[2] == "t" &&
                    oldURL[3] == "p" &&
                    oldURL[4] == "s" &&
                    oldURL[5] == ":" &&
                    oldURL[6] == "/" &&
                    oldURL[7] == "/"
                  ) {
                    oldURL.splice(0, 8);
                    newURL = oldURL.join("");
                  } else if (
                    oldURL[0] == "h" &&
                    oldURL[1] == "t" &&
                    oldURL[2] == "t" &&
                    oldURL[3] == "p" &&
                    oldURL[4] == ":" &&
                    oldURL[5] == "/" &&
                    oldURL[6] == "/"
                  ) {
                    oldURL.splice(0, 7);
                    newURL = oldURL.join("");
                  }

                  item.url = newURL;
                  itemsArray.splice(itemsArray.length, 0, item);
                });

                const subscription = {
                  userId: user.id,
                  stripeSubId: formData.stripeSubId,
                  stripeCustomerId: user.stripeCustomerId,
                  active: formData.active,
                  firstName: formData.firstName,
                  secondName: formData.secondName,
                  phone: formData.phone,
                  email: formData.email,
                  address: formData.address,
                  addressNumber: formData.addressNumber,
                  city: formData.city,
                  cityNumber: formData.cityNumber,
                  subName: formData.subName,
                  subWebsite: formData.subWebsite,
                  subFrequency: formData.subFrequency,
                  subDay: formData.subDay,
                  subDeliveryMethod: formData.subDeliveryMethod,
                  subDeliveryAddress: formData.subDeliveryAddress,
                  items: itemsArray,
                };

                handleSend(subscription, id);
              }}
            >
              {id ? "Aktualizovat předplatné" : "Vytvořit předplatné"}{" "}
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder">
              {error}
            </h2>
          )}
        </div>
      </form>
    );
  }

  function StepThreeComment() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Vyberte produkty, které chcete objednávat
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Teď už je to jednoduché. Najděte si v e-shopu produkty, které
              chcete pravidelně objednávat, překopírujte odkaz do formuláře a
              zvolte množství.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Nahraditelné zboží
            </h2>
            <p className="text-md font-semibold text-textMedium">
              Někdy se může stát, že zboží nebude naskladněné. Pokud v políčku
              nahraditelné vyberete Ano, pak se zboží pokusíme nahradit stejným
              typem od jiné značky.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-50 p-10 flex flex-col gap-5 xl:pt-10 pt-30">
        <div className="flex justify-between xl:flex-row flex-col-reverse items-center">
          <h1 className="text-3xl font-bold text-heading text-center">
            Nastavení předplatného
          </h1>
          <Link
            to="/"
            className="bg-quad text-textButton mb-5 xl:mb-0 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className="grid xl:grid-cols-[1fr_1fr]">
          {step == 1 && <StepOne />}
          {step == 1 && <StepOneComment />}
          {step == 2 && <StepTwo />}
          {step == 2 && <StepTwoComment />}
          {step == 3 && <StepThree />}
          {step == 3 && <StepThreeComment />}
        </div>
      </div>
    </>
  );
}
