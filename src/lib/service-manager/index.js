import { useMemo } from 'react';
import ServiceStore from './service-store';
import { ServiceDecorator } from './decorators';
import { componentWrap } from './component';
import LayoutServiceLib from './layout-service';

export const component = componentWrap;

export const serviceStore = new ServiceStore();

export const injectService = serviceStore.get;

export const useService = (Service) => {
  return useMemo(() => injectService(Service), [Service]);
};

export const service = ServiceDecorator;

export const LayoutService = LayoutServiceLib;
