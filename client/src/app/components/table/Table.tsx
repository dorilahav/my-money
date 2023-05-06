import {
  Box,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TablePagination as MuiTablePagination,
  TableRow as MuiTableRow,
  Paper,
  SxProps,
  Theme
} from '@mui/material';
import {ChangeEvent, MouseEvent, ReactNode, useState} from 'react';
import {BaseViewModel} from '../../view-models';
import styles from './styles';
import TableHead, {HeadCell, Order} from './table-head';
import TableToolbar from './table-toolbar';
import {getComparator} from './utils';

interface TableProps<T extends BaseViewModel> {
  items: T[];
  headCells: HeadCell<T>[];
  title?: string;
  defaultSort: keyof T;
  rowDescriptor: {
    rowTitle: (item: T) => string | number;
    columns: ((item: T) => string | number | ReactNode)[];
    prefixStyle?: (item: T) => SxProps<Theme>;
  };
  pagerSettings?: {
    defaultItemsPerPageAmount: number;
    itemsPerPageOptions: [number, number, number];
  };
}

const Table = <T extends BaseViewModel>({items, headCells, title, defaultSort, rowDescriptor, pagerSettings}: TableProps<T>) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof T>(defaultSort);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pagerSettings?.defaultItemsPerPageAmount ?? 10);

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.paper}>
        <TableToolbar title={title} />
        <MuiTableContainer>
          <MuiTable sx={styles.table} aria-labelledby="tableTitle">
            <TableHead headCells={headCells} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={items.length} />
            <MuiTableBody>
              {
                // @ts-ignore
                items
                  .sort(getComparator(order, orderBy))
                  .slice()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(item => {
                    const labelId = `table-checkbox-${item.id}`;

                    return (
                      <MuiTableRow component={Paper} tabIndex={-1} key={item.id} sx={styles.row}>
                        <MuiTableCell padding="checkbox" sx={{...styles.cell, ...(rowDescriptor.prefixStyle?.(item) ?? {})}}></MuiTableCell>
                        <MuiTableCell component="th" id={labelId} scope="row" padding="none" sx={styles.cell}>
                          {rowDescriptor.rowTitle(item)}
                        </MuiTableCell>
                        {rowDescriptor.columns.map(x => (
                          <MuiTableCell key={item.id} sx={styles.cell}>
                            {x(item)}
                          </MuiTableCell>
                        ))}
                      </MuiTableRow>
                    );
                  })
              }
              {emptyRows > 0 && (
                <MuiTableRow>
                  <MuiTableCell colSpan={6} />
                </MuiTableRow>
              )}
            </MuiTableBody>
          </MuiTable>
        </MuiTableContainer>
        {pagerSettings && (
          <MuiTablePagination
            sx={styles.pagination}
            labelRowsPerPage="מספר שורות בעמוד"
            labelDisplayedRows={({from, to, count, page}) => `עמוד ${page + 1}, ${from}-${to}`}
            rowsPerPageOptions={pagerSettings.itemsPerPageOptions}
            count={items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
};

export default Table;
