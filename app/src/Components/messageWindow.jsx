import React from "react";

export default function MessageWindow({ message }) {
  return (
    <>
      <h2 className="font-semibold text-center p-2 bg-messageBg rounded-md border-2 border-messageBorder max-w-[250px]">
        {message}
      </h2>
    </>
  );
}
