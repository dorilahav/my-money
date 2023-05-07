import {HeadCell} from '../../components';
import Table from '../../components/table/Table';
import {TransactionType, TransactionViewModel} from '../../view-models';

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
  }
];

export const LastTransactionsTable = ({lastTransactions}: {lastTransactions: TransactionViewModel[]}) => (
  <Table
    items={lastTransactions}
    headCells={headCells}
    defaultSort="dateOfTransaction"
    rowDescriptor={{
      rowTitle: x => x.otherParty,
      columns: [x => x.dateOfTransaction.toLocaleDateString(), x => x.sum],
      prefixStyle: item => ({
        borderRadius: '5%',
        width: 20,
        opacity: 0.4,
        backgroundColor: item.type === TransactionType.Expense ? '#BC0000' : '#72BE00'
      })
    }}
  />
);
