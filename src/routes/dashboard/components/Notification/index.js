//@flow
import React from 'react';
import { component } from 'rrsx';
import Message from './Message';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Notification = ({ style, children, className }: Props) => {
  return <Message />;
};

export default component<Props>(Notification);