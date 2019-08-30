//@flow
import React from 'react';
import { component } from 'rrsx';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Test2 = ({ style, children, className }: Props) => {
  return <div className={className} style={style}> component works 2{children} </div>;
};

export default component<Props>(Test2);