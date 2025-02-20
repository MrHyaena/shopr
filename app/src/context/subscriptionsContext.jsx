import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const apiURL = import.meta.env.VITE_API_URL;

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user);
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
      console.log(json);

      if (response.ok) {
        setSubscriptions(json);
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
