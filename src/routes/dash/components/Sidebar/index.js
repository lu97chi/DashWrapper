//@flow
import React from 'react';
import { component } from 'rrsx';
import { SidebarContainer } from './styledComponents';
import Logo from './Logo';
import { Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

type Props = { children: any, style: CSSStyleDeclaration, className: string, open: Boolean, logo: string };

const getMenuItem = (item) => {
  const { nested, name } = item;
  if (nested) return nested.map((item) => <SubMenu key={name} title={<span>
    <Icon type="mail" />
    <span>Navigation One</span>
    </span>
  }>
    {mapItems(item)}
  </SubMenu>)
}

const mapItems = (item) => {
  const { nested, name } = item;
  if (nested) {
    return <SubMenu key={name} title={
      <span>Navigation One</span>
    }>
      {item.nested.map((element) => mapItems(element))}
    </SubMenu>
  }
  return <Menu.Item>
      <p>anidado</p>
    </Menu.Item>
}

const Sidebar = ({ style, children, className, open, menu, logo }: Props) => {
  return <SidebarContainer open={open}>
    <Logo logo={logo} open={open}/>
    <Menu theme="dark" inlineCollapsed={!open} mode="vertical">
      {menu.map((menuItem) => getMenuItem(menuItem))}
      {/* {menu.map((menuItem) => <MenuItemV2 open={open} menu={menuItem} />)} */}
    </Menu>
  </SidebarContainer>;
};

export default component<Props>(Sidebar);