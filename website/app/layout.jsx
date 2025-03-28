import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpButton from "./components/UpButton";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} lg:mt-[80px] mt-[56px]`}
      >
        <UpButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
