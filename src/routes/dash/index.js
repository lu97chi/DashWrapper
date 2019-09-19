// @flow
import React from 'react';
import { component } from 'rrsx';
import Layout from './components/Layout';

type Props = { children: any, className: string };

const DashRouter = ({
  PropRouter, theme, layoutData, layoutConfig,
}) => {
  const { header, sidebar } = layoutConfig;
  const { HeaderData, SidebarData } = layoutData;
  return (
    <Layout
      header
      sidebar
      headerData={HeaderData}
      sidebarData={SidebarData}
      theme={theme}
    >
      <PropRouter theme={theme} />
    </Layout>
  );
};

export default component<Props>(DashRouter);
