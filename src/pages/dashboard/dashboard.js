import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import Main from 'layouts/Main';
import Paper from 'components/Paper';
import Chart from 'components/Chart';
import Deposits from 'components/Deposits';
import Orders from 'components/Orders';

const Dashboard = (props) => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(loadData());
  }, [true]);

  return (
    <Main title="Dashboard">
      <Grid container spacing={3}>
        {/* Today */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper height={250}>
            <Chart />
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper height={250}>
            <Deposits />
          </Paper>
        </Grid>

        {/* Orders */}
        <Grid item xs={12}>
          <Paper height={350}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Main>
  );
};

export default memo(Dashboard);
