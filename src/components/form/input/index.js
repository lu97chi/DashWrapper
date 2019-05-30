//@flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';

type Props = {
  component?: React.Component,
  style?: CSSProperties,
  type?: string,
  onSet: Function,
};

const Input = ({ component: Component, style, type, onSet }: Props) => {
  if (Component) return <Component style={style} onInput={onSet} />;
};

export default component<Props>(Input);
