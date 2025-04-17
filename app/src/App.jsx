import { useEffect, useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "./functions/ScrollTopFunction";
import { AccountDetails } from "./pages/AccountDetails";
import { SubscriptionForm } from "./pages/SubscriptionForm";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { PasswordReset } from "./pages/PasswordReset";
import { ContactForm } from "./pages/ContactForm";
import TagManager from "react-gtm-module";
import { SubscriptionsList } from "./pages/SubscriptionsList";
import Homepage from "./pages/Homepage";

function App() {
  const { user } = useAuthContext();

  const tagManagerArguments = {
    gtmId: "GT-K52GJGNC",
  };

  TagManager.initialize(tagManagerArguments);

  function ProtectedRoute() {
    const [loader, setLoader] = useState(false);

    return (
      <>
        {loader && (
          <div className="w-screen h-screen bg-black/80 flex flex-col gap-4 items-center justify-center fixed top-0 left-0 z-40">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-6xl text-white animate-rotate"
            />
            <p className="text-textLight text-2xl font-semibold">
              Pracujeme na tom...
            </p>
          </div>
        )}
        <div className="grid lg:grid-cols-[130px_1fr] gap-5 min-h-screen bg-slate-50">
          <Sidebar />
          <div>
            <main>
              <Routes>
                <Route path="*" element={<Homepage setLoader={setLoader} />} />
                <Route
                  path="/predplatne"
                  element={<SubscriptionsList setLoader={setLoader} />}
                />
                <Route
                  path="/formular"
                  element={<SubscriptionForm setLoader={setLoader} />}
                />
                <Route
                  path="/formular/:id"
                  element={<SubscriptionForm setLoader={setLoader} />}
                />
                <Route path="/kontakt" element={<ContactForm />} />
                <Route
                  path="/osobni-udaje"
                  element={<AccountDetails setLoader={setLoader} />}
                />
              </Routes>
            </main>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route
            path="/*"
            element={user ? <ProtectedRoute /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route path="/reset/password" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
