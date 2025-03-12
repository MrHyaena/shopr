import React from "react";

export function BlackDivider({ children }) {
  return (
    <>
      <div
        style={{
          background: "url('./backgroundImg.webp')",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.9)",
          backgroundSize: "cover",
          backgroundPosition: "0px",
        }}
        className=" flex flex-col items-center justify-center py-15  lg:mb-15"
      >
        <div className="max-w-wrapper w-full">{children}</div>
      </div>
    </>
  );
}
