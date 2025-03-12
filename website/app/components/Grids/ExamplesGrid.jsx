import Image from "next/image";

export function ExamplesGrid({
  headingOne,
  textOne,
  imageOne,
  headingTwo,
  textTwo,
  imageTwo,
  headingThree,
  textThree,
  imageThree,
  headingFour,
  textFour,
  imageFour,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-30 bg-white">
        <div className="max-w-wrapper w-full lg:grid flex-col grid-cols-2 items-center justify-center gap-0">
          <div className="lg:grid flex flex-col-reverse grid-cols-2 gap-10 items-center p-5">
            <div className="flex flex-col text-center gap-3">
              <h3 className="text-2xl">{headingOne}</h3>
              <p className="">{textOne}</p>
            </div>
            <Image
              src={imageOne}
              alt="firstImage"
              className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
            />
          </div>
          <div className="lg:grid flex flex-col  grid-cols-2 gap-10 items-center p-5">
            <Image
              src={imageTwo}
              alt="secondImage"
              className="object-cover object-center rounded-md w-60 h-60 justify-self-center shadow-lg"
            />
            <div className="flex flex-col text-center gap-3">
              <h3 className="text-2xl">{headingTwo}</h3>
              <p className="">{textTwo}</p>
            </div>
          </div>
          <div className="lg:grid flex flex-col-reverse  grid-cols-2 gap-10 items-center p-5">
            <div className="flex flex-col text-center gap-3">
              <h3 className="text-2xl">{headingThree}</h3>
              <p className="">{textThree}</p>
            </div>
            <Image
              src={imageThree}
              alt="thirdImage"
              className="object-cover object-left rounded-md w-60 h-60 justify-self-center shadow-lg"
            />
          </div>
          <div className="lg:grid flex flex-col grid-cols-2 gap-10 items-center p-5">
            <Image
              src={imageFour}
              alt="fourthImage"
              className="object-cover object-left rounded-md w-60 h-60 justify-self-center shadow-lg"
            />
            <div className="flex flex-col text-center gap-3">
              <h3 className="text-2xl">{headingFour}</h3>
              <p className="">{textFour}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
