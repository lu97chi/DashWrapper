// @flow
import React from 'react';
import { component } from 'rrsx';
import { LogoContainer, LogoImage, LogoText } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration,
  className: string, logo: string, open: boolean };

const Logo = ({
  style, children, className, logo, open,
}: Props) => (
  <LogoContainer className={className} style={style}>
    <LogoImage src={logo} />
    { open ? <LogoText>PHP Pro</LogoText> : null}
  </LogoContainer>
);

export default component<Props>(Logo);
