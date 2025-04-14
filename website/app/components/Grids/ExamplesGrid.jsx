import Image from "next/image";

export function ExamplesGrid({
  subheading,
  heading,
  text,
  headingOne,
  imageOne,
  headingTwo,
  imageTwo,
  headingThree,
  imageThree,
  headingFour,
  imageFour,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center xl:py-30 bg-white">
        <div className="max-w-wrapper w-full lg:grid flex flex-col grid-cols-2 items-center justify-center gap-10 p-5">
          <div className="flex flex-col gap-5 xl:text-start text-center">
            <div>
              <h4>{subheading}</h4>
              <h2>{heading}</h2>
            </div>

            <p>{text}</p>
          </div>
          <div
            className=" gap-3 grid grid-cols-2 rounded-3xl rounded-tl-4xl xl:mt-0"
            data-aos="fade-right"
          >
            <Image
              src={imageOne}
              alt="firstImage"
              className="object-cover object-center rounded-md md:w-60 md:h-60 h-40 w-40 shadow-lg justify-self-end"
            />
            <Image
              src={imageTwo}
              alt="firstImage"
              className="object-cover object-center rounded-md md:w-60 md:h-60 h-40 w-40 justify-self-start shadow-lg"
            />
            <Image
              src={imageThree}
              alt="firstImage"
              className="object-cover object-center rounded-md md:w-60 md:h-60 h-40 w-40 justify-self-end shadow-lg"
            />
            <Image
              src={imageFour}
              alt="firstImage"
              className="object-cover object-center rounded-md md:w-60 md:h-60 h-40 w-40 justify-self-start shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
