import { useEffect, useState, createContext, useContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [session, setSession] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO get session
  }, []);

  const value = {
    session,
    searchTerm,
    setSearchTerm,
    logIn: () => {},
    signUp: () => {},
    logOut: () => {},
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
