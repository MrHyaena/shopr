import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

export function createSubscriptionHandler() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, setUser } = useAuthContext();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();

  async function createSubscription(data) {
    setIsLoading(true);
    setError(null);

    if (!user) {
      setError("Musíte být přihlášení");
      return;
    }

    const response = await fetch("http://localhost:4000/api/subscriptions", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...data }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return;
    }

    if (response.ok) {
      console.log(json);
      setIsLoading(false);
      const newObject = subscriptions;
      newObject.push({ ...data });
      setSubscriptions(newObject);
      return <Navigate to="/" />;
    }
  }

  return { createSubscription, isLoading, error };
}
