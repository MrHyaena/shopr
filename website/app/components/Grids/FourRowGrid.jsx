import Image from "next/image";

export function FourRowGrid({
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
      <div className="flex flex-col items-center justify-center pb-30 bg-white">
        <div className="max-w-[1000px] grid grid-rows-4 items-center justify-center gap-10 gap-y-20">
          <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col text-start gap-3">
              <h3 className="text-2xl">{headingOne}</h3>
              <p className="">{textOne}</p>
            </div>
            <Image
              src={imageOne}
              alt="firstImage"
              className="object-cover object-center rounded-md w-100 h-100 justify-self-end shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <Image
              src={imageTwo}
              alt="secondImage"
              className="object-cover object-center rounded-md w-100 h-100 justify-self-start shadow-md"
            />
            <div className="flex flex-col text-start gap-3">
              <h3 className="text-2xl">{headingTwo}</h3>
              <p className="">{textTwo}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="flex flex-col text-start gap-3">
              <h3 className="text-2xl">{headingThree}</h3>
              <p className="">{textThree}</p>
            </div>
            <Image
              src={imageThree}
              alt="thirdImage"
              className="object-cover object-center rounded-md w-100 h-100 justify-self-end shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <Image
              src={imageFour}
              alt="fourthImage"
              className="object-cover object-center rounded-md w-100 h-100 justify-self-start shadow-md"
            />
            <div className="flex flex-col text-start gap-3">
              <h3 className="text-2xl">{headingFour}</h3>
              <p className="">{textFour}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
