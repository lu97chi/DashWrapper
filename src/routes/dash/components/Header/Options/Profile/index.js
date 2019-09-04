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
        icon,
        text,
    } = option;
    const { Text } = Typography;
  return <Dropdown trigger={['click']} overlay={<Menu>
      {getNested(nested)}
  </Menu>}>
      <ProfileContainer className={className} style={style}>
        {
            icon !== 'default' ? <Avatar src="https://www.ravensbourne.ac.uk/media/7259/male-student-working-and-smiling.jpg?anchor=center&mode=crop&width=1100&heightratio=1&quality=100&slimmage=true&rnd=131788872900000000" /> : <Avatar>
                {text[0]}
            </Avatar>
        }
        <Text >{text}</Text>
     </ProfileContainer>
    </Dropdown>
    ;
};

export default component<Props>(Profile);