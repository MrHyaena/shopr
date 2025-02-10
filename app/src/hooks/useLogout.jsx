import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const { setLogin } = useAuthContext();

  function logout() {
    localStorage.removeItem("user");
    setLogin(null);
  }

  return { logout };
}
