// @flow
import React from 'react';
import { component } from 'rrsx';
import { Row, Col } from 'antd';
import { AnimatedCol, Section, AnimatedSidebar, RowContianer } from '../../styledComponents';
import { useLayout } from '../../hooks';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Logo from '../../../../resources/images/logo.jpg';

type Props = {
  children: any,
   className: string,
   header: Boolean,
   sidebar: Boolean,
   headerData: Object,
   sidebarData: Object
  };

const Dash = ({
  children, headerData, header, sidebar, sidebarData,
}: Props) => {
  const { openSidebar, setOpenSidebar } = useLayout();
  return (
    <div style={{ height: '100%', background: '#F0F2F5' }}>
      <RowContianer style={{ height: '100%' }}>
        {sidebar ? (
          <AnimatedSidebar open={openSidebar}>
            <Sidebar
              logo={Logo}
              open={openSidebar}
              menu={sidebarData}
            />
            {/* <SidebarV2 open={openSidebar} /> */}
          </AnimatedSidebar>
        ) : null}
        {header ? (
          <AnimatedCol sm={openSidebar ? 20 : 22}>
            <Header
              {...headerData}
              open={openSidebar}
              setOpenSidebar={() => setOpenSidebar(!openSidebar)}
            />
            <Row style={{ maxHeight: '90%', overflowY: 'auto', padding: '24px' }}>
              <AnimatedCol sm={24} style={{ zIndex: 2 }}>
                <Section>
                  {children}
                </Section>
              </AnimatedCol>
            </Row>
          </AnimatedCol>
        ) : null}
      </RowContianer>
    </div>
  );
};

export default component<Props>(Dash);
