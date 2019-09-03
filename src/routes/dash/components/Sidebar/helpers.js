import React from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Icon, Menu } from 'antd';
export const getMenuItem = (item) => {
    const { nested, name, icon } = item;
    if (nested) {
      return <SubMenu key={name} title={<span>
        <Icon type={icon} />
        <span>{name}</span>
        </span>
      }>
        {mapItems(item)}
      </SubMenu>
    }
    return <Menu.Item>
       <Icon type={icon} />
      <span>{name}</span>
    </Menu.Item>
  }
  
  const mapItems = (item) => {
    const { nested, name } = item;
    if (nested) {
      return <SubMenu key={name} title={
        <span>{name}</span>
      }>
        {item.nested.map((innerItem) => mapItems(innerItem))}
      </SubMenu>
    }
    return <Menu.Item key={name}>
        <p>{name}</p>
      </Menu.Item>
  }