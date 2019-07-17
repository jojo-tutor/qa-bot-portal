import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from 'layouts/Main';
import Paper from 'components/Paper';
import Chart from 'components/Chart';
import Deposits from 'components/Deposits';
import Orders from 'components/Orders';

const Dashboard = (props) => {
  console.log('@props', props);
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

export default Dashboard;
