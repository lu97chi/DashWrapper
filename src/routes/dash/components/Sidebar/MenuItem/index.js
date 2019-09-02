//@flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { MenuItemContainer, AText, TextContainer, IconA, NestedContainer } from './styledComponents';
import { Icon } from 'antd';
import SlideOpen from '../SlideOpen';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const showNested = (elements, open, iconSize) => elements.map((item) => <SlideOpen item={item} paddingleft={iconSize} open={open} />)

const MenuItem = ({ style, children, classNamem ,open, menu }: Props) => {
  const { nested, iconSize, fontSize } = menu;
  const [ nestedOpen, setNestedOpen] = useState(false);
  return <div>
    <MenuItemContainer onClick={() => nested ? setNestedOpen(!nestedOpen) : null}>
    <TextContainer iconSize={iconSize}>
      <Icon type="search" style={{fontSize: iconSize}} />
      <AText fontsize={fontSize} open={open}>boton</AText>
    </TextContainer>
    {
      open && nested ? <IconA 
        type="down" 
        nestedOpen={nestedOpen}
        open={open} 
        onClick={() => setNestedOpen(!nestedOpen)} /> 
      : null
    }
    </MenuItemContainer>
    {
      open && nested ? <NestedContainer open={nestedOpen}>
        {showNested(nested, nestedOpen, iconSize)}
      </NestedContainer> : null
    }
  </div>
};

export default component<Props>(MenuItem);