import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface IGlobalContextType {
  isLoggedIn: boolean;
  user: any;
  loading: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: any) => void;
}

const GlobalContext = createContext(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};


interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setUser(null);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        loading,
        setIsLoggedIn,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

