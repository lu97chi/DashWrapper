// @flow
import React from 'react';
import { component } from 'rrsx';
import { Menu } from 'antd';
import { SectionsContainer } from './styledComponents';

type Props = { sections: Array<string>, handleClick: Function };

const Sections = ({ sections, handleClick }: Props) => (
  <SectionsContainer>
    <Menu
      onClick={(element) => handleClick(element)}
      defaultSelectedKeys={[`item-${sections[0]}`]}
      mode="inline"
    >
      {
        sections.map((section) => <Menu.Item key={`item-${section}`}>{section}</Menu.Item>)
      }
    </Menu>
  </SectionsContainer>
);

export default component<Props>(Sections);
