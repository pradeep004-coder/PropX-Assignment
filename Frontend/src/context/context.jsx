import { useState, createContext } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return <userContext.Provider value={{ userData, setUserData }}>
    {children}
  </userContext.Provider>
}

export { userContext, UserProvider };