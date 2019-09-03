//@flow
import React from 'react';
import { component } from 'rrsx';
import { ProfileContainer } from './styledComponents';
import { Avatar, Typography, Dropdown, Menu } from 'antd';
import { getNested } from './helpers';

type Props = { children: any, style: CSSStyleDeclaration, className: string };


const Profile = ({ style, children, className, option }: Props) => {
    const {
        nested,
    } = option;
  return <Dropdown trigger={['click']} overlay={<Menu>
      {getNested(nested)}
  </Menu>}>
      <ProfileContainer className={className} style={style}>
        <Avatar>Luis</Avatar>
        <Typography>Luis Roberto</Typography>
     </ProfileContainer>
    </Dropdown>
    ;
};

export default component<Props>(Profile);