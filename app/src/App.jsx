import { useEffect, useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { SubscriptionList } from "./Components/subscriptionList";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { SubscriptionForm } from "./Components/subscriptionForm";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { Contact } from "./Components/contact";
import { Personal } from "./Components/personal";
import { Faq } from "./Components/faq";
import { PasswordReset } from "./pages/PasswordReset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider, faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { user } = useAuthContext();

  function ProtectedRoute() {
    const [loader, setLoader] = useState(false);

    return (
      <>
        {loader && (
          <div className="w-screen h-screen bg-black/80 flex flex-col gap-4 items-center justify-center absolute top-0 left-0 z-40">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-6xl text-white animate-rotate"
            />
            <p className="text-textLight text-2xl font-semibold">
              Pracujeme na tom...
            </p>
          </div>
        )}
        <div className="grid xl:grid-cols-[150px_1fr] gap-5 min-h-screen bg-slate-50">
          <Sidebar />
          <div>
            <main>
              <Routes>
                <Route
                  path="*"
                  element={<SubscriptionList setLoader={setLoader} />}
                />
                <Route
                  path="/form"
                  element={<SubscriptionForm setLoader={setLoader} />}
                />
                <Route
                  path="/form/:id"
                  element={<SubscriptionForm setLoader={setLoader} />}
                />
                <Route path="/kontakt" element={<Contact />} />
                <Route
                  path="/osobni-udaje"
                  element={<Personal setLoader={setLoader} />}
                />
                <Route path="/otazky" element={<Faq />} />
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
        <Routes>
          <Route
            path="/app/*"
            element={user ? <ProtectedRoute /> : <Navigate to="/login" />}
          />
          <Route
            path="login"
            element={!user ? <LoginPage /> : <Navigate to="/app" />}
          />
          <Route
            path="signup"
            element={!user ? <SignupPage /> : <Navigate to="/app" />}
          />
          <Route path="reset/password" element={<PasswordReset />} />
          <Route path="/" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
