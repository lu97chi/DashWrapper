//@flow
import React from 'react';
import { component } from 'rrsx';
import { SidebarContainer } from './styledComponents';
import Logo from './Logo';
import { Menu } from 'antd';
import { getMenuItem } from './helpers';
import MenuItem from './MenuItem';

type Props = { children: any, style: CSSStyleDeclaration, className: string, open: Boolean, logo: string };



const Sidebar = ({ style, children, className, open, menu, logo }: Props) => {
  return <SidebarContainer open={open}>
    <Logo logo={logo} open={open}/>
    <Menu theme="dark" inlineCollapsed={!open} mode="vertical">
      { menu.map((menuItem) => !open ? getMenuItem(menuItem) : <MenuItem menu={menuItem} open={open} />)}
    </Menu>
  </SidebarContainer>;
};

export default component<Props>(Sidebar);