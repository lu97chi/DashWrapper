//@flow
import React from 'react';
import { component } from 'rrsx';
import { Row } from 'antd';
import { AnimatedCol } from '../../styledComponents';
import { useLayout } from '../../hooks';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';


type Props = { 
  children: any, 
  style: CSSStyleDeclaration,
   className: string, 
   header: Boolean, 
   sidebar: Boolean,
   headerData: Object,
   sidebarData: Object 
  };

const Dash = ({ style, children, className, headerData, header, sidebar, sidebarData }: Props) => {
  const { openSidebar, setOpenSidebar } = useLayout();
  return <div style={{ height: '100%'}}>
  <Row style={{height: '100%'}}>
    {sidebar ? <AnimatedCol sm={openSidebar ? 5 : 2} style={{height: '100%'}}>
      <Sidebar open={openSidebar} />
    </AnimatedCol> : null}
    {header ? <AnimatedCol sm={openSidebar ? 19 : 22}>
      <Header 
      {...headerData}
      open={openSidebar} 
      setOpenSidebar={() => setOpenSidebar(!openSidebar)} />
    </AnimatedCol> : null}
  </Row>
</div>;
};

export default component<Props>(Dash);