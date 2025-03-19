import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const apiURL = import.meta.env.VITE_API_URL;

export function useUpdate() {
  const [isLoading, setIsLoading] = useState(null);

  const { user, setUser } = useAuthContext();

  async function update(data, setLoader, setError, setMessage) {
    console.log("useUpdate");

    setIsLoading(true);
    setError(null);
    setMessage(null);

    const response = await fetch(apiURL + "/api/user/update", {
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
      console.log(json);
      setIsLoading(false);
      setError(json);
    }

    if (response.ok) {
      // save the user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      console.log(json);
      setMessage("Váš účet byl aktualizován.");
      setIsLoading(false);
      setUser({ ...user, ...data });
    }
  }

  return { update, isLoading };
}
