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
        <div className="max-w-wrapper w-full lg:grid flex-col grid-cols-2 items-center justify-center gap-0 p-3">
          <div className="flex flex-col gap-5 xl:text-start text-center">
            <div>
              <h4>{subheading}</h4>
              <h2>{heading}</h2>
            </div>

            <p>{text}</p>
          </div>
          <div className=" gap-3 grid grid-cols-2 rounded-3xl rounded-tl-4xl xl:mt-0 mt-10">
            <div className="mt-10 flex flex-col gap-10 text-center">
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-2xl">{headingOne}</h3>

                <Image
                  src={imageOne}
                  alt="firstImage"
                  className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-2xl">{headingTwo}</h3>

                <Image
                  src={imageTwo}
                  alt="firstImage"
                  className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-10 text-center">
              {" "}
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-2xl">{headingThree}</h3>

                <Image
                  src={imageThree}
                  alt="firstImage"
                  className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-2xl">{headingFour}</h3>

                <Image
                  src={imageFour}
                  alt="firstImage"
                  className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
