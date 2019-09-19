import React from 'react';
import Dash from '../dash';
import { Router } from './router';
import { Theme, HeaderData, SidebarData } from './contants';

const DashContainer = () => (
  <Dash
    PropRouter={Router}
    Theme={Theme}
    layoutConfig={{
      header: false,
      sidebar: false,
    }}
    layoutData={{
      HeaderData,
      SidebarData,
    }}
  />
);

export default DashContainer;
