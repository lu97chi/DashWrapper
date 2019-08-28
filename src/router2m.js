//@flow
import React from 'react';
import { component } from 'rrsx';
import { Router } from './router2';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const DashRouter = ({ style, children, className }: Props) =>  <Router />

export default component<Props>(DashRouter);