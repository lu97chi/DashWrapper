import React from 'react';
import { Menu } from 'antd';
const getNotificationStyle = (notification) => {
    switch (notification.type) {
        case 'text':
            return <p>texto</p>
        default:
            return <p>texto</p>;
    }
} 

export const makeNotificationData = (data) => {
    const payload = [];
    data.forEach((item) => {
        payload.push(<Menu.Item>
            {getNotificationStyle(item)}
        </Menu.Item>)
        if (item.divider) payload.push(<Menu.Divider />)
    });
    return payload;
}