import React, {FC, lazy, Suspense} from 'react';

import {useAuth} from '@hooks';
import {FullScreenLoading} from '@components';

const AuthenticatedApp = lazy(() => import('./authenticated'));
const UnauthenticatedApp = lazy(() => import('./unauthenticated'));

export const App: FC = () => {
  const {user} = useAuth();

  return (
    <Suspense fallback={<FullScreenLoading/>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};