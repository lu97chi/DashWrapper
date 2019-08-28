//@flow
import React from 'react';
import { component } from 'rrsx';
import { IconA, Card } from './styledComponents';
import { Row, Col } from 'antd';
import Options from './Options';

type Props = { children: any, style: CSSStyleDeclaration, className: string, setOpenSidebar: Function, open: Boolean, user: string };

const Header = ({ style, children, className, setOpenSidebar, open, userName, options }: Props) => {
  return <Card>
  <Row type="flex" align="middle" style={{height: '100%'}}>
  <Col sm={6}>
    <IconA type="double-left" open={open} onClick={setOpenSidebar} />
  </Col>
  <Col sm={18}>
    <Options data={options} />
  </Col>
</Row>
</Card>
};

export default component<Props>(Header);