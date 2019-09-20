// @flow
import React from 'react';
import { component } from 'rrsx';
import { Button } from 'antd';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Test = ({ style, children, className }: Props) => (
  <div className={className} style={style}>
    <Button>HIDE LAYOUT</Button>
    <Button>HIDE HEADER</Button>
    <Button>SET HEADER TITLE</Button>
    <Button>PUSH NOTIFICATION</Button>
  </div>
);

export default component<Props>(Test);
