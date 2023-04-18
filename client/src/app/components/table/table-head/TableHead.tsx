import React from 'react';
import {visuallyHidden} from '@mui/utils';
import {Box, TableCell as MuiTableCell, TableHead as MuiTableHead, TableRow as MuiTableRow, TableSortLabel as MuiTableSortLabel} from '@mui/material';
import {BaseViewModel} from '../../../view-models';
import {Order} from '../utils';

export interface HeadCell<T extends BaseViewModel> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
}

interface EnhancedTableProps<T extends BaseViewModel> {
  headCells: HeadCell<T>[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  order: Order;
  orderBy: keyof T;
  rowCount: number;
}

const TableHead = <T extends BaseViewModel>({headCells, order, orderBy, onRequestSort}: EnhancedTableProps<T>) => {
  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <MuiTableRow>
        <MuiTableCell sx={{border: 'none'}}></MuiTableCell>
        {
          headCells.map((headCell) => (
            <MuiTableCell
              variant='head'
              key={headCell.id as string}
              align='left'
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}>
              <MuiTableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}>
                {headCell.label}
                {
                  orderBy === headCell.id ?
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box> : null
                }
              </MuiTableSortLabel>
            </MuiTableCell>
          ))}
      </MuiTableRow>
    </MuiTableHead>
  );
};

export default TableHead;