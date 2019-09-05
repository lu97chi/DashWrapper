// @flow
import React from 'react';
import { component } from 'rrsx';
import { Row, Col } from 'antd';
import { IconA, Card } from './styledComponents';
import Options from './Options';

type Props = {
   setOpenSidebar: Function,
   options: any,
   open: Boolean,
  };

const Header = ({ setOpenSidebar, open, options }: Props) => (
  <Card>
    <Row type="flex" align="middle" style={{ height: '100%' }}>
      <Col sm={6}>
        <IconA type="double-left" open={open} onClick={setOpenSidebar} />
      </Col>
      <Col sm={18}>
        <Options data={options} />
      </Col>
    </Row>
  </Card>
);

export default component<Props>(Header);
