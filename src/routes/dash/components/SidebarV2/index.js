//@flow
import React from 'react';
import { component } from 'rrsx';
import { Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const SidebarV2 = ({ style, children, className, open }: Props) => {
  return <div className={className} style={style}>
      <Menu
        mode="inline"
        inlineCollapsed={!open}
        style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}
      >
          <Menu.Item>
              <Icon type="pie-chart" style={{fontSize: '22px'}} />
              <span>option 1</span>
          </Menu.Item>
          <Menu.Item>
              <Icon type="pie-chart" />
              <span>option 1</span>
          </Menu.Item>
          <Menu.Item>
              <Icon type="pie-chart" />
              <span>option 1</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
              <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
      </Menu>
  </div>;
};

export default component<Props>(SidebarV2);