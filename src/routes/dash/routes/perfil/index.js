// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Row, Col } from 'antd';
import Information from './containers/Information';
import Sections from './containers/Sections';
import { PerfilContainer } from './styledComponents';

type Props = { children: any, className: string };

const sections = ['General', 'No general', 'Otra cosa'];

const Profile = () => {
  const [activeElement, seTactiveElement] = useState(`item-${sections[0]}`);
  return (
    <PerfilContainer>
      <Row>
        <Col sm={4}>
          <Sections handleClick={({ key }) => seTactiveElement(key)} sections={sections} />
        </Col>
        <Col sm={20}>
          <Information activeElement={activeElement} sections={sections} />
        </Col>
      </Row>
    </PerfilContainer>
  );
};

export default component<Props>(Profile);
