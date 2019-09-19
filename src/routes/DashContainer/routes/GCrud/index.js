// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import {
  Input, Row, Col, Table,
} from 'antd';
import { GCrudWrapper } from './styledComponents';
import Header from './components/Header';
import { Caller } from './caller';
import { ColumnMaker } from './helpers';

const { Search } = Input;

type Props = { intialConfig: Object, };


const filterData = (data, filterProp, filterValue) => {
  if (!filterValue) return data;
  // console.log(data.filter((row) => row.age === Number(filterValue))); // how type?
  return data.filter((row) => row[filterProp] === Number(filterValue));
};

const GCrud = ({
  intialConfig, columns, data, headerButtons,
}: Props) => {
  const { domain, title, filterProp } = intialConfig;
  const [stateData, setStateData] = useState(data);
  return (
    <GCrudWrapper>
      <Header title={title} buttons={{ headerButtons, intialConfig }} />
      <Row type="flex" justify="end">
        <Col md={6}>
          <Search
            onSearch={(value) => setStateData(filterData(data, filterProp, value))}
            placeholder="Buscar..."
          />
        </Col>
      </Row>
      <Table columns={ColumnMaker(columns, Caller, domain)} dataSource={stateData} />
    </GCrudWrapper>
  );
};

export default component<Props>(GCrud);
