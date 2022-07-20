import React, { createContext, useState, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState({});

  async function Login(email, password) {
    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      const { email, token } = res.data.data;
      const user = {
        email,
        token
      };
      setUser(user);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      // localStorage.setItem('@App:user', JSON.stringify(response.data.user))
      // localStorage.setItem('@App:token', response.data.token)

      return true;
    } catch (error) {
      return false;
    }
  }

  function Logout() {
    setUser(null);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <AuthContext.Provider
      value={{ signed: !isEmpty(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
