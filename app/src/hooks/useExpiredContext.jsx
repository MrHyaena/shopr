import { useContext, useEffect } from "react";
import { ExpiredContext } from "../context/expiredContext";

export function useExpiredContext() {
  const context = useContext(ExpiredContext);

  if (!context) {
    throw Error("useExpiredContext is outside scope");
  }

  return context;
}
