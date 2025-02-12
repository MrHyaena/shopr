import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
import {
  Link,
  Navigate,
  redirect,
  useNavigate,
  useParams,
} from "react-router-dom";

export function patchSubscriptionHandler() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, setUser } = useAuthContext();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();

  async function patchSubscription(data, id) {
    setIsLoading(true);
    setError(null);

    if (!user) {
      setError("Musíte být přihlášení");
      return;
    }

    const response = await fetch(
      "http://localhost:4000/api/subscriptions/" + id,
      {
        mode: "cors",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ ...data }),
      }
    );

    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return;
    }

    if (response.ok) {
      const newItem = { ...json, ...data };

      setIsLoading(false);
      const newSubscription = subscriptions;
      console.log(newSubscription);
      newSubscription.find((item, index) => {
        if (item._id == id) {
          newSubscription[index] = { ...newItem };
        }
      });
      setSubscriptions([...newSubscription]);
      return;
    }
  }

  return { patchSubscription, isLoading, error };
}
