import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-primary items-center justify-center py-30">
        <div className="max-w-wrapper flex lg:flex-row flex-col items-center justify-between w-full gap-5">
          <div className="mx-auto text-start flex flex-col items-start">
            <p className="text-xl font-bold mt-2 text-w text-white">
              Budeme se na vás těšit!
            </p>
          </div>
          <div className="mx-auto text-center flex flex-col items-center">
            <ul className="text-white flex gap-10 font-bold text-md">
              <li>
                <a href="/obchodni-podminky">Obchodní podmínky</a>
              </li>
              <li>
                <a href="/gdpr">GDPR</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
