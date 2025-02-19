import { useEffect, useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { Subscriptions } from "./Components/subscriptionList";
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

function App() {
  const { user } = useAuthContext();

  function ProtectedRoute() {
    return (
      <div className="grid xl:grid-cols-[150px_1fr] gap-5 min-h-screen bg-slate-50">
        <Sidebar />
        <div>
          <main>
            <Routes>
              <Route path="*" element={<Subscriptions />} />
              <Route path="/form" element={<SubscriptionForm />} />
              <Route path="/form/:id" element={<SubscriptionForm />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/osobni-udaje" element={<Personal />} />
              <Route path="/otazky" element={<Faq />} />
            </Routes>
          </main>
        </div>
      </div>
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
          <Route path="reset/authorized/:hash" element={<PasswordReset />} />
          <Route path="/" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
