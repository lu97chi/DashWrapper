//@flow
import React from 'react';
import CardInfo from '../../components/CardInfo';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Information = ({ style, children, className }: Props) => {
  return <div>
    <CardInfo />
  </div>
};

export default Information;