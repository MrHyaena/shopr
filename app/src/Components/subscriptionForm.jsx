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

  useEffect(() => {
    if (id) {
      const sub = subscriptions.find((element) => element._id == id);
      const newData = {
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
          className="bg-quad self-start p-3 text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
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
          <button
            className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
            onClick={(e) => {
              handleNext(e);
            }}
          >
            Pokračovat <FontAwesomeIcon icon={faArrowRight} />
          </button>

          {error && (
            <h2 className="font-bold text-center p-2 bg-red-200 rounded-lg border-2 border-red-300">
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
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Proč potřebujeme tyto údaje?
          </h2>
          <p className="text-md font-semibold text-textMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
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
          subWebsite,
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
            <div className="text-md font-semibold text-textDark flex items-center gap-3 bg-quad xl:p-2 p-4 rounded-lg">
              <div className="hidden xl:block">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-2xl"
                />
              </div>
              <p>
                Název předplatného musí být stejný jako ten, který budete
                zadávat při platbě. Pouze tak můžeme poznat, zda je předplatné
                platné či nikoliv.
              </p>
            </div>

            <label className="flex flex-col text-heading text-lg font-semibold">
              Webová stránka eshopu
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
            <label className="flex flex-col text-heading text-lg font-semibold">
              Frekvence doručování
              <select
                value={subFrequency}
                onChange={(e) => {
                  setSubFrequency(e.target.value);
                }}
                name="frekvence"
                id="frekvence"
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
                name="den"
                id="den"
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
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
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
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              onClick={(e) => {
                handleNext(e);
              }}
            >
              Pokračovat <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-red-200 rounded-lg border-2 border-red-300">
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
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Nastavte si parametry vašeho předplatného
          </h2>
          <p className="text-md font-semibold text-textMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
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
          patchSubscription(subscription, id);
        }

        if (!id) {
          createSubscription(subscription);
        }
      }
    }

    const handleAddInput = () => {
      setItems([...items, { url: "", amount: "", changable: "" }]);
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
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              onClick={() => {
                setStep(2);
                handleBack();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Zpět
            </button>
            <button
              disabled={isLoading}
              className="bg-quad p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
              onClick={(e) => {
                e.preventDefault();
                const subscription = {
                  userId: user.id,
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
                  items: items,
                };

                handleSend(subscription, id);
              }}
            >
              {id ? "Aktualizovat předplatné" : "Vytvořit předplatné"}{" "}
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>

          {error && (
            <h2 className="font-bold text-center p-2 bg-red-200 rounded-lg border-2 border-red-300">
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
          <h2 className="text-xl font-semibold mb-4 text-heading">
            Vyberte produkty, které chcete objednávat
          </h2>
          <p className="text-md font-semibold text-textMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
            quam quasi odio asperiores dicta, ut accusamus pariatur error itaque
            vero, dignissimos, quidem atque consequuntur aspernatur nemo quae
            placeat enim.
          </p>
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
            className="bg-quad mb-5 xl:mb-0 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
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
