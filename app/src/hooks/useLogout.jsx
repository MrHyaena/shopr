import { useAuthContext } from "./useAuthContext";
import { useSubscriptionContext } from "./useSubscriptionContext";

export function useLogout() {
  const { setUser } = useAuthContext();
  const { setSubscriptions } = useSubscriptionContext();

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    setSubscriptions([]);
  }

  return { logout };
}
