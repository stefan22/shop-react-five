import React, {createContext, useState } from "react";

//default user context, setter 
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  let value = { currentUser, setCurrentUser }

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
  
};
