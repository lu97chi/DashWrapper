//@flow
import React from 'react';
import { component } from 'rrsx';
import { Menu, Icon } from 'antd';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const MenuItemV2 = ({ style, children, className }: Props) => {
  return <>
  <Menu.Item>
              <Icon type="pie-chart" />
              <span>option 1</span>
          </Menu.Item>
  </>;
};

export default component<Props>(MenuItemV2);