import React from 'react';
import { Menu, Icon } from "antd";

export const getNested = (nested) => {
    const nestedElements = [];
    nested.forEach((item,i) => {
        nestedElements.push(<Menu.Item key={i}>
                <Icon type={item.Icon} />
            {item.text}
            </Menu.Item>)
        if (item.divider) {
            nestedElements.push(<Menu.Divider />)
        }
    });
    return nestedElements;
}