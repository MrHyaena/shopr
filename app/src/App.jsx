import { useEffect, useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { Subscriptions } from "./Components/subscriptionList";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { SubscriptionForm } from "./Components/subscriptionForm";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { useSubscriptionContext } from "./hooks/useSubscriptionContext";

function RootLayout() {
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/subscriptions", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setSubscriptions(json);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  return (
    <div className="grid grid-cols-[150px_1fr] gap-5 min-h-screen bg-slate-50">
      <Sidebar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function LoginLayout() {
  return (
    <>
      <LoginPage />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/app" element={<RootLayout />}>
        <Route index element={<Subscriptions />} />
        <Route path="form" element={<SubscriptionForm />} />
      </Route>
      <Route path="/login" element={<LoginLayout />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/" element={<Navigate to="/app" />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
