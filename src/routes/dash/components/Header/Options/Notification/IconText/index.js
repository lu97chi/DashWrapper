import React from 'react';
import { Avatar } from 'antd';
import { NotificationDataContainer, DelayTime } from './styledComponents';

const IconText = ({
  text, delay, icon, iconBackground, isUser,
}) => (
  <NotificationDataContainer>
    {isUser ? <Avatar src={icon} style={{ marginRight: '12px' }} />
      : <Avatar style={{ backgroundColor: iconBackground, marginRight: '12px' }} icon="user" />}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{text}</span>
      <DelayTime>{delay}</DelayTime>
    </div>
  </NotificationDataContainer>
);

export default IconText;
