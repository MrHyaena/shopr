import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Children } from "react";

export function ImageTextCheckmarks({
  subHeading,
  heading,
  text,
  checkOne,
  checkTwo,
  checkThree,
  buttonText,
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
                alt="section-image"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-5 justify-center items-start">
              <div>
                <p className="text-lg font-bold text-quad">{subHeading}</p>
                <h3>{heading}</h3>
              </div>

              <p>{text}</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <p className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-green-600 text-2xl"
                    />
                    {checkOne}
                  </p>
                </li>
                <li>
                  <p className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-green-600 text-2xl"
                    />
                    {checkTwo}
                  </p>
                </li>
                <li>
                  <p className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-green-600 text-2xl"
                    />
                    {checkThree}
                  </p>
                </li>
              </ul>

              <a
                href="https://app.shopr.cz/signup"
                className="bg-quad rounded-md shadow-lg hover:scale-105 transition all ease-in-out text-xl font-semibold p-3 text-textButton cursor-pointer"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
