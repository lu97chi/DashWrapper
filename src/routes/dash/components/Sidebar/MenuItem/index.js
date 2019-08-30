//@flow
import React from 'react';
import { component } from 'rrsx';
import { MenuItemContainer, AText, TextContainer, IconA } from './styledComponents';
import { Icon } from 'antd';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

function hide(open) {
  setTimeout(() => {
    return false;
  }, 3000);
}

const MenuItem = ({ style, children, classNamem ,open }: Props) => {
  return <MenuItemContainer>
    <TextContainer>
      <Icon type="search" />
      <AText open={open}>boton</AText>
    </TextContainer>
    {
      open ? <IconA type="down" open={open} /> : null
    }
  </MenuItemContainer>
};

export default component<Props>(MenuItem);