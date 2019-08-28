//@flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Col, Icon } from 'antd';
import { MenuItem } from '../Header/styledComponents';
import { InputA } from './styledComponents';
import { ItemType } from '../../types';

type Props = { children: any, style: CSSStyleDeclaration, className: string, item: ItemType};

const Searcher = ({ style, children, className, item }: Props) => {
  const [searchOpen, setSearchOpen ] = useState(false);
  return <Col style={{display: 'flex'}} key={item.text} md={2}>
  
  <InputA open={searchOpen} />
  <MenuItem onClick={() => setSearchOpen(!searchOpen)}>
    <Icon type={item.icon} />
  </MenuItem>
  </Col>
};

export default component<Props>(Searcher);