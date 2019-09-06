// @flow
import React from 'react';
import { component } from 'rrsx';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Test = ({ style, children, className }: Props) => (
  <div className={className} style={style}>
    {' '}
component works
    {' '}
    {children}
    {' '}
  </div>
);

export default component<Props>(Test);
