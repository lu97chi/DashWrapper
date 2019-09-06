// @flow
import React from 'react';
import { component } from 'rrsx';
import { Row } from 'antd';
import { AnimatedCol, Section } from '../../styledComponents';
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
      <Row style={{ height: '100%' }}>
        {sidebar ? (
          <AnimatedCol sm={openSidebar ? 4 : 2}>
            <Sidebar
              logo={Logo}
              open={openSidebar}
              menu={sidebarData}
            />
          </AnimatedCol>
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
      </Row>
    </div>
  );
};

export default component<Props>(Dash);
