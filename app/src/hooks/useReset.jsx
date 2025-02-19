import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const apiURL = import.meta.env.VITE_API_URL;

export function useReset() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);

  async function reset(email) {
    setIsLoading(true);
    setError(null);

    const response = await fetch(apiURL + "api/user/reset/email/" + email, {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setMessage(json);
      setIsLoading(false);
    }
  }

  return { reset, isLoading, error, setError, message };
}
