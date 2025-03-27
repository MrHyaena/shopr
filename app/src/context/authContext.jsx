import { createContext, useEffect, useState } from "react";
const apiURL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    async function auth() {
      if (user) {
        const authCheck = await fetch(apiURL + "/api/user/authorization", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            UserID: user.id,
          },
        });

        if (authCheck.ok) {
          setUser({ ...user });
        }

        if (!authCheck.ok) {
          localStorage.removeItem("user");
        }
      }
    }

    auth();
  }, []);

  //  console.log("AuthContext state: ", user);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
