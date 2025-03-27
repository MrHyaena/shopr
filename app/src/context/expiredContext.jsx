import { createContext, useEffect, useState } from "react";

export const ExpiredContext = createContext();

export const ExpiredContextProvider = ({ children }) => {
  const [expired, setExpired] = useState(null);

  return (
    <ExpiredContext.Provider
      value={{ expired: expired, setExpired: setExpired }}
    >
      {children}
    </ExpiredContext.Provider>
  );
};
