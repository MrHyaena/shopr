import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-primary items-center justify-center py-30">
        <div className="max-w-wrapper flex items-center justify-between gap-50">
          <div className="mx-auto text-start flex flex-col items-start">
            <p className="text-xl font-bold mt-2 text-w my-5 text-white">
              Budeme se na vás těšit!
            </p>
          </div>
          <div className="mx-auto text-center flex flex-col items-center">
            <ul className="text-white flex gap-10 font-bold text-xl">
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
