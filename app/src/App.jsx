import { useEffect, useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { Subscriptions } from "./Components/subscriptionList";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { SubscriptionForm } from "./Components/subscriptionForm";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { useSubscriptionContext } from "./hooks/useSubscriptionContext";

function App() {
  const { user } = useAuthContext();

  function ProtectedRoute() {
    return (
      <div className="grid grid-cols-[150px_1fr] gap-5 min-h-screen bg-slate-50">
        <Sidebar />
        <div>
          <main>
            <Routes>
              <Route path="*" element={<Subscriptions />} />
              <Route path="/form" element={<SubscriptionForm />} />
              <Route path="/form/:id" element={<SubscriptionForm />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/app"
          element={user != null ? <ProtectedRoute /> : <Navigate to="/login" />}
        >
          <Route index element={<Subscriptions />} />
          <Route path="form/:id" element={<SubscriptionForm />} />
          <Route path="form/" element={<SubscriptionForm />} />
        </Route>

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/app" />}
        ></Route>

        <Route path="/" element={<Navigate to="/app" />} />
      </>
    )
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/app*"
            element={user ? <ProtectedRoute /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/app" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to="/app" />}
          />
          <Route path="/" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
