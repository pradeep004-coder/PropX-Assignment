import { useState, createContext } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({name: "", email: ""});

  return <userContext.Provider value={{ userData, setUserData }}>
    {children}
  </userContext.Provider>
}

export { userContext, UserProvider };