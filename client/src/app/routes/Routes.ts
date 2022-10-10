import {useRoutes} from 'react-router-dom';

import {accounts} from './accounts';

const appRoutes = [accounts];

export const Routes = () => useRoutes(appRoutes);
