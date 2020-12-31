import {Loading, Row} from '@components';
import React, {FC} from 'react';
import {makeStyles} from '@hooks';

const useStyles = makeStyles({
  loadingRow: {
    marginTop: 20
  }
})

export const FullScreenLoading: FC = () => {
  const classes = useStyles();

  return (
    <Row className={classes.loadingRow} justifyContent="center" fullWidth>
      <Loading color="primary" size={100}/>
    </Row>
  );
};