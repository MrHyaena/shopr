import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

export function createSubscriptionHandler() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, setUser } = useAuthContext();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;

  async function createSubscription(data, setLoader) {
    setLoader(true);
    setIsLoading(true);
    setError(null);

    console.log(data);

    if (!user) {
      setError("Musíte být přihlášení");
      return;
    }

    const response = await fetch(apiURL + "/api/subscriptions", {
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
      setLoader(false);
      setIsLoading(false);
      setError(json.error);
      return;
    }

    if (response.ok) {
      setLoader(false);
      setIsLoading(false);
      const newObject = subscriptions;
      newObject.splice(newObject.length, 0, { ...json });
      setSubscriptions(newObject);
      navigate("/app");
      return;
    }
  }

  return { createSubscription, isLoading, error, setError };
}
