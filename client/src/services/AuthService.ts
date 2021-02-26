import {UserViewModel} from '../../../common/src';

export const AuthService = () => {
  // TODO: implement this.

  const mockUser: UserViewModel = {
    id: '123456789',
    username: 'Dori_mon'
  };

  const login = (username: string, password: string): Promise<UserViewModel> =>
    new Promise(resolve => setTimeout(() => resolve(mockUser), 350));

  const logout = () => Promise.resolve();

  const loadUser = (): Promise<UserViewModel> => new Promise((resolve, reject) => setTimeout(() => reject(mockUser), 250));

  return {
    login,
    logout,
    loadUser
  };
};