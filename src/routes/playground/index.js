//@flow
import React from 'react';
import { component } from 'rrsx';
import Dashboard from '../dash/routes/main';
import { HeaderData } from './contants';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Playground = ({ style, children, className }: Props) => { 
  return <Dashboard 
    header
    sidebar
    headerData={HeaderData}
  />;
};

export default component<Props>(Playground);