//@flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Badge, Dropdown, Menu } from 'antd';
import { MenuItem, IconCustom } from '../../styledComponents';
import { makeNotificationData } from './helpers';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Notification = ({ style, children, className, option, handleClick }: Props) => {
    const {
        icon,
        notifications,
        iconSize,
        iconColor,
        notificationData
    } = option;
    console.log(option)
  const [ notificationState, setNotificationState ] = useState(notifications);
  return <Dropdown trigger={['click']} overlay={<Menu>{makeNotificationData(notificationData)}</Menu>}>
      <MenuItem onClick={() => handleClick(option)}>
      <Badge count={notificationState} offset={[6,-8]}>
        <IconCustom iconSize={iconSize} iconColor={iconColor} type={icon} />
          </Badge>
      </MenuItem>
  </Dropdown>
};

export default component<Props>(Notification);