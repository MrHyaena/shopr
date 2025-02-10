import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { SubscriptionContextProvider } from "./context/subscriptionsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <SubscriptionContextProvider>
        <App />
      </SubscriptionContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
