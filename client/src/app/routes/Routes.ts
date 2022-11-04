import {useRoutes} from 'react-router-dom';

import {accounts} from './accounts';
import {cards} from './cards';

const appRoutes = [accounts, cards];

export const Routes = () => useRoutes(appRoutes);
