import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useCreateWorkout() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  async function createWorkout(data) {
    setIsLoading(true);
    setError(null);

    if (!user) {
      setError("Musíte být přihlášení");
      return;
    }

    const response = await fetch("http://localhost:4000/api/subscription", {
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
    }

    if (response.ok) {
      console.log(json);

      setUser(json);

      setIsLoading(false);
    }
  }

  return { createWorkout, isLoading, error };
}
