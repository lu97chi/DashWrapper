//@flow
import React from 'react';
import { component } from 'rrsx';
import { Row } from 'antd';
import { AnimatedCol } from '../../styledComponents';
import { useLayout } from '../../hooks';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Logo from '../../../../resources/images/logo.jpg';


type Props = { 
  children: any, 
  style: CSSStyleDeclaration,
   className: string, 
   header: Boolean, 
   sidebar: Boolean,
   headerData: Object,
   sidebarData: Object 
  };

const Dash = ({ style, children, className, headerData, header, sidebar, sidebarData, theme }: Props) => {
  const { openSidebar, setOpenSidebar } = useLayout();
  return <div style={{ height: '100%'}}>
  <Row style={{height: '100%'}}>
    {sidebar ? <AnimatedCol sm={openSidebar ? 4 : 2} style={{height: '100%'}}>
      <Sidebar 
      logo={Logo}
      open={openSidebar} 
      menu={sidebarData} />
      {/* <SidebarV2 open={openSidebar} /> */}
    </AnimatedCol> : null}
    {header ? <AnimatedCol sm={openSidebar ? 20 : 22}>
      <Header
      {...headerData}
      open={openSidebar} 
      setOpenSidebar={() => setOpenSidebar(!openSidebar)} />
    </AnimatedCol> : null}
    {children}
  </Row>
</div>;
};

export default component<Props>(Dash);