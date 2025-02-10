import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { setUser } = useAuthContext();

  async function signup(data) {
    setIsLoading(true);
    setError(null);

    console.log(JSON.stringify({ email: data.email, password: data.password }));

    const response = await fetch("http://localhost:4000/api/user/signup", {
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

      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      setUser(json);

      setIsLoading(false);
    }
  }

  return { signup, isLoading, error };
}
