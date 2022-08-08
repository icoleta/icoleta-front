import React, { createContext, useState, useContext } from "react";
import authApi from "../services/api/auth";
import { api } from "../services/api/request";

const AuthContext = createContext({});

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState({});

  async function Login(email, password) {
    try {
      const res = await authApi.login({
        email,
        password,
      });

      const { token } = res.data.data;
      const user = {
        email,
        token,
      };
      setUser(user);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      // localStorage.setItem('@App:user', JSON.stringify(res.data.user))
      // localStorage.setItem('@App:token', res.data.token)

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
    <AuthContext.Provider value={{ signed: true, user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
