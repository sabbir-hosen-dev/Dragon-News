/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

 const AuthContext = createContext();


const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sabbir",
    email: "tssabbirhosen@gmail.com",
  });

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {AuthContexProvider,AuthContext}