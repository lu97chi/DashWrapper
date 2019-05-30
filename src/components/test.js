//@flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';

type Props = { children: React.Component, style: CSSProperties };

const componentName = ({ style, children }: Props) => {
  return <div style={style}> component works {children} </div>;
};

export default component<Props>(componentName);
