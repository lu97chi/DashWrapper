//@flow
import React from 'react';
import { component } from 'rrsx';
import { Dropdown, Avatar, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Text from 'antd/lib/typography/Text';
import HoverContent from '../DropDownContent';


type Props = { children: any, style: CSSStyleDeclaration, className: string, user: string };

const profileDropdown = [
    {
        name: 'Perfil',
        icon: 'user',
    },
    {
      name: 'Perfil1',
      icon: 'user',
      divider: true,
  },{
      name: 'Perfil2',
      icon: 'user',
      divider: true,
  }
];


const UserProfile = ({ style, children, className, user }: Props) => {
  debugger;
  return <div>
    
  </div>
}

export default component<Props>(UserProfile);