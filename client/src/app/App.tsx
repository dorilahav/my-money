import React, {FC, lazy, Suspense} from 'react';
import {FullScreenLoading} from '@components';
import {useAuth} from '@hooks';

const AuthenticatedApp = lazy(() => import('./authenticated'));
const UnauthenticatedApp = lazy(() => import('./unauthenticated'));

export const App: FC = () => {
  const {user} = useAuth();

  return (
    <Suspense fallback={<FullScreenLoading/>}>
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </Suspense>
  );
};