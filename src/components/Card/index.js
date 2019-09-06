// @flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';
import { Container } from './styled';

type Props = {
  children: React.Component,
  style: CSSProperties,
  className: string,
};

const Card = (props: Props) => <Container {...props}>{props.children}</Container>;

export default component<Props>(Card);
