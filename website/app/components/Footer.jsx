import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-primary items-center justify-center xl:py-30 py-15 flex-col gap-10">
        <div className="max-w-wrapper flex flex-col items-center gap-8 p-3">
          <p className="text-2xl font-bold mt-2 text-w text-white text-center">
            Budeme se na vás těšit!
          </p>

          <div className="flex flex-col items-center text-center">
            <a href="/obchodni-podminky">
              <p className="text-textLight">Obchodní podmínky</p>
            </a>
            <a href="/gdpr">
              <p className="text-textLight">GDPR</p>
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <a href="mailto:info@shopr.cz">
              <p className="text-textLight">info@shop.cz</p>
            </a>
            <p className="text-textLight">+420 602 606 331</p>
          </div>
        </div>
      </footer>
    </>
  );
}
