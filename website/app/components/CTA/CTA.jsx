import { CTAForm } from "./CTAForm";

export function CTA({ subHeading, heading, text }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center xl:py-20 pb-40 bg-white gap-10 p-5 xl:p-0">
        <div className="max-w-wrapper xl:grid grid-cols-2 gap-20 items-center">
          <div className="max-w-wrapper mx-auto text-center flex flex-col items-center p-5 xl:p-0">
            <p className="headingSmall">{subHeading}</p>
            <h2 className="mt-2 my-5">{heading}</h2>
            <p className="font-semibold">{text}</p>
          </div>
          <CTAForm />
        </div>
      </div>
    </>
  );
}
