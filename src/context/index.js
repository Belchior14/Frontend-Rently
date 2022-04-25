import { createContext, useState } from "react";
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
    try{
      const response = await client.post("/auth/signup", {
        email,
        password,
        firstName,
        lastName,
        username,
      });
      navigate("/login");
    } catch(error) {
      console.log(error)
    }

  };
  //function to do the login
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
    navigate("/");
  };
  //function to do the logout
  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/");
  };

  const getUser = async () => {
    try{
      const response = await client.get(`/profile/${user._id}`)
      setUser(response.data)

    }
    catch (error) {
      console.log(error)
    }
  } 

  const value = {
    user,
    signup,
    login,
    logout,
    getUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
