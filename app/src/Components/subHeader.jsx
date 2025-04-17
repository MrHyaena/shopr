import React from "react";
import { Link } from "react-router-dom";

export default function SubHeader({ header, buttonHide, buttonText, linkTo }) {
  return (
    <div className="flex xl:flex-row justify-between xl:items-center flex-col-reverse gap-5">
      <h1 className="text-3xl font-bold text-heading xl:text-start text-center">
        {header}
      </h1>
      {!buttonHide && (
        <Link
          to={linkTo}
          className="bg-quad text-textButton xl:block self-center text-center px-3 py-2 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary shadow-md shadow-slate-200"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
