export function CTABlock() {
  return (
    <>
      <div className="flex items-center justify-center lg:py-30 pb-30 p-3">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <div className="bg-white border border-slate-200 rounded-lg shadow-lg lg:p-10 p-6 max-w-[1000px]">
            <h4 className="headingSmall ">Správa předplatného</h4>
            <h2 className="mt-2 my-5 text-textDark">
              Předplatné lze kdykoliv upravit, pozastavit a zrušit
            </h2>
            <p className=" font-medium text-textDark text-lg">
              Známe to všichni. Víme, že potřebujeme něco nakoupit, ale odložíme
              to na večer. Následně na to zapomeneme, jen aby se tento cyklus
              opakoval dalších několik dní. Pojďme to jednou a provždy vyřešit!
            </p>
            <a href="https://app.shopr.cz/signup">
              <button className="bg-quad w-full rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-2xl font-semibold p-3 text-textButton cursor-pointer my-10">
                Založit účet
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
