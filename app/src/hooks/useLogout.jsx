import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const { setUser } = useAuthContext();

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return { logout };
}
