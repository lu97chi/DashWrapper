// @flow
import React from 'react';
import { component } from 'rrsx';
import { Row } from 'antd';
import { AnimatedCol, Section } from '../../styledComponents';
import { useLayout } from '../../hooks';
import Sidebar from '../Sidebar';
import Header from '../Header';

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
  const { menu, logoConfig } = sidebarData;
  return (
    <div style={{ height: '100%', background: '#F0F2F5' }}>
      <div style={{ height: '100%', display: 'flex' }}>
        {sidebar ? (
          <Sidebar
            open={openSidebar}
            menu={menu}
            logoConfig={logoConfig}
          />
        ) : null}
        <div style={{ width: '100%' }}>
          {header ? (
            <Header
              {...headerData}
              open={openSidebar}
              setOpenSidebar={() => setOpenSidebar(!openSidebar)}
            />
          ) : null}
          <Row style={{ maxHeight: '90%', overflowY: 'auto', padding: '24px' }}>
            <AnimatedCol sm={24} style={{ zIndex: 1 }}>
              <Section>
                {children}
              </Section>
            </AnimatedCol>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default component<Props>(Dash);
