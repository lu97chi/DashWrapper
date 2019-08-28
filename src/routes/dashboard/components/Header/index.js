//@flow
import React from 'react';
import { component } from 'rrsx';
import { Row, Col, Dropdown, Menu } from 'antd';
import { IconA, Card } from './styledComponents';
import Options from '../Options';
import UserProfile from '../UserProfile';

type Props = { children: any, style: CSSStyleDeclaration, className: string, setOpenSidebar: Function, open: Boolean };

const Header = ({ style, children, className, setOpenSidebar, open, user }: Props) => {
  const options = [
      {
          type: 'search',
          text: 'Usuario',
          icon: 'search',
      },
      {
          type: 'icon',
          text: 'Usuario',
          icon: 'user'
      },
      {
          type: 'notificacion',
          text: 'Texto de badge',
          icon: 'user',
          notificacions: 12,
          notificationData: [
              {
                  type: 'reminder',
                  name: 'recordatorio',
                  icon: 'search'
              }
          ]
      }
  ]

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  

  return <Card>
      <Row type="flex" align="middle">
      <Col sm={12}>
        <IconA type="double-left" open={open} onClick={setOpenSidebar} />
      </Col>
      <Col sm={12}>
          <Row type="flex" justify="end">
              <Options handleClick={(item) => console.log(item)} options={options} />
              <Col sm={8}>
                <Dropdown overlay={menu}>Dropdown</Dropdown>
              </Col>
          </Row>
          
      </Col>
  </Row>
  </Card>;
};


export default component<Props>(Header);