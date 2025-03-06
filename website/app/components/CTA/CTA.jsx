import { CTAForm } from "./CTAForm";

export function CTA({ subHeading, heading, text }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 pb-40 bg-white gap-10">
        <div className="max-w-wrapper grid grid-cols-2 gap-20 items-center">
          <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
            <p className="headingSmall">{subHeading}</p>
            <h2 className="mt-2 my-5">{heading}</h2>
            <p className="">{text}</p>
          </div>
          <CTAForm />
        </div>
      </div>
    </>
  );
}
