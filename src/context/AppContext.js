
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, contacts, setContacts }}>
      {children}
    </AppContext.Provider>
  );
};
