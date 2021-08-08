import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [session, setSession] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Get session
    const getSession = async () => {
      const session = await fetch('api/session').then((res) => res.json());
      if (session.name) setSession(session);
    };
    getSession();
  }, []);

  const value = {
    session,
    searchTerm,
    setSearchTerm,
    logIn: () => {},
    signUp: () => {},
    logOut: () => {
      setSession(null);
      router.replace('/');
    },
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
