// @flow
import React from 'react';
import { component } from 'rrsx';
import { LogoContainer, LogoImage, LogoText } from './styledComponents';

type Props = { logo: string, open: boolean };

const Logo = ({ logo, open }: Props) => {
  const { withText, logoText, logoImg } = logo;
  return (
    <LogoContainer>
      <LogoImage src={logoImg} />
      { open && withText ? <LogoText>{logoText}</LogoText> : null}
    </LogoContainer>
  );
};

export default component<Props>(Logo);
