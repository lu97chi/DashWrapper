// @flow
import React from 'react';
import { component } from 'rrsx';
import { Button } from 'antd';
import { GCrudWrapper } from './styledComponents';
import { Theme, GCrudConfiguration } from './constants';
import Header from './components/Header';
import { Caller } from './caller';

type Props = { intialConfig: Object};

const ButonsData = [
  {
    label: 'Crear',
    endPoint: '/create',
    type: 'post',
    data: {
      name: 'luchi',
      job: '123',
    },
  },
  {
    label: 'Obtener todos',
    endPoint: '/users',
    type: 'get',
  },
  {
    label: 'Obtener una',
    endPoint: '/user/$$',
    type: 'get',
    params: [2],
  },
  {
    label: 'MultipleVariables',
    endPoint: '/user/$$/otro/$$',
    type: 'get',
    params: [2, 12],
  },
  {
    label: 'Actualizar',
    endPoint: '/users/$$',
    type: 'put',
    params: [2],
    data: {
      name: 'luchi2',
      job: 'luchi 3',
    },
  },
];

const ButtonsConfig = (config, intialConfig) => {
  const buttons = [];
  config.forEach((element) => {
    const { label } = element;
    buttons.push(
      <Button onClick={() => Caller(element, intialConfig)}>
        {label}
      </Button>,
    );
  });
  return buttons;
};

const GCrud = ({ intialConfig }: Props) => {
  const { boxshadowBase } = Theme;
  return (
    <GCrudWrapper boxshadow={boxshadowBase}>
      <Header buttons={ButtonsConfig(ButonsData, GCrudConfiguration.domain)} />
    </GCrudWrapper>
  );
};

export default component<Props>(GCrud);
