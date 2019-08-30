//@flow
import React from 'react';
import { component } from 'rrsx';
import { SlideContainer, SlideBody } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const SlideOpen = ({ style, children, className, open, paddingleft }: Props) => {
  return <SlideContainer paddingleft={paddingleft} open={open}>
      <SlideBody>
        <span>fwef fewq</span>
      </SlideBody>
  </SlideContainer>
};

export default component<Props>(SlideOpen);
