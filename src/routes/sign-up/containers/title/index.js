//@flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';
import { TITLE } from './const';
import { TitleContainer } from './styled';

type Props = { children: React.Component, style: CSSProperties };

const Title = ({ style, children }: Props) => {
  return <TitleContainer style={style}> {TITLE} </TitleContainer>;
};

export default component<Props>(Title);
