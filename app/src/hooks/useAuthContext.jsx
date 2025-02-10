import { AuthContext } from "../context/authContext";
import { useContext, useEffect } from "react";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext is outside scope");
  }

  return context;
}
