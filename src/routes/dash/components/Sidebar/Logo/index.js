//@flow
import React from 'react';
import { component } from 'rrsx';
import { LogoContainer } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Logo = ({ style, children, className }: Props) => {
  return <LogoContainer className={className} style={style}> component works {children} </LogoContainer>;
};

export default component<Props>(Logo);