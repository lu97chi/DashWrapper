//@flow
import React from 'react';
import { component } from 'rrsx';
import { SidebarContainer } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string, open: Boolean };

const Sidebar = ({ style, children, className, open }: Props) => {
  return <SidebarContainer open={open}>
    <p>item 1</p>
    <p>item 1</p>

    <p>item 1</p>

    <p>item 1</p>

  </SidebarContainer>;
};

export default component<Props>(Sidebar);