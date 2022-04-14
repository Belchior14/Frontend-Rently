import { createContext, useContext, useState } from "react";
import { client } from "client";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  //function to do the signup
  const signup = async (email, password, firstName, lastName, username) => {
    const response = await client.post("/auth/signup", {
      email,
      password,
      firstName,
      lastName,
      username,
    });
  };

  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    user,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
