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
        <div className="max-w-wrapper w-full grid grid-cols-2 items-center justify-center gap-10 gap-y-20">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="flex flex-col text-center">
              <h3 className="text-2xl">{headingOne}</h3>
              <p className="">{textOne}</p>
            </div>
            <Image
              src={imageOne}
              alt="hero"
              className="object-cover object-left rounded-3xl w-60 h-60 justify-self-center"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <Image
              src={imageTwo}
              alt="hero"
              className="object-cover object-left rounded-3xl w-60 h-60 justify-self-center"
            />
            <div className="flex flex-col text-center">
              <h3 className="text-2xl">{headingTwo}</h3>
              <p className="">{textTwo}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="flex flex-col text-center">
              <h3 className="text-2xl">{headingThree}</h3>
              <p className="">{textThree}</p>
            </div>
            <Image
              src={imageThree}
              alt="hero"
              className="object-cover object-left rounded-3xl w-60 h-60 justify-self-center"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            <Image
              src={imageFour}
              alt="hero"
              className="object-cover object-left rounded-3xl w-60 h-60 justify-self-center"
            />
            <div className="flex flex-col text-center">
              <h3 className="text-2xl">{headingFour}</h3>
              <p className="">{textFour}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
