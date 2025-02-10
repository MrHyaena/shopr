import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  console.log("AuthContext state: ", user);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
