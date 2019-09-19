import React from 'react';
import { Button } from 'antd';

const actionMaker = (actions, caller, endPoint, row) => actions.map((action) => {
  const actionObject = Object.assign(action, row);
  return (
    <Button onClick={() => caller(actionObject, endPoint)}>
      {action.label}
    </Button>
  );
});


export const ColumnMaker = (standardColumns, caller, endPoint) => {
  const columns = [];
  standardColumns.forEach((column) => {
    const {
      title, selector, sort, type, actions = null,
    } = column;
    const row = {};
    if (type !== 'default') {
      row.render = (rowItem) => actionMaker(actions, caller, endPoint, rowItem);
    }
    if (sort) {
      row.sorter = (a, b) => a[selector] - b[selector];
    }
    row.title = title;
    row.dataIndex = selector;
    columns.push(row);
  });
  return columns;
};
