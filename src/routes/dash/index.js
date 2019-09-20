// @flow
import React from 'react';
import { component } from 'rrsx';
import Layout from './components/Layout';

type layoutConfigType = {
  header: Boolean,
  sidebar: Boolean
}
type Props = { layoutData: any, layoutConfig: layoutConfigType, theme: any, PropRouter: any };

const DashRouter = ({
  PropRouter, theme, layoutData, layoutConfig,
}:Props) => {
  const { header, sidebar } = layoutConfig;
  const { HeaderData, SidebarData } = layoutData;
  return (
    <Layout
      header={header}
      sidebar={sidebar}
      headerData={HeaderData}
      sidebarData={SidebarData}
      theme={theme}
    >
      <PropRouter theme={theme} />
    </Layout>
  );
};

export default component<Props>(DashRouter);
