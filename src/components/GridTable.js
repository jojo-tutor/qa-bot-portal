import React, {
  useState, useEffect, memo, useMemo,
} from 'react';
import pick from 'lodash/pick';
import cn from 'clsx';
import ReactTable from 'react-table';
import { makeStyles } from '@material-ui/core/styles';

// Import React Table
import 'react-table/react-table.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: '500px',
  },
}));

const GridTable = (props) => {
  const {
    pages, loading, initialLoad, onFetchData,
  } = props;
  const classes = useStyles();
  const tableProps = useMemo(
    () => pick(props, [
      'columns',
      'data',
      'loading',
      'manual',
      'pages',
    ], [props]),
  );
  const fetchData = (state) => {
    if (!initialLoad) {
      onFetchData(state);
    }
  };

  return (
    <div>
      <ReactTable
        {...tableProps}
        minRows={0}
        onFetchData={fetchData}
        defaultPageSize={50}
        className={cn('-striped -highlight', classes.root)}
      />
      <br />
      <Tips />
    </div>
  );
};

GridTable.defaultProps = {
  manual: true,
};

const Tips = () => (
  <div style={{ textAlign: 'center' }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);

export default memo(GridTable);
