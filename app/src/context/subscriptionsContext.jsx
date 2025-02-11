import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user);
    const fetchSubscription = async () => {
      const response = await fetch("http://localhost:4000/api/subscriptions", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
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
