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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createSubscriptionHandler } from "../functions/createSubscriptionHandler";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { patchSubscriptionHandler } from "../functions/patchSubscriptionHandler";
import { ErrorWindowApp } from "../Components/responseWindows/errorWindowApp";

export function SubscriptionForm({ setLoader }) {
  //step state is for changing steps in form
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user } = useAuthContext();

  //data from form
  const [formData, setFormData] = useState({
    userId: "empty",
    stripeSubId: "empty",
    stripeCustomerId: "empty",
    pipedrivePersonId: "empty",
    pipedriveDealId: "empty",
    active: false,
    firstName: "",
    secondName: "",
    phoneCountry: 420,
    phone: "",
    email: "",
    address: "",
    addressNumber: "",
    city: "",
    cityNumber: "",
    subName: "",
    subWebsite: "",
    nextPaymentDate: "empty",
    subFrequency: "weekly",
    subDeliveryMethod: "courier",
    subDeliveryAddress: "",
    subPayment: "card",
    subCoupon: "",
    subAccount: "false",
    subAccountLogin: "",
    subAccountPassword: "",
    itemsType: "empty",
    items: [{ url: "", amount: "", changable: "true" }],
    mysteryItem: { categories: [], message: "", amount: 300 },
  });
  const [originalSub, setOriginalSub] = useState("");

  //third step toggle

  useEffect(() => {
    if (id) {
      const sub = subscriptions.find((element) => element._id == id);

      setOriginalSub({ ...sub });
      setFormData({ ...sub });
    }
  }, []);

  //useEffect for scrolling to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  //step one of form
  function StepOne() {
    const [firstName, setFirstName] = useState(formData.firstName);
    const [secondName, setSecondName] = useState(formData.secondName);
    const [phoneCountry, setPhoneCountry] = useState(420);
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
          phoneCountry,
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
      <form
        onSubmit={(e) => {
          handleNext(e);
        }}
        className="flex flex-col gap-5 xl:p-5 p-2 bg-white border-slate-200 shadow-md shadow-bg-slate-200 rounded-md self-stretch"
      >
        <button
          className="buttonRedMedium"
          onClick={(e) => {
            inputUserInfo(e);
          }}
        >
          Vložit osobní údaje <FontAwesomeIcon icon={faUser} />
        </button>
        <fieldset className="bg-white p-3 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-heading">
            Kontaktní údaje
          </legend>
          <div className="xl:grid grid-cols-2 gap-3 flex flex-col">
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Jméno
              </label>{" "}
              <input
                placeholder="Jiří"
                required={true}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Příjmení
              </label>
              <input
                placeholder="Novotný"
                required={true}
                value={secondName}
                onChange={(e) => {
                  setSecondName(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Předvolba / Telefon
              </label>
              <div className="grid grid-cols-[1fr_3fr] gap-2">
                <input
                  placeholder="602605331"
                  required={true}
                  value={phoneCountry}
                  onChange={(e) => {
                    if (e.target.value.length < 4) {
                      setPhoneCountry(e.target.value);
                    }
                  }}
                  type="number"
                ></input>
                <input
                  placeholder="602605331"
                  required={true}
                  value={phone}
                  onChange={(e) => {
                    if (e.target.value.length < 10) {
                      setPhone(e.target.value);
                    }
                  }}
                  type="number"
                ></input>
              </div>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Email
              </label>{" "}
              <input
                placeholder="jirinovotny@gmail.com"
                required={true}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
              ></input>
            </div>
          </div>
        </fieldset>
        <fieldset className="bg-white p-3 rounded-md border border-slate-100 gap-10">
          <legend className="text-xl font-semibold text-slate-900">
            Adresa dodání / Fakturační údaje
          </legend>
          <div className="xl:grid grid-cols-2 gap-3 flex flex-col">
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Adresa
              </label>
              <input
                placeholder="Řeháčova"
                required={true}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Číslo popisné
              </label>{" "}
              <input
                placeholder="22"
                required={true}
                value={addressNumber}
                onChange={(e) => {
                  setAddressNumber(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                Město
              </label>{" "}
              <input
                placeholder="Praha 40"
                required={true}
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading  font-semibold">
                PSČ
              </label>
              <input
                placeholder="14100"
                required={true}
                value={cityNumber}
                onChange={(e) => {
                  setCityNumber(e.target.value);
                }}
                type="text"
              ></input>
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-3">
            <Link to="/" className="buttonRedMedium">
              Zrušit
            </Link>
            <button type="submit" className="buttonRedMedium">
              Pokračovat
            </button>
          </div>

          {error && <ErrorWindowApp error={error} />}
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
            <p className=" font-semibold text-textDark">
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
            <p className=" font-semibold text-textDark">
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
    const [subDeliveryMethod, setSubDeliveryMethod] = useState(
      formData.subDeliveryMethod
    );
    const [subDeliveryAddress, setSubDeliveryAddress] = useState(
      formData.subDeliveryAddress
    );
    const [subPayment, setSubPayment] = useState(formData.subPayment);
    const [subAccount, setSubAccount] = useState(formData.subAccount);
    const [subAccountLogin, setSubAccountLogin] = useState(
      formData.subAccountLogin
    );
    const [subAccountPassword, setSubAccountPassword] = useState(
      formData.subAccountPassword
    );
    const [subCoupon, setSubCoupon] = useState(formData.subCoupon);
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

      console.log(oldURL);

      if (oldURL[oldURL.length - 1] == "/") {
        oldURL.splice(oldURL.length - 1, 1);
        newURL = oldURL.join("");
      }

      e.preventDefault();
      if (!subName || !subWebsite || !subFrequency || !subDeliveryMethod) {
        setError("Nejsou vyplněná všechna pole");
      } else if (subDeliveryMethod == "dropbox" && !subDeliveryAddress) {
        setError("Není vyplněná adresa zásilkovny");
      } else {
        const object = {
          ...formData,
          subName,
          subWebsite: newURL,
          subFrequency,
          subDeliveryMethod,
          subDeliveryAddress,
          subPayment,
          subAccount,
          subAccountLogin,
          subAccountPassword,
          subCoupon,
        };

        setFormData(object);
        setError(null);
        setStep(3);
      }
    }

    return (
      <form className="flex flex-col gap-5 xl:p-5 p-2 bg-white border-slate-200 shadow-md shadow-bg-slate-200 rounded-md self-stretch justify-start">
        <fieldset className="bg-white p-3 rounded-md border border-slate-100 gap-5">
          <legend className="text-xl font-semibold text-heading">
            Parametry předplatného
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex flex-col text-heading text-lg font-semibold">
                Název předplatného
              </label>{" "}
              <input
                value={subName}
                onChange={(e) => {
                  setSubName(e.target.value);
                }}
                type="text"
                placeholder="Moje první předplatné"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading text-lg font-semibold">
                Webová stránka e-shopu
              </label>
              <input
                value={subWebsite}
                onChange={(e) => {
                  setSubWebsite(e.target.value);
                }}
                type="text"
                placeholder="www.eshop.cz"
              ></input>
            </div>

            <div className="col-span-2">
              <label className="flex flex-col text-heading text-lg font-semibold">
                Způsob platby
              </label>
              <select
                value={subPayment}
                onChange={(e) => {
                  setSubPayment(e.target.value);
                }}
                name="payment"
                id="payment"
              >
                <option value="card">Platební kartou</option>
                <option value="bank">Bankovním převodem</option>
                <option value="personal">Dobírkou</option>
              </select>
            </div>
            <div className=" font-semibold text-textButton shadow-lg flex items-center gap-3 bg-quad xl:p-2 p-4 rounded-lg col-span-2">
              <div className="hidden xl:block">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-2xl"
                />
              </div>
              <div>
                <p>
                  Pokud vyberete platbu kartou nebo převodem, objednávku budete
                  muset po našem zpracování zaplatit. O tom Vás informujeme
                  emailem a SMS zprávou.
                </p>
              </div>
            </div>
            <div>
              <label className="flex flex-col text-heading text-lg font-semibold">
                Frekvence doručování
              </label>
              <select
                value={subFrequency}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSubFrequency(e.target.value);
                }}
              >
                <option value="weekly">Jednou za týden</option>
                <option value="biWeekly">Jednou za dva týdny</option>
                <option value="monthly">Jednou za měsíc</option>
                <option value="biMonthly">Jednou za dva měsíce</option>
                <option value="quarterly">Jednou za tři měsíce</option>
              </select>
            </div>

            <div>
              <label className="flex flex-col text-heading text-lg font-semibold">
                Způsob doručení
              </label>
              <select
                value={subDeliveryMethod}
                onChange={(e) => {
                  setSubDeliveryMethod(e.target.value);
                }}
                name="delivery"
                id="delivery"
              >
                <option value="courier">Nejlevnější kurýr</option>
                <option value="dropbox">Výdejní místo</option>
              </select>
            </div>
            {subDeliveryMethod == "dropbox" && (
              <div className="col-span-2">
                <label className="flex flex-col text-heading text-lg font-semibold">
                  Vložte odkaz na místo, kde chcete objednávku vyzvednout.
                  Adresu či odkaz okopírujte z nabídky v e-shopu.
                </label>
                <input
                  required={true}
                  value={subDeliveryAddress}
                  onChange={(e) => {
                    setSubDeliveryAddress(e.target.value);
                  }}
                  type="text"
                  placeholder="https://www.zasilkovna.cz/pobocky/z-box-golcuv-jenikov-5-kvetna-8
"
                ></input>
              </div>
            )}
          </div>
        </fieldset>
        <fieldset className="bg-white p-3 rounded-md border border-slate-100 gap-5">
          <legend className="text-xl font-semibold text-heading">
            Slevové kódy a uživatelský účet (nepovinné)
          </legend>
          <div className="grid gap-3">
            <div>
              {" "}
              <label className="flex flex-col text-heading text-lg font-semibold">
                Chcete-li, abychom používali nějaký slevový kód, napište nám jej
                do tohoto pole
              </label>
              <input
                value={subCoupon}
                onChange={(e) => {
                  setSubCoupon(e.target.value);
                }}
                type="text"
                placeholder="JARNISLEVA20"
              ></input>
            </div>
            <div>
              <label className="flex flex-col text-heading text-lg font-semibold">
                Máte v eshopu zákaznický účet a chcete, abychom z něj nakupovali
                kvůli slevám?
              </label>
              <select
                value={subAccount}
                onChange={(e) => {
                  setSubAccount(e.target.value);
                }}
                name="account"
                id="account"
              >
                <option value="false">Ne</option>
                <option value="true">Ano</option>
              </select>
            </div>
            {subAccount == "true" && (
              <>
                <div>
                  <label className="flex flex-col text-heading text-lg font-semibold">
                    Přihlašovací jméno nebo email k účtu v eshopu
                  </label>
                  <input
                    required={subAccount == "true"}
                    value={subAccountLogin}
                    onChange={(e) => {
                      setSubAccountLogin(e.target.value);
                    }}
                    type="text"
                    placeholder="Email nebo přihlašovací jméno k účtu v eshopu"
                  ></input>
                </div>
                <div>
                  <label className="flex flex-col text-heading text-lg font-semibold">
                    Přihlašovací heslo k účtu v eshopu
                  </label>{" "}
                  <input
                    required={subAccount == "true"}
                    value={subAccountPassword}
                    onChange={(e) => {
                      setSubAccountPassword(e.target.value);
                    }}
                    type="text"
                    placeholder="Heslo k účtu v eshopu"
                  ></input>
                </div>
              </>
            )}
          </div>
        </fieldset>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-3">
            <button
              className="buttonRedMedium"
              onClick={(e) => {
                e.preventDefault();
                const object = {
                  ...formData,
                  subName,
                  subWebsite,
                  subFrequency,
                  subDeliveryMethod,
                  subDeliveryAddress,
                  subCoupon,
                  subAccount,
                  subAccountLogin,
                  subAccountPassword,
                };

                setFormData(object);
                setError(null);
                setStep(1);
              }}
            >
              Zpět
            </button>
            <button
              className="buttonRedMedium"
              onClick={(e) => {
                handleNext(e);
              }}
            >
              Pokračovat
            </button>
          </div>
        </div>
      </form>
    );
  }

  function StepTwoComment() {
    return (
      <>
        <div className="p-10 flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-heading">
              Nastavte si parametry vašeho předplatného
            </h2>
            <p className=" font-semibold text-textDark">
              Zde je potřeba nastavit fungování vašeho předplatného. Zadejte
              název, podle kterého se budete oriantovat. Webová stránka e-shopu
              je cílový obchod, na kterém pro Vás zařídíme pravidelné
              objednávky.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-heading">
              Frekvence doručování
            </h2>
            <p className=" font-semibold text-textDark">
              Frekvence doručování je stejná jako frekvence plateb. které se Vám
              budou strhávat z karty za naše služby.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-heading">
              Preferovaný den objednání
            </h2>
            <p className=" font-semibold text-textDark">
              Jde o den, ve kterém budeme vaši objednávka tvořit. Budeme se vždy
              snažit, abychom tento den dodrželi, nicméně při velkém objemu
              objednávek v jeden den se může stát, že vaše předplatné vyřídíme
              až následující den.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-heading">
              Způsob doručení
            </h2>
            <p className=" font-semibold text-textDark">
              Na výběr máte buď kurýrní službu nebo nějaké odběrné místé. V
              každém případě se však bude jednat o dobírku.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-heading">
              Slevový kód a přístup do zákaznického účtu
            </h2>
            <p className=" font-semibold text-textDark">
              Tyto údaje nejsou povinné, nícméně Vám mohou ušetřit spoustu
              peněz. Slevový kód budeme používat vždy do chvíle, dokud bude
              funkční. Zákaznický účet budeme využívat výhradně pro nákupy v
              rámci vašeho předplatného.
            </p>
          </div>
        </div>
      </>
    );
  }

  //step three of form
  function StepThree() {
    //type of item - standard or mystery
    const [itemsType, setItemsType] = useState(formData.itemsType);

    //items
    const [items, setItems] = useState([...formData.items]);

    //mystery input states
    const [mysteryItem, setMysteryItem] = useState(formData.mysteryItem);
    const [mysteryCategories, setMysteryCategories] = useState([
      ...formData.mysteryItem.categories,
    ]);
    const [mysteryCategoriesInput, setMysteryCategoriesInput] = useState("");
    const [settingsToggle, setSettingsToggle] = useState(0);

    //create or patch subscription hooks
    const { createSubscription, error, setError, isLoading } =
      createSubscriptionHandler();
    const { patchSubscription } = patchSubscriptionHandler();

    //useEffect for updating settingsToggle
    useEffect(() => {
      if (itemsType == "standard") {
        setSettingsToggle(1);
      } else if (itemsType == "mystery") {
        setSettingsToggle(2);
      }
    }, []);

    //useEffect for scrolling to top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [settingsToggle]);

    //useEffect for updating mysteryItem
    useEffect(() => {
      setMysteryItem({ ...mysteryItem, categories: mysteryCategories });
    }, [mysteryCategories]);

    //items handlers
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

    //mystery item handlers

    function mysteryCategoryAdd(value) {
      const checkArray = mysteryCategories.filter(
        (item) => item.toLowerCase() == value.toLowerCase()
      );

      if (checkArray.length == 0) {
        setMysteryCategories([...mysteryCategories, value]);
      }
      setMysteryCategoriesInput("");
    }
    function mysteryCategoryDelete(index) {
      const newArray = [...mysteryCategories];
      newArray.splice(index, 1);
      setMysteryCategories(newArray);
    }

    //function for going back to step two - saves the states so that user wont lose data
    function handleBack() {
      setError(null);
      const object = { ...formData };
      object.items = items;
      object.mysteryItem = { ...mysteryItem };
      object.itemsType = itemsType;
      console.log(object);
      setFormData(object);
    }

    //function for sending the form data to server
    function handleSend() {
      const itemsArray = [];
      if (itemsType == "standard") {
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

          if (oldURL[oldURL.length - 1] == "/") {
            oldURL.splice(oldURL.length - 1, 1);
            newURL = oldURL.join("");
          }

          item.url = newURL;
          itemsArray.splice(itemsArray.length, 0, item);
        });
      }
      const newMysteryItem = mysteryItem;
      if (newMysteryItem.categories.length == 0) {
        newMysteryItem.categories.push("Všechny kategorie");
      }

      console.log(mysteryItem);
      console.log(newMysteryItem);

      const subscription = {
        userId: user.id,
        stripeSubId: formData.stripeSubId,
        stripeCustomerId: user.stripeCustomerId,
        pipedrivePersonId: user.pipedrivePersonId,
        pipedriveDealId: formData.pipedriveDealId,
        active: formData.active,
        firstName: formData.firstName,
        secondName: formData.secondName,
        phoneCountry: formData.phoneCountry,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        addressNumber: formData.addressNumber,
        city: formData.city,
        cityNumber: formData.cityNumber,
        subName: formData.subName,
        subWebsite: formData.subWebsite,
        nextPaymentDate: formData.nextPaymentDate,
        subFrequency: formData.subFrequency,
        subDeliveryMethod: formData.subDeliveryMethod,
        subDeliveryAddress: formData.subDeliveryAddress,
        subPayment: formData.subPayment,
        subCoupon: formData.subCoupon,
        subAccount: formData.subAccount,
        subAccountLogin: formData.subAccountLogin,
        subAccountPassword: formData.subAccountPassword,
        itemsType: itemsType,
        items: itemsArray,
        mysteryItem: newMysteryItem,
      };

      const missingArray = items.filter(
        (item) => !item.url || !item.amount || !item.changable
      );

      if (missingArray.length > 0 && itemsType == "standard") {
        setError("Nejsou vyplněná všechna pole");
      } else {
        setError(null);
        if (id) {
          let frequencyChange = 0;
          if (subscription.subFrequency !== originalSub.subFrequency) {
            frequencyChange = 1;
          }
          let nameChange = 0;
          if (subscription.subName !== originalSub.subName) {
            nameChange = 1;
          }
          let websiteChange = 0;
          if (subscription.subFrequency !== originalSub.subWebsite) {
            websiteChange = 1;
          }
          patchSubscription(
            subscription,
            id,
            frequencyChange,
            nameChange,
            websiteChange,
            setLoader
          );
        }

        if (!id) {
          createSubscription(subscription, setLoader);
        }
      }
    }

    return (
      <>
        {settingsToggle == 0 && (
          <>
            <div className="bg-white p-5 rounded-md border border-slate-200 gap-3 xl:grid grid-cols-2 grid-rows-[1fr_80px] min-h-[500px] flex flex-col">
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-heading">
                    Přesný soupis produktů, které chcete do pravidelné
                    objednávky
                  </h2>
                  <p className=" font-semibold text-textDark">
                    Vytvoříte si objednávku úplně stejně, jako to děláte právě
                    na e-shopu. V objednávce dostanete jenom a pouze produkty,
                    které si sami navolíte.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setItemsType("standard");
                    setSettingsToggle(1);
                  }}
                  className="bg-quad text-textButton self-stretch xl:p-3 p-2 xl:text-lg text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
                >
                  Standardní objednávka
                </button>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-heading">
                    Mystery balíček plný překvapení
                  </h2>
                  <p className=" font-semibold text-textDark">
                    Mystery balíček pro vás vytvoříme my. Vy si pouze zvolíte
                    kategorie, přidáte komentář a zvolíte maximální částku
                    objednávky. Zboží pro Vás budeme náhodně vybírat my.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setItemsType("mystery");
                    setSettingsToggle(2);
                  }}
                  className="bg-quad text-textButton self-stretch xl:p-3 p-2 xl:text-lg text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
                >
                  Mystery balíček
                </button>
              </div>
              <button
                onClick={() => {
                  setStep(2);
                  handleBack();
                }}
                className="bg-quad col-span-2 xl:self-center self-stretch text-textButton xl:p-3 p-2 xl:text-lg text-lg font-semibold rounded-md transition-all ease-in-out hover:scale-[102%] hover:bg-tertiary shadow-md shadow-slate-200 cursor-pointer"
              >
                Zpět
              </button>
            </div>
            <StepThreeCommentSettings />
          </>
        )}
        {settingsToggle == 1 && (
          <>
            <form className="flex flex-col gap-5 xl:p-10 p-4 bg-white border border-slate-200 rounded-lg">
              <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
                <legend className="text-xl font-semibold text-slate-900">
                  Přidejte položky, které chcete objednat
                </legend>
                <div className="flex flex-col gap-3">
                  {items.map((item, index) => {
                    return (
                      <div
                        className="xl:grid grid-cols-12 flex flex-col gap-2 maw-w-full"
                        key={"item" + index}
                      >
                        <div className="flex flex-col text--textDark text-lg font-semibold col-span-6">
                          <label>Odkaz na položku</label>{" "}
                          <input
                            name="url"
                            type="text"
                            placeholder="www.eshop.cz/hodinky/rolex300"
                            value={item.url}
                            onChange={(e) => {
                              handleChange(e, index);
                            }}
                          ></input>
                        </div>
                        <div className="flex flex-col text--textDark text-lg font-semibold col-span-2">
                          <label>Množství</label>
                          <input
                            name="amount"
                            type="number"
                            placeholder="5"
                            value={item.amount}
                            onChange={(e) => {
                              handleChange(e, index);
                            }}
                          ></input>
                        </div>
                        <div className="flex flex-col text-heading text-lg font-semibold col-span-3">
                          <label>Nahraditelné?</label>
                          <select
                            name="changable"
                            id="changable"
                            value={item.changable}
                            onChange={(e) => {
                              handleChange(e, index);
                            }}
                          >
                            <option value="true">Ano</option>
                            <option value="false">Ne</option>
                          </select>
                        </div>
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
                    className="buttonRedMedium"
                    onClick={() => {
                      setSettingsToggle(0);
                      setItemsType("empty");
                    }}
                  >
                    Zvolit jiný typ předplatného{" "}
                  </button>
                  <button
                    disabled={isLoading}
                    className="buttonRedMedium"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSend(e);
                    }}
                  >
                    {id ? "Aktualizovat předplatné" : "Vytvořit předplatné"}{" "}
                  </button>
                </div>

                {error && <ErrorWindowApp error={error} />}
              </div>
            </form>
            <StepThreeCommentStandard />
          </>
        )}
        {settingsToggle == 2 && (
          <>
            <div className="flex flex-col gap-5 xl:p-10 p-4 bg-white border border-slate-200 rounded-lg">
              <fieldset className="bg-white p-5 rounded-md border border-slate-100 gap-10">
                <legend className="text-xl font-semibold text-slate-900">
                  Nastavení mystery balíčku
                </legend>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 maw-w-full">
                    <div>
                      <label className="flex flex-col text-textDark text-lg font-semibold w-full">
                        Kategorie
                      </label>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center gap-4 w-full bg-slate-50 border border-slate-300 rounded pr-3">
                          <input
                            value={mysteryCategoriesInput}
                            name="url"
                            type="text"
                            className="border-none placeholder:"
                            placeholder="Sušenky"
                            onChange={(e) => {
                              setMysteryCategoriesInput(e.target.value);
                            }}
                            onKeyDown={(e) => {
                              if (e.code == "Enter") {
                                mysteryCategoryAdd(mysteryCategoriesInput);
                              }
                            }}
                          ></input>
                          <FontAwesomeIcon
                            onClick={() => {
                              mysteryCategoryAdd(mysteryCategoriesInput);
                            }}
                            icon={faPlusSquare}
                            className=" text-textDark text-3xl cursor-pointer"
                          />
                        </div>
                        <div className="p-2 rounded-md border border-slate-300 bg-slate-50 flex gap-3 flex-wrap min-h-[100px]">
                          {mysteryCategories.length == 0 ? (
                            <p className="text-textLighter font-semibold">
                              Zde se zobrazí zvolené kategorie. Pokud žádnou
                              kategorii nevyberete, budeme vybírat zboží ze
                              všech kategorií v e-shopu náhodně.
                            </p>
                          ) : (
                            mysteryCategories.map((item, index) => {
                              return (
                                <p
                                  className=" px-2 py-0 h-8 font-semibold text-textButton bg-rose-800 rounded-md flex items-center gap-1 cursor-pointer shadow-md animate-scale-up-noBounce"
                                  key={item}
                                  onClick={() => {
                                    mysteryCategoryDelete(index);
                                  }}
                                >
                                  {item} <FontAwesomeIcon icon={faXmark} />
                                </p>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="flex flex-col text--textDark text-lg font-semibold">
                        Zpráva k objednávce
                      </label>{" "}
                      <textarea
                        value={mysteryItem.message}
                        name="amount"
                        className="bg-slate-50 border border-slate-300 rounded p-2  font-semibold text-input resize-none"
                        placeholder="Přál bych si kombinaci proteinových tyčinek a ořechů"
                        onChange={(e) => {
                          setMysteryItem({
                            ...mysteryItem,
                            message: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div>
                      <label className="flex flex-col text-heading text-lg font-semibold col-span-2">
                        Maximální cena celé objednávky
                      </label>
                      <div className="grid grid-cols-[100px_1fr] gap-x-5">
                        <input
                          name="changable"
                          id="changable"
                          type="number"
                          value={mysteryItem.amount}
                          onChange={(e) => {
                            setMysteryItem({
                              ...mysteryItem,
                              amount: e.target.value,
                            });
                          }}
                          onBlur={(e) => {
                            if (e.target.value < 300) {
                              e.target.value = 300;
                            } else if (e.target.value > 9999) {
                              e.target.value = 9999;
                            }
                          }}
                        />
                        <div className="flex flex-col justify-center">
                          <input
                            min={300}
                            max={9999}
                            type="range"
                            className="accent-quad w-full"
                            value={mysteryItem.amount}
                            onChange={(e) => {
                              setMysteryItem({
                                ...mysteryItem,
                                amount: e.target.value,
                              });
                            }}
                          />
                          <div className="col-start-2 flex items-center justify-between font-semibold">
                            <p>min. 300</p>
                            <p>max. 9999</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="flex flex-col items-center gap-5">
                <div className="flex gap-3">
                  <button
                    className="buttonRedMedium"
                    onClick={() => {
                      setSettingsToggle(0);
                      setItemsType("empty");
                    }}
                  >
                    Zvolit jiný typ předplatného{" "}
                  </button>
                  <button
                    disabled={isLoading}
                    className="buttonRedMedium"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                  >
                    {id ? "Aktualizovat předplatné" : "Vytvořit předplatné"}
                  </button>
                </div>

                {error && <ErrorWindowApp error={error} />}
              </div>
            </div>
            <StepThreeCommentMystery />
          </>
        )}
      </>
    );
  }

  function StepThreeCommentSettings() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Standardní objednávka
            </h2>
            <p className=" font-semibold text-textDark">
              Standardní objednávku si můžete představit jako typickou
              objednávku z e-shopu, ve které si zvolíte přesně dané produkty.
              Nijak je nebudeme měnit ani upravovat, vše bude ve vašich rukách.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Mystery balíček
            </h2>
            <p className=" font-semibold text-textDark">
              Mystery balíček je objednávka, do které Vám zvolíme náhodně
              vybrané zboží my. V nastavení zvolíte maximální hodnotu
              objednávky, upřesníte kategorie a necháte případně nějakou zprávu.
              Hodí se třeba na předplatné různých čajů, sladkostí, a obecně
              věcí, které chcete zkoušet a testovat.
            </p>
          </div>
        </div>
      </>
    );
  }

  function StepThreeCommentStandard() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Vyberte produkty, které chcete objednávat
            </h2>
            <p className=" font-semibold text-textDark">
              Teď už je to jednoduché. Najděte si v e-shopu produkty, které
              chcete pravidelně objednávat, překopírujte odkaz do formuláře a
              zvolte množství.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Nahraditelné zboží
            </h2>
            <p className=" font-semibold text-textDark">
              Někdy se může stát, že zboží nebude naskladněné. Pokud v políčku
              nahraditelné vyberete Ano, pak se zboží pokusíme nahradit stejným
              typem od jiné značky. Jestliže se nám nepovede ani to, předplatné
              pozastavíme a budeme Vás kontaktovat.
            </p>
          </div>
        </div>
      </>
    );
  }

  function StepThreeCommentMystery() {
    return (
      <>
        <div className="p-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Zvolte kategorie
            </h2>
            <p className=" font-semibold text-textDark">
              Zvolením kategorie máte možnost upřesnit typ zboží, který chcete v
              Mystery balíčku mít. Čím více kategorií zvolíte, tím více typů
              produktů do balíčku poskládáme. Pokud nezvolíte ani jednu
              kategorii, budeme vybírat z celého e-shopu.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Přidejte zpráv
            </h2>
            <p className=" font-semibold text-textDark">
              Jde o další upřesnění objednávky. Napište nám sem například pokud
              jste na něco alergičtí, nenávidíte chuť skořice apod.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-heading">
              Zvolte maximální hodnotu
            </h2>
            <p className=" font-semibold text-textDark">
              Počítá se včetně včetně doprovodných plateb za dopravu a platbu.
              Nezapočítáváme sem cenu za vyřizování předplatného.
            </p>
          </div>
        </div>
      </>
    );
  }

  //step four - final summary

  return (
    <>
      <div className="bg-slate-50 lg:p-10 p-2 flex flex-col gap-5 lg:pt-10 pt-30">
        <div className="flex justify-between lg:flex-row flex-col-reverse items-center">
          <h1 className="lg:text-3xl text-xl font-bold text-heading text-center">
            {step == 1 && "Osobní a kontaktní údaje"}
            {step == 2 && "Nastavení předplatného"}
            {step == 3 && "Nastavení položek"}
          </h1>
          <Link
            to="/"
            className="bg-quad text-textButton mb-5 xl:mb-0 p-3 xl:text-xl  font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
          >
            Zpět
          </Link>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr]">
          {(step == 1 || step == 2) && (
            <div>
              {step == 1 && <StepOne />}
              {step == 2 && <StepTwo />}
            </div>
          )}
          {step == 3 && <StepThree />}
          {step == 1 && <StepOneComment />}
          {step == 2 && <StepTwoComment />}
        </div>
      </div>
    </>
  );
}
