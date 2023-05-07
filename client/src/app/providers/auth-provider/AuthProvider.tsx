import {LinearProgress} from '@mui/material';
import {createContext, useContext, useEffect, useState} from 'react';
import auth, {User} from './auth';

interface AuthProviderProps extends PropsWithChildren {}

interface AuthContextValue {
  isLoggedIn: boolean;
  user?: User;
  login: (email: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();

  const isLoggedIn = !!user;

  const login = async (email: string) => {
    await auth.loginWithOtp(email);
  };

  useEffect(() => {
    auth
      .getLoggedInUser()
      .then(setUser)
      .finally(() => setIsLoading(false));

    return auth.subscribeToUserChanges(setUser);
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return <AuthContext.Provider value={{isLoggedIn, login, user}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('App should be wrapped with AuthProvider');
  }

  return auth;
};
