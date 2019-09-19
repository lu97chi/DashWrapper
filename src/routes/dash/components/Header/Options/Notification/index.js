// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Dropdown, Menu } from 'antd';
import { MenuItem, IconCustom, Badge } from '../../styledComponents';
import { makeNotificationData } from './helpers';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Notification = ({
  option, handleClick,
}: Props) => {
  const {
    icon,
    notifications,
    iconSize,
    iconColor,
    notificationData,
  } = option;
  const [notificationState, setNotificationState] = useState(notifications);
  const { badgeColor } = option;
  return (
    <Dropdown trigger={['click']} overlay={<Menu style={{ width: '200px' }}>{makeNotificationData(notificationData)}</Menu>}>
      <MenuItem onClick={() => handleClick(option)}>
        <Badge badgeColor={badgeColor}>{notificationState}</Badge>
        <IconCustom iconSize={iconSize} iconColor={iconColor} type={icon} />
      </MenuItem>
    </Dropdown>
  );
};

export default component<Props>(Notification);
