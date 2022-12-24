import {AccountViewModel} from '../../../view-models';

import {EntityGrid} from '../../../components';
import {AccountCard} from './AccountCard';

interface AccountGridProps {
  accounts: AccountViewModel[];
  onCreateClick: () => void;
}

export const AccountGrid = ({accounts, onCreateClick}: AccountGridProps) => (
  <EntityGrid entities={accounts} entityComponent={AccountCard} onCreateClick={onCreateClick} />
);
