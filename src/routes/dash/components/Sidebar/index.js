// @flow
import React from 'react';
import { component } from 'rrsx';
import { Menu } from 'antd';
import { SidebarContainer } from './styledComponents';
import Logo from './Logo';
import { getMenuItem } from './helpers';
import MenuItem from './MenuItem';

type Props = { open: Boolean, menu: Array<any>, logoConfig: Object };


const Sidebar = ({
  open, menu, logoConfig,
}: Props) => (
  <SidebarContainer open={open}>
    <Logo logo={logoConfig} open={open} />
    <Menu style={{ width: 'auto' }} theme="dark" inlineCollapsed={!open} mode="vertical">
      { menu.map((menuItem) => (!open ? getMenuItem(menuItem)
        : <MenuItem menu={menuItem} open={open} />))}
    </Menu>
  </SidebarContainer>
);

export default component<Props>(Sidebar);
