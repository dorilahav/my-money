import {SxProps} from '@mui/material';

const container: SxProps = {
  width: 1
};

const paper: SxProps = {
  width: 1,
  mb: 2
};

const table: SxProps = {
  backgroundColor: 'unset',
  minWidth: 650,
  borderCollapse: 'separate',
  borderSpacing: '10px 10px',
};

const row: SxProps = {
  border: 'none',
  backgroundColor: 'unset',
  borderLeft: '10px solid'
};

const cell: SxProps = {
  textAlign: 'left',
  borderBottom: 0
};

const pagination: SxProps = {
  border: 'none'
};

const styles = {container, paper, table, row, cell, pagination};

export default styles;