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
      <div className="flex items-center justify-center py-40">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="mx-auto text-center flex flex-col items-center">
            <h4 className="headingSmall">Jak to funguje</h4>
            <h2 className="mt-2 my-5">
              V jednoduchosti je síla, takže nehledejte nic komplikovaného
            </h2>
            <p className="max-w-[600px] font-medium text-textDark text-lg mb-5">
              Známe to všichni. Víme, že potřebujeme něco nakoupit, ale odložíme
              to na večer. Následně na to zapomeneme, jen aby se tento cyklus
              opakoval dalších několik dní.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div>
            <div className="grid grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Založíte účet
                </h4>
                <p className="p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat labore vel obcaecati sunt voluptatibus? Molestias non
                  ab veniam asperiores rem impedit a quia porro, ullam est eius
                  quisquam cum quo? Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Tenetur alias totam rem dolorum, magni
                  tempore et illo provident esse vel ut! In, nam? Porro
                  similique quas dolorum dolores architecto quia. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Aperiam officia
                  quod quos ullam enim cum quidem architecto maxime a facere
                  tenetur, autem suscipit veniam vitae. Quasi nihil assumenda
                  rerum aperiam?
                </p>
                <button className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold py-2 px-3 text-textButton cursor-pointer mx-10 mb-10">
                  Založit účet
                </button>
              </div>
              <div className="w-1 bg-quad"></div>
              <div className=" flex flex-col py-10">
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
              <div className=" flex flex-col p-10">
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
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Vytvoříte předplatné
                </h4>
                <p className="p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat labore vel obcaecati sunt voluptatibus? Molestias non
                  ab veniam asperiores rem impedit a quia porro, ullam est eius
                  quisquam cum quo? Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Tenetur alias totam rem dolorum, magni
                  tempore et illo provident esse vel ut! In, nam? Porro
                  similique quas dolorum dolores architecto quia. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Aperiam officia
                  quod quos ullam enim cum quidem architecto maxime a facere
                  tenetur, autem suscipit veniam vitae. Quasi nihil assumenda
                  rerum aperiam?
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2px_1fr] max-w-[1000px] gap-10">
              <div className=" bg-white border border-slate-200 my-10 rounded-lg shadow-lg">
                <h4 className="bg-primary text-white p-10 rounded-t-lg border border-slate-200">
                  Aktivujete předplatné
                </h4>
                <p className="p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat labore vel obcaecati sunt voluptatibus? Molestias non
                  ab veniam asperiores rem impedit a quia porro, ullam est eius
                  quisquam cum quo? Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Tenetur alias totam rem dolorum, magni
                  tempore et illo provident esse vel ut! In, nam? Porro
                  similique quas dolorum dolores architecto quia. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Aperiam officia
                  quod quos ullam enim cum quidem architecto maxime a facere
                  tenetur, autem suscipit veniam vitae. Quasi nihil assumenda
                  rerum aperiam?
                </p>
              </div>
              <div className="w-1 bg-quad"></div>
              <div className=" flex flex-col p-10">
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
      <ReviewOne />
    </>
  );
}
