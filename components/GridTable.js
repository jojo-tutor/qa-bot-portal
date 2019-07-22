import React, {
  useState, useEffect, memo, useMemo,
} from 'react';
import pick from 'lodash/pick';
import cn from 'clsx';
import ReactTable from 'react-table';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    // fontSize: theme.typography.htmlFontSize,
    height: '500px',
    borderRadius: 4,
    boxShadow: theme.shadows[1],

    '& .rt-th.rt-resizable-header': {
      margin: theme.spacing(1),
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'left',
    },

    '& .rt-td': {
      margin: theme.spacing(0.5),
    },
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
      'defaultPageSize',
    ], [props]),
  );
  const fetchData = (state) => {
    if (!initialLoad) {
      const options = pick(state, [
        'pageSize', 'page', 'sorted', 'filtered',
      ]);
      console.log('@table options', options);
      onFetchData({
        limit: state.pageSize,
        skip: state.pageSize * state.page,
        sort: state.sorted,
      });
    }
  };

  return (
    <div>
      <ReactTable
        {...tableProps}
        minRows={0}
        onFetchData={fetchData}
        className={cn('-striped -highlight', classes.root)}
      />
      <br />
      <Tips />
    </div>
  );
};

GridTable.defaultProps = {
  manual: true,
  defaultPageSize: 20,
};

const Tips = () => (
  <div style={{ textAlign: 'center' }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);

export default memo(GridTable);
