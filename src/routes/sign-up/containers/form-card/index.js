// @flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';
import { FormTitle, FormContent, StyledCard } from './styled';
import { TEXT, SIGN_UP } from './const';


type Props = { children: React.Component, style: CSSProperties };

const FormCard = ({ style, children }: Props) => (
  <StyledCard>
    <div>
      <FormTitle>{SIGN_UP}</FormTitle>
      <FormContent>{TEXT}</FormContent>
    </div>
  </StyledCard>
);

export default component<Props>(FormCard);
