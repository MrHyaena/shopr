import React from "react";

export default function BlackDivider({ text }) {
  return (
    <>
      <div className="flex items-center justify-center py-20 bg-primary [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)]">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <h3 className="text-white">{text}</h3>
        </div>
      </div>
    </>
  );
}
