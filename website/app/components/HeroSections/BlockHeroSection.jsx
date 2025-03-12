export function BlockHeroSection({
  children,
  headingOne,
  headingRed,
  headingThree,
  text,
  buttonText,
}) {
  return (
    <>
      <div className="xl:min-h-[800px] xl:grid flex flex-col-reverse grid-cols-5 min-h-screen items-stretch justify-center overflow-x-hidden xl:p-0 p-5 pt-20">
        <div className="flex flex-col items-start justify-center h-full gap-5 xl:p-24  col-span-3 max-w-[900px] justify-self-center animate-scale-up-noBounce-delay">
          <h1 className="z-2">
            {headingOne}
            <span className="text-quad">
              {" "}
              <br />
              {headingRed} <br />
            </span>{" "}
            {headingThree}
          </h1>

          <p className="text-xl font-semibold text-textDark z-2">{text}</p>
          <div className="flex gap-5">
            <a
              href="https://app.shopr.cz/signup"
              className="bg-quad shadow-md cursor-pointer rounded-md px-4 py-3 text-textButton font-bold text-xl hover:scale-102 transition-all ease-in-out"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
