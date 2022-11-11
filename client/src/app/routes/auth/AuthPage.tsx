import {useState} from 'react';
import {CheckEmailPage} from './CheckEmailPage';
import {LoginPage} from './LoginPage';

interface AuthPageProps {
  onLogin: (email: string) => any;
}

export const AuthPage = ({onLogin}: AuthPageProps) => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const login = async (email: string) => {
    await onLogin(email);
    setIsEmailSent(true);
  };

  return isEmailSent ? <CheckEmailPage /> : <LoginPage onLoginSubmit={login} />;
};
