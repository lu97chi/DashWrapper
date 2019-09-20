// @flow
import React from 'react';
import { component } from 'rrsx';
import { Row, Col } from 'antd';
import { getOption } from './helper';

type Props = { data: Array<any>};

const handler = (item) => {
  console.log(item);
};

const Options = ({
  data,
}: Props) => (
  <Row type="flex" justify="end" align="middle">
    { data.map((option) => (
      <Col md={option.col ? option.col : 2}>
        {getOption(option, handler)}
      </Col>
    ))}
  </Row>
);

export default component<Props>(Options);
