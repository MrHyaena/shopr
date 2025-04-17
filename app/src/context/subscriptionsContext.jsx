import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { tokenExpired } from "../functions/tokenExpired";
import { useExpiredContext } from "../hooks/useExpiredContext";
const apiURL = import.meta.env.VITE_API_URL;

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const { user, setUser } = useAuthContext();
  const { setExpired } = useExpiredContext();

  useEffect(() => {
    const fetchSubscription = async () => {
      const response = await fetch(apiURL + "/api/subscriptions", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
          UserID: user.id,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setSubscriptions(json);
      }

      if (!response.ok) {
        tokenExpired(json, setUser, setExpired);
      }
    };

    fetchSubscription();
  }, [user]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions: subscriptions,
        setSubscriptions: setSubscriptions,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
