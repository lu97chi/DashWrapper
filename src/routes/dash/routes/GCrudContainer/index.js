// @flow
import React from 'react';
import { component } from 'rrsx';
import GCrud from '../GCrud';
import {
  data, GCrudConfiguration, columnsA, ButtonsData,
} from './constants';

type Props = { };

const GCrudContainer = () => (
  <GCrud
    intialConfig={GCrudConfiguration}
    columns={columnsA}
    data={data}
    headerButtons={ButtonsData}
  />
);

export default component<Props>(GCrudContainer);
