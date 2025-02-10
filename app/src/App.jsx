import { useState } from "react";
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

function RootLayout() {
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
