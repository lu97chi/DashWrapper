// @flow
import React from 'react';
import { component } from 'rrsx';
import Layout from './components/Layout';
import { HeaderData, SidebarData, Theme } from '../playground/contants';
import { Router } from './router';

type Props = { children: any, className: string };

const DashRouter = ({PropRouter, theme}) => (
  <Layout
    header
    sidebar
    headerData={HeaderData}
    sidebarData={SidebarData}
    theme={Theme}
  >
    <Router theme={theme} />
  </Layout>
);

export default component<Props>(DashRouter);
