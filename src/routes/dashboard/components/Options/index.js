//@flow
import React from 'react';
import { component } from 'rrsx';
import { Tooltip, Icon, Col, Badge, Dropdown } from 'antd';
import { MenuItem } from '../Header/styledComponents';
import Searcher from '../Searcher';
import DropDownContent from '../DropDownContent';
import { OptionsType } from '../../types';

type Props = { children: any, style: CSSStyleDeclaration, className: string, options: Array<OptionsType>, handleClick: Function };

const Options = ({ style, children, className, options, handleClick }: Props) => {
  return options.map((option) => {
    if (option.search) {
      return <Searcher item={option} />
    } return <Col key={option.text} md={2}>
    <Tooltip placement="bottom" title={option.notification ? '' : option.text}>
    <Dropdown overlay={<DropDownContent items={option.notifications ? option.notifications : []} />}>
      <MenuItem onClick={() => handleClick(option)}>
      <Badge count={option.notification} offset={[6,-8]}>
        <Icon type={option.icon} />
          </Badge>
      </MenuItem>
    </Dropdown>
   
    </Tooltip>
    </Col>
  })
};

export default component<Props>(Options);