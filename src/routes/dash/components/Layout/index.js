//@flow
import React from 'react';
import { component } from 'rrsx';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Layout = ({ style, children, className }: Props) => {
  return <div className={className} style={style}> component works {children} </div>;
};

export default component<Props>(Layout);