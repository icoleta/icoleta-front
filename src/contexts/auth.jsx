import React, { createContext, useState, useContext } from "react";

//import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState({ name: "peter" });

  function Login(userData) {
    setUser(userData);
    //api.defaults.headers.Authorization = `Bearer ${userData.token}`;
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
