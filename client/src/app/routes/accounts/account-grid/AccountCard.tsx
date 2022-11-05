import {Box} from '@mui/material';
import {AccountViewModel} from '@my-money/common';
import {useMemo} from 'react';
import {useDeleteAccountById} from '../../../api';

import {AmountTypography, Caption, EntityCard, EntityComponentProps, Title} from '../../../components';

export const AccountCard = ({entity}: EntityComponentProps<AccountViewModel>) => {
  const {id, name, balance, updatedAt} = entity;
  const {isLoading: isDeletingAccount, mutateAsync: deleteAccount} = useDeleteAccountById(id);

  const formattedUpdatedAt = useMemo(() => updatedAt.toLocaleString('he-il', {dateStyle: 'medium', timeStyle: 'short'}), [updatedAt]);

  return (
    <EntityCard disableActions={isDeletingAccount} onDeleteClick={deleteAccount}>
      <Box display="flex" justifyContent="space-between">
        <Title>{name}</Title>
        <AmountTypography variant="text" amount={balance} />
      </Box>
      <Caption>עודכן לאחרונה: {formattedUpdatedAt}</Caption>
    </EntityCard>
  );
};
