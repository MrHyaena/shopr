import {
  faCheckToSlot,
  faFileInvoice,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HowDoesItWork() {
  return (
    <>
      <div className="flex items-center justify-center py-10">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="p-3">
            <div className="lg:grid flex flex-col-reverse grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg  border-slate-200">
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
                    systému přístup, a k usnadnění vaší budoucí práce s
                    předplatnými. Kromě emailu je samozřejmě možné každý z nich
                    změnit, takže si z toho nemusíte dělat nějak těžkou hlavu.
                  </p>
                </div>

                <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer mx-10 mb-10">
                  Založit účet
                </button>
              </div>
              <div className="w-1 bg-quad lg:block hidden"></div>
              <div className=" flex flex-col lg:py-10 lg:mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    className="text-7xl text-quad mb-2"
                  />
                  <h3 className="uppercase text-5xl font-extrabold">
                    2 Minuty
                  </h3>
                  <h5 className="text-2xl font-medium">Založení účtu</h5>
                </div>
              </div>
            </div>
            <div className="lg:grid flex flex-col grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" flex flex-col lg:py-10 lg:mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faSliders}
                    className="text-7xl text-quad mb-2"
                  />
                  <h3 className="uppercase text-5xl font-extrabold">5 Minut</h3>
                  <h5 className="text-2xl font-medium">Tvorba předplatného</h5>
                </div>
              </div>
              <div className="w-1 bg-quad lg:block hidden"></div>
              <div className=" bg-white  border-slate-200 my-10 rounded-lg shadow-lg mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Vytvoříte předplatné
                </h4>
                <div className="flex flex-col gap-5 my-10">
                  <p className="px-10">
                    Když už máte vytvořený uživatelský účet, nic Vám nebrání v
                    tvorbě předplatného. Možná máte představy o tom, jak složité
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
            <div className="lg:grid flex flex-col-reverse grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white  border-slate-200 my-10 rounded-lg shadow-lg  mb-20">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Aktivujete předplatné
                </h4>
                <div className="flex flex-col gap-5 my-10">
                  <p className="px-10">
                    Posledním krokem je aktivace předplatného. Abychom Vám
                    poskytli co nejbezpečnější službu a ochránili vaše platební
                    údaje, navázali jsme spolupráci s firmou Stripe, která řeší
                    platby pro miliony lidí po celém světě.
                  </p>
                  <p className="px-10">
                    Pro Vás je to už jen standardní vyplnění údajů z karty. Když
                    to splníte, máte hotovo a my jdeme zpracovat vaši
                    objednávku.
                  </p>
                </div>
              </div>
              <div className="w-1 bg-quad lg:block hidden"></div>
              <div className=" flex flex-col lg:py-10 lg:mb-20">
                <div className="sticky top-80 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    className="text-7xl text-quad mb-2"
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
      ;
    </>
  );
}
