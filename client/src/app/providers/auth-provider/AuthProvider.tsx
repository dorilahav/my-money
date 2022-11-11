import {createContext, useContext, useEffect, useState} from 'react';
import auth, {User} from './auth';

interface AuthProviderProps extends PropsWithChildren {}

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (email: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User>();

  const isLoggedIn = !!user;

  const login = async (email: string) => {
    await auth.loginWithOtp(email);
  };

  useEffect(() => {
    auth.getLoggedInUser().then(setUser);

    return auth.subscribeToUserChanges(setUser);
  }, []);

  return <AuthContext.Provider value={{isLoggedIn, login}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('App should be wrapped with AuthProvider');
  }

  return auth;
};
