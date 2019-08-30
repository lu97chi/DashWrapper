//@flow
import React from 'react';
import { component } from 'rrsx';
import { HeaderData } from './contants';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Playground = ({ style, children, className }: Props) => { 
  return <div 
    header
    sidebar
    headerData={HeaderData}
  >

    dsad
  </div>;
};

export default component<Props>(Playground);