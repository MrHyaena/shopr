import { useContext, useEffect } from "react";
import { SubscriptionContext } from "../context/subscriptionsContext";

export function useSubscriptionContext() {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw Error("useSubscriptionContext is outside scope");
  }

  return context;
}
