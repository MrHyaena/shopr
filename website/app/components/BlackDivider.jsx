import React from "react";

export default function BlackDivider({ text }) {
  return (
    <>
      <div className="flex items-center justify-center py-20 bg-primary [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]">
        <div className="max-w-wrapper flex flex-col items-center justify-start gap-10">
          <p className="font-semibold text-4xl text-white mb-4">"{text}!"</p>
        </div>
      </div>
    </>
  );
}
