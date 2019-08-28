//@flow
import React from 'react';
import { component } from 'rrsx';
import { Icon, Menu } from 'antd';
import { DropdownType } from '../../types';

type Props = { children: any, style: CSSStyleDeclaration, className: string, items: Array<DropdownType>, handleMenuClick: Function };

const joinMenu = (items, handleMenuClick) => {
  const elements = [];
  items.forEach((item) => {
    elements.push(<Menu.Item key={item.name} onClick={() => handleMenuClick(item)}>
      {item.name}
      <Icon type={item.icon}></Icon>
    </Menu.Item>)
    if (item.divider) {
      elements.push(<Menu.Divider key={`divider${item.name}`} />)
    }
  });
  return elements;
}

const HoverContent = ({ style, children, className, items, handleMenuClick }: Props) => {
  return (
    <Menu>
      {/* {joinMenu(items, handleMenuClick)} */}
      <Menu.Item>fds</Menu.Item>
    </Menu>
  );
};

export default component<Props>(HoverContent);