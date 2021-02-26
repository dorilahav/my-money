import React, {createContext, FC, useEffect, useState} from 'react';
import {AuthService} from '@services';
import {FullScreenLoading} from '@components';
import {UserViewModel} from '../../../../common/src';

export interface AuthContextValue {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: UserViewModel | null;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider: FC = ({children}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<AuthContextValue['user']>(null);

  const authService = AuthService();

  useEffect(() => {
    authService.loadUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <FullScreenLoading />;
  }

  const login = (username: string, password: string) =>
    authService.login(username, password)
      .then(setUser);

  const logout = () =>
    authService.logout()
      .then(() => setUser(null));

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};