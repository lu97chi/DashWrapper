import React from 'react';
import { Menu } from 'antd';
import { NotificationDataContainer } from './styledComponents';
import IconText from './IconText';

const getNotificationStyle = (notification) => {
  const {
    type, text, delay, icon, isUser, iconBackground,
  } = notification;
  switch (type) {
    case 'text':
      return (<NotificationDataContainer>{text}</NotificationDataContainer>);
    case 'iconText':
      return (
        <IconText
          icon={icon}
          isUser={isUser}
          delay={delay}
          text={text}
          iconBackground={iconBackground}
        />
      );
    default:
      return <p>texto</p>;
  }
};

export const makeNotificationData = (data) => {
  const payload = [];
  data.forEach((item) => {
    payload.push(
      <Menu.Item>
        {getNotificationStyle(item)}
      </Menu.Item>,
    );
    if (item.divider) payload.push(<Menu.Divider />);
  });
  return payload;
};
