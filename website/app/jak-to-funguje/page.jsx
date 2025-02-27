import {
  faCheckToSlot,
  faFileInvoice,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import ReviewOne from "../components/ReviewOne";

export default function Howto() {
  return (
    <>
      <div className="flex items-center justify-center pt-30 pb-20">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="mx-auto text-center flex flex-col items-center">
            <h4 className="headingSmall">Jak to funguje</h4>
            <h2 className="mt-2 my-5">
              Vyznaváme jednoduchost, takže nehledejte nic komplikovaného
            </h2>
            <p className="max-w-[600px] font-medium text-textDark text-lg">
              Naše předplatné má především usnadňovat životy. Dává tedy smysl,
              abychom udělali naši službu co možná nejjednodušší. Nemáte se
              proto čeho obávat, a už vůbec ne nějakého složitého nastavování.
              Celkem je potřeba splnit tři kroky - registraci, tvorbu
              předplatného a aktivaci. Potom už řešíte jen převzetí vašich
              pravidelných objednávek.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div>
            <div className="grid grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Založíte účet
                </h4>
                <div className="flex flex-col gap-5 my-10">
                  <p className="px-10">
                    Vůbec prvním krokem v celé cestě je tvorba uživatelského
                    účtu. Jde o jednoduchý registrační formulář, ve kterém Vás
                    požádáme o vyplnění kontaktních údajů, hesla a emailu.
                  </p>
                  <p className="px-10">
                    Údaje potřebujeme buď k tomu, abychom Vám vytvořili do
                    systému přístup, nebo k usnadnění vaší budoucí práce s
                    předplatnými. Kromě emailu je samozřejmě možné každý z nich
                    změnit, takže si z toho nemusíte dělat nějak těžkou hlavu.
                  </p>
                </div>

                <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer mx-10 mb-10">
                  Založit účet
                </button>
              </div>
              <div className="w-1 bg-quad"></div>
              <div className=" flex flex-col py-10 mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    className="text-9xl text-quad mb-2"
                  />
                  <h3 className="uppercase text-5xl font-extrabold">
                    2 Minuty
                  </h3>
                  <h5 className="text-2xl font-medium">Založení účtu</h5>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" flex flex-col p-10 mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faSliders}
                    className="text-9xl text-quad mb-2"
                  />
                  <h3 className="uppercase text-5xl font-extrabold">5 Minut</h3>
                  <h5 className="text-2xl font-medium">Tvorba předplatného</h5>
                </div>
              </div>
              <div className="w-1 bg-quad"></div>
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Vytvoříte předplatné
                </h4>
                <div className="flex flex-col gap-5 my-10">
                  <p className="px-10">
                    Když už máte vytvořený uživatelský účet, nic Vám nebrání v
                    tvorbě předplatného. Možná máte představi o tom, jak složité
                    to bude, ale ujišťujeme Vás, že to jde udělat do několika
                    málo minut.
                  </p>
                  <p className="px-10">
                    Prakticky je potřeba jen vědět, co chcete do předplatného
                    zahrnout, nastavit doručení a vyplnit dodací údaje. Nic víc.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg  mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Aktivujete předplatné
                </h4>
                <div className="flex flex-col gap-5 my-10">
                  <p className="px-10">
                    Posledním a nejdůležitějším krokem je aktivace předplatného.
                    Abychom Vám poskytli co nejbezpečnější službu a ochránili
                    vaše platební údaje, navázali jsme spolupráci s firmou
                    Stripe, která řeší platby pro miliony lidí po celém světě.
                  </p>
                  <p className="px-10">
                    Pro Vás je to už jen standardní vyplnění údajů z karty. Když
                    to splníte, máte hotovo a my jdeme zpracovat vaši
                    objednávku.
                  </p>
                </div>
              </div>
              <div className="w-1 bg-quad"></div>
              <div className=" flex flex-col p-10 mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    className="text-9xl text-quad mb-2"
                  />
                  <h3 className="uppercase text-5xl font-extrabold">
                    1 Minuta
                  </h3>
                  <h5 className="text-2xl font-medium">
                    Aktivace předplatného
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10 pb-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-10 max-w-[1000px]">
            <h4 className="headingSmall ">Správa předplatného</h4>
            <h2 className="mt-2 my-5 text-textDark">
              Předplatné lze kdykoliv upravit, pozastavit a zrušit
            </h2>
            <p className=" font-medium text-textDark text-lg">
              Známe to všichni. Víme, že potřebujeme něco nakoupit, ale odložíme
              to na večer. Následně na to zapomeneme, jen aby se tento cyklus
              opakoval dalších několik dní.
            </p>
            <button className="bg-quad w-full rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-2xl font-semibold p-3 text-textButton cursor-pointer my-10">
              Založit účet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
