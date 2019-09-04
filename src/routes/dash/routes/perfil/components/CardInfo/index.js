//@flow
import React from 'react';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const CardInfo = ({ style, children, className }: Props) => {
  return <div className={className} style={style}> component works este es </div>;
};

export default CardInfo;