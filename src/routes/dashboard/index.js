//@flow
import React from 'react';
import { component } from 'rrsx';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Row } from 'antd';
import { useLayout } from './hooks/useLayout';
import { AnimatedCol } from './styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const Dashboard = ({ style, children, className }: Props) => {
  const { openSidebar, setOpenSidebar } = useLayout();
  return <div style={{ height: '100%'}}>
    <Row style={{height: '100%'}}>
      <AnimatedCol sm={openSidebar ? 5 : 2} style={{height: '100%'}}>
        <Sidebar open={openSidebar} />
      </AnimatedCol>
      <AnimatedCol sm={openSidebar ? 19 : 22}>
        <Header user={'Luis'} open={openSidebar} setOpenSidebar={() => setOpenSidebar(!openSidebar)} />
      </AnimatedCol>
    </Row>
  </div>;
};

export default component<Props>(Dashboard);