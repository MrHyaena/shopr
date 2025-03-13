import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
const apiURL = import.meta.env.VITE_API_URL;

// FUNCTION FOR DELETING SUBSCRIPTIONS
export function deleteUserHandler() {
  const navigate = useNavigate();

  async function deleteUser(user, setUser, setLoader, setErrorDelete) {
    const response = await fetch(apiURL + "/api/user/delete/" + user.id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.clear();
      window.location.href = "https://shopr.cz";
    }

    if (!response.ok) {
      setErrorDelete("Bad");
    }
  }

  return { deleteUser };
}
