// @flow
import React from 'react';
import { component } from 'rrsx';
import { Button } from 'antd';
import GCrud from '../GCrud';
import { data } from './constants';

type Props = { };

const GCrudContainer = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.address - b.address,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
          <Button style={{ marginRight: '12px' }}>Eliminar</Button>
          <Button>Eliminar</Button>
        </>
      ),
    },
  ];

  return <GCrud columns={columns} data={data} />;
};

export default component<Props>(GCrudContainer);
