//@flow
import React from 'react';
import { component } from 'rrsx';
import { SidebarContainer } from './styledComponents';
import MenuItem from './MenuItem';
import Logo from './Logo';

type Props = { children: any, style: CSSStyleDeclaration, className: string, open: Boolean };

const Sidebar = ({ style, children, className, open, menu }: Props) => {
  return <SidebarContainer open={open}>
    <Logo />
    {menu.map((menuItem) => <MenuItem open={open} menu={menuItem} />)}
  </SidebarContainer>;
};

export default component<Props>(Sidebar);