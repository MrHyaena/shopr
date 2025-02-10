import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(null);

  console.log("AuthContext state: ", login);

  return (
    <AuthContext.Provider value={{ login: login, setLogin: setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
