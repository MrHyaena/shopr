export function TextSection({ subHeading, heading, text }) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center py-30">
        <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
          <p className="headingSmall">{subHeading}</p>
          <h2 className="mt-2 my-5">{heading}</h2>
          <p className="">{text}</p>
        </div>
      </div>
    </>
  );
}
