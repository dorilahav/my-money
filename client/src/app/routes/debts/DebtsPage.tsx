import {CircularProgress, Typography} from '@mui/material';
import Table, {HeadCell} from '../../components/table';
import {PlusButton} from '../../components';
import {useToggle} from '../../hooks';
import {CreateDebtDialog} from './create-debt-dialog';
import {DebtViewModel} from '../../view-models/debt-view-model';
import {useAllDebts, useCreateDebt, useDeleteDebtById} from '../../api/debts';
import {DebtType} from '../../api/debts/supabase-debt';

const headCells: HeadCell<DebtViewModel>[] = [
  {
    id: 'creationDate',
    disablePadding: true,
    label: 'תאריך יצירה'
  },
  {
    id: 'sum',
    disablePadding: false,
    label: 'סכום'
  },
  {
    id: 'otherParty',
    disablePadding: false,
    label: 'גורם מקבל / שולח'
  },
  {
    id: 'details',
    disablePadding: false,
    label: 'פרטים'
  }
];

export const DebtsPage = () => {
  const {data: debts, isLoading: isLoadingDebts} = useAllDebts();
  const {mutateAsync: deleteDebt} = useDeleteDebtById();
  const [isCreateDebtDialogOpen, openCreateDebtDialog, closeCreateDebtDialog] = useToggle();
  const {mutateAsync: createDebt} = useCreateDebt();


  if (isLoadingDebts) {
    return (
      <CircularProgress size={100} sx={{opacity: 0.2}}/>
    );
  }

  return (
    <>
      {
        !debts?.length
          ? <Typography>לא קיימים חובות</Typography>
          :
          <Table
            items={debts as DebtViewModel[]}
            headCells={headCells}
            defaultSort='creationDate'
            rowDescriptor={{
              rowTitle: x => x.otherParty,
              columns: [
                x => x.creationDate.toLocaleDateString(),
                x => x.sum,
                x => x.otherParty,
                x => x.details
              ],
              prefixStyle: item => ({
                borderRadius: '5%',
                width: 10,
                opacity: 0.4,
                backgroundColor: item.type === DebtType.ToMe ? '#107ab0' : '#BC0000'
              })
            }}
            pagerSettings={{
              defaultItemsPerPageAmount: 10,
              itemsPerPageOptions: [10, 20, 30]
            }}
            deleteAction={deleteDebt}
          />
      }
      <PlusButton onClick={openCreateDebtDialog} />
      <CreateDebtDialog isOpen={isCreateDebtDialogOpen} onClose={closeCreateDebtDialog} onCreate={createDebt} />
    </>
  );
};