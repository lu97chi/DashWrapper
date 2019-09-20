import React from 'react';
import { Avatar } from 'antd';
import { NotificationDataContainer, DelayTime } from './styledComponents';

type IconTextType = {
  text: String, delay: String, icon: String, iconBackground: String, isUser: Boolean
}

const IconText = ({
  text, delay, icon, iconBackground, isUser,
}: IconTextType) => (
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
