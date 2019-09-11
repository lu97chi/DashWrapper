import React from 'react';
import { Button } from 'antd';

const actionMaker = (actions, caller, endPoint) => actions.map((action) => (
  <Button onClick={() => caller(action, endPoint)}>
    {action.label}
  </Button>
));


export const ColumnMaker = (standardColumns, caller, endPoint) => {
  const columns = [];
  standardColumns.forEach((column) => {
    const {
      title, selector, sort, type, actions = null,
    } = column;
    const row = {};
    if (type !== 'default') {
      row.render = () => actionMaker(actions, caller, endPoint);
    } else {
      row.title = title;
      row.dataIndex = selector;
    }
    if (sort) {
      row.sorter = (a, b) => a[selector] - b[selector];
    }
    columns.push(row);
  });
  return columns;
};
