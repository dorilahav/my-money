import {CircularProgress, Typography} from '@mui/material';
import Table, {HeadCell} from '../../components/table';
import {TransactionCategoryResource, TransactionType, TransactionViewModel} from '../../view-models';
import {useAllTransactions, useDeleteTransactionById} from '../../api/transactions';
import {PlusButton} from '../../components';
import {useToggle} from '../../hooks';
import {useAllAccounts, useCreateTransaction} from '../../api';
import {CreateTransactionDialog} from './create-transaction-dialog';

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
    id: 'category',
    disablePadding: false,
    label: 'מטרת הוצאה'
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
  const {data: transactions, isLoading: isLoadingTransactions} = useAllTransactions();
  const {mutateAsync: deleteTransaction} = useDeleteTransactionById();
  const {isLoading: isLoadingAccounts, error: errorInAccounts, data: accounts} = useAllAccounts();
  const [isCreateTransactionDialogOpen, openCreateTransactionDialog, closeCreateTransactionDialog] = useToggle();
  const {mutateAsync: createTransaction} = useCreateTransaction();

  if (errorInAccounts) {
    return <Typography>התרחשה תקלה בטעינת החשבונות</Typography>;
  }

  if (isLoadingTransactions) {
    return (
      <CircularProgress size={100} sx={{opacity: 0.2}}/>
    );
  }

  return (
    <>
      {
        !transactions?.length
          ? <Typography>לא קיימות העברות</Typography>
          :
          <Table
            items={transactions as TransactionViewModel[]}
            headCells={headCells}
            defaultSort='dateOfTransaction'
            rowDescriptor={{
              rowTitle: x => x.otherParty,
              columns: [
                x => x.dateOfTransaction.toLocaleDateString(),
                x => x.sum,
                x => TransactionCategoryResource[x.category],
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
            deleteAction={deleteTransaction}
          />
      }
      <PlusButton
        disabled={isLoadingAccounts}
        onClick={openCreateTransactionDialog}
        tooltip={!accounts?.length ? 'אין חשובונות שמורים, צרו חשבון על מנת להוסיף העברה!' : ''}
      />
      <CreateTransactionDialog isOpen={isCreateTransactionDialogOpen} accounts={accounts!}
                               onClose={closeCreateTransactionDialog} onCreate={createTransaction} />
    </>
  );
};