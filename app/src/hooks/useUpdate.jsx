import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useUpdate() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { user, setUser } = useAuthContext();

  async function update(data) {
    console.log("useUpdate");
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/update", {
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
      // save the user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      console.log(json);
      setIsLoading(false);
      setUser({ ...user, ...data });
    }
  }

  return { update, isLoading, error };
}
