//@flow
import React from 'react';
import { component } from 'rrsx';
import { Router } from './router';
import Layout from './components/Layout';
import { HeaderData, SidebarData, Theme } from '../playground/contants';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const DashRouter = ({ style, children, className }: Props) =>  <Layout
        header
        sidebar
        headerData={HeaderData}
        sidebarData={SidebarData}
        theme={Theme}
    >
    <Router theme={Theme} />
</Layout>

export default component<Props>(DashRouter);