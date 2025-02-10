import { createContext, useEffect, useState } from "react";

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = ({ children }) => {
  const [subscriptions, setSubscription] = useState(null);

  //useEffect(() => {
  //  const fetchSubscription = async () => {
  //    const response = await fetch("http://localhost:4000/api/subscription", {
  //      method: "GET",
  //    });
  //    const json = await response.json();
  //
  //    if (response.ok) {
  //      setSubscription(json);
  //    }
  //  };
  //
  //  fetchSubscription();
  //}, []);
  //
  return (
    <SubscriptionContext.Provider
      value={{ subscriptions: subscriptions, setSubscription: setSubscription }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
