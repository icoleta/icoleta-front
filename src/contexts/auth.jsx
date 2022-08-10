import React, { createContext, useState, useContext, useEffect } from "react";
import authApi from "../services/api/auth";
import { api } from "../services/api/request";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (
      localStorage.getItem("@App:token") &&
      localStorage.getItem("@App:email")
    ) {
      setUser({
        email: localStorage.getItem("@App:email"),
        token: localStorage.getItem("@App:token"),
      });
    }
  }, []);

  function Login(email, password) {
    return authApi
      .login({
        email,
        password,
      })
      .then((res) => {
        const { token } = res.data.data;
        const user = {
          email,
          token,
        };
        setUser(user);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        localStorage.setItem("@App:email", email);
        localStorage.setItem("@App:token", token);
        return true;
      })
      .catch(function () {
        return false;
      });
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:email");
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
