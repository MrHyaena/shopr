import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const apiURL = import.meta.env.VITE_API_URL;

export function useLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { user, setUser } = useAuthContext();

  async function login(data) {
    setIsLoading(true);
    setError(null);

    const response = await fetch(apiURL + "/api/user/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      if (data.remember) {
        localStorage.setItem("user", JSON.stringify(json));
      }

      // update the auth context
      setUser({ ...json });

      setIsLoading(false);
    }
  }

  return { login, isLoading, error, setError };
}
