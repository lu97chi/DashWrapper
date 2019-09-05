// @flow
import React from 'react';
import { component } from 'rrsx';
import { Menu } from 'antd';
import { SidebarContainer } from './styledComponents';
import Logo from './Logo';
import { getMenuItem } from './helpers';
import MenuItem from './MenuItem';

type Props = { open: Boolean, logo: string, menu: Array<any> };


const Sidebar = ({ open, menu, logo }: Props) => (
  <SidebarContainer open={open}>
    <Logo logo={logo} open={open} />
    <Menu theme="dark" inlineCollapsed={!open} mode="vertical">
      { menu.map((menuItem) => (!open ? getMenuItem(menuItem)
        : <MenuItem menu={menuItem} open={open} />))}
    </Menu>
  </SidebarContainer>
);

export default component<Props>(Sidebar);
