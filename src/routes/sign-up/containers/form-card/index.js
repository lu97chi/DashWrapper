//@flow
import React, { CSSProperties } from 'react';
import { component } from 'rrsx';
import { FormTitle, FormContent } from './styled';
import { TEXT } from './const';
import { SIGN_UP } from './const';
import { StyledCard } from './styled';

type Props = { children: React.Component, style: CSSProperties };

const FormCard = ({ style, children }: Props) => {
  return (
    <StyledCard>
      <div>
        <FormTitle>{SIGN_UP}</FormTitle>
        <FormContent>{TEXT}</FormContent>
      </div>
    </StyledCard>
  );
};

export default component<Props>(FormCard);
