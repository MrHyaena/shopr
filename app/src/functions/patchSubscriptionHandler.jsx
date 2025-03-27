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
import { tokenExpired } from "./tokenExpired";
import { useExpiredContext } from "../hooks/useExpiredContext";
const apiURL = import.meta.env.VITE_API_URL;

export function patchSubscriptionHandler() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, setUser } = useAuthContext();
  const { subscriptions, setSubscriptions } = useSubscriptionContext();
  const { setExpired } = useExpiredContext();
  const navigate = useNavigate();

  async function patchSubscription(
    data,
    id,
    frequencyChange,
    nameChange,
    websiteChange,
    setLoader
  ) {
    setLoader(true);
    setIsLoading(true);
    setError(null);

    if (!user) {
      setError("Musíte být přihlášení");
      return;
    }

    const response = await fetch(
      apiURL +
        "/api/subscriptions/" +
        id +
        "/" +
        frequencyChange +
        "/" +
        nameChange +
        "/" +
        websiteChange,
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
      setLoader(false);
      setIsLoading(false);
      setError(json.error);
      tokenExpired(json, setUser, setExpired);
      return;
    }

    if (response.ok) {
      setLoader(false);
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
      navigate("/app");
      return;
    }
  }

  return { patchSubscription, isLoading, error };
}
