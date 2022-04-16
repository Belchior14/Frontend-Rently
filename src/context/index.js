import { createContext,  useState } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
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
    /* navigate("/login"); */
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

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/login");
  };

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
