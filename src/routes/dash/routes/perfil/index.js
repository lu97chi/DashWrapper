//@flow
import React from 'react';
import { component } from 'rrsx';
import { Row, Col } from 'antd';
import Information from './containers/Information';
import Sections from './containers/Sections';
import { Theme } from '../../../playground/contants';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Profile = ({ style, children, className }: Props) => {
  const { boxshadowBase } = Theme;
  return <Row style={{background: '#ffffff', boxShadow: boxshadowBase}}>
    <Col sm={10}>
      <Sections />
    </Col>
    <Col sm={14}>
    <Information />
      
    </Col>
  </Row>

};

export default component<Props>(Profile);