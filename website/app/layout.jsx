import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpButton from "./components/UpButton";
import Script from "next/script";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopr: Předplatné na každém e-shopu",
  description:
    "Objednáváte doplňky stravy, pečujete o zvířata, nebo třeba milujete čaj? Založte si pravidelné objednávky na jakémkoliv e-shopu jen chcete. Objednávky vyřídíme za Vás, vy si zboží jen převezmete.",
};

function GoogleTag() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "AW-16899008701");

  return (
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16899008701"
    ></script>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GT-K52GJGNC" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} lg:mt-[80px] mt-[56px]`}
      >
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="0db73977-b2f2-4fda-a24e-2a08bdee8b21"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>

        <UpButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
