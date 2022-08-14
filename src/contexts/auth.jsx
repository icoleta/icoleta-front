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
      localStorage.getItem("@App:email") &&
      localStorage.getItem("@App:isCompany")
    ) {
      setUser({
        email: localStorage.getItem("@App:email"),
        token: localStorage.getItem("@App:token"),
        isCompany: localStorage.getItem("@App:isCompany"),
      });

      api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
        "@App:token"
      )}`;
    }
  }, []);

  async function Login(email, password) {
    return authApi
      .login({
        email,
        password,
      })
      .then((res) => {
        const { token, isCompany } = res.data.data;
        const user = {
          email,
          token,
          isCompany,
        };
        setUser(user);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        localStorage.setItem("@App:email", email);
        localStorage.setItem("@App:token", token);
        localStorage.setItem("@App:isCompany", isCompany);
        return true;
      })
      .catch(function () {
        return false;
      });
  }

  async function Logout() {
    setUser(null);
    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:email");
    localStorage.removeItem("@App:isCompany");
    await authApi.logout();
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
