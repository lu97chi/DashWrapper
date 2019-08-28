//@flow
import React from 'react';
import { component } from 'rrsx';
import { getOption } from './helper';
import { Row, Col } from 'antd';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const handler = (item) => {
    console.log(item)
}

const Options = ({ style, children, className, data }: Props) => {
  return <Row type="flex" justify="end" align="middle">
      { data.map((option) => <Col md={option.col ? option.col : 2}>
          {getOption(option, handler)}
      </Col>)}
  </Row>
};

export default component<Props>(Options);