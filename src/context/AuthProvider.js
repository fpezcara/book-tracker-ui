import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => Cookies.get("userId"));

  const login = (id) => {
    Cookies.set("userId", id);
    setUserId(id);
  };

  const logout = () => {
    Cookies.remove("userId");
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
