//@flow
import React from 'react';
import { component } from 'rrsx';
import { SlideContainer, SlideBody, TextSlideOpen } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string, item: Object };

const SlideOpen = ({ style, children, className, open, paddingleft, item }: Props) => {
  const {
    name
  } = item;
  return <SlideContainer paddingleft={paddingleft} open={open}>
      <SlideBody>
        <TextSlideOpen>{name}</TextSlideOpen>
      </SlideBody>
  </SlideContainer>
};

export default component<Props>(SlideOpen);
