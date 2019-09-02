//@flow
import React from 'react';
import { component } from 'rrsx';
import { SidebarContainer } from './styledComponents';
import MenuItem from './MenuItem';
import Logo from './Logo';

type Props = { children: any, style: CSSStyleDeclaration, className: string, open: Boolean, logo: string };

const Sidebar = ({ style, children, className, open, menu, logo }: Props) => {
  return <SidebarContainer open={open}>
    <Logo logo={logo} open={open}/>
    {menu.map((menuItem) => <MenuItem open={open} menu={menuItem} />)}
  </SidebarContainer>;
};

export default component<Props>(Sidebar);