import React from "react";

export function BlackDivider({ children }) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center py-15 bg-primary font-primary">
        <div className="max-w-wrapper w-full">{children}</div>
      </div>
    </>
  );
}
