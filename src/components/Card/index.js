//@flow
import React, { forwardRef, CSSProperties, createContext } from 'react';
import { Container } from '../404/StyledComponents';
import { component } from '../../lib/service-manager';
import { withRouter } from 'react-router-dom';

type Props = { children: React.Component, style: CSSProperties };

const Card = (props: Props) => {
  const Component = props.children;
  return <Container style={props.style || {}}>{props.children}</Container>;
};

export default component<Props>(Card);
