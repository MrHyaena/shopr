import { CTAForm } from "./CTAForm";

export function CTA({ subHeading, heading, text }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:py-pad pb-40 bg-white gap-10 p-5">
        <div className="max-w-wrapper lg:grid grid-cols-2 gap-20 items-center">
          <div className="max-w-wrapper mx-auto text-center lg:flex flex-col items-center p-5 lg:p-0 hidden">
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
