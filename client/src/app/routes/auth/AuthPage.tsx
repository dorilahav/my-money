import {useState} from 'react';
import {LoginPage} from './LoginPage';
import {VerifyLoginPage} from './VerifyLoginPage';

interface AuthPageProps {
  onLogin: (email: string) => any;
  onVerifyLogin: (email: string, code: string) => any;
}

export const AuthPage = ({onLogin, onVerifyLogin}: AuthPageProps) => {
  const [authEmail, setAuthEmail] = useState<string>();

  const login = async (email: string) => {
    await onLogin(email);
    setAuthEmail(email);
  };

  const verifyLogin = async (code: string) => {
    await onVerifyLogin(authEmail!, code);
  };

  return !!authEmail ? <VerifyLoginPage onVerifyLoginSubmit={verifyLogin} /> : <LoginPage onLoginSubmit={login} />;
};
