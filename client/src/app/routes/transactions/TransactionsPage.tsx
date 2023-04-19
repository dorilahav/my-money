import Table, {HeadCell} from '../../components/table';
import {Id, TransactionType, TransactionViewModel} from '../../view-models';
import {useAllTransactions} from '../../api/transactions';
import {Typography} from '@mui/material';
import {PlusButton} from '../../components';
import {useToggle} from '../../hooks';
import {useState} from 'react';
import {useCreateTransaction, useEditTransaction} from '../../api';

const headCells: HeadCell<TransactionViewModel>[] = [
  {
    id: 'otherParty',
    disablePadding: true,
    label: 'שם'
  },
  {
    id: 'dateOfTransaction',
    disablePadding: false,
    label: 'תאריך'
  },
  {
    id: 'sum',
    disablePadding: false,
    label: 'סכום'
  },
  {
    id: 'isBusinessRelated',
    disablePadding: false,
    label: 'האם הוצאה עסקית'
  },
  {
    id: 'account',
    disablePadding: false,
    label: 'חשבון'
  },
  {
    id: 'details',
    disablePadding: false,
    label: 'פרטים'
  }
];

export const TransactionsPage = () => {
  const {data, isLoading} = useAllTransactions();
  const [isCreateTransactionDialogOpen, openCreateTransactionDialog, closeCreateTransactionDialog] = useToggle();
  const [editedTransactionId, setEditedTransactionId] = useState<Id>();
  const {mutateAsync: createTransaction} = useCreateTransaction();
  const {mutateAsync: editTransaction} = useEditTransaction(editedTransactionId);

  return (
    <>
      {
        isLoading
          ? <Typography>spinner</Typography>
          : <>
            <Table
              items={data as TransactionViewModel[]}
              headCells={headCells}
              defaultSort='dateOfTransaction'
              rowDescriptor={{
                rowTitle: x => x.otherParty,
                columns: [
                  x => x.dateOfTransaction.toLocaleDateString(),
                  x => x.sum,
                  x => x.isBusinessRelated ? 'כן' : 'לא',
                  x => x.account.name,
                  x => x.details ?? ''
                ],
                prefixStyle: item => ({
                  borderRadius: '5%',
                  width: 20,
                  opacity: 0.4,
                  backgroundColor: item.type === TransactionType.Expense ? '#BC0000' : '#72BE00'
                })
              }}
              pagerSettings={{
                defaultItemsPerPageAmount: 10,
                itemsPerPageOptions: [10, 20, 30]
              }}
            />
            <PlusButton />
          </>
      }
    </>
  );
};