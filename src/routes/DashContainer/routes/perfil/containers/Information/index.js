// @flow
import React from 'react';
import { Typography } from 'antd';
import GenericForm from './GenericForm';
import { InformationContainer } from './styledComponents';
import { formConfiguration } from './constants';

const { Title } = Typography;

type Props = { activeElement: string, sections: Array<string> };

const getElemet = (sections, active) => {
  const whichElement = sections.indexOf(active.slice(5));
  switch (whichElement) {
    case 0:
      return (
        <GenericForm
          formConfig={formConfiguration}
        />
      );
    case 1:
      return <p>2</p>;
    case 2:
      return <p>3</p>;
    default:
      return <p>default</p>;
  }
};

const Information = ({ activeElement, sections }: Props) => (
  <InformationContainer>
    <Title level={4}>
      {activeElement.slice(5)}
    </Title>
    {
      getElemet(sections, activeElement)
    }
  </InformationContainer>
);

export default Information;
