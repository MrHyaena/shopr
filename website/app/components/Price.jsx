export default function PriceDescription({ subHeading, description }) {
  return (
    <>
      <div className="flex justify-center items-start py-30">
        <div className="max-w-wrapper flex flex-col items-center justify-start">
          <div className=" px-4">
            <div className="mx-auto text-center flex flex-col items-center">
              <h4>Ceník</h4>
              <h2 className="mt-2 my-5">{subHeading}</h2>
              <p className="max-w-[600px] font-medium text-textDark text-lg">
                {description}
              </p>
            </div>

            <div className="mt-5 max-w-[1200px] mx-auto flex flex-col items-center">
              <h2 className="text-5xl font-bold text-textDark text-center">
                90 Kč
              </h2>
              <p className="text-lg text-center font-bold text-textDark mb-6">
                za splněnou objednávku
              </p>
              <a href="https://buy.stripe.com/3cs01Z60caNUcEg288">
                <button className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-105 transition-all ease-in-out">
                  Založit účet ZDARMA
                </button>
              </a>

              <p className="text-sm font-semibold text-textMedium my-3">
                Tlačítko vás přenese na formulář pro registraci uživatelského
                účtu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
