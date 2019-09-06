// @flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';
import { Container } from './styled';
import FormCard from './containers/form-card';
import Title from './containers/title';

type Props = { children: React.Component, style: CSSProperties };

const SignUp = ({ style, children }: Props) => (
  <Container>
    <Title />
    <FormCard />
  </Container>
);

export default component<Props>(SignUp);
