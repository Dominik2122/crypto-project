import React, { useState, createContext, ReactNode, useMemo, useContext, useEffect } from 'react';
import User from '@/modules/authentication/application/models/User';
import userEmail from '@/modules/authentication/application/models/UserEmail';
import httpGetUserData from '@/modules/authentication/infrastructure/http/getUserData';

export interface AuthContext {
  user: User | undefined;
  setUser: (user?: User) => void;
}

export const AuthContextImpl = createContext<{
  user: User | undefined;
  setUser: (user?: User) => void;
}>({
  user: undefined,
  setUser: () => undefined,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
  const providerValue = useMemo(() => ({ user, setUser }), [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await httpGetUserData();
      if (data) {
        setUser(data);
      } else {
        setUser(undefined);
      }
      return data;
    };

    fetchUserData();
  }, []);

  return <AuthContextImpl.Provider value={providerValue}>{children}</AuthContextImpl.Provider>;
};

export const useAuth: () => AuthContext = () => {
  const useAuthContext = useContext<AuthContext>(AuthContextImpl);
  return useAuthContext;
};

export default AuthContext;
