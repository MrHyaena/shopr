import Image from "next/image";

export function ImageTextLeftWhite({
  bg,
  subHeading,
  heading,
  textOne,
  textTwo,
  textButton,
  image,
}) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="bg-white self-stretch flex justify-center py-10">
          <div className="grid grid-cols-2 max-w-[1300px] min-h-[600px] gap-10">
            <div className="self-center justify-self-center">
              <Image
                src={image}
                alt="Suplementy"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-5 justify-center items-start">
              <div>
                <p className="text-lg font-bold text-quad">{subHeading}</p>
                <h3>{heading}</h3>
              </div>

              <p>{textOne}</p>
              <p>{textTwo}</p>
              <a
                href="https://app.shopr.cz/signup"
                className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold p-3 text-textButton cursor-pointer"
              >
                {textButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
