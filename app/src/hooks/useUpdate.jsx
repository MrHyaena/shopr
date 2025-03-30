import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { tokenExpired } from "../functions/tokenExpired";
import { useExpiredContext } from "./useExpiredContext";
import { createSearchParams, useNavigate } from "react-router-dom";
const apiURL = import.meta.env.VITE_API_URL;

export function useUpdate() {
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const { user, setUser } = useAuthContext();
  const { setExpired } = useExpiredContext();

  async function update(data, setError, setMessage) {
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
      setIsLoading(false);
      setError(json);
      tokenExpired(json, setUser, setExpired);
    }

    if (response.ok) {
      // save the user to local storage

      localStorage.setItem("user", JSON.stringify({ ...user, ...data }));

      // update the auth context
      setMessage("Vaše údaje jsou úspěšně změněné.");
      setIsLoading(false);
      setUser({ ...user, ...data });
      navigate({
        pathname: "/osobni-udaje",
        search: "?result=true",
      });
    }
  }

  return { update, isLoading };
}
